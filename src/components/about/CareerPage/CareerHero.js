import React from 'react';
import { Fade } from "react-awesome-reveal";
import bImg1 from '../../../images/hero/contact-img.png';
import bImg2 from '../../../images/shape/brd_shape.png';
import Bg from '../../../images/bg/page_bg01.jpg'


const CareerHero = () => {
    return (
        <section className="page-title  pt-70 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="page-title-wrap sd-title-wrap">
                    <div className="row mt-none-30 align-items-center">
                        <div className="col-lg-7 order-2 order-lg-1">
                            <div className="page-title-box text-center">
                                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <h5 className="title py-3 pb-lg-3 wow fadeInUp " data-wow-duration="600ms">Find the career of your choice</h5>
                                </Fade>

                                <div>
                                    <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                        <span className="wow fadeInUp text-justify" data-wow-duration="600ms">
                                            We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that's satisfying - one where you'll look forward to coming to every day. Start your journey with us by browsing available jobs.
                                        </span>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-30 order-1 order-lg-2">
                            <div className="sd-right-img pos-rel">
                                <Fade direction='right' triggerOnce={'false'} duration={1200} delay={9}>
                                    <img className="wow fadeInRight rounded-5" data-wow-duration="600ms" src={bImg1} alt="" />
                                </Fade>

                                <div className="sd-arrow-shape style-3">
                                    <Fade direction='right' triggerOnce={'false'} duration={1500} delay={9}>
                                        <img className=" wow fadeInRight rounded-5 xbzoominzoomup" data-wow-duration="600ms" src={bImg2} alt="" />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CareerHero;