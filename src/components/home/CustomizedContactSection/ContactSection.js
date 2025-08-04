import React from "react";
import icon1 from '../../../images/hero/home_contact.png'
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomizeContactSection;