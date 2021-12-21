import { getAuth, updateProfile } from '@firebase/auth';
import React, { useState,useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');


    
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

    const history = useHistory();
    const Location = useLocation();
    const redirect_url = Location?.state?.from || '/'


    const { error, setError, signUpWithEmailPassword, setUser, setISloading } = useAuth();

    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePasswordOne = e => {
        setPasswordOne(e.target.value)
    }
    const handlePasswordTwo = e => {
        setPasswordTwo(e.target.value)
    }

    const auth = getAuth();
    const handleRegisterUser = (e) => {
        if (passwordOne === passwordTwo) {
            const user = { email: email, password: passwordOne }
            signUpWithEmailPassword(user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user)
                    // adding name field
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                        setUser(user)
                        addRegisterUserToDatabase(user.displayName, user.email);

                    }).catch((error) => {
                        setError(error)
                    });

                    setISloading(false)
                    history.push(redirect_url)

                })
                .catch((error) => {
                    setError(error.message);
                });


            console.log(user);
        }
        else {
            setError("Password didn't matched ⛔")
        }
        e.preventDefault();
    }




    const addRegisterUserToDatabase = (name, email) => {
        const user = { displayName: name, email: email, }
        fetch('https://blooming-temple-36736.herokuapp.com/addUsers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }





    return (
        <div className="p-5">
            <h2>Register Page</h2>


            <form className="m-5" onSubmit={handleRegisterUser}>

                {error}

                <br />

                <input onBlur={handleName} className="p-3 border-3 mt-4" type="text" placeholder="Name : " />
                <br />

                <input onBlur={handleEmail} className="p-3 border-3 mt-4" type="email" placeholder="Email : " />
                <br />

                <input onBlur={handlePasswordOne} className="p-3 border-3 mt-4" type="password" placeholder="Password : " />

                <br />
                <input onBlur={handlePasswordTwo} className="p-3 border-3 mt-4" type="password" placeholder="Confirm Password : " />

                <br />


                <button className='mt-3 mb-3' type='submit'>Register Now</button>
                <br />

                <Link to='/login'>Already Have Account ?</Link>

            </form>


        </div>
    );
};

export default Register;