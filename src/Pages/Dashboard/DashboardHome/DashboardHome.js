import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashBoardHome.css'

const DashboardHome = (props) => {
    const { user, admin } = useAuth();
// const {city,IPv4,postal,country_name} =props.monitor;




    const [orders, setOrders] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)

    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('https://blooming-temple-36736.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
            })


    }, [isDeleted])

    console.log(user);


    // user orders

    const email = user.email;
    useEffect(() => {
        fetch(`https://blooming-temple-36736.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => {

                setOrders(data)
            })
    }, [email, isDeleted])


    const handleDeleteOrder = (id) => {
        const isConfirm = window.confirm("⛔⛔ Are You Sure About Delete This Order ?")
        if (isConfirm) {
            fetch(`https://blooming-temple-36736.herokuapp.com/ordersDelete/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsDeleted(!isDeleted)
                    }

                })
        }

    }




    return (
        <div className="container-fluid px-4">
            <div className="row g-3 my-2">
                <div className="col-md-12">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">

                        {admin ?

                            <div>
                                <h3 className="fs-5">Total Orders By Users</h3>
                                <p className="fs-1">{allOrders?.length}</p>
                            </div>

                            :

                            <div>
                                <h3 className="fs-5">My Total Orders</h3>
                                <p className="fs-1">{orders?.length}</p>
                            </div>

                        }


                        {admin ?

                            <Link to='/dashboard/AddWatches'>
                                <button className="btn btn-success">Add New Watch</button>
                            </Link> :
                            <Link to='/ourWatches'>
                                <button className="btn btn-success">Order More Cars</button>
                            </Link>}



                    </div>
                </div>





            </div>




            <div className="row my-5">
                <h3 className="fs-4 mb-3">Recent Orders</h3>
                <div style={{ textAlign: 'left' }} className="col">





                    {admin ?

                        <div>

                            <table className="table bg-white rounded shadow-sm  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Ordered Cars Name</th>
                                        <th scope="col">Ordered By</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Delete Or Modify</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {allOrders.map(order =>


                                        <tr key={order?._id}>
                                            <td>{order?.watchName}</td>
                                            <td>{order?.email}</td>


                                            <td>{order?.status === "Pending" ? <p className="text-danger">Pending</p> : <p className="text-success">Shipped</p>}</td>




                                            <td className='d-flex'>

                                                <div className='me-3' >
                                                    <button onClick={() => handleDeleteOrder(order?._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i> DELETE</button>
                                                </div>

                                                <div>
                                                    <Link to={`/order/${order._id}`}>  <button className="btn btn-success"><i className="fas fa-edit"></i>Approve Order</button> </Link>
                                                </div>


                                            </td>

                                        </tr>

                                    )}

                                </tbody>
                            </table>

                        </div>



                        :
                        <div>

                            <table className="table bg-white rounded shadow-sm  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Ordered Cars Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Cancel Order</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {orders.map(order =>


                                        <tr key={order?._id}>
                                            <td>{order?.watchName}</td>


                                            <td>{order?.status === "Pending" ? <p className="text-danger">Pending</p> : <p className="text-success">Approved</p>}</td>




                                            <td><button onClick={() => handleDeleteOrder(order?._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i> DELETE</button></td>

                                        </tr>

                                    )}

                                </tbody>
                            </table>
                        </div>
                    }













                    {admin ?

                        <Link to='/dashboard/manageAllOrders'>
                            <button className="btn btn-success">Manage All Orders</button>
                        </Link> :

                        <Link to='/dashboard/myOrders'>
                            <button className="btn btn-success">See All Of Your Orders</button>
                        </Link>}






                </div>
            </div>

            <div>
                {/* <h1>{user?.email}</h1>         */}
                {/* <h4>City: {city}</h4>
                <h4>Device IP address:{IPv4}</h4>
                <h4>Country name : {country_name}</h4>
                <h4>Postal Code : {postal}</h4>
                <br />
                <br /> */}
            </div>

        </div >
    );
};

export default DashboardHome;