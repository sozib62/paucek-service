import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');

    const [accept, setAccept] = useState(false);

    const { userInfo, createNewUser } = useContext(AuthContext)



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setError('')
                handleProfile(name, photo)
            })
            .catch(e => {
                console.error(e);
                setError(e.message)
            });
    }

    const handleProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userInfo(profile)
            .then(() => { })
            .catch(() => { })
    }

    const handleAccept = event => {
        setAccept(event.target.checked)
    }

    return (
        <form onSubmit={handleSubmit} className="hero mix-h-screen bg-base-200 w-full">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />
                        </div>
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
                            <label>
                                <input onClick={handleAccept} type="checkbox" name="" id="" /> Accept Terms And Condition
                            </label>
                            <label className="label">
                                <p>Have An Account Go<Link to='/login' className="label-text-alt link link-hover text-lg text-blue-600">Login</Link></p>
                            </label>
                        </div>
                        <div className='text-red-400'>
                            <p>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" disabled={!accept}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;