import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';

const Video = () => {
    return (
        <div>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                   Video
                </Typography>
             <Grid item xs={12} sm={12} md={12}>
                <Container>
                <iframe width="100%"  height="350px"
            src="https://www.youtube.com/embed/b-f3B_lgG_E" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope; 
             picture-in-picture" allowfullscreen>

             </iframe>
                    </Container>
            
             </Grid> 
        </div>
    );
};

export default Video;