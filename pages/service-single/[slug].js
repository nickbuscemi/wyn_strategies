import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Footer from '../../components/footer/Footer';
import Services from '../../api/service'
import ServiceTab from './ServiceTab';
import Logo from '/public/images/logo-2.png'
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const ServiceSinglePage = (props) => {

    const router = useRouter()

    const ServiceDetails = Services.find(item => item.slug === router.query.slug)
    const AdditionalContent = ServiceDetails?.additionalContent
    const Features = ServiceDetails?.features
    const ServiceTabs = ServiceDetails?.serviceTabs

    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={ServiceDetails?.sTitle} pagesub={'Project'} />

            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-9 order-lg-2 order-1 col-12">
                            <div className="service-single-content">
                                <div className="service-pic">
                                    <Image src={ServiceDetails?.sImg} alt="" />
                                </div>
                                <h2>{AdditionalContent?.[0].title1}</h2>                                
                                <p>{AdditionalContent?.[0].paragraph}</p>
                                <p>{AdditionalContent?.[0].subParagraph}</p>
                                <h3>{AdditionalContent?.[1].title2}</h3>
                                <p>{AdditionalContent?.[1].paragraph}</p>
                                {ServiceDetails?.features && ServiceDetails.features.length > 0 && (
                                    <div className="service-features">
                                        {/* First half of the features */}
                                        <ul>
                                        {ServiceDetails.features.slice(0, 3).map((feature, index) => (
                                            <li key={index}>
                                            <i className="ti-check-box"></i>
                                            {feature}
                                            </li>
                                        ))}
                                        </ul>

                                        {/* Second half of the features */}
                                        <ul>
                                        {ServiceDetails.features.slice(3).map((feature, index) => (
                                            <li key={index}>
                                            <i className="ti-check-box"></i>
                                            {feature}
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                )}


                                <ServiceTab />

                                <div className="request-service">
                                    <h3>Request this service</h3>
                                    <form method="post" onSubmit={SubmitHandler}>
                                        <div>
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name*" />
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email*" />
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone*" />
                                        </div>
                                        <div className="submit-area">
                                            <button type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 order-lg-1 order-2 col-12">
                            <div className="service-sidebar">
                                <div className="widget service-list-widget">
                                    <ul>
                                        <li className="current"><Link href="/services">All Service</Link></li>
                                        {Services.map((service, srv) => (
                                            <li key={srv}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="widget service-features-widget">
                                    <h3>Our Service Features</h3>
                                    <ol>
                                        {ServiceDetails?.serviceFeatures?.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                        ))}
                                    </ol>

                                </div>
                                {/*<div className="widget download-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href='/contact'><i className="ti-file"></i>Download Brochure</Link></li>
                                    </ul>
                                </div>*/}
                                <div className="widget contact-widget">
                                    <div>
                                        <h4>Need help?</h4>
                                        <p>Give us a call and we'll be happy to help. </p>
                                        <p>Phone: +1 (516) 310-4738 </p>
                                        <Link onClick={ClickHandler} href='/contact'>Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;