import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return (
        <section className="contact-pg-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8">
                        <div className="section-title-s3">
                            <span>Contact</span>
                            <h2>Get in touch</h2>
                            <p>Tell us more about what you are looking for and we will reach out shortly!</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                        <div className="contact-info clearfix">
                            <div>
                                <div className="icon">
                                    <i className="ti-email"></i>
                                </div>
                                <h5>Email</h5>
                                <p>msutherland@wynstrategies.com</p>
                            </div>
                            <div>
                                <div className="icon">
                                    <i className="ti-mobile"></i>
                                </div>
                                <h5>Phone</h5>
                                <p>+1 (516) 310-4738</p>
                            </div>
                            <div>
                                <div className="icon">
                                    <i className="ti-location-arrow"></i>
                                </div>
                                <h5>Address</h5>
                                <p>P.O. Box 35, West Islip, NY 11795</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contactpage;
