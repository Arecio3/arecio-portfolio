import './popup.css';
import blog1 from '../../images/blog1.png';

function PopUp() {

    return (
        <div>
            <div className="pp blog-popup">
                <div className="pp-details">
                    <div className="pp-details-inner">
                        <div className="pp-title">
                            <h2>Deep Thoughts</h2>
                            <p>Category - <span className="pp-project-category">Full Stack Application</span></p>
                        </div>
                        <div className="pp-project-details">
                            <div className="row">
                                <div className="pp-description">
                                    <h3>Project Brief:</h3>
                                    <p>A full stack application with user auth where you can write, publish, and view other users blog post after making an account. With the help of Bcrypt a user is able to create a new account to the database with a enrypted password. User Authentication with Express, Node Js, React-Router-Dom. Client can also change their profile picture and post a thumbnail picture for their blog with the help of Multer npm package.</p>
                                </div>
                                <div className="pp-info">
                                    <h3>Project Info</h3>
                                    <ul>
                                        <li>Date - <span>2021</span></li>
                                        <li>Tools - <span>React JS, Multer, Mongoose, Express, Bcrypt</span></li>
                                        <li>Site - <span>N/A</span></li>
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
                        <img src={blog1} alt="" className="pp-img outer-shadow" />
                        <div className="pp-counter">1 of 7</div>
                    </div>
                    {/* pp nav */}
                    <div className="pp-prev"><i className="fas fa-play"></i></div>
                    <div className="pp-next"><i className="fas fa-play"></i></div>
                </div>
            </div>
        </div>
    )
}

export default PopUp
