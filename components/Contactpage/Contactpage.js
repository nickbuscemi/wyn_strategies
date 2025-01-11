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
                                <p>mjsutherland703@gmail.com</p>
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
                                <p>1 Sequams Ln E, West Islip, NY 11111</p>
                            </div>
                        </div>

                        <div className="contact-map">
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contactpage;
