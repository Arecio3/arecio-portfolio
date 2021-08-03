import { useState } from 'react'
import Popup from '../popup/PopUp';
// import '../../pages/portfolio/portfolio.css';
import './allprojects.css';



function AllProjects({ id, handleClose, title,tools,description, url, image,category,repo, clicked,setClicked, }) {
    const [project, setProject] = useState("");
    const [info, setInfo] = useState(false);

    const projectFilters = ["Documaker", "Hermes", "Searchy", "DT", "Stockchasr"];

    const handleClick = () => {
        //  this.setState({ clicked: this.state.clicked})
        console.log()
        if (id === 1) {
            setProject("DT")
            setClicked(1)
        } else if (id === 2) {
            setProject("Searchy")
            setClicked(2)
        } else if (id === 3) {
            setProject("Documaker")
            setClicked(3)
        } else if (id === 4) {
            setProject("Hermes")
            setClicked(4)
        } else {
            setProject("Stockchasr")
            setClicked(5)
        }
    }

    const toggleInfo = () => {
        setInfo(true);
    }


    return (
        <div className="row portfolio-items">
            {/* portfolio items start */}
            <div className="portfolio-item">
                <div className={clicked ? "close" : "portfolio-item-inner outer-shadow"}>
                    <div className={clicked ? "close" : "portfolio-item-img"} >

                        <img src={image} alt="" data-category="full-stack" data-screenshots="images/blog2.png, images/blog3.png, images/blog4.png, images/blog5.png, images/blog6.png, images/blog7.png" />
                        {/* View Project Button */}
                        <span className="view-project" onClick={handleClick}>View Project</span>
                        {/* { open > 0  ? <Popup title={title} image={image} url={url} id={setOpen} category={category} repo={repo} description={description} tools={tools} open={open} setOpen={setOpen} /> : ''}  */}
                    </div>
                    <p className="portfolio-item-title">{title}</p>
                    {/* Portfolio items details start */}
                </div>
            </div>

            {project &&  clicked ? 
                <div className={project && clicked? "blog-popup active" : "blog-popup"}>
                    <div className={project && clicked  ? "pp-details active" : "pp-details"}>
                        <div className="pp-details-inner">
                            <div className="pp-title">
                                <h2>{title}</h2>
                                <p>Category - <span className="pp-project-category">{category}</span></p>
                            </div>
                            <div className="pp-project-details">
                                <div className="row">
                                    <div className="pp-description">
                                        <h3>Project Brief:</h3>
                                        <p>{description}</p>
                                    </div>
                                    <div className="pp-info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2021</span></li>
                                            <li>Tools - <span>{tools}</span></li>
                                            <li>Site - <a href={url}><span>{url}</span></a></li>
                                            <li>Repo - <a href={repo}><span>{repo}</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pp-main">
                        <div className="pp-main-inner">
                            <div className="pp-project-details-btn outer-shadow hover-in-shadow">Project Details <i className="fas fa-plus"></i></div>
                            <div className="pp-close outer-shadow hover-in-shadow" onClick={handleClose}>&times;</div>
                            <img src={image} alt="" className="pp-img outer-shadow" />
                        </div>
                    </div>
                </div> : ""}

        </div >
    )

}

export default AllProjects
