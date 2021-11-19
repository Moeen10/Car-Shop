import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id , name, description, img,price } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 1 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <br />
                <CardContent>
                    <Typography variant="h5" component="div">
                        <b>{name}</b>
                    </Typography>
                    <br />
                    <Typography variant="h6" component="div" style={{color : '#5c6bc0'}}>
                       Price: ${price}k
                    </Typography>
                    <br />
                    <Typography  variant="body2" color="text.secondary">
                        {description?.slice(0, 140)}
                    </Typography>
                    <br />
                    <Link style={{textDecoration : "none"}} to={`watch/${_id}`}><Button variant="contained">Buy</Button></Link>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;