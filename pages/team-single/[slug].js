import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../../components/footer/Footer';
import Teams from '../../api/team';
import Logo from '/public/images/logo-2.png';
import Image from 'next/image';

const TeamSinglePage = () => {
    const router = useRouter();
    const TeamDetails = Teams.find(item => item.slug === router.query.slug);

    if (!TeamDetails) return <p>Loading...</p>;

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={TeamDetails.name} pagesub="team Single" bgImage={'/images/page-titles/team-single-title.png'}/>
            
            <section className="team-sigle-section section-padding">
                <div className="container">
                    <div className="row">
                        {/* Sidebar */}
                        <div className="col col-lg-4 col-12">
                            <div className="team-single-sidebar">
                                <div className="widget team-widget">
                                    <h3>Our teams</h3>
                                    <ul>
                                        {Teams.map((team) => (
                                            <li key={team.Id}>
                                                <Link onClick={ClickHandler} href={`/team-single/${team.slug}`}>
                                                    {team.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="col col-lg-6 col-12">
                            <div className="team-single-content">
                                <div className="team">
                                    <div className="img-holder">
                                        <Image src={TeamDetails.tImg} alt={TeamDetails.name} width={400} height={400} />
                                    </div>
                                    <div className="team-single-info">
                                        <div className="info">
                                            <h3>{TeamDetails.name}</h3>
                                            <span>{TeamDetails.title}</span>
                                            <ul>
                                                <li><i className="ti-mobile"></i><span>Phone: </span>{TeamDetails.phone}</li>
                                                <li><i className="ti-email"></i><span>Email: </span>{TeamDetails.email}</li>
                                            </ul>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><Link onClick={ClickHandler} href={TeamDetails.socialLinks.facebook}><i className="ti-facebook"></i></Link></li>
                                                <li><Link onClick={ClickHandler} href={TeamDetails.socialLinks.twitter}><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link onClick={ClickHandler} href={TeamDetails.socialLinks.linkedin}><i className="ti-linkedin"></i></Link></li>
                                                <li><Link onClick={ClickHandler} href={TeamDetails.socialLinks.instagram}><i className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                               
                                <div className="team-details">
                                    {/*<h2>About Me</h2>
                                    <p>{TeamDetails.about}</p>

                                    <h2>Experience</h2>
                                    <p>{TeamDetails.experienceDetails}</p>

                                    <h2>Education</h2>
                                    <p>{TeamDetails.education}</p>

                                    <h2>Achievements</h2>
                                    <ul>
                                        {TeamDetails.achievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>

                                    
                                    <h2>Skills</h2>
                                    <div className="skills">
                                        {TeamDetails.skills.map((skill, index) => (
                                            <div className="skill" key={index}>
                                                <h6>{skill.skill}</h6>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: skill.percentage }}>
                                                    </div>
                                                    <span>{skill.percentage}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>*/}

                                    {/* Contact Form */}
                                    {/*<h2>Contact Me</h2>
                                    <div className="contact-form">
                                        <form method="post" onSubmit={SubmitHandler}>
                                            <div>
                                                <input type="text" className="form-control" name="name" placeholder="Name*" />
                                            </div>
                                            <div>
                                                <input type="email" className="form-control" name="email" placeholder="Email*" />
                                            </div>
                                            <div className="fullwidth">
                                                <textarea className="form-control" name="note" placeholder="Case Description..."></textarea>
                                            </div>
                                            <div className="submit-area">
                                                <button type="submit" className="theme-btn">Submit</button>
                                            </div>
                                        </form>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default TeamSinglePage;
