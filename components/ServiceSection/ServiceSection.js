import React from "react";
import Link from "next/link";
import Services from '../../api/service'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = () => {
    return (
        <section className="services-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title-s3">
                            <span>Services</span>
                            <h2>For your Practice</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="services-grids clearfix">
                            {Services.map((service, srv) => (
                                <div className="grid" key={srv}>
                                    {/*<div className="icon">
                                        <i className={`fi ${service.icon}`}></i>
                                    </div>*/}
                                    <h3><Link onClick={ClickHandler} href={"/service-single/[slug]"} as={`/service-single/${service.slug}`}>{service.sTitle}</Link></h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;