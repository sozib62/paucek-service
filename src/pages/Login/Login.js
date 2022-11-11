import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const Login = () => {

    const [error, setError] = useState('')

    const { loginUser, providerLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location.state);
    const from = '/';

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }

                fetch('https://assignment-11-server-site-nine.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true })
                    })
            })
            .catch(e => console.error(e))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setError('')

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                fetch('https://assignment-11-server-site-nine.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true })
                    })

            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            });
    }
    return (
        <div className="hero bg-base-200 drop-shadow-2xl">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                            <label className="label">
                                <p>Can't account Go<Link to='/register' className="label-text-alt link link-hover">Register</Link></p>
                            </label>
                        </div>
                        <div className='text-red-400'>
                            <p> {error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full">Sign In With Google</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;