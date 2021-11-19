import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/bag.svg'
import './Footer.css'

const Footer = () => {
    const { user } = useAuth();


    return (
        <div className="footer" style={{backgroundColor : "#007fff"}}>

            <div className="container-fluid text-center text-md-left container">
                <div className="row">


                    <div className="col-md-6 pe-sm-5 mt-3 text-white ">
                        <div className="footer-left p-4">
                            <img className='logo' src={logo} alt="" />

                            <div style={{ textAlign: 'left' }}>

                                <h5 className="sub-heading mt-2">Best car collection are here

                                    <br />

                                    Any time You can Contact with us.
                                    <br />
                                    Phone : 017*******
                                    <br />
                                    Email : hello@gmail.com 
                                </h5>



                            </div>
                        </div>




                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Your Needed Links</h5>


                        <div className="footer-links">


                            <Link  style={{color :"white"}} to="/home" className=" nav-link">Home</Link>
                            <Link  style={{color :"white"}} to="/cars" className=" nav-link">Cars</Link>
                            <Link  style={{color :"white"}} to="/about" className=" nav-link">About Us</Link>
                            {user && <Link to="/dashboard" style={{color :"white"}} className=" nav-link">Dashboard</Link>}





                        </div>
                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Follow Us</h5>


                        <div className="footer-links">



                            <a className="btn btn-primary" style={{ backgroundColor: '#55acee' }} href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i><span className="badge bg-danger ms-2">8</span></a
                            >

                            <button
                                type="button"
                                className="btn btn-primary position-relative mx-4"
                                data-mdb-ripple-unbound="true"
                                style={{ backgroundColor: '#55acee' }}
                            >
                                <i className="fab fa-instagram"></i>
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                >+9 <span className="visually-hidden">unread messages</span></span
                                >
                            </button>





                        </div>

                        <div className="text-white mt-4" style={{ textAlign: 'left' }}>
                            <h5 >Contact Details</h5>
                            <div className='mt-4'>
                                
                                <p> Location : Lake Circus ,Kolabagan</p>
                            </div>

                        </div>



                    </div>






                </div>
            </div>
        </div >
    );
};

export default Footer;