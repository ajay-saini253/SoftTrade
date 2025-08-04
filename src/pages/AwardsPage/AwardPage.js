
import React, { Fragment } from 'react';
import Header from '../../common-components/Header/Header';
import Scrollbar from '../../common-components/scrollbar/scrollbar';
import Footer from '../../common-components/Footer/Footer'
import Achievements from './Achievements';
import Awards2 from './Awards2';
import Awards3 from './Awards3';
import TopBar from '../../common-components/Topbar/TopBar'


const AwardPage = (props) => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'> 
             <TopBar/>

            <Header/>
            <Achievements/>
            <Awards2/>
            <Awards3/>
            <Footer />
            <Scrollbar />
            </div>
        </Fragment>
    )
};
export default AwardPage;