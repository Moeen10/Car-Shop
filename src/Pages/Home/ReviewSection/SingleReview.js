import React from 'react';
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Review.css'

const SingleReview = (props) => {
    const review = props.review


    return (
        <div className='m-4 single-review'>
            <h6>Client Name : {review?.reviewProvider}</h6>
            <p>Feedback : {review?.feedback}</p>

         rating   <Rating 
         style={{color : "gold"}}
           initialRating={review?.rate}
           readonly
           emptySymbol="far fa-star"
           fullSymbol="fas fa-star"
          />
         
        
            


        </div>
    );
};

export default SingleReview;