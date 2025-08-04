import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";

import slide1 from "../../../images/hero/business-than.png";
import slide2 from "../../../images/hero/business-now.png";



const Hero = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }
  return (
    <>
      <section className="hero1-split hero1 py-5 text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="da-sec-titlte text-center mb-4">
                <Fade direction="up" triggerOnce={false} duration={1000}>
                  <h2 className="hero1_Heading">
                    All-in-one business solution for manufacturers, wholesalers, traders, and retailers.
                  </h2>
                  <h3 className="hero1_Heading1">Easy to start. Simple to run</h3>
                  {/* Easy to start and run */}
                  <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops ">
                    Start now - It's free </Link>
                </Fade>
              </div>
            </div>
          </div>

          <div className="hero1-slider-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide>
                <img src={slide1} alt="Business Then" className="hero1-slider-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt="Business Now" className="hero1-slider-image" />
              </SwiperSlide>
            </Swiper>
          </div>
          hello
        </div>
      </section>
    </>
  );
};

export default Hero;
