import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(e => console.error(e))
    }
    return (
        <div>
            <div className="navbar bg-base-100 text-lg mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl"></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>

                        <li>
                            {
                                user && user.email ?
                                    <>
                                        <Link to='/reviews'>My Reviews</Link>
                                        <Link to='/addService'>Add Service</Link>
                                        <button onClick={handleLogOut}>logout</button>
                                    </>
                                    :
                                    <Link to='/login'>Login</Link>
                            }
                        </li>

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;