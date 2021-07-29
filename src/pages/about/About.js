import './about.css';
import { useState } from 'react';
import Me from "../../images/selfie.png";
import Experience from "../../components/experience/Experience";
import Education from "../../components/education/Education";
import Skills from '../../components/skills/Skills';

function About() {
    const [selected, setSelected] = useState(1);

    const setActive = (index) => {
        setSelected(index)
    }

    return (
        <section className="about-section section" id="about">
            <div className="container">
                <div className="row">
                    <div className="sectionTitle">
                        <h2 data-heading="main info">About Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="aboutImg">
                        <div className="imgBox inner-shadow">
                            <img src={Me} alt="profile pic" className="outer-shadow" />
                        </div>

                        <div className="socialLinks">
                            <a className="outer-shadow hover-in-shadow" href="https://www.facebook.com/arecio.canton.1" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-facebook-square" id="facebookIcon"></i>
                            </a>
                            <a className="outer-shadow hover-in-shadow" href="https://twitter.com/Papichulo813" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-twitter-square" id="twitterIcon"></i>
                            </a>
                            <a className="outer-shadow hover-in-shadow" href="https://www.instagram.com/areciooo/" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-instagram-square" id="instagramIcon"></i>
                            </a>
                            <a className="outer-shadow hover-in-shadow" href="https://www.pinterest.com/areciocanton/_saved/" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-pinterest-square" id="pintrestIcon" ></i>
                            </a>
                            <a className="outer-shadow hover-in-shadow" href="https://www.linkedin.com/in/arecio-canton-95026a208/" target="_blank"
                                rel="noreferrer noopener">
                                <i className="fab fa-linkedin" id="linkedIn"></i>
                            </a>
                            <a className="outer-shadow hover-in-shadow" href="https://github.com/Arecio3" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-github-square" id="github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="aboutInfo">
                        <p><span>Welcome! My name is Arecio Canton, I am a Full Stack Developer and Web Designer.</span> Just graduated from UCF's 3 Month Full Stack Bootcamp and fell in love with programming so much so that I have completed numerous projects, and plan on continuing. I was born in cuba so si hablo español, I am 21 years old and eager to keep learning and my dream is to eventually get to be able to work with AI and AGI.</p>
                        <a href="https://docdro.id/zHKZIS4" className="btn-1 outer-shadow hover-in-shadow" target="_blank" rel="noreferrer noopener">Resume</a>
                        <a href="#contact" className="btn-1 outer-shadow hover-in-shadow" target="_blank" rel="noreferrer noopener">Hire Me</a>
                    </div>
                </div>
                {/* About tabs start */}
                <div className="row">
                    <div className="aboutTabs">
                        <span className={selected === 1 ? "tab-item outer-shadow active" : "tab-item"} data-target=".skills" onClick={() => setActive(1)}>Skills</span>
                        <span className={selected === 2 ? "tab-item outer-shadow active" : "tab-item"} data-target=".experience" onClick={() => setActive(2)}>Experience</span>
                        <span className={selected === 3 ? "tab-item outer-shadow active" : "tab-item"} data-target=".education" onClick={() => setActive(3)}>Education</span>
                    </div>
                </div>
                {/* About tabs end */}
                {selected === 1 ? <Skills /> : selected === 2 ?
                <Experience /> :  <Education />}
            </div>
        </section>
    )
}

export default About
