import './portfolio.css';
import AllProjects from '../../components/allProjects/AllProjects';
import { useState, useEffect } from 'react';
import  {FullStack, Frontend}  from '../../data';

function Portfolio({ theme, setTheme}) {
    const [selected, setSelected] = useState("Full Stack");
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
            case "Full Stack":
                setData(FullStack);
                break;
            case "Front End":
                setData(Frontend);
                break;
            default:
                setData(FullStack);
                break;
        }

    }, [selected, setSelected])
    return (
        <div id="portfolio">
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
                        {selected === "Front End" ? <span className={theme === "dark" ? "filterItem outer-shadow-dm active" : "filterItem outer-shadow active"} data-target="Front End" onClick={() => setSelected("Front End")}>Front End </span> : <span className="filterItem" onClick={() => setSelected("Front End")}>Front End</span>}
                        {selected === "Full Stack" ? <span className={theme === "dark" ? "filterItem outer-shadow-dm active" : "filterItem outer-shadow active"} data-target="full-stack" onClick={() => setFull("Full Stack")}>Full Stack</span>: <span className="filterItem" onClick={() => setSelected("Full Stack")}>Full Stack</span>}
                        </div>
                    </div>
                    {selected === "Full Stack" || "Front End" ? <div>
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
                                image8={project.image8}
                                image9={project.image9}
                                image10={project.image10}
                                image11={project.image11}
                                image12={project.image12}
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
