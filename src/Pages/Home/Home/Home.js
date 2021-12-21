import { Typography } from '@mui/material';
// import React, { useEffect,useState } from 'react';
import BannerSection from '../BannerSection/BannerSection';
import ProductSection from '../ProductSection/ProductSection';
import ReviewSection from '../ReviewSection/ReviewSection';
// import Specialty from '../Specialty/Specialty';
import Video from './Video';

const Home = () => {
    // const [monitor,setMonitor]= useState(null);
    // useEffect(() => {
    //   fetch("https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708")
    //   .then(res => res.json())
    //   .then(data =>  setMonitor(data));
    //   console.log(monitor)
    //   fetch('https://blooming-temple-36736.herokuapp.com/monitor', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(monitor)
    // })
    // }, [])



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