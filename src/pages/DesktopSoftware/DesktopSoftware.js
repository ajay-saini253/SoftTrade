
import React, { Fragment } from 'react';
import Header from '../../common-components/Header/Header';
import Footer from '../../common-components/Footer/Footer'
import Scrollbar from '../../common-components/scrollbar/scrollbar';
import DeskTopBar from '../../components/DesktopSoftware/DeskTopBar';
import DesktopProducts from '../../components/DesktopSoftware/DesktopProducts';

const DesktopSoftware = () => {

    return (
        
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <DeskTopBar val={"Desktop Software"}/>
                <DesktopProducts/>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default DesktopSoftware;