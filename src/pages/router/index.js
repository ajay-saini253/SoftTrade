import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import ContactPage from '../ContactPage/ContactPage';
 import AboutUsPage from '../AboutUsPage/AboutUsPage';
import AwardPage from '../AwardsPage/AwardPage';

 import CareerPage from '../CareerPage/CareerPage';
// import CareerSingle from '../CareerSingle/CareerSingle';
import TeamPage from '../TeamPage/TeamPage';
import TermsPage from '../TermsPage/TermsPage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
 import BlogPage from '../BlogPage/BlogPage';
import CustomerStories from '../CustomerStories/CustomerStories';
import BlogDetails from '../BlogDetails/BlogDetails';
import Download from '../Download/Download';
import DesktopSoftware from '../DesktopSoftware/DesktopSoftware';
const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="desktop-software" element={<DesktopSoftware/>}/>
           <Route path="customer-stories" element={<CustomerStories/>}/>
          <Route path="awards" element={<AwardPage/>}/>
          <Route path="contact" element={<ContactPage />} />
          <Route path="career" element={<CareerPage />} />
           <Route path="team" element={<TeamPage />} />
          <Route path="terms-conditions" element={<TermsPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path='download/:slug' element={<Download slug={"partner-overview"}/>}/>
          <Route path="blog-single/:slug" element={<BlogDetails/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
