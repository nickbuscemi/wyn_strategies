import React from 'react'
import Link from "next/link";
import Logo from '/public/images/logo.png'
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="site-footer">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="logo"/>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Navigation</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                    {/*<li><Link onClick={ClickHandler} href="/blog">Blog</Link></li>*/}
                                </ul>
                                <ul>
                                <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                <li><Link onClick={ClickHandler} href="/services">Services</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget contact-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact Info</h3>
                                </div>
                                <ul>
                                    <li>Phone: <a href="tel:+15163104738">+1 (516) 310-4738</a></li>
                                    <li>Email: <a href="mailto:msutherland@wynstrategies.com">msutherland@wynstrategies.com</a></li>
                                </ul>

                            </div>
                        </div>
                        {/*<div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>Stay in the loop with our monthly newsletter.</p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Email Address *" required/>
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="ti-email"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <div className="col col-xs-12">
                            <p className="copyright">Copyright &copy; 2025 Wyn Strategies Inc. All rights reserved.</p>
                            <div className="social-icons">
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-pinterest"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-vimeo-alt"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;