import React, { useState } from "react";
import Link from "next/link";
import Team from "../../api/team";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const TeamSection = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <section className="cta-with-team-section section-padding">
            {/* Background Video */}
            <div className="bg-video">
                <video autoPlay muted loop playsInline>
                    <source src="/videos/stockvideo1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="cta-content">
                            <div className="video-holder">
                                <button
                                    className="btn-wrap"
                                    onClick={() => setOpen(false)} //set to true when you get a video for this
                                >
                                    <i className="fi flaticon-video-player" aria-hidden="true"></i>
                                    <span className="text-white">
                                        See more about our company
                                    </span>
                                </button>
                            </div>
                            <h3>
                                We are the most proven medical and legal marketing agency
                                serving Long Island and New York City
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="team-section">
                    <div className="row">
                        <div className="col col-lg-6 col-12">
                            <div className="section-title-s4">
                                <span>Team members</span>
                                <h2>Meet our team<br /></h2>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="title-text"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="team-grids clearfix">
                                {Team.map((team, aitem) => (
                                    <div className="grid" key={aitem}>
                                        <div className="img-holder">
                                            <Image src={team.tImg} alt={team.name} />
                                        </div>
                                        <div className="details">
                                            <h5>
                                                <Link
                                                    onClick={ClickHandler}
                                                    href={`/team-single/${team.slug}`}
                                                >
                                                    {team.name}
                                                </Link>
                                            </h5>
                                            <span>{team.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="7e90gBu4pas"
                onClose={() => setOpen(false)}
            />
        </section>
    );
};

export default TeamSection;
