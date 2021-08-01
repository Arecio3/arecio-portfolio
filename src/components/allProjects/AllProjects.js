import { useState } from 'react';
import Popup from '../../components/popup/PopUp';
import './allprojects.css';

function AllProjects({ title, image, url, category, repo, description, tools, id }) {
    const [open, setOpen] = useState(0);

    console.log(open);

    return (
        <div className="row portfolio-items">
            {/* portfolio items start */}
            <div className="portfolio-item">
                <div className="portfolio-item-inner outer-shadow">
                    <div className="portfolio-item-img" >
                        <img src={image} alt="" data-category="full-stack" data-screenshots="images/blog2.png, images/blog3.png, images/blog4.png, images/blog5.png, images/blog6.png, images/blog7.png" />
                        {/* View Project Button */}
                         <span className="view-project" onClick={(e) => setOpen(e.target.id)}>View Project</span>
                        { open > 0  ? <Popup title={title} image={image} url={url} id={setOpen} category={category} repo={repo} description={description} tools={tools} open={open} setOpen={setOpen} /> : ''} 
                    </div>
                    <p className="portfolio-item-title">{title}</p>
                    {/* Portfolio items details start */}
                    <div className="portfolio-item-details">
                        <div className="row">
                            <div className="description">
                                <h3>Project Brief:</h3>
                                <p>{description}</p>
                            </div>
                            <div className="info">
                                <h3>Project Info</h3>
                                <ul>
                                    <li>Site - <span>{url}</span></li>
                                    <li>Site - <span>{repo}</span></li>
                                    <li>Date - <span>2021</span></li>
                                    <li>Tools - <span>{tools}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="separator"></div> */}

            { open === true ? <div className="pp-main">
                <div className="pp-main-inner">
                    <div className="pp-project-details-btn outer-shadow hover-in-shadow">Project Details <i className="fas fa-plus"></i></div>
                    <div className="pp-close outer-shadow hover-in-shadow">&times;</div>
                    <img src={image} alt="" className="pp-img outer-shadow" />
                </div>
            </div> : ''}



        </div >
    )
}

export default AllProjects
