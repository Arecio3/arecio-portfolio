import './education.css';

function Experience() {
    return (
        <div className="row">
            <div className="education tab-content">
                <div className="row">
                    <div className="timeline">
                        <div className="row">
                            {/* Timeline item start */}
                            <div className="timeline-item">
                                <div className="timelineItemInner outer-shadow">
                                <i className="fas fa-graduation-cap gradIcon"></i>
                                    <span>08/25/14 - 06/07/18</span>
                                    <h3>Graduated Highschool</h3>
                                    <h4>Braulio Alonso High school</h4>
                                    <p>Graduated with a 3.0 GPA and 100 hours of community service</p>
                                </div>
                            </div>
                            {/* Timeline end */}
                            {/* Timeline item start */}
                            <div className="timeline-item">
                                <div className="timelineItemInner outer-shadow">
                                <i className="fas fa-graduation-cap gradIcon"></i>
                                    <span>03/15/21 - 06/07/21</span>
                                    <h3>Graduated Bootcamp!</h3>
                                    <h4>United Central Florida</h4>
                                    <p>It was a three month course that I was able to complete with an A and it's where I began to fall in love with coding!</p>
                                </div>
                            </div>
                            {/* Timeline end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
