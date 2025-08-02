import React, { Fragment } from 'react';
import Header from '../../components/home/header/Header';
import Footer from '../../components/home/footer/Footer';
import Scrollbar from '../../components/home/scrollbar/scrollbar'
import TopBar from '../../components/home/TopBar/TopBar';

import TopHero from '../../components/home/hero/topHero';

import DownloadSoftware from './DownloadSoftware';

const Download = () => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <TopBar />
                <Header />
                <main className="page_content">
                <TopHero />
                  <DownloadSoftware/>

                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default Download;