import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './OurWatches.css'

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container } from 'react-bootstrap';

const OurWatches = () => {

    const [watches, setWatches] = useState([])

    useEffect(() => {
        fetch('https://blooming-temple-36736.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setWatches(data)
            })

    }, [])



    return (
        <div>





{/* 
            <h2 className="section-heading">Our Cars</h2>
            <p className="sub-heading">Choose your cars as your choice</p>


            <Box sx={{ flexGrow: 3 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {watches.map(watch => <Watch key={watch._id} watch={watch} ></Watch>)}


                    
                </Grid>
                   


            </Container>
        </Box> */}



<Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                watches.map(watch => <Watch
                 key={watch._id}
                  watch={watch} >
                </Watch>)
                }



                    
                </Grid>
                   


            </Container>
        </Box>







          


           

        </div>
    );
};

export default OurWatches;