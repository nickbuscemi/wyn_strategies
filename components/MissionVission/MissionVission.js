import React from "react";
import abimg1 from '/public/images/about/img-1.png';
import abimg2 from '/public/images/about/img-2.png';
import abimg3 from '/public/images/about/img-3.png';
import Image from "next/image";

const MissionVission = () => {
    return (
        <section className="mission-vision-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="title-area">
                            <h2>
                                "As I have been in this vertical for well over a decade, I've seen the
                                landscape change many times. During this journey, I've worked with
                                some of the Island’s most successful Neurosurgical, Pain Management,
                                and legal groups, including NY Pain Consultants, NSPC, National Spine
                                and Pain, New York Spine Institute, Long Island Brain & Spine, and
                                several health-affiliated law firms."
                            </h2>
                            <br></br>
                            <p>
                                The comprehensive overview below can be tailored to your specific
                                needs. Although it is a broad look at what’s possible, it’s nearly
                                impossible to convey in just a few paragraphs all the customized
                                directions and expansion plans we can develop for your unique goals.
                            </p>
                            <p>
                                With 2025 upon us, I can’t think of a better time to formalize this
                                year’s intentions! I look forward to continuing a conversation that
                                puts your practice’s needs at the forefront of the new year’s calendar.
                            </p>
                        </div>
                    </div>
                </div>
                {/* stock images for this */}
                <div className="row"> 
                    <div className="col col-xs-12">
                        <div className="mission-vision-grids clearfix">
                            <div className="grid">
                                <div className="img-holder">
                                    <Image src={abimg1} alt="Our mission" />
                                </div>
                                <h3>Our Mission</h3>
                                <p>
                                    My mission is to guide independent practices and small businesses
                                    toward sustainable growth by leveraging proven strategies and
                                    industry partnerships. 
                                </p>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <Image src={abimg2} alt="Our vision" />
                                </div>
                                <h3>Our Vision</h3>
                                <p>
                                    We envision a healthcare and legal landscape where
                                    independent practices continue to flourish. By harnessing the power
                                    of innovation, strategic relationships, and patient/client centered
                                    approaches, we can pave the way for stronger, more personalized
                                    services that truly stand the test of time.
                                </p>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <Image src={abimg3} alt="Our strategies" />
                                </div>
                                <h3>Our Strategies</h3>
                                <p>
                                    Drawing from my extensive experience in marketing, brand
                                    development, and strategic outreach, we tailor multi-pronged growth
                                    plans for each client. By cultivating key referral sources,
                                    enhancing online visibility, and streamlining operational processes,
                                    we ensure that practices are equipped to exceed
                                    yearly objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionVission;
