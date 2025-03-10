import React from 'react';

const Features = () => {
  return (
    <section className="features-section animate__animated animate__fadeInUp animate__slow">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="feature-grids clearfix">
              
              {/* Feature #1: Business to Business */}
              <div className="grid">
                {/*<div className="icon">
                  <i className="fi flaticon-stats"></i>
                </div>*/}
                <h3>Website Development and Online Presence</h3>
                <p>
                  Establish a strong online presence with a professionally designed website. 
                  Optimize patient acquisition, streamline appointment scheduling, and showcase 
                  your services effectively.
                </p>
              </div>

              {/* Feature #2: Market Research */}
              <div className="grid">
                {/*<div className="icon">
                  <i className="fi flaticon-start"></i>

                </div>*/}
                <h3>B2B Medical Sales</h3>
                <p>
                  Strengthen partnerships with healthcare providers and medical offices. 
                  Our data-driven approach helps identify key decision-makers and expand 
                  your client base with strategic outreach.
                </p>
              </div>

              {/* Feature #3: Social Media */}
              <div className="grid">
                {/*<div className="icon">
                <i className="fi flaticon-diamond"></i>
                </div>*/}
                <h3>Branding and Rebranding</h3>
                <p>
                  Strengthen your medical office or law practice reputation with a cohesive brand identity. 
                  Whether you're launching a new practice or refreshing an existing one, our tailored 
                  branding strategies ensure that your message resonates with patients and healthcare professionals alike.
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
