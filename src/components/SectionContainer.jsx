import { useState } from "react";

import Section from "./Section";

import useSectionNavigation from "../hooks/useSectionNavigation";

function SectionContainer({ pages }) {

    const [currentPage, setCurrentPage] = useState(0);

    useSectionNavigation(
        currentPage,
        setCurrentPage,
        pages.length
    );

    return (
        <main className="viewport">
            {pages.map((page, index) => {
                const offset = index - currentPage;
                return (
                    <Section
                        key={page.id}
                        page={page}
                        offset={offset}
                        index={index}
                    />
                );
            })}
        </main>
    );
}

export default SectionContainer;