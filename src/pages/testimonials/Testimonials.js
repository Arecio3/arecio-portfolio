import './testimonials.css';
import { useState } from 'react';

function Testimonials({ theme, setTheme}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            quote: "Amazing Work! Really knowledgeable, finished the project ahead of time as well as added extra functionailty!!",
            img: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            name: "Value Haulers LLC"
        },
        {
            id: 2,
            quote: "Wide variety of skills awesome communication great designer and is great to work with.",
            img: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            name: "Hummingbird Lawn Services LLC"
        },
        {
            id: 3,
            quote: "Awesome leader, is able to pick up new things quickly and delegate calmly.",
            img: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            name: "Patrick Moore"
        },
    ]

    const handleClick = (direction) => {
        direction === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };

      
    return (
        <section className={theme === "dark" ? "testimonial-section active" : "testimonial-section"} id="testimonials"> 
            <div className="test-container">
                <div className="test-row">
                    <div className={theme === "dark" ? "test-header active" :"test-header"}>
                        <h3>Testimonials</h3>
                        <h1>People Said</h1>
                    </div>
                </div>
                <div className="test-row">
                    <div className="test-box">
                        <div className="test-slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                            {data.map((d, i) => (
                            <div className="test-slider-container" key={i}>
                                {/* testimonial start */}
                                <div className={theme === "dark" ? "test-item active" : "test-item"}>
                                    <i className="fa fa-quote-left left"></i>
                                    <i className="fa fa-quote-right right"></i>
                                    <p>{d.quote}</p>
                                    <img className="test-img" src={d.img} alt="testimonial" />
                                    <span>{d.name}</span>
                                </div>
                                {/* testimonial end */}
                            </div>
                            ))}
                        </div>
                        <div className="test-slider-nav">
                            <span onClick={() => handleClick("left")} className={theme === "dark" ? "prev outer-shadow-dm hover-in-shadow-dm" : "prev outer-shadow hover-in-shadow"}><i className="fa fa-angle-left"></i></span>
                            <span onClick={() => handleClick("right")} className={theme === "dark" ? "next outer-shadow-dm hover-in-shadow-dm" : "next outer-shadow hover-in-shadow"}><i className="fa fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
