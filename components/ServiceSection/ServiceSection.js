import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Services from "../../api/service";
import "animate.css";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust to trigger animation earlier/later
  });

  return (
    <div
      ref={ref}
      className={`grid animate__animated ${
        inView ? "animate__fadeInUp" : "opacity-0"
      }`}
      style={{
        animationDelay: inView ? `${index * 0.3}s` : "0s", // Stagger effect
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <h3>
        <Link onClick={ClickHandler} href={`/service-single/${service.slug}`}>
          {service.sTitle}
        </Link>
      </h3>
      <p>{service.description}</p>
    </div>
  );
};

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
              {Services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
