import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const ProcessStep = ({ title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`grid animate__animated ${
        inView ? 'animate__fadeInLeft' : 'opacity-0'
      }`}
      style={{
        animationDelay: inView ? `${delay}s` : '0s',
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const WorkProcess = () => {
  const steps = [
    {
      title: 'Discovery & Analysis',
      description:
        'We begin by analyzing your brand, competition, and target audience—identifying key challenges and opportunities for growth.',
    },
    {
      title: 'Strategy & Planning',
      description:
        'Guided by our findings, we craft a strategic roadmap tailored to your objectives, ensuring your core message resonates.',
    },
    {
      title: 'Execution & Measurement',
      description:
        'Our expert team implements the plan, tracks performance, and refines tactics to drive sustainable, long-term success.',
    },
  ];

  return (
    <section className="work-process-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="section-title">
              <h2>The Process</h2>
              <h3>
                We combine data-driven insights, collaborative planning, and
                hands-on execution to deliver real results for your practice.
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="work-process-grids clearfix">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  title={step.title}
                  description={step.description}
                  delay={index * 0.7} // Stagger effect
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
