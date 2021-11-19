import { Typography } from '@mui/material';
import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import ProductSection from '../ProductSection/ProductSection';
import ReviewSection from '../ReviewSection/ReviewSection';
// import Specialty from '../Specialty/Specialty';
import Video from './Video';

const Home = () => {
    return (
        <div>
             
            <BannerSection></BannerSection>
            <hr style={{margin:"auto"}} width="90%"/>

            <ProductSection></ProductSection>
            <br />
            <hr style={{margin:"auto"}} width="90%"/>

            <br />
            <ReviewSection style={{margin:"auto"}}></ReviewSection>

            <br />

            <Video></Video>

        </div>
    );
};

export default Home;