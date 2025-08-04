import React, { Fragment } from 'react';
import Header from '../../common-components/Header/Header';
import Hero from '../../components/home/hero/hero';
import PartnerSection from '../../components/home/PartnerSection';
import IndustrieSection from '../../components/home/IndustrieSection/IndustrieSection';
import Footer from '../../common-components/Footer/Footer'
import Scrollbar from '../../common-components/scrollbar/scrollbar';
import TopBar from '../../common-components/Topbar/TopBar'
import InvestmentSection from '../../components/home/InvestmentSection/InvestmentSection';
import BlogSection from '../../components/home/BlogSection/BlogSection';
import ValuesSection from '../../components/home/ValuesSection/ValuesSection';
import WebBaseERP from '../../components/home/PastWork/WebBasedERP';
import CustomERP from '../../components/home/CustomERP/customERP';
import DesktopERP from '../../components/home/PastWork/DesktopERP';
import Trusted from '../../components/home/Trust_section/Trusted';
import CustomizeContactSection from '../../components/home/CustomizedContactSection/ContactSection';



const HomePage = () => {

  return (
    <Fragment>
      <div className='body_wrap sco_agency'>
        <TopBar />
        <Header />
        <main className="page_content">

          <Hero />
          <Trusted />
          <DesktopERP />
          <WebBaseERP />
          <CustomizeContactSection />
          <ValuesSection />
          <IndustrieSection />
          <PartnerSection />
          <CustomERP />
          <InvestmentSection />
          <BlogSection />


        </main>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  )
};
export default HomePage;