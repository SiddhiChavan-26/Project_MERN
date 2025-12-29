import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Student Portal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about">About</Link>
                            </li>
                            {/* <li class="nav-item">
                            <a class="nav-link disabled" >Disabled</a>
                            </li> */}
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    <div className="ms-auto">
                        <Link to="/login" className="btn btn-outline-light">
                        Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
