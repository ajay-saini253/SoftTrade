
import React, { Fragment } from 'react';
// import { Fade } from "react-awesome-reveal";
import Header from '../../components/home/header/Header';
import Footer from '../../components/home/footer/Footer';

import Scrollbar from '../../components/home/scrollbar/scrollbar';
import TopBar from '../../components/home/TopBar/TopBar';
import TopHero from '../../components/home/hero/topHero';
import DesktopProducts from './DesktopProducts';

const DesktopSoftware = () => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                 <TopBar/>
                <Header />
                <TopHero/>
                <DesktopProducts/>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default DesktopSoftware;