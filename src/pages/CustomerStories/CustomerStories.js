import React, { Fragment } from 'react';
import Header from '../../common-components/Header/Header';
import Scrollbar from '../../common-components/scrollbar/scrollbar';
import Footer from '../../common-components/Footer/Footer'
import Testimonial from '../../components/about/CustomerStories/Testimonial';
import Testimonial1 from '../../components/about/CustomerStories/Testimonial1';
import Testimonial2 from '../../components/about/CustomerStories/Testimonial2';
import TestimonialHero from '../../components/about/CustomerStories/TestimonialHero';
import TopBar from '../../common-components/Topbar/TopBar'

export default function CustomerStories() {
   
    return (
         <Fragment>
            <div className='body_wrap sco_agency'>
                <TopBar/>
                <Header />
                <TestimonialHero/>
                <Testimonial/>
                <Testimonial2/>
                <Testimonial1/>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}
