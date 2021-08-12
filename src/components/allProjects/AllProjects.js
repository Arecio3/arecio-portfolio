import { useState } from 'react'
import './allprojects.css';



function AllProjects({ id, handleClose, title,tools,description, url, image, image2, image3, image4, image5, image6, image7, category,repo, clicked,setClicked, theme}) {
    const [project, setProject] = useState("");

    const projectFilters = ["Documaker", "Hermes", "Searchy", "Halo", "Stockchasr", "Nozama"];

    const handleClick = () => {
        //  this.setState({ clicked: this.state.clicked})
        console.log()
        if (id === 1) {
            setProject(projectFilters[3])
            setClicked(1)
        } else if (id === 2) {
            setProject(projectFilters[2])
            setClicked(2)
        } else if (id === 3) {
            setProject(projectFilters[0])
            setClicked(3)
        } else if (id === 4) {
            setProject(projectFilters[1])
            setClicked(4)
        } else if (id === 5){
            setProject(projectFilters[4])
            setClicked(5)
        } else {
            setProject(projectFilters[5])
            setClicked(6)
        }
    }


    return (
        <div className="row portfolio-items">
            {/* portfolio items start */}
            <div className="portfolio-item">
                <div className={theme === "dark" ? "portfolio-item-inner outer-shadow-dm" : "portfolio-item-inner outer-shadow"}>
                    <div className={"portfolio-item-img"} >

                        <img src={image} alt="" data-category="full-stack" data-screenshots="images/blog2.png, images/blog3.png, images/blog4.png, images/blog5.png, images/blog6.png, images/blog7.png" />
                        {/* View Project Button */}
                        <span className={theme === "dark" ? "view-project active" : "view-project"} onClick={handleClick}>View Project</span>
                        {/* { open > 0  ? <Popup title={title} image={image} url={url} id={setOpen} category={category} repo={repo} description={description} tools={tools} open={open} setOpen={setOpen} /> : ''}  */}
                    </div>
                    <p className="portfolio-item-title">{title}</p>
                    {/* Portfolio items details start */}
                </div>
            </div>

            {project && clicked === id ? 
                <div className={theme === "dark" ? "blog-popup-active active" : "blog-popup-active"}>
                    <div className="pp-details-active">
                        <div className="pp-details-inner">
                            <div className={theme === "dark" ? "pp-title active" : "pp-title"}>
                                <h2>{title}</h2>
                                <div className={theme === "dark" ? "pp-close outer-shadow-dm hover-in-shadow-dm" : "pp-close outer-shadow hover-in-shadow"} onClick={handleClose}>&times;</div>
                                <p>Category - <span className="pp-project-category">{category}</span></p>
                            </div>
                            <div className={theme === "dark" ? "pp-project-details active" : "pp-project-details"}>
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
                                            <li>Site - <a href={url} target="_blank" rel="noreferrer noopener"><span>{url}</span></a></li>
                                            <li>Repo - <a href={repo} target="_blank" rel="noreferrer noopener"><span>{repo}</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pp-main">
                        <div className="pp-main-inner">
                            <img src={image} alt="" className={theme === "dark" ? "pp-img outer-shadow-dm" : "pp-img outer-shadow"} />
                            <img src={image2} alt="" className={theme === "dark" ? "pp-img outer-shadow-dm" : "pp-img outer-shadow"} />
                            <img src={image3} alt="" className={theme === "dark" ? "pp-img outer-shadow-dm" : "pp-img outer-shadow"} />
                           {image4 ? <img src={image4} alt="" className={theme === "dark" ? "pp-img outer-shadow-dm" : "pp-img outer-shadow"} /> : ""}
                            {image5 ? <img src={image5} alt="" className={theme === "dark" ? "pp-img outer-shadow-dm" : "pp-img outer-shadow"} /> : ""}
                            {image6 ? <img src={image6} alt="" className={theme === "dark" ? "pp-img outer-shadow-dm" : "pp-img outer-shadow"} /> : ""}
                            {image7 ? <img src={image7} alt="" className={theme === "dark" ? "pp-img outer-shadow-dm" : "pp-img outer-shadow"} /> : ""}
                        </div>
                    </div>
                </div> : ""}

        </div >
    )

}

export default AllProjects
