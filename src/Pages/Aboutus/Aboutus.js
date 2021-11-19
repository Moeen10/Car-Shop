import React from 'react';
import AboutImage from '../../images/bac.jpeg'
import carImg from '../../images/mar.jpg'

const Aboutus = () => {
    return (
        <div className="container">
            <h2 style={{color : "#9640ED"}} className="section-heading">About Our Cars & Our Shop</h2>
            <h5  className='sub-heading'>" Before take decision make sure that you studyed about us and read our policy "</h5>

            <div className="row my-5">

                <div className="col-md-6 mb-5">
                    <img className="img-fluid" src={AboutImage} alt="" />
                </div>
                <div style={{ textAlign: 'Center' }} className="col-md-6">
                    <div className="mb-5">
                        <h3 style={{color : "#9640ED"}}>Leading Car Shop in Bangladesh</h3>
                        <p>Our prices are fixed as the cars are priced to be the lowest on the market, we're pretty confident in that as they're checked daily. Therefore, there's no haggling required with us as you won't need to fight to get the best deal!</p>
                    </div>

                    <div>
                        <h3 style={{color : "#9640ED", textAlign: "center"}}>Best Price, Product & After-sales service</h3>
                        <p> World best companys car we sell.We taken care of customers since the beginning. No matter if someone is inquiring or purchasing; every customer wants to get a genuine product with the best price. We deliver their desired products at the best price in the market. Apart from that, we offer the most extensive range of pre-sale and post-purchase product support and after-sales service. To ensure customer satisfaction and service We have branches in major cities like Dhaka, Chittagong, Rangpur, Gazipur, and Khulna. The plan of establishing our branches in other cities is already in motion. Hopefully, we will be available in all the districts in the very near future. Currently, we have online delivery available in all 64 districts in Bangladesh.</p>
                    </div>

                </div>
            </div>

            <div className="row my-5">



                <div style={{ textAlign: 'right' }} className="col-md-6">
                    <div className="my-5">
                        <h3 style={{color : "#9640ED",
                        textAlign: "center"
                    
                    }}>Best Car Shop in Bangladesh
                        </h3>
                        <p>An automobile repair shop (also known regionally as a garage or a workshop) is an establishment where automobiles are repaired by auto mechanics and technicians.

                        </p>
                    </div>

                    <div>
                        <h3 style={{color : "#9640ED", textAlign: "center"}}>How You Would Be Connected To Us ?</h3>
                        <p>Come our Shop to buy products on hand or order us online , you will need some basic information of the your product you’ll be buying to, and your money and others requirements. You will, of course, also need all of your personal details that will appear on your paper.
                        </p>
                    </div>

                </div>

                <div className="col-md-6 pt3 mt-5">
                    <img className="img-fluid" src={carImg} alt=""
                    />
                </div>

            </div>


        </div>
    );
};

export default Aboutus;