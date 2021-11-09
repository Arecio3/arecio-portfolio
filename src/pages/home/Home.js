import './home.css';
import selfie from "../../images/selfie.png";
import selfieDm from "../../images/selfieDm.jpeg";
// import proSelfieDm from '../../images/DSC_1525.jpg'

function Home({theme, setTheme}) {
    return (
        <section className={theme === "dark" ? "home-section active" : "home-section section"} id="home">
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
                        <a href='#about'><span className={ theme === "dark" ? "btn-1 outer-shadow-dm hover-in-shadow-dm active" : "btn-1 outer-shadow hover-in-shadow"}>About Me</span></a>
                    </div>
                    <div className="home-img">
                        <div className={theme === "dark" ? "imgBox inner-shadow-dm" : "imgBox inner-shadow"}>
                            <img src={theme === "dark" ? selfieDm : selfie} alt="" className={theme === "dark" ? "selfie outer-shadow-dm": "selfie outer-shadow"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
