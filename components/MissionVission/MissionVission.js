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
                                WYN Strategies was created to support independent medical and legal practices navigating an increasingly aggressive consolidation landscape—particularly across Long Island—where hospital systems and private equity–backed groups continue to acquire independent practices at scale.
                            </h2>
                            <br></br>
                            <p>
                                With 25+ years of combined senior-level experience in healthcare marketing, business development, referral strategy, and payer dynamics, our team provides hands-on consulting that helps practices strengthen operations, grow referral networks, improve digital performance, and remain competitive without sacrificing independence.
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
                                    Our mission is to support independent medical and legal practices by delivering hands-on strategy, execution, and accountability that protect independence, strengthen operations, and drive sustainable growth in an increasingly consolidated landscape.
                                </p>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <Image src={abimg2} alt="Our vision" />
                                </div>
                                <h3>Our Vision</h3>
                                <p>
                                    We envision a healthcare and legal environment where independent practices continue to thrive despite hospital systems and private equity consolidation. By combining strategic insight, operational expertise, and real-world execution, we help practices remain competitive, relevant, and positioned for long-term success.
                                </p>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <Image src={abimg3} alt="Our strategies" />
                                </div>
                                <h3>Our Strategy</h3>
                                <p>
                                    WYN Strategies works directly with leadership teams to build growth from the inside out. Drawing on over 25 years of combined senior-level experience in healthcare marketing, business development, and payer strategy, we focus on referral expansion, physician liaison development, digital visibility, and operational alignment—ensuring independent practices can compete effectively against larger, corporate-backed organizations.
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
