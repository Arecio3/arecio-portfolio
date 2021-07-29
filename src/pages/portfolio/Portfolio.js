import './portfolio.css'

function Portfolio() {
    return (
        <section className="portfolio-section section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="sectionTitle">
                        <h2 data-heading="Portfolio">Latest Projects</h2>
                    </div>
                </div>
                {/* Filter starts */}
                <div className="row">
                    <div className="portfolioFilter">
                        <span className="filterItem outer-shadow active" data-target="all">All</span>
                        <span className="filterItem" data-target="full-stack">Full Stack</span>
                        <span className="filterItem" data-target="web-application">Web Applications</span>
                        <span className="filterItem" data-target="mobile-apps">Mobile Apps</span>
                    </div>
                </div>
                {/* Filter end */}
            </div>
        </section>
    )
}

export default Portfolio
