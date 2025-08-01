import React from "react";
// import { Fade } from "react-awesome-reveal";
// import icon from '../../../images/icon/magic-black.svg'
import icon1 from '../../../images/hero/home_contact.png'
// import icon2 from '../../../images/feature/img01.png'
import cta2 from '../../../images/pastWork/weberp_bg.webp'

const CustomizeContactSection = (props) => {


    return (
        <section className="feature pb-50 pt-50"
         style={{
      backgroundImage: `url(${cta2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
        >
            <div className="ContactSection-container">
                <div className="feature-wrap">
                    <div className="row align-items-center mt-none-30">
                        <div className="col-lg-12 mt-30">
                            <div className="feature-left-item pos-rel">
                                <div className="xb-img updown-2"><img src={icon1} alt="" /></div>
                                {/* <div className="xb-img-two"><img className="updown-2" src={icon2} alt="" /></div> */}
                            </div>
                        </div>
                        {/* <div className="col-lg-6 mt-30">
                            <div className="feature-right-item mt-30">
                                <div className="sec-title--two sec-title--four mb-40">
                                  
                                    <Fade direction='down' triggerOnce={'false'} duration={1500} delay={9}>
                                        <div>
                                            <h2 className="title mb-15 wow skewIn" data-wow-duration="600ms">Maximize your ROI</h2>
                                        </div>
                                    </Fade>
                                    <p>Save time and money with Innomax. According to Forrester's our Total Economic Impact™ (TEI) study, customers saw a 286% ROI over three years.</p>
                                </div>
                              
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomizeContactSection;