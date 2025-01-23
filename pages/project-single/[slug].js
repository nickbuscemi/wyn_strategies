import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Projects from '../../api/project'; // <-- Import your expanded Projects data
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.png';
import Image from 'next/image';

const ProjectSinglePage = () => {
  const router = useRouter();
  
  // Find the project data by matching slug from the query
  const projectDetails = Projects.find(
    (item) => item.slug === router.query.slug
  );

  // pointers for next and previous projects
  // Current project index
  const currentIndex = Projects.findIndex(
    (item) => item.slug === router.query.slug
  );
  
  // If the current project is not found, handle gracefully (e.g., show a 404 or redirect)
  if (currentIndex === -1) {
    return <h2>Project not found</h2>;
  }
  
  // Optional: if you want to “wrap around” the project list, you can do something like:
  //   prevIndex = (currentIndex + Projects.length - 1) % Projects.length
  //   nextIndex = (currentIndex + 1) % Projects.length
  // Otherwise, use standard “one step back/forward” with boundary checks.
  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  
  // Derive project objects for previous and next
  const prevProject =
    prevIndex >= 0 ? Projects[prevIndex] : null;
  
  const nextProject =
    nextIndex < Projects.length ? Projects[nextIndex] : null;
  

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Accordion state
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Fragment>
      <Navbar hclass={'header-style-3'} Logo={Logo} />
      {/* Page Title */}
      <PageTitle pageTitle={projectDetails?.title} pagesub={'Project'} />

      <section className="project-sigle-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="project-single-content">
                {/* Project Image */}
                <div className="img-holder">
                  {/* Use optional chaining to avoid errors if projectDetails is undefined */}
                  {projectDetails?.pImg && (
                    <Image src={projectDetails?.pImg} alt={projectDetails?.title} />
                  )}
                </div>

                {/* Content Area */}
                <div className="content-area">
                  {/* Project Info */}
                  <div className="project-info">
                    <ul>
                      <li>
                        <span>Client:</span> {projectDetails?.client || 'N/A'}
                      </li>
                      <li>
                        <span>Location:</span> {projectDetails?.location || 'N/A'}
                      </li>
                      <li>
                        <span>Status:</span> {projectDetails?.status || 'N/A'}
                      </li>
                      <li>
                        <span>Duration:</span> {projectDetails?.duration || 'N/A'}
                      </li>
                      <li>
                        <span>Tags:</span>{' '}
                        {projectDetails?.tags ? projectDetails.tags.join(', ') : 'N/A'}
                      </li>
                    </ul>
                  </div>

                  {/* Title and Description */}
                  <h2>{projectDetails?.title}</h2>
                  <p>{projectDetails?.description}</p>

                  {/* Challenge & Solution Accordions */}
                  <div className="challange-solution-section">
                    <div className="theme-accordion-s1">
                      <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                      >
                        <AccordionSummary
                          expandIcon={''}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography>The Challenge Was</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <p>{projectDetails?.challenge}</p>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                      >
                        <AccordionSummary
                          expandIcon={''}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography>Our Solutions</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <p>{projectDetails?.solution}</p>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>

                  <div className="prev-next-project">
                  {/* Previous Project Link */}
                  <div>
                    {prevProject && (
                    <Link onClick={ClickHandler} href={`/project-single/${prevProject.slug}`}>
                        <div className="icon">
                        <i className="fi flaticon-back"></i>
                        </div>
                        <span>Previous project</span>
                        <h5>{prevProject.title}</h5>
                    </Link>
                    )}
                  </div>

                    {/* Next Project Link */}
                    <div>
                        {nextProject && (
                        <Link onClick={ClickHandler} href={`/project-single/${nextProject.slug}`}>
                            <div className="icon">
                            <i className="fi flaticon-next"></i>
                            </div>
                            <span>Next project</span>
                            <h5>{nextProject.title}</h5>
                        </Link>
                        )}
                    </div>
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
  );
};

export default ProjectSinglePage;
