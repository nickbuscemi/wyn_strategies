import React from 'react';

const WorkProcess = () => {
  return (
    <section className="work-process-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="section-title">
              <span>Our Work Process</span>
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

              {/* Step 1 */}
              <div className="grid">
                <div className="icon">
                  <i className="fi flaticon-idea"></i>
                </div>
                <h3>01. Discovery & Analysis</h3>
                <p>
                  We begin by analyzing your brand, competition, 
                  and target audience—identifying key challenges 
                  and opportunities for growth.
                </p>
              </div>

              {/* Step 2 */}
              <div className="grid">
                <div className="icon">
                  <i className="fi flaticon-diamond"></i>
                </div>
                <h3>02. Strategy & Planning</h3>
                <p>
                  Guided by our findings, we craft a strategic roadmap 
                  tailored to your objectives, ensuring your core 
                  message resonates.
                </p>
              </div>

              {/* Step 3 */}
              <div className="grid">
                <div className="icon">
                  <i className="fi flaticon-sheriff"></i>
                </div>
                <h3>03. Execution & Measurement</h3>
                <p>
                  Our expert team implements the plan, tracks performance, 
                  and refines tactics to drive sustainable, long-term 
                  success.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
