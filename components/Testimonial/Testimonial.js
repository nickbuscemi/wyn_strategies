import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from '../../api/testimonial';

const settings = {
    dots: true,
    arrows: false,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const Testimonial2 = () => {
    return (
        <section className="testimonials-section section-padding">
            <h2 className="hidden">Testimonials</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="testimonial-slider">
                            <Slider {...settings}>
                                {testimonialsData.map((item, index) => (
                                    <div className="testimonials-area" key={index}>
                                        <p>{item.quote}</p>
                                        <span className="quoter">{item.author}</span>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;