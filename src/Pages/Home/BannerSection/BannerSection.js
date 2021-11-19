import React from 'react';
import Grid from '@mui/material/Grid';
import car from '../../../images/bag.jpg';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';



const verticalCenter = {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    height: 400
}

const BannerSection = () => {
    return (
        <Container  sx={{ flexGrow: 1 }}>
            <Grid container  sx={{ mx:2 }} >
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6} lg={7}>
                    <Box>
                        <Typography variant="h3">
                            Brand New Cars <br />
                            Gets Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, and selling of motor vehicles. It is one of the world's largest industries by revenue.
                        </Typography>
                      <Link style={{ textDecoration: 'none' }}  to="/cars"><Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Explore</Button></Link>  
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={5} style={verticalCenter}  >
                    <img style={{ width: '350px' }} src={car} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default BannerSection;