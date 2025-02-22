import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";


const Hero = () => {
    return (

        <section className="hero-slider hero-style-1">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}>
                        <div className="container animate__animated animate__fadeInUp">
                            <div className="slide-title">
                                <h2>Strategic Marketing Strategies</h2>
                            </div>
                            <div className="slide-text">
                                <p>With over 25
                                    years of experience in
                                    medical and legal marketing, business development, and community engagement.
                                </p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link href="/contact" className="theme-btn">Discover More<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide2.png'})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Accelerating Growth for Medical Practices</h2>
                            </div>
                            <div className="slide-text">
                                <p>From patient acquisition strategies to brand positioning, we help healthcare providers expand their reach and improve engagement.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link href="/contact" className="theme-btn">Discover More<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide3.png'})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Strategic Marketing for Law Firms</h2>
                            </div>
                            <div className="slide-text">
                                <p>We craft powerful legal marketing strategies that drive visibility, attract high-value clients, and establish your firm as an authority in the industry.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link href="/contact" className="theme-btn">Discover More<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                ...
            </Swiper>
        </section>
    )
}

export default Hero;