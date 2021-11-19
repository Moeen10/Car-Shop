import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Watch.css'

const Watch = (props) => {

    const { _id, name, price, img, description } = props.watch
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
                   Price: ${price}K
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

        // <div className="m-4 single-watch">


        //     <img className="watch-image" src={img} alt="" />

        //     <div className="watch-text">
        //         <h5>{name}</h5>
        //         <h4>Price : {price} $</h4>
        //         <p>{description?.slice(0, 150)}</p>

        //     </div>

        //     <div>
        //         <Link to={`watch/${_id}`}><button className="m-4 see-book-btn"> SEE & BOOK <i className="fas fa-arrow-alt-circle-right"></i></button></Link>
        //     </div>

        // </div >
    );
};

export default Watch;