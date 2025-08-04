import React, { useState, useEffect, useCallback } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import icon2 from '../../../images/icon/m_01.svg';
import icon3 from '../../../images/icon/m_02.svg';
import icon4 from '../../../images/icon/m_03.svg';
import icon5 from '../../../images/icon/m_04.svg';
import logo from '../../../images/logo/softtrade-infotech-pvt-ltd-ambab.webp';
import logo2 from '../../../images/logo/softtrade-infotech-pvt-ltd-ambab.webp';
import MobileMenu from '../MobileMenu/MobileMenu';

import aboutImg from '../../../images/header/About Us.png';
import customerImg from '../../../images/header/Customer Stories.png';
import awardsImg from '../../../images/header/Awards & Achievements.png';
import careerImg from '../../../images/header/Career & Job.png';

const Header = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [selectedAbout, setSelectedAbout] = useState('about');

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const clickHandler = () => window.scrollTo(10, 0);
  const submitHandler = (e) => e.preventDefault();

  const aboutMenuContent = {
    about: {
      title: 'About Us',
      heading: 'About SoftTrade',
      image: aboutImg,
      link: '/about',
    },
    customer: {
      title: 'Customer Stories',
      heading: 'Trusted by Customers',
      image: customerImg,
      link: '/customer-stories',
    },
    awards: {
      title: 'Awards & Achievements',
      heading: 'Recognized Excellence',
      image: awardsImg,
      link: '/awards',
    },
    career: {
      title: 'Career & Job',
      heading: 'Join Our Team',
      image: careerImg,
      link: '/career',
    },
  };
  return (
    <div id="xb-header-area" className="header-area header-style-two">
      <div className={`xb-header stricky ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
        <div className="container">
          <div className="header__wrap ul_li_between">
            <div className="header-logo">
              <Link onClick={clickHandler} to="/">
                <img src={logo} alt="SoftTrade Logo" width={150} style={{ borderRadius: '5px' }} />
              </Link>
            </div>

            <div className="main-menu__wrap ul_li navbar navbar-expand-xl" >
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li><Link onClick={clickHandler} to="/"><span>Home</span></Link></li>
                  <li><Link onClick={clickHandler} to="/"><span>Home</span></Link></li>
                  <li><Link onClick={clickHandler} to="/"><span>Home</span></Link></li>
                </ul>
                <ul>
                  <li><Link onClick={clickHandler} to="/"><span>Home</span></Link></li>


                  <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/about"><span>About Us</span></Link>
                    <ul className="submenu">
                      <li>
                        <div className="mega_menu_wrapper mega_menu_wrapper1">
                          <div className="mega_menu_wrapper_inner megamenu_widget_wrapper megamenu_widget_wrapper1">
                            <div className="row justify-content-lg-between">
                              <div className="col-lg-12">
                                <div className="px-3 py-3">
                                  <div className="row">

                                    <div className="col-lg-6">
                                      <div className="row">
                                        {Object.entries(aboutMenuContent).map(([key, item]) => (
                                          <div
                                            key={key}
                                            className={`col-xl-10 col-md-4 mb-3 ${selectedAbout === key ? 'active' : ''}`}
                                            onMouseEnter={() => setSelectedAbout(key)}
                                          >
                                            <Link onClick={clickHandler} className="iconbox_block_2" to={item.link}>
                                              <span className="icon_title_wrap">
                                                <small className="iconbox_icon">
                                                  <img
                                                    src={
                                                      key === 'about' ? icon2 :
                                                        key === 'customer' ? icon5 :
                                                          key === 'awards' ? icon3 :
                                                            key === 'career' ? icon4 :
                                                              ''
                                                    }
                                                    alt={item.title}
                                                  />
                                                </small>
                                                <small className="iconbox_title">{item.title}</small>
                                              </span>
                                            </Link>
                                          </div>
                                        ))}
                                      </div>
                                    </div>


                                    <div className="col-lg-6">
                                      <div className="megamenu_case megamenu_case1">
                                        <h3 className="text-black">{aboutMenuContent[selectedAbout]?.title}</h3>
                                        <h4 className="text-black">{aboutMenuContent[selectedAbout]?.heading}</h4>
                                        <img
                                          src={aboutMenuContent[selectedAbout]?.image}
                                          alt={selectedAbout}
                                          width={300}
                                        />
                                        <Link
                                          onClick={clickHandler}
                                          className="megamenu_btn megamenu_btn_about text-center text-black rounded"
                                          to={aboutMenuContent[selectedAbout]?.link}
                                        >
                                          Read More
                                          <span className="btn_icon ms-1">
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M13 1C13 0.447715 12.5523 0 12 0H3C2.44771 0 2 0.447715 2 1C2 1.55228 2.44771 2 3 2H11V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292893L0.292893 11.2929L1.70711 12.7071Z" fill="#fff" />
                                            </svg>
                                          </span>
                                        </Link>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>



                  {/* Product */}

                  <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/"><span>Products</span></Link>
                  </li>

                  {/* ERP */}

                  <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/erp"><span>ERP</span></Link>
                  </li>
                  {/* Segments */}

                  <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/segments"><span>Segments</span></Link>

                  </li>

                  {/* Download */}

                  <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/download"><span>Download</span></Link>
                  </li>
                  {/* Resources */}






                  {/* partner */}

                  <li className="menu-item-has-children">
                    <Link onClick={clickHandler} to="/casestudy"><span>Partners</span></Link>
                    <ul className="submenu">
                      <li><Link onClick={clickHandler} to="/"><span>Partner Overview</span></Link></li>
                      <li><Link onClick={clickHandler} to="/"><span>Partner Login</span></Link></li>
                    </ul>
                  </li>
                  {/* contact */}
                  <li><Link onClick={clickHandler} to="/contact"><span>Contact</span></Link></li>
                </ul>
              </nav>



              {/* Mobile Menu */}
              <div className="xb-header-wrap">
                <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>
                  <div className="xb-header-menu-scroll lenis lenis-smooth">
                    <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobileActive(!mobileActive)}></div>
                    <div className="xb-logo-mobile xb-hide-xl">
                      <Link onClick={clickHandler} to="/" rel="home">
                        <img src={logo2} alt="SoftTrade Logo" />
                      </Link>
                    </div>
                    <div className="xb-header-mobile-search xb-hide-xl">
                      <form role="search" onSubmit={submitHandler}>
                        <input type="text" placeholder="Search..." name="s" className="search-field" />
                        <button className="search-submit" type="submit">
                          <i className="far fa-search"></i>
                        </button>
                      </form>
                    </div>
                    <nav className="xb-header-nav">
                      <MobileMenu />
                    </nav>
                  </div>
                </div>
                <div className="xb-header-menu-backdrop"></div>
              </div>
            </div>
            <div className="header-bar-mobile side-menu d-xl-none">
              <button className="xb-nav-mobile" onClick={() => setMobileActive(!mobileActive)}>
                <i className="far fa-bars"></i>
              </button>
            </div>
            <div className="header-contact d-none d-md-block">

              <Link onClick={clickHandler} to="/contact" className="blc-btn blc-btn-custom">
                <span className="date-picker-wrapper pe-2">
                  <FaCalendarAlt className="calendar-icon text-black " />
                </span>
                <span className="text-black">Book Free Demo</span>
                <span className="btn-shape">
                  <svg width="216" height="44" viewBox="0 0 216 44" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <rect
                      x="1"
                      y="1"
                      width="200"
                      height="40"
                      rx="27"
                      fill="#fff"
                      stroke="#000"
                      // stroke="url(#paint0_linear)"
                      strokeWidth="1"
                    />
                    <defs>
                      <linearGradient id="paint0_linear" x1="216" y1="57.4519" x2="177.902" y2="2.40647" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#6780D2" />
                        <stop offset="1" stopColor="#2F3B8D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="btn-shape2">
                  <svg width="216" height="44" viewBox="0 0 216 44" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <rect
                      x="1"
                      y="1"
                      width="200"
                      height="40"
                      rx="27"
                      fill="#fff"
                      stroke="url(#paint0_linear)"
                      strokeWidth="1"
                    />
                    <defs>
                      <linearGradient id="paint0_linear" x1="216" y1="57.4519" x2="177.902" y2="2.40647" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#431DAB" />
                        <stop offset="1" stopColor="#AE6DFE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;