import { useEffect, useRef } from "react";

function useSectionNavigation(
    currentPage,
    setCurrentPage,
    totalPages
) {
    const isAnimating = useRef(false);
    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();
            if (isAnimating.current)
                return;
            isAnimating.current = true;

            if (event.deltaY > 0) {
                setCurrentPage(page =>
                    Math.min(
                        page + 1,
                        totalPages - 1
                    )
                );
            }

            else {
                setCurrentPage(page =>
                    Math.max(
                        page - 1,
                        0
                    )
                );
            }

            setTimeout(() => {
                isAnimating.current = false;
            }, 800);

        };

        window.addEventListener(
            "wheel",
            handleWheel,
            { passive: false }
        );

        return () =>
            window.removeEventListener(
                "wheel",
                handleWheel
            );

    }, [setCurrentPage, totalPages]);

}

export default useSectionNavigation;