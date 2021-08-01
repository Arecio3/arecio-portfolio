import { useState } from 'react';
import './popup.css';

function PopUp({ id, open, setOpen, title, image, url, category, repo, description, tools}) {


    return (
     
            <div className={open ? "blog-popup active" : "blog-popup"}>
                <div className="pp-details">
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
                                        <li>Site - <span>{url}</span></li>
                                        <li>Repo - <span>{repo}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="separator"></div>

                <div className="pp-main">
                    <div className="pp-main-inner">
                        <div className="pp-project-details-btn outer-shadow hover-in-shadow">Project Details <i className="fas fa-plus"></i></div>
                        <div className="pp-close outer-shadow hover-in-shadow">&times;</div>
                        <img src={image} alt="" className="pp-img outer-shadow" />
                    </div>
                    <div className="pp-preloader">
                        <div></div>
                    </div>
                </div>
            </div>
    
    )
}

export default PopUp
