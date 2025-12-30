import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { LoginContext } from './../pages/LoginContext'
import GetAllVideos from './../pages/GetAllVideos';

function Navbar() {
    const navigate = useNavigate()
    const { LoginStatus, setLoginStatus } = useContext(LoginContext)
    const email = sessionStorage.getItem('email')

    const logout = () => {
        sessionStorage.clear()
        setLoginStatus(false)
        navigate('/home')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Student Portal</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/GetAllVideos">GetAllVideos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AddVideo">AddVideo</Link>
                        </li>
                    </ul>

                    {/* RIGHT SIDE */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            {!LoginStatus ? (
                                /* LOGIN BUTTON */
                                <Link className="btn btn-light" to="/login">
                                    Login
                                </Link>
                            ) : (
                                <>
                                    {/* EMAIL BUTTON */}
                                    <button
                                        className="btn btn-light dropdown-toggle"
                                        type="button"
                                        id="userDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {email}
                                    </button>

                                    {/* DROPDOWN */}
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <Link className="dropdown-item" to="/change-password">
                                                Change Password
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={logout}>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

