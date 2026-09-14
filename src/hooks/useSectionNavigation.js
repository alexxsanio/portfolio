import { useEffect, useRef } from "react";

function useSectionNavigation(
    currentPage,
    setCurrentPage,
    totalPages
) {
    const isAnimating = useRef(false);
    const touchStartY = useRef(0);

    useEffect(() => {
        const goToNextPage = () => {
            if (isAnimating.current) return;

            isAnimating.current = true;

            setCurrentPage(page =>
                Math.min(page + 1, totalPages - 1)
            );

            setTimeout(() => {
                isAnimating.current = false;
            }, 800);
        };

        const goToPreviousPage = () => {
            if (isAnimating.current) return;

            isAnimating.current = true;

            setCurrentPage(page =>
                Math.max(page - 1, 0)
            );

            setTimeout(() => {
                isAnimating.current = false;
            }, 800);
        };

        const handleWheel = (event) => {
            event.preventDefault();

            if (event.deltaY > 0) {
                goToNextPage();
            } else {
                goToPreviousPage();
            }
        };

        const handleTouchStart = (event) => {
            touchStartY.current = event.touches[0].clientY;
        };

        const handleTouchEnd = (event) => {
            const touchEndY = event.changedTouches[0].clientY;
            const difference = touchStartY.current - touchEndY;

            // Ignore tiny movements
            if (Math.abs(difference) < 50) return;

            if (difference > 0) {
                // Swipe up
                goToNextPage();
            } else {
                // Swipe down
                goToPreviousPage();
            }
        };

        window.addEventListener("wheel", handleWheel, {
            passive: false
        });

        window.addEventListener("touchstart", handleTouchStart, {
            passive: true
        });

        window.addEventListener("touchend", handleTouchEnd, {
            passive: true
        });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [setCurrentPage, totalPages]);
}

export default useSectionNavigation;
