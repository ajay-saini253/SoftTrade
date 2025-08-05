import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import icon1 from '../../../images/valuesIcon/success.png';
import icon2 from '../../../images/valuesIcon/cloud.png';
import icon3 from '../../../images/valuesIcon/technical-support.png';
import icon4 from '../../../images/valuesIcon/customization.png';
import icon5 from '../../../images/valuesIcon/experience.png';
import icon6 from '../../../images/valuesIcon/workshop.png';




const featuresTop = [
  {
    icon: icon1,
    title: "30 days free trial",
    content: "Experience the full power of our software — absolutely FREE for 30 days! Explore all premium features."
  },
  {
    icon: icon2,
    title: "Cloud Ready",
    content: "Access your business anytime, anywhere — securely in the cloud. Our cloud version is designed to give you flexibility, speed, and complete control without the hassle of installations or manual updates."
  },
  {
    icon: icon3,
    title: "Guaranteed Support",
    content: "Our dedicated support team ensures you get the help you need — when you need it. From onboarding to daily operations, we guarantee prompt, professional, and personalized assistance."
  },
  {
    icon: icon4,
    title: "No Technical Training Needed — It’s That Simple!",
    content: "Our software is designed for everyone — no IT background required. With simple interface and user-friendly design, you can get started right away without any technical training."
  },
  {
    icon: icon5,
    title: "25 Years Experience",
    content: "With 25 years of industry experience, we bring unmatched reliability, deep domain knowledge, and a proven track record of delivering powerful, user-friendly software solutions with long-term client relationships."
  },
  {
    icon: icon6,
    title: "Tailored to Fit Your Business – Full Customization Available",
    content: "Because no two businesses are the same. Our software is fully customizable to match your specific workflows, processes, and business needs — giving you complete control and flexibility."
  }

];


const FeatureItem = ({ icon, title, content }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 d-flex  align-items-center justify-content-evenly pb-4 pb-lg-3 " id="valueSections">
    <div className="hd-feature-item d-flex align-items-center">
      <div className='col-3 text-center'>
        <img src={icon} alt={title} width={80} />
      </div>
      <div className='col-9 px-3 pb-2'>
        <h3 className="xb-item--title my-2">{title}</h3>
        <p className=" text-justify values-content">{content}</p>
      </div>
    </div>
  </div>
);

const ValuesSection = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (

    <section className=" ValuesSection feature pt-50 pb-50 " style={{ background: "#f9f9f9" }} >
      <div className="container">
        <div className="">
          <div className="sec-title--two sec-title--four text-center mb-25">
            <Fade direction="down" triggerOnce={false} duration={1700}>
              <h2 className="title"> Why to choose us?</h2>
            </Fade>
          </div>


          <div className="row d-flex  align-items-center justify-content-evenly  ">
            {featuresTop.map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </div>

          <div className="xb-img highlight-button mt-5 text-center">
            <Link onClick={ClickHandler} to="/contact" className="highlight-button1">
              Easiest Available Solutions
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
