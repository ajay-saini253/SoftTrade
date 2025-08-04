import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

import hImg1 from "../../../images/hero/ONDC.png";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

//const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const InvestmentSection = () => {
  return (
    <section
      className="investment-section hero-style-four position-relative pt-10 pb-25"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="container py-5">

        {/* Heading */}
        <Fade direction="up" triggerOnce={false} duration={1000}>
          <div className="text-center mb-4">
            <h2 className="section-title">
              Start your online business with the least investment <br />
              and reach the largest possible consumer base
            </h2>
          </div>
        </Fade>

        <div className="hero-content-wrapper">
          <div className="row align-items-center mt-4">
            {/* Left Column: Image */}
            <div className="col-xl-6 col-lg-6 mb-4 mb-lg-0">
              <Fade direction="left" triggerOnce={false} duration={1000}>
                <div className="hero-image-container position-relative">
                  <img
                    className="img-fluid rounded-4 fadeInLeft"
                    src={hImg1}
                    alt="ONDC Partnership Banner"
                    data-duration=".7s"
                  />
                </div>
              </Fade>
            </div>

            {/* Right Column: Text Content */}
            <div className="col-xl-6 col-lg-6 d-flex justify-content-center pt-4 pt-lg-0">
              <div className="content-box px-4">
                <Fade direction="up" triggerOnce={false} duration={1000}>
                  <div className="mb-4">
                    <h3 className="content-title mb-3">
                      Partner with Us – Grow with Innovation
                    </h3>
                    <p className="content-description lh-base text-justify mb-3">
                      Are you looking to expand your business with cutting-edge software solutions? We invite you to partner with us in marketing our industry-leading software products.
                    </p>

                    <h5 className="mb-2">Who Can Partner ?</h5>
                    <ul className="partner-list ps-3">
                      <li>IT consultants & service providers</li>
                      <li>Accounting & business professionals</li>
                      <li>Freelancers & digital marketers</li>
                      <li>Software resellers</li>
                      <li>Business influencers</li>
                    </ul>
                  </div>
                </Fade>

                <Fade
                  direction="up"
                  triggerOnce={false}
                  duration={1400}
                  delay={9}
                >

                  <div className="d-flex ps-lg-3 justify-content-evenly gradient-buttons-wrapper">
                    <div
                      className="xb-btn wow fadeInUp"
                      data-wow-delay="450ms"
                      data-wow-duration="600ms"
                    >
                      <div className="  pos-rel ">
                        <div className="xb-btn ">
                          <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops "> Join Us </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="xb-btn wow fadeInUp"
                      data-wow-delay="450ms"
                      data-wow-duration="600ms"
                    >
                      <div className="  pos-rel ">
                        <div className="xb-btn ">
                          <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops ">Learn More</Link>
                        </div>
                      </div>


                    </div>
                  </div>
                </Fade>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
