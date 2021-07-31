import './portfolio.css';
import PopUp from '../../components/popup/PopUp';
import All from '../../components/allProjects/AllProjects';
import { useState } from 'react';

function Portfolio() {
    const [selected, setSelected] = useState(1);

    const setActive = (index) => {
        setSelected(index)
    }
    return (
    <div>
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
                        <span className={selected === 1 ? "filterItem outer-shadow active" : "filterItem"} data-target="all"  onClick={() => setActive(1)}>All</span>
                        <span className={selected === 2 ? "filterItem outer-shadow active" : "filterItem"} data-target="full-stack"  onClick={() => setActive(2)}>Full Stack</span>
                        <span className={selected === 3 ? "filterItem outer-shadow active" : "filterItem"} data-target="web-application"  onClick={() => setActive(3)}>Web Applications</span>
                        <span className={selected === 4 ? "filterItem outer-shadow active" : "filterItem"} data-target="mobile-apps"  onClick={() => setActive(4)}>Mobile Apps</span>
                    </div>
                </div>
                {selected === 1 ? <All /> : selected === 2 ? <All /> :  <All />}
                {/* Filter end */}
            </div>
        </section>
        <PopUp />
    </div>
    )
}

export default Portfolio
