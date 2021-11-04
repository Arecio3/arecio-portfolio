import './work.css';

function Work({ theme, setTheme}) {
    return (
        <div className="row">
            <div className="work tab-content">
                <div className="row">
                    <div className={theme === "dark" ? "timeline active" :"timeline"}>
                        <div className="row">
                            {/* Timeline item start */}
                            <div className="timeline-item">
                                <div className={theme === "dark" ? "timelineItemInner outer-shadow-dm active" :"timelineItemInner outer-shadow"}>
                                <i className={theme === "dark" ? "fas fa-briefcase gradIcon active" :"fas fa-briefcase gradIcon"}></i>
                                    <span>09/1/21 - 9/21/21</span>
                                    <h3>Hummingbird LLC</h3>
                                    <h4>Front-End Website</h4>
                                    <a href="https://hummingbirdlawn.com/"className="work-link">Site</a>
                                    <p>A Professional Landscaping business with a review section, modern UI/UX, responsive, translation, and fully functional contact form!</p>
                                </div>
                            </div>
                            {/* Timeline end */}
                            {/* Timeline item start */}
                            <div className="timeline-item">
                                <div className={theme === "dark" ? "timelineItemInner outer-shadow-dm active" :"timelineItemInner outer-shadow"}>
                                <i className={theme === "dark" ? "fas fa-briefcase gradIcon active" :"fas fa-briefcase gradIcon"}></i>
                                    <span>10/10/21 - 11/01/21</span>
                                    <h3>Value Haulers LLC</h3>
                                    <h4>Front-End Website</h4>
                                    <a href="https://valuehaulers.com/"className="work-link">Site</a>
                                    <p>A National Trucking business with a review section, modern UI/UX, responsive, translation, and fully functional contact form!</p>
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

export default Work