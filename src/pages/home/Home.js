import './home.css';
import selfie from "../../images/selfie.jpeg";

function Home() {
    return (
        <section className="home-section section">
            <div className="container">
                <div className="row full-screen">
                    <div className="home-text">
                        <p>Hello</p>
                        <h2>I'm Arecio Canton</h2>
                        <h1>Full Stack Developer</h1>
                    </div>
                    <div className="home-img">
                        <img src={selfie} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
