import React from 'react';
import { Fade } from "react-awesome-reveal";
import icon1 from '../../../images/icon/check-mark.png';
import hImg1 from '../../../images/pastWork/softTrade_img.png';

const CustomERP = () => {
    return (
        <section className="hero hero-style-four pos-rel pt-50 pb-50" style={{ background: 'rgba(47, 94, 188, 0.05)' }}>
            <div className="container">
                <div className="hero_wrap">
                    <div className="row align-items-center">
                         <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
                                    <div className=''>
                                        <h2 className="title wow fadeInUp webbaseerp_heading fs-3 text-center" data-wow-duration="600ms">
                                            Dedicated Customer <span className="yllow_txt">Support – </span> We're Here for You
                                        </h2>
                                    </div>
                                </Fade>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1'>
                            <div className="cta-sec-title">
                               

                                <Fade direction='up' triggerOnce={false} duration={1400} delay={9}>
                                    <div className='my-2'>
                                        <p className='text-justify text-secondary fs-6'>
                                            At SoftTrade, we believe great software is only as good as the support behind it. That’s why we offer reliable, fast, and expert customer support to help you every step of the way.
                                        </p>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={false} duration={1800} delay={9}>
                                    <h3 className="text-black fs-5">What You Can Expect :</h3>
                                    <ul className="list-unstyled mt-3">
                                        <li className="d-flex align-items-start mb-2">
                                            <img src={icon1} alt="check" width={16} className="me-2" />
                                            <div  >
                                                <h5 className="text-black mb-1 d-inline-block support-list-heading">Guaranteed Assistance :- </h5>
                                                <span className="text-gray mb-0 support-list-span">
                                                    &nbsp; We stand by our commitment to resolve your issues quickly and efficiently – with guaranteed response times.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start mb-2">
                                            <img src={icon1} alt="check" width={16} className="me-2" />
                                            <div  >
                                                <h5 className="text-black mb-1 d-inline-block support-list-heading">Multiple Support Channels :- </h5>
                                                <span className="text-gray mb-0 support-list-span">
                                                    &nbsp; Reach us via Phone, WhatsApp, Remote Desktop, or Chat – whichever suits you best.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start mb-2">
                                            <img src={icon1} alt="check" width={16} className="me-2" />
                                            <div  >
                                                <h5 className="text-black mb-1 d-inline-block support-list-heading">Expert Technical Team :- </h5>
                                                <span className="text-gray mb-0 support-list-span">
                                                    &nbsp; Our trained and experienced support staff are ready to assist with setup, troubleshooting, customization, and training.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start mb-2">
                                            <img src={icon1} alt="check" width={16} className="me-2" />
                                            <div  >
                                                <h5 className="text-black mb-1 d-inline-block support-list-heading">Real-Time Remote Support :- </h5>
                                                <span className="text-gray mb-0 support-list-span">
                                                    &nbsp; Get real-time help through remote desktop tools to resolve issues without waiting. We don't prefer ticketing system.
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>

                        <div className=" col-lg-6 mt-sm-3 order-1 order-lg-2">
                            <div className="hero-right_img pos-rel">
                                <div className="hero-right-image">
                                    <Fade direction='up' triggerOnce={false} duration={900} delay={2}>
                                        <div>
                                            <img src={hImg1} alt="ERP dashboard preview" />
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomERP;


