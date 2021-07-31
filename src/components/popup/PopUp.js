import './popup.css';
import blog1 from '../../images/blog1.png';

function PopUp() {
    return (
        <div>
            <div className="pp blog-popup">
                <div className="pp-main">
                    <div className="pp-main-inner">
                        <div className="pp-project-details-btn outer-shadow hover-in-shadow">Project Details <i className="fas fa-plus"></i></div>
                        <div className="pp-close outer-shadow hover-in-shadow">&times;</div>
                        <img src={blog1} alt="" className="pp-img outer-shadow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp
