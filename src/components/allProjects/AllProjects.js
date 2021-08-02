import { useState } from 'react'
import Popup from '../popup/PopUp';
import './allprojects.css';



function AllProjects(props) {
    const [project, setProject] = useState("");

    const projectFilters = ["Documaker", "Hermes", "Searchy", "DT", "Stockchasr"];

    const handleClick = () => {
        //  this.setState({ clicked: this.state.clicked})
        console.log(props)
        if(props.id === 1) {
            return setProject("DT")
        } else if (props.id === 2) {
            return setProject("Searchy")
        } else if (props.id === 3) {
            return setProject("Documaker")
        } else if (props.id === 4) {
            return setProject("Hermes")
        } else {
            return setProject("Stockchasr")
        }
    }

    const handleClose = () => {
        setProject("");
    }

        return (
            <div className="row portfolio-items">
                {/* portfolio items start */}
                <div className="portfolio-item">
                    <div className="portfolio-item-inner outer-shadow">
                        <div className="portfolio-item-img" >

                            <img src={props.image} alt="" data-category="full-stack" data-screenshots="images/blog2.png, images/blog3.png, images/blog4.png, images/blog5.png, images/blog6.png, images/blog7.png" />
                            {/* View Project Button */}
                            <span className="view-project" onClick={handleClick}>View Project</span>
                            {/* { open > 0  ? <Popup title={title} image={image} url={url} id={setOpen} category={category} repo={repo} description={description} tools={tools} open={open} setOpen={setOpen} /> : ''}  */}
                        </div>
                        <p className="portfolio-item-title">{props.title}</p>
                        {/* Portfolio items details start */}
                        <div className="portfolio-item-details">
                            <div className="row">
                                <div className="description">
                                    <h3>Project Brief:</h3>
                                    <p>{props.description}</p>
                                </div>
                                <div className="info">
                                    <h3>Project Info</h3>
                                    <ul>
                                        <li>Site - <span>{props.url}</span></li>
                                        <li>Repo - <span>{props.repo}</span></li>
                                        <li>Date - <span>2021</span></li>
                                        <li>Tools - <span>{props.tools}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="separator"></div> */}

                {project ? <div className="pp-main">
                    <div className="pp-main-inner">
                        <div className="pp-project-details-btn outer-shadow hover-in-shadow">Project Details <i className="fas fa-plus"></i></div>
                        <div className="pp-close outer-shadow hover-in-shadow" onClick={handleClose}>&times;</div>
                        <img src={props.image} alt="" className="pp-img outer-shadow" />
                    </div>
                </div> : ""}

            </div >
        )

}

export default AllProjects
