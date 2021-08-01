import './portfolio.css';
import PopUp from '../../components/popup/PopUp';
import AllProjects from '../../components/allProjects/AllProjects';
import { useState, useEffect } from 'react';
import FullStack from '../../data';

function Portfolio() {
    const [selected, setSelected] = useState("All");
    const [data, setData] = useState([]);
    // const myData = FullStack;

    const setFull = () => {
        setSelected("Full Stack")
    }

    useEffect(() => {
        switch (selected) {
            case "All":
                setData(FullStack);
                break;
            case "FullStack":
                setData(FullStack);
            default:
                setData(FullStack);
        }

    }, [selected, setSelected])
    return (
        <div>
            <section className="portfolio-section section">
                <div className="container">
                    <div className="row">
                        <div className="sectionTitle">
                            <h2 data-heading="Portfolio">Latest Projects</h2>
                        </div>
                    </div>
                    {/* Filter starts */}
                    <div className="row">
                        <div className="portfolioFilter">
                            <span className={selected === "All" ? "filterItem outer-shadow active" : "filterItem"} data-target="all" onClick={() => setSelected("All")}>All</span>
                            <span className={selected === "Full Stack" ? "filterItem outer-shadow active" : "filterItem"} data-target="full-stack" onClick={() => setFull("Full Stack")}>Full Stack</span>
                        </div>
                    </div>
                    {selected === "All" ? <div>
                        {data.map((project) => (
                            <AllProjects
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                tools={project.tools}
                                description={project.description}
                                url={project.URL}
                                image={project.image}
                                category={project.category}
                                repo={project.repo}
                            />
                        ))}
                    </div> : ''}
                    {selected === "Full Stack" ? <div>
                        {data.map((project) => (
                            <AllProjects
                                key={project.id}
                                title={project.title}
                                tools={project.tools}
                                description={project.description}
                                url={project.url}
                                image={project.image}
                                category={project.category}
                                repo={project.repo}
                            />
                        ))}
                    </div> : ''}
                    {/* Filter end */}
                </div>
            </section>
        </div>
    )
}

export default Portfolio
