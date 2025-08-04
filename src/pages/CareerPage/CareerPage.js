import React, { Fragment } from 'react';
import Header from '../../common-components/Header/Header';
import Scrollbar from '../../common-components/scrollbar/scrollbar';
import Footer from '../../common-components/Footer/Footer'
import Process from '../../components/about/CareerPage/Process';
import CareerTeam from '../../components/about/CareerPage/CareerTeam';
import CareerVideo from '../../components/about/CareerPage/CareerVideo';
import WorkSection from '../../pages/TeamPage/work';
import CareerHero from '../../components/about/CareerPage/CareerHero';

const CareerPage = (props) => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <CareerHero/>
                <Process />
                <CareerTeam />
                <WorkSection bg={'sbg pt-50'} />
                <CareerVideo/>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CareerPage;
