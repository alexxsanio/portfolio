function Section({
    page,
    offset,
    index
}) {
    if (page.type === "cover") {
        return (
            <section
                className="cover section"
                style={{
                    transform: `translateY(${offset * 100}%)`,
                    fontFamily: "Georgia",
                }}
            >
                <div className="cover-content">
                    <h1 style={{ fontSize: "62px" }}>Alex Ma - Portfolio</h1>
                    <h2 style={{ lineHeight: "1.5", fontSize: "25px" }}>
                        Statistical and data analysis projects using R, Python and Machine Learning; financial analysis using Google Sheets.
                    </h2>
                    <p>Scroll to begin</p>
                </div>
            </section>
        );
    }

    if (page.type === "end") {
        return (
            <section
                className="cover section"
                style={{
                    transform: `translateY(${offset * 100}%)`,
                    fontFamily: "Georgia",
                }}
            >
                <div className="cover-content">
                    <h1 style={{ fontSize: "62px" }}>{page.maintitle}</h1>
                    <h3 style={{ lineHeight: "2.5", fontSize: "20px" }}>
                        {page.contact} | <a href="https://www.linkedin.com/in/alexis-tianyi-ma/" target="_blank" rel="noopener noreferrer" style={{ color: "#4e4b44" }}>LinkedIn</a>
                    </h3>
                </div>
            </section>
        );
    }
    
    return (
        <section
            className="section"
            style={{
                transform: `translateY(${offset * 100}%)`,
                backgroundColor: page.color,
                fontFamily: "Georgia",
                }}
            >
            <div className="section-content">
                <div className="left-column">
                    <p className="quote">
                        {page.projectname}
                    </p>

                    <span className="date">
                        <a
                            href={page.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white" }}
                        >
                            link
                        </a>
                    </span>
                </div>

                <div className="right-column">
                    {page.description && (
                        <p className="explanation">
                            {page.description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );

}

export default Section;