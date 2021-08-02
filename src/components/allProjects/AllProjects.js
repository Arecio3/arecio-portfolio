import React, { Component } from 'react'
import Popup from '../popup/PopUp';
import './allprojects.css';



class AllProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        //  this.setState({ clicked: this.state.clicked})
        console.log(this.props)
        console.log("hi")
    }

    render() {

        return (
            <div className="row portfolio-items">
                {/* portfolio items start */}
                <div className="portfolio-item">
                    <div className="portfolio-item-inner outer-shadow">
                        <div className="portfolio-item-img" >

                            <img src={this.props.image} alt="" data-category="full-stack" data-screenshots="images/blog2.png, images/blog3.png, images/blog4.png, images/blog5.png, images/blog6.png, images/blog7.png" />
                            {/* View Project Button */}
                            <span className="view-project" onClick={() => this.handleClick}>View Project</span>
                            {/* { open > 0  ? <Popup title={title} image={image} url={url} id={setOpen} category={category} repo={repo} description={description} tools={tools} open={open} setOpen={setOpen} /> : ''}  */}
                        </div>
                        <p className="portfolio-item-title">{this.props.title}</p>
                        {/* Portfolio items details start */}
                        <div className="portfolio-item-details">
                            <div className="row">
                                <div className="description">
                                    <h3>Project Brief:</h3>
                                    <p>{this.props.description}</p>
                                </div>
                                <div className="info">
                                    <h3>Project Info</h3>
                                    <ul>
                                        <li>Site - <span>{this.props.url}</span></li>
                                        <li>Repo - <span>{this.props.repo}</span></li>
                                        <li>Date - <span>2021</span></li>
                                        <li>Tools - <span>{this.props.tools}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="separator"></div> */}

                {/* <div className="pp-main">
                    <div className="pp-main-inner">
                        <div className="pp-project-details-btn outer-shadow hover-in-shadow">Project Details <i className="fas fa-plus"></i></div>
                        <div className="pp-close outer-shadow hover-in-shadow">&times;</div>
                        <img src={image} alt="" className="pp-img outer-shadow" />
                    </div>
                </div> */}

            </div >
        )
    }

}

export default AllProjects
