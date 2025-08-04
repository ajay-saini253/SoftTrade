import React, { Fragment } from 'react';
import Header from '../../common-components/Header/Header';
import Footer from '../../common-components/Footer/Footer'
import Scrollbar from '../../common-components/scrollbar/scrollbar';
import TopBar from '../../common-components/Topbar/TopBar'

import DowloadTopBar from '../../components/download/DowloadTopBar';

import DownloadSoftware from '../../components/download/DownloadSoftware';

const Download = () => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <TopBar />
                <Header />
                <main className="page_content">
                    <DowloadTopBar val={"Desktop Software"}/>
                    <DownloadSoftware />

                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default Download;