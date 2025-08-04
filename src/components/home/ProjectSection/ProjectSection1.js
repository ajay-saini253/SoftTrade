
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import mobileImg from "../../../images/Mobile Screens.png";
import webImg from "../../../images/Group 5357.png";
import desktopImg from "../../../images/Group 457.png";

const ProjectSection1 = () => {
  return (
    <>
      <section className="py-5 text-center bg-black">
        <div className="container">
          <h2 className="fw-bold text-white mb-5">
            Cloud ERP for Seamless Business Operations
          </h2>
          <div className="row">
            {/* Mobile ERP */}
            <div className="col-lg-4 p-0">
              <div className="p-4 h-100  shadow-sm bg-white">
                <h5 className="fw-bold text-black mb-3">Mobile ERP Apps</h5>
                <p className="text-black">
                  Our mobile apps empower delivery teams and field staff with features.
                </p>
                <img src={mobileImg} alt="Mobile ERP" className="img-fluid mt-3" />
              </div>
            </div>

            {/* Web ERP */}
            <div className="col-lg-4 p-0">
              <div className="p-4 h-100  shadow-sm text-white" style={{ backgroundColor: "#2962FF" }}>
                <h5 className="fw-bold mb-3 text-white">Web-Based ERP</h5>
                <p>
                  Access your ERP anywhere with just a browser. From billing, inventory, to GST-compliant accounting.
                </p>
                <img src={webImg} alt="Web ERP" id="ajay-img" className="img-fluid mt-3" />
              </div>
            </div>

            {/* Desktop ERP */}
            <div className="col-lg-4 p-0">
              <div className="p-4 h-100  shadow-sm text-white" style={{ backgroundColor: "#000" }}>
                <h5 className="fw-bold text-white mb-3">Desktop ERP</h5>
                <p>
                  SoftTrade offers powerful desktop ERP solutions for smoother operations.
                </p>
                <img src={desktopImg} alt="Desktop ERP" className="img-fluid mt-3" />
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
}

export default ProjectSection1;