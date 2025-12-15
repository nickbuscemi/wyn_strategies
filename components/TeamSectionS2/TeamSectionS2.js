import React from 'react'
import Link from "next/link";
import Team from '../../api/team'
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSectionS2 = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={`team-section section-padding ${props.tmClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s2">
                            <span>Team members</span>
                            <h2>Meat our <br />team members</h2>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <Slider {...settings} className="team-carousel">
                            {Team.map((team, aitem) => (
                                <div className="grid" key={aitem}>
                                    <div className="img-holder">
                                        <Image src={team.tImg} alt="" />
                                    </div>
                                    <div className="details">
                                        <h5><Link onClick={ClickHandler} href={"/team-single/[slug]"} as={`/team-single/${team.slug}`}>{team.name}</Link></h5>
                                        <span>{team.title}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSectionS2;