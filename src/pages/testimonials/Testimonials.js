import './testimonials.css';

function Testimonials() {
    return (
        <section className="testimonial-section"> 
            <div className="test-container">
                <div className="test-row">
                    <div className="test-header">
                        <h3>Testimonials</h3>
                        <h1>People Said</h1>
                    </div>
                </div>
                <div className="test-row">
                    <div className="test-box">
                        <div className="test-slider outer-shadow">
                            <div className="test-slider-container">
                                {/* testimonial start */}
                                <div className="test-item">
                                    <i className="fa fa-quote-left left"></i>
                                    <i className="fa fa-quote-right right"></i>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque totam quis aspernatur dolores pariatur autem. Rerum quos incidunt hic totam suscipit. Iusto accusamus quasi esse iure tempore? Veniam, iure praesentium?</p>
                                    <img className="test-img" src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="testimonial" />
                                    <span>Patrick Moore</span>
                                </div>
                                {/* testimonial end */}
                            </div>
                        </div>
                        <div className="test-slider-nav">
                            <span className="prev outer-shadow hover-in-shadow"><i className="fa fa-angle-left"></i></span>
                            <span className="next outer-shadow hover-in-shadow"><i className="fa fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
