import React from 'react';
import CountUp from 'react-countup';

const Trusted = () => {
  return (
    <section className="trusted-customer-section py-2">
      <div className="container trustrd-customer-container py-4 px-5">
        <h2 className="trusted-customer-heading text-center">
          Pillar for <span className="yllow_txt">thousands of users</span> across the globe.
        </h2>

        <div className="row trusted-customer-box text-center">
          <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item1">
            <h3 className="trusted-customer-number">
              <CountUp start={2900} end={3000} duration={2} enableScrollSpy suffix="+" />
            </h3>
            <p className="trusted-customer-label">Customer</p>
          </div>

          <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item2">
            <h3 className="trusted-customer-number">
              <CountUp end={250} duration={2} enableScrollSpy suffix="+" />
            </h3>
            <p className="trusted-customer-label">Cities Covered</p>
          </div>

          <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item3">
            <h3 className="trusted-customer-number">
              <CountUp end={10} duration={2} enableScrollSpy suffix=" lac +" />
            </h3>
            <p className="trusted-customer-label">Eway / E Invoice made per year</p>
          </div>

          <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item4">
            <h3 className="trusted-customer-number">
              <CountUp end={50} duration={2} enableScrollSpy suffix="+" />
            </h3>
            <p className="trusted-customer-label">Customized Application</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
