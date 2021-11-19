import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container } from 'react-bootstrap';

const Review = () => {

  
  const [reviews, setReviews] = useState([])

  useEffect(() => {
      fetch('https://blooming-temple-36736.herokuapp.com/reviews')
          .then(res => res.json())
          .then(data => {
              setReviews(data)
          })

  }, [])




  return (



    <Box sx={{ flexGrow: 1 }}>
    <Container>
        <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
            OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
            Services We Provide
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {reviews.map(review =>

                  <SingleReview key={review._id} review={review}></SingleReview>

              )}




            
        </Grid>
           


    </Container>
</Box>

//       // <div className="packages">    
//           <Box sx={{ flexGrow: 1 }}>
//             <h1>Reviews</h1>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>



//           <div className='review-grid container'>

//               {reviews.map(review =>

//                   <SingleReview key={review._id} review={review}></SingleReview>

//               )}

//           </div>

// </Grid>
// </Box>
      
  );
};


export default Review;



