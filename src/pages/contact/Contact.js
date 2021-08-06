import './contact.css';

function Contact() {
    return (
        <section className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <div className="contact-title">
                        <h1>Contact</h1>
                        <h3>Get In Touch</h3>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="contact-item">
                        <div className="contact-item-inner outer-shadow">
                            <i className="fa fa-phone"></i>
                            <span>Phone</span>
                            <p>+1 813-395-2938</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-item-inner outer-shadow">
                            <i className="fa fa-envelope"></i>
                            <span>Gmail</span>
                            <p>cuba289@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-item-inner outer-shadow">
                            <i className="fa fa-map-marker-alt"></i>
                            <span>Located</span>
                            <p>Tampa, Florida- 33615</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
