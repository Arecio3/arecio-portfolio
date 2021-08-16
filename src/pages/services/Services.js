import "./services.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai"

function Services({ theme, setTheme}) {
    return (
        <section className={theme === "dark" ? "service-section active" :"service-section section"} id="services">
            <div className="container">
                <div className="row">
                    <div className={theme === "dark" ? "sectionTitle active" : "sectionTitle"}>
                        <h2 data-heading="Services">What I do</h2>
                    </div>
                </div>
                <div className="row">
                    {/* Service item start */}
                    <div className="service-item">
                        <div className={theme === "dark" ? "service-item-inner outer-shadow-dm active" : "service-item-inner outer-shadow"}>
                            <div className={theme === "dark" ? "icon inner-shadow-dm active" : "icon inner-shadow"}>
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3>Responsive Design</h3>
                            <p>Now a days with how powerful phones, tablets, and laptops have become I make sure to build my sites with mobile design first and scale up. I don't know what device my client will use to visit my sites so I make sure to accommodate for all different screen sizes.</p>
                        </div>
                    </div>
                    {/* Service item end */}
                    {/* Service item start */}
                    <div className="service-item">
                        <div className={theme === "dark" ? "service-item-inner outer-shadow-dm active" : "service-item-inner outer-shadow"}>
                            <div className={theme === "dark" ? "icon inner-shadow-dm active" : "icon inner-shadow"}>
                            <i className="fas fa-laptop-code"></i>
                            </div>
                            <h3>Web Design</h3>
                            <p>With the help of React and frameworks such as Tailwind, Bootstrap, Material UI, and even Photoshop my web design skills are improving and becoming more unique with the help of these different frameworks.</p>
                        </div>
                    </div>
                    {/* Service item end */}
                    {/* Service item start */}
                    <div className="service-item">
                        <div className={theme === "dark" ? "service-item-inner outer-shadow-dm active" : "service-item-inner outer-shadow"}>
                            <div className={theme === "dark" ? "icon inner-shadow-dm active" : "icon inner-shadow"}>
                                <i className="fas fa-server"></i>
                            </div>
                            <h3>Backend Development</h3>
                            <p>Understanding API's, Server Side Rendering, User Authentication, and sessions with the help of Firebase, Express, Node, and Axios</p>
                        </div>
                    </div>
                    {/* Service item end */}
                    {/* Service item start */}
                    <div className="service-item">
                        <div className={theme === "dark" ? "service-item-inner outer-shadow-dm active" : "service-item-inner outer-shadow"}>
                            <div className={theme === "dark" ? "icon inner-shadow-dm active" : "icon inner-shadow"}>
                            <i className="fas fa-brain"></i>
                            </div>
                            <h3>Bi-lingual</h3>
                            <p>I speak, read, and write fluent spanish.</p>
                        </div>
                    </div>
                    {/* Service item end */}
                    {/* Service item start */}
                    <div className="service-item">
                        <div className={theme === "dark" ? "service-item-inner outer-shadow-dm active" : "service-item-inner outer-shadow"}>
                            <div className={theme === "dark" ? "icon inner-shadow-dm active" : "icon inner-shadow"}>
                            <i className="fas fa-database"></i>
                            </div>
                            <h3>Data Management</h3>
                            <p>Understanding noSQL collection based database system with MongoDB or Firebase or even relational database structure such as mySQL</p>
                        </div>
                    </div>
                    {/* Service item end */}
                    {/* Service item start */}
                    <div className="service-item">
                        <div className={theme === "dark" ? "service-item-inner outer-shadow-dm active" : "service-item-inner outer-shadow"}>
                            <div className={theme === "dark" ? "icon inner-shadow-dm active" : "icon inner-shadow"}>
                                <i className="fas fa-code"></i>
                            </div>
                            <h3>Clean Code</h3>
                            <p>Commenting out my code, file structure obeying separation of concerns, and semantic class names and ID's</p>
                        </div>
                    </div>
                    {/* Service item end */}
                </div>
            </div>            
                <Link to="/portfolio"><div className="downArrowTwo"><AiOutlineArrowDown /></div></Link>
        </section>
    )
}

export default Services
