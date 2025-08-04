
import React, { Fragment } from 'react';
import { Fade } from "react-awesome-reveal";

import Bg from '../../images/bg/page_bg01.jpg'
import {useParams } from 'react-router-dom';

const TopHero = () => {
    const { name } = useParams();
    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                
                 <section className="page-title  pt-50 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-center">
                            
                            <div className="col-lg-12">
                                <div className="page-title-box text-center">
                                        <Fade direction='up' triggerOnce={false} duration={1000} delay={9}>
                                            <h5 className="title  wow fadeInUp" data-wow-duration="600ms">{name}</h5>
                                        </Fade>
                                        </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            
            </div>
        </Fragment>
    )
};
export default TopHero;