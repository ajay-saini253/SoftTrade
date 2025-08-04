import { Fragment } from 'react';
import Header from '../../common-components/Header/Header';
import Scrollbar from '../../common-components/scrollbar/scrollbar';
import Footer from '../../common-components/Footer/Footer'
import Roadmap from '../../components/about/AboutAs/Roadmap';
import GallerySection from '../../components/about/CareerPage/Gallery';
import Feature1 from '../../components/about/AboutAs/Features1';
import MissionVision from '../../components/about/AboutAs/MissionVission';
import TopBar from '../../common-components/Topbar/TopBar'
import AboutSoftTrade from '../../components/about/AboutAs/AboutSoftTrade'
import AboutVideo from '../../components/about/AboutAs/AboutVideo'
const AboutUsPage = (props) => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <TopBar />
                <Header />
                <AboutSoftTrade/>
                <MissionVision />
                <AboutVideo/>
                <Feature1 />
                <Roadmap />
                <GallerySection pClass={'pt-50'} />
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutUsPage;