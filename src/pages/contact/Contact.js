import { useForm, ValidationError } from '@formspree/react';
import './contact.css';

function Contact({ theme, setTheme}) {
    const [state, handleSubmit] = useForm("xpzkybjr");
    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }
    return (
        <section className={theme === "dark" ? "contact-section active" : "contact-section"} id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <div className="contact-title">
                        <h1>Contact</h1>
                        <h3>Get In Touch</h3>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="contact-item">
                        <div className={theme === "dark" ? "contact-item-inner outer-shadow-dm" : "contact-item-inner outer-shadow"}>
                            <i className="fa fa-phone"></i>
                            <span>Phone</span>
                            <p>+1 813-385-2938</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className={theme === "dark" ? "contact-item-inner outer-shadow-dm" : "contact-item-inner outer-shadow"}>
                            <i className="fa fa-envelope"></i>
                            <span>Gmail</span>
                            <p>cuba289@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className={theme === "dark" ? "contact-item-inner outer-shadow-dm" : "contact-item-inner outer-shadow"}>
                            <i className="fa fa-map-marker-alt"></i>
                            <span>Located</span>
                            <p>Tampa, Florida- 33615</p>
                        </div>
                    </div>
                    {/* End of Contact Item */}
                </div>
                <div className="psa"><h4>PSA: Make sure to leave your email so we can work together :)</h4></div>
                <div className="contact-box">
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="contact-box">
                                <div className="w50">
                                    <div className={theme === "dark" ? "input-group outer-shadow-dm hover-in-shadow-dm" : "input-group outer-shadow hover-in-shadow"}>

                                        <input
                                            placeholder="Email"
                                            id="email"
                                            type="email"
                                            name="email"
                                            className="input-control"
                                        />
                                    </div>
                                    <div className={theme === "dark" ? "input-group outer-shadow-dm hover-in-shadow-dm" : "input-group outer-shadow hover-in-shadow"}>

                                        <input
                                            placeholder="Name"
                                            id="name"
                                            type="name"
                                            name="name"
                                            className="input-control"
                                        />
                                    </div>
                                    <div className={theme === "dark" ? "input-group outer-shadow-dm hover-in-shadow-dm" : "input-group outer-shadow hover-in-shadow"}>
                                        <input
                                            placeholder="Subject"
                                            id="subject"
                                            type="subject"
                                            name="subject"
                                            className="input-control"
                                        />
                                    </div>
                                </div>
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <div className="w50">
                                    <div className={theme === "dark" ? "input-group outer-shadow-dm hover-in-shadow-dm" : "input-group outer-shadow hover-in-shadow"}>
                                        <textarea
                                            placeholder="Message"
                                            id="message"
                                            name="message"
                                            className="input-control"
                                            color="gold"
                                        />
                                    </div>
                                </div>
                            </div>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <div className="contact-box">
                                <div className="submit-btn">
                                   {state.succeeded ? <button type="submit" className={theme === "dark" ? "btn-1 outer-shadow-dm hover-in-shadow-dm" : "btn-1 outer-shadow hover-in-shadow"}>
                                        Message Sent!
                                    </button> : <button type="submit" className={theme === "dark" ? "btn-1 outer-shadow-dm hover-in-shadow-dm" :"btn-1 outer-shadow hover-in-shadow"} disabled={state.submitting}>
                                        Send Message
                                    </button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
