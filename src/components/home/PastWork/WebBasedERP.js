import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

import cta1 from '../../../images/pastWork/webbaseerp.png';
import cta2 from '../../../images/pastWork/key-benefits.webp';
import cta3 from '../../../images/pastWork/key-benefits-mobile.webp';

import logo from '../../../images/pastWork/png logo.png';
import icon1 from '../../../images/icon/check-mark.png';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WebBaseERP = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const swiperRef = useRef(null);

  return (

    <section className="cta pos-rel z-1 pt-60 pb-60 o-hidden">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-lg-12">
            <div className="cta-sec-title text-center">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={9}>
                <div>
                  <img src={logo} alt="logo_image" width={250} />
                </div>
              </Fade>
              <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
                <div className="my-3">
                  <h2 className="title webbaseerp_heading">
                    SoftTrade ERP – <span className="yllow_txt">Web Based ERP System </span>For Every Business Size
                  </h2>
                </div>
              </Fade>
            </div>
          </div>
          <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
            <div className="col-lg-12 my-2">
              <p className="text-center text-secondary">
                SoftTrade ERP is a powerful, cloud-based ERP solution accessible through a single web link—no installations, no hassle. Designed to support small, mid-size, and large-scale businesses.From billing and inventory management to accounting and GST compliance, SoftTrade ERP takes care of it all—so you can focus on growing your business.
              </p>
            </div>
          </Fade>


          <div
            className="webbaseerp position-relative mt-20 desktop_device_weberp"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 15000 }}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              <SwiperSlide>
                <img src={cta1} alt="Slide 1" className="webbaseerp-slider-image" />
              </SwiperSlide>

              <SwiperSlide>
                <div className="row desktop-benifits justify-content-center">
                  <div className="col-lg-3">
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt desktop-benifits-heading">Data Security</h5>
                      <ul>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Focus  on the protection of data</li>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Free from unauthorized access and corruption </li>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Can  be installed on clients own server locally</li>
                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt desktop-benifits-heading">Audit ready Reports</h5>
                      <ul>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Support for Charted Accountants</li>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> All customizations, reports and documents for CA’s for proper support and other taxation work .</li>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Maintain clean , Transparent records that are always ready to support audit</li>
                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt desktop-benifits-heading">Cost Effective</h5>
                      <ul>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Saves the cost at many stages</li>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Helps in lowering down manpower requirements</li>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Reduces overhead costs, increases productivity and the</li>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Provide flexibility to adapt to changing business requirements.</li>

                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start">
                      <h5 className=" text-capitalize py-2 yllow_txt desktop-benifits-heading">Upload Softcopies</h5>
                      <ul>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Attach bills, Reciept, other documents to each transaction for better record keeping</li>
                        <li className="text-black"><img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Supports various file formats such as PDF, DOCX, JPEG, and PNG, for users.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-5 d-flex flex-column  justify-content-center align-items-center">
                    <img src={cta2} alt="Slide 2" className="webbaseerp-slider-image" />
                    <div className="erp-benefits-cards text-start  mx-5">
                      <h5 className=" text-capitalize py-2 yllow_txt desktop-benifits-heading">Multi company/ accounts and  Multi Branch and location support</h5>
                      <ul>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Provides centralised control access of different branch and locations</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Manage the accounts of multiple companies from single Dashboard</li>
                      </ul>
                    </div>

                  </div>

                  <div className="col-lg-3">
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt desktop-benifits-heading">Seperate user account and permissions</h5>
                      <ul>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Role based access control is provided for admin, accountant, staff to limit access to only necessary modules and data.</li>
                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt desktop-benifits-heading">Audit Trail</h5>
                      <ul>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Track every change and action within the software for better transparency and compliance</li>
                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt desktop-benifits-heading">Adhoc Features</h5>
                      <ul>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Automated E invoice , E way bill</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Automated TDS,TCS deductions</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> GST/ Income tax returns</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Customisable dashboard</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Automated Whatsapp Integration</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Automated Email integration</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Broker / Customer Login System</li>


                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start">
                      <h5 className=" text-capitalize py-2 yllow_txt desktop-benifits-heading">MIS Features</h5>
                      <ul>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Advanced outstanding follow up system.</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Profit Calculation at any period during year</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Customer credit limit system</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Combined accounts of multiple companies</li>
                        <li className="text-black"> <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Sales/Purchase analysis for any type of comparison eg monthwise, itemwise, brokerwise and others</li>

                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="custom-swiper-button-prev"><i className="fa fa-chevron-left"></i></div>
            <div className="custom-swiper-button-next"><i className="fa fa-chevron-right"></i></div>

          </div>


          {/* mobile web erp */}
          <div className="webbaseerp position-relative mt-5 mobile_device_webbase_erp">

            <img src={cta1} alt="Slide 1" className="webbaseerp-slider-image" />



            <div className="swiper-wrapper-container position-relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 15000 }}
                navigation={{
                  nextEl: ".custom-swiper-button-next1",
                  prevEl: ".custom-swiper-button-prev1",
                }}
                //   pagination={{ clickable: true }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  600: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                }}
                className="mb-4"
              >
                <SwiperSlide>
                  <div className="erp-benefits-cards text-start p-3 shadow rounded  erp-benefits-cards-mobile">
                    <h5 className="text-capitalize py-2 yllow_txt">Data Security</h5>
                    <ul>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Focus  on the protection of data
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Free from unauthorized access and corruption.
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Can  be installed on clients own server locally
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
                    <h5 className="text-capitalize py-2 yllow_txt">Audit ready Reports</h5>
                    <ul>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Support for Charted Accountants
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> All customizations, reports and documents for CA’s for proper support and other taxation work .
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Maintain clean , Transparent records that are always ready to support audit
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
                    <h5 className="text-capitalize py-2 yllow_txt">Cost Effective</h5>
                    <ul>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Helps in lowering down manpower requirements.
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Reduces overhead costs, increases productivity and the
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Provide flexibility to adapt to changing business requirements.
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
                    <h5 className="text-capitalize py-2 yllow_txt">Upload Softcopies</h5>
                    <ul>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Attach bills, Reciept, other documents to each transaction for better record keeping
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Supports various file formats such as PDF, DOCX, JPEG, and PNG, for users.
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
                    <h5 className="text-capitalize py-2 yllow_txt">Multi company/ accounts and  Multi Branch and location support</h5>
                    <ul>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Provides centralised control access of different branch and locations
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Manage the accounts of multiple companies from single Dashboard
                      </li>

                    </ul>
                  </div>
                </SwiperSlide>

              </Swiper>


              <div className="custom-swiper-button-prev1 custom-swiper-btn mobile-device">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div className="custom-swiper-button-next1 custom-swiper-btn mobile-device">
                <i className="fa fa-chevron-right"></i>
              </div>
            </div>


            <div className="text-center my-4">
              <img src={cta3} alt="ERP Banner" className="img-fluid" />
            </div>


            <div className="swiper-wrapper-container position-relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 15000 }}
                navigation={{
                  nextEl: ".custom-swiper-button-next2",
                  prevEl: ".custom-swiper-button-prev2",
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  600: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                }}
                className="mb-4"
              >
                <SwiperSlide>
                  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
                    <h5 className="text-capitalize py-2 yllow_txt">MIS Features</h5>
                    <ul>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Advanced outstanding follow up system.
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Profit Calculation at any period during year.
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Customer credit limit system.
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Combined accounts of multiple companies.
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Sales/Purchase analysis for any type of comparison eg monthwise, itemwise, brokerwise and others.
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
                    <h5 className="text-capitalize py-2 yllow_txt">Seperate user account and permissions</h5>
                    <ul>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Role based access control is provided for admin, accountant, staff to limit access to only necessary modules and data.
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
                    <h5 className="text-capitalize py-2 yllow_txt">Audit Trail</h5>
                    <ul>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Track every change and action within the software for better transparency and compliance
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
                    <h5 className="text-capitalize py-2 yllow_txt">Adhoc Features</h5>
                    <ul>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Automated E invoice , E way bill
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" /> Automated TDS,TCS deduction
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />GST/ Income tax returns
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Customisable dashboard
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Automated Whatsapp Integration
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Automated Email integrations
                      </li>
                      <li className="text-black">
                        <img src={icon1} alt="check" className="erp-benefits-cards-img me-2" />Broker / Customer Login System
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

              </Swiper>


              <div className="custom-swiper-button-prev2 custom-swiper-btn mobile-device">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div className="custom-swiper-button-next2 custom-swiper-btn mobile-device">
                <i className="fa fa-chevron-right"></i>
              </div>
            </div>
          </div>



          {/* mobile web erp end */}

          <div className="mt-4 col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="xb-btn">
              <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebBaseERP;
