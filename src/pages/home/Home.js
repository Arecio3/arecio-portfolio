import './home.css';
import selfie from "../../images/selfie.png";

function Home() {
    return (
        <section className="home-section section">
            {/* Effect wrap start */}
            <div className="effect-wrap">
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
                    <div className="home-text">
                        <p>Hello</p>
                        <h2>I'm Arecio Canton</h2>
                        <h1>Full Stack Developer & Web Designer</h1>
                        <a href="/" className="btn-1 outer-shadow hover-in-shadow">About Me</a>
                    </div>
                    <div className="home-img">
                        <div className="imgBox inner-shadow">
                            <img src={selfie} alt="" className="selfie outer-shadow" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
