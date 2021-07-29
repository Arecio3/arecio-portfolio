import './experience.css';

function Experience() {
    return (
        <div className="row">
            <div className="experience tab-content">
                <div className="row">
                    <div className="timeline">
                        <div className="row">
                            {/* Timeline item start */}
                            <div className="timeline-item">
                                <div className="timelineItemInner">
                                <i class="fas fa-graduation-cap"></i>
                                    <span>03/15/21 - 06/07-21</span>
                                    <h3>Graduated Bootcamp!</h3>
                                    <h4>United Central Florida</h4>
                                    <p>It was a three month course that I was able to complete with an A and it's where I began to fall in love with coding!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
