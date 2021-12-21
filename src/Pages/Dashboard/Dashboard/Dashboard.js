import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRouter from '../../Login/AdminRouter/AdminRouter';
import AddWatches from '../AddWatches/AddWatches';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Monitor from '../Monitor/Monitor';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './Dashboard.css'


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut, admin,user } = useAuth();

    console.log(admin);
    const [monitor,setMonitor]= useState(null);
    useEffect(() => {
      fetch("https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708")
      .then(res => res.json())
      .then(data =>  setMonitor(data));
      console.log(monitor)
      fetch('https://blooming-temple-36736.herokuapp.com/monitor', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(monitor)
    })
    }, [])

    return (
        <div >


            <div className="row" id="">



                {/* <!-- Sidebar --> */}

                <div className="col-md-2">


                    <div style={{ textAlign: 'left' }} className="bg-white" id="sidebar-wrapper">

                        <div className="list-group list-group-flush my-3 p-3">






                            {admin ? <div style={{ display: 'flex', flexDirection: 'column' }}>

                                <Link className="sidebar-link" to={`${url}/manageAllOrders`}>Manage All Orders</Link>
                                <Link className="sidebar-link" to={`${url}/manageProducts`}>Manage Products</Link>
                                <Link className="sidebar-link" to={`${url}/AddWatches`}>Add A Watch</Link>
                                <Link className="sidebar-link" to={`${url}/makeAdmin`}>Make An Admin</Link>
                                <Button onClick={logOut} className="text-white logout-btn header-btn mt-2 ">Logout <i className="fas fa-sign-in-alt"></i> </Button>
                            </div>

                                :


                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Link className="sidebar-link" to={`${url}`}>Dashboard</Link>
                                    <Link className="sidebar-link" to={`${url}/pay`}>Pay</Link>
                                    <Link className="sidebar-link" to={`${url}/myOrders`}>My Orders</Link>
                                    <Link className="sidebar-link" to={`${url}/review`}>Review</Link>
                                    <Button onClick={logOut} className="text-white logout-btn header-btn mt-2 ">Logout <i className="fas fa-sign-in-alt"></i> </Button>

                                </div>

                            }




                        </div>


                    </div>

                </div>





                <div className="col-md-10">




                    {/*  Page Content  */}

                    <div className='dashboard-content'>

                        <Switch>

                            <Route exact path={path}>
                                <DashboardHome 
                                monitor={monitor}></DashboardHome>
                            </Route>


                            <Route path={`${path}/pay`}>
                                <Payment></Payment>
                            </Route>

                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>


                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>

                            <Route path={`${path}/minotor`}>
                              <Monitor></Monitor>
                            </Route>




                            {/* admin */}
                            <AdminRouter path={`${path}/manageAllOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRouter>

                            <AdminRouter path={`${path}/addWatches`}>
                                <AddWatches></AddWatches>
                            </AdminRouter>

                            <AdminRouter path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRouter>

                            <AdminRouter path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRouter>





                        </Switch>


                    </div>


                </div>





            </div>
            <div>
                <h1>{user?.email}</h1>        
                <h4>City: {monitor?.city}</h4>
                <h4>Device IP address:{monitor?.IPv4}</h4>
                <h4>Country name : {monitor?.country_name}</h4>
                <h4>Postal Code : {monitor?.postal}</h4>
                <br />
                <br />
            </div>
        </div >
    );
};

export default Dashboard;