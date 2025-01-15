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
                <div className="icon">
                  {/* Icon from your services data for "Business to Business" */}
                  <i className="fi flaticon-start"></i>
                </div>
                <h3>Business to Business</h3>
                <p>
                  Beneath a well-planned strategy. A range of proven solutions 
                  paves the path for unstoppable growth.
                </p>
              </div>

              {/* Feature #2: Market Research */}
              <div className="grid">
                <div className="icon">
                  {/* Keeping the diamond icon from your original snippet */}
                  <i className="fi flaticon-diamond"></i>
                </div>
                <h3>Market Research</h3>
                <p>
                  Driven by in-depth demographic insights. Our data-backed 
                  approach unlocks new market potential.
                </p>
              </div>

              {/* Feature #3: Social Media */}
              <div className="grid">
                <div className="icon">
                  {/* Icon for "Social Media" in your services data is flaticon-stats */}
                  <i className="fi flaticon-stats"></i>
                </div>
                <h3>Social Media</h3>
                <p>
                  Amplify your presence through tailored content. A strategic 
                  plan fosters lively audience engagement.
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
