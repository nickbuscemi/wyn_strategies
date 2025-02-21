import React from 'react';

const WorkProcess = () => {
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

              {/* Step 1 */}
              <div className="grid">
                
                <h3>Discovery & Analysis</h3>
                <p>
                  We begin by analyzing your brand, competition, 
                  and target audience—identifying key challenges 
                  and opportunities for growth.
                </p>
              </div>

              {/* Step 2 */}
              <div className="grid">
                
                <h3>Strategy & Planning</h3>
                <p>
                  Guided by our findings, we craft a strategic roadmap 
                  tailored to your objectives, ensuring your core 
                  message resonates.
                </p>
              </div>

              {/* Step 3 */}
              <div className="grid">
                
                <h3>Execution & Measurement</h3>
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
