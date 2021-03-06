import React, { useState,useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [monitor,setMonitor]= useState(null);
    // useEffect(() => {
    //   fetch("https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708")
    //   .then(res => res.json())
    //   .then(data =>  setMonitor(data));
    // //   console.log(monitor)
    //   fetch('https://blooming-temple-36736.herokuapp.com/monitor', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(monitor)
    // })
    // }, [])

    const { signInWithEmailPassword, setISloading, setError, setUser, error } = useAuth()

    const history = useHistory();
    const Location = useLocation();
    const redirect_url = Location?.state?.from || '/dashboard'

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleEmailPasswordLogin = (e) => {
        const user = { email: email, password: password }
        signInWithEmailPassword(user.email, user.password)

            .then((userCredential) => {
                setUser(userCredential.user);
                setISloading(false)
                history.push(redirect_url)
   

            })
            .catch((error) => {

                setError(error.message);
            });

        e.preventDefault();
    }


    return (
        <div className="p-5">


            <h2>Login Page</h2>

            <p className="text-danger"> {error}</p>
            <form onSubmit={handleEmailPasswordLogin} className="m-5">

                <input onBlur={handleEmail} className="p-3 border-3 mt-4" type="email" placeholder="Email : " />
                <br />
                <input onBlur={handlePassword} className="p-3 border-3 mt-4" type="password" placeholder="Password : " />

                <br />


                <button className='mt-3 mb-3' type='submit'>Login Now</button>
                <br />

                <Link to='/register'>Dont Have Account ?</Link>

            </form>


        </div>
    );
};

export default Login;