import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from "../../../images/partner/icons/1.png";
import pimg2 from "../../../images/partner/icons/2.png";
import pimg3 from "../../../images/partner/icons/3.png";
import pimg4 from "../../../images/partner/icons/4.png";
import pimg5 from "../../../images/partner/icons/5.png";
import pimg6 from "../../../images/partner/icons/6.png";
import pimg7 from "../../../images/partner/icons/7.png";
import pimg8 from "../../../images/partner/icons/8.png";
import pimg9 from "../../../images/partner/icons/9.png";
import pimg10 from "../../../images/partner/icons/10.png";
import pimg11 from "../../../images/partner/icons/11.png";
import pimg12 from "../../../images/partner/icons/12.png";
import pimg13 from "../../../images/partner/icons/13.png";
import pimg14 from "../../../images/partner/icons/14.png";
import pimg15 from "../../../images/partner/icons/15.png";
import pimg16 from "../../../images/partner/icons/16.png";
import pimg17 from "../../../images/partner/icons/17.png";
import pimg18 from "../../../images/partner/icons/18.png";
import pimg19 from "../../../images/partner/icons/19.png";
import pimg20 from "../../../images/partner/icons/20.png";
import pimg21 from "../../../images/partner/icons/anand.jpg";
import pimg22 from "../../../images/partner/icons/clientlogo_tadkeshwar.jpg";
import pimg23 from "../../../images/partner/icons/hindustan.png";
import pimg24 from "../../../images/partner/icons/kfc.jpg";
import pimg25 from "../../../images/partner/icons/Logo Kedawat.png";
import pimg26 from "../../../images/partner/icons/marudhar.jpg";
import pimg27 from "../../../images/partner/icons/MahaveerLogo.png";
import pimg28 from "../../../images/partner/icons/prakash.jpeg";
import pimg29 from "../../../images/partner/icons/ratilal.jpg";
import pimg30 from "../../../images/partner/icons/soham.jpg";
import pimg31 from "../../../images/partner/icons/whitelion.png";


 const partners = [
  { pImg: pimg1, name: "Dangayach Products – Bassi, Jaipur" },
  { pImg: pimg2, name: "Mangal & Associates – Hisar" },
  { pImg: pimg3, name: "Ramesh Canvassing Co. – Indore" },
  { pImg: pimg4, name: "Birdhi Chand Chiranjilal – Jaipur" },
  { pImg: pimg5, name: "Chhitarmal Bhuramal Traders Pvt Ltd – Jaipur" },
  { pImg: pimg6, name: "RARA – Jaipur" },
  { pImg: pimg7, name: "Dalal Ratilal & Sons – Rajkot, Indore, Vapi" },
  { pImg: pimg8, name: "Meghraj Ramkisan – Nashik" },
  { pImg: pimg9, name: "Dalal Bherulal Prahladray Maheshwari – Indore" },
  { pImg: pimg10, name: "Yash Raj Films – Jaipur" },
  { pImg: pimg11, name: "NVR – Hyderabad" },
  { pImg: pimg12, name: "Sonam Trading Company (Canvassing Agent)" },
  { pImg: pimg13, name: "Pinkcity Group (PCG) – Since 1980, Jaipur" },
  { pImg: pimg14, name: "Tirupati Canvassing Agent – Since 1987, Jalna, MH" },
  { pImg: pimg15, name: "B.M Canvassing" },
   { pImg: pimg16, name: "BS Jain & Co. – Coimbatore" },
  { pImg: pimg17, name: "Adinath Brokers (Canvassing Agent) – Aurangabad" },
  { pImg: pimg18, name: "Raphelite – Jaipur" },
  { pImg: pimg19, name: "Chhaju Ram & Co. (CRCQ) – Ludhiana (Since 1971)" },
  { pImg: pimg20, name: "R. Chunnilal & Co. – Surat" },
  { pImg: pimg21, name: "Anand Pandit – Motion Pictures" },
  { pImg: pimg22, name: "Tadkeshwar Agro Food Product" },
  { pImg: pimg23, name: "Hindustan Wheat Brokers – Coimbatore" },
  { pImg: pimg24, name: "KFC Entertainment" },
  { pImg: pimg25, name: "Kedawat Refoils" },
  { pImg: pimg26, name: "Pen Marudhar Cine Entertainment" },
  { pImg: pimg27, name: "MKS – Mahaveer Kirana Store" },
  { pImg: pimg28, name: "Prakash Films (PF)" },
  { pImg: pimg29, name: "R. Sons Group – Since 1989" },
  { pImg: pimg30, name: "Soham Rock Star Entertainment" },
  { pImg: pimg31, name: "Whitelion" }
];


const baseSliderSettings = {
  dots: false,
  infinite: true,
  speed: 2000,
 slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  responsive: [
    { breakpoint: 1025, settings: { slidesToShow: 5, slidesToScroll: 1 } },
    { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 450, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};


const PartnerSection = () => {
  return (
    <section className="brand pt-50 pb-50" style={{ background: "#f9f9f9" }}>
      <div className="container">
        <div className="o-hidden">
          <div className="text-center">
            <h2 className="py-3">Trusted by valuable brands</h2>
            <p className="text-black pb-5">
              More than <strong>3000+ clients</strong> have entrusted us for their <strong>Digital Transformation</strong>
            </p>
          </div>

          {/* First Slider - Left to Right */}
          <div className="brand-wrap brand-marquee mx-3">
            <Slider {...baseSliderSettings}>
              {partners.map((partner, index) => (
                <div className="brand-logo text-center" key={index}>
                  <img src={partner.pImg} className="" alt={`Client ${index}`}  style={{ display: "inline-block", height:"120px" ,width:"auto" }} />
                  <p className="pt-2 text-black partner-brand-name">{partner.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
