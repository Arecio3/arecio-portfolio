import './portfolio.css';
import AllProjects from '../../components/allProjects/AllProjects';
import { useState, useEffect } from 'react';
import FullStack from '../../data';

function Portfolio({ theme, setTheme}) {
    const [selected, setSelected] = useState("All");
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState([]);
    // const myData = FullStack;

    const setFull = () => {
        setSelected("Full Stack")
    }

    // const getProject = () => {
    //     setClicked(true);
    // }

    const handleClose = () => {
        setClicked(false);
    }
    


    useEffect(() => {
        switch (selected) {
            case "All":
                setData(FullStack);
                break;
            case "FullStack":
                setData(FullStack);
                break;
            default:
                setData(FullStack);
                break;
        }

    }, [selected, setSelected])
    return (
        <div>
            <section className={theme === "dark" ? "portfolio-section active" : "portfolio-section"}>
                <div className="container">
                    <div className={clicked ? "close" : "row"}>
                        <div className={theme === "dark" ? "sectionTitle active" : "sectionTitle"}>
                            <h2 data-heading="Portfolio">Latest Projects</h2>
                        </div>
                    </div>
                    {/* Filter starts */}
                    <div className={clicked ? "close" : "row"}>
                        <div className="portfolioFilter">
                        {selected === "All" ? <span className={theme === "dark" ? "filterItem outer-shadow-dm active" : "filterItem outer-shadow active"} data-target="all" onClick={() => setSelected("All")}>All</span> : <span className="filterItem" onClick={() => setSelected("All")}>All</span>}
                        {selected === "Full Stack" ? <span className={theme === "dark" ? "filterItem outer-shadow-dm active" : "filterItem outer-shadow active"} data-target="full-stack" onClick={() => setFull("Full Stack")}>Full Stack</span>: <span className="filterItem" onClick={() => setSelected("Full Stack")}>Full Stack</span>}
                        </div>
                    </div>
                    {selected === "All" || "Full Stack" ? <div>
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
                                clicked={clicked}
                                setClicked={setClicked}
                                handleClose={handleClose}
                                image2={project.image2}
                                image3={project.image3}
                                image4={project.image4}
                                image5={project.image5}
                                image6={project.image6}
                                image7={project.image7}
                                theme={theme}
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
