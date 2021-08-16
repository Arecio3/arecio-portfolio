import './home.css';
import selfie from "../../images/selfie.png";
import selfieDm from "../../images/selfieDm.jpeg";
// import proSelfieDm from '../../images/DSC_1525.jpg'
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai"

function Home({theme, setTheme}) {
    return (
        <section className={theme === "dark" ? "home-section active" : "home-section section"}>
            {/* Effect wrap start */}
            <div className={theme === "dark" ? "effect effect-wrap-active" : "effect effect-wrap"}>
                <div className="effect effect-1"></div>
                <div className="effect effect-2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="effect effect-3"></div>
                <div className="effect effect-4"></div>
                <div className="effect effect-5">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {/* Effect wrap end */}
            <div className="container">
                <div className="row full-screen align-items-center">
                    <div className={theme === "dark" ? "home-text active" : "home-text"}>
                        <p>Hello</p>
                        <h2>I'm <span>Arecio</span> Canton</h2>
                        <h1>Full Stack Developer & Web Designer</h1>
                        <Link to='/about'><span className={ theme === "dark" ? "btn-1 outer-shadow-dm hover-in-shadow-dm active" : "btn-1 outer-shadow hover-in-shadow"}>About Me</span></Link>
                    </div>
                    <div className="home-img">
                        <div className={theme === "dark" ? "imgBox inner-shadow-dm" : "imgBox inner-shadow"}>
                            <img src={theme === "dark" ? selfieDm : selfie} alt="" className={theme === "dark" ? "selfie outer-shadow-dm": "selfie outer-shadow"} />
                        </div>
                    </div>
                </div>
                <Link to="/services"><div className="downArrow"><AiOutlineArrowDown /></div></Link>
            </div>
        </section>
    )
}

export default Home
