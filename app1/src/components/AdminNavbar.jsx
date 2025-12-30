import React from 'react'
import {Link, useNavigate } from 'react-router'
import { LoginContext } from '../pages/LoginContext'
import { useContext } from 'react'
import ChangePassword from '../pages/ChangePassword'

function AdminNavbar() {
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
        <Link className="navbar-brand" to="/">
          Student Portal
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Courses
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/AllCourses">
                    Get All Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/AddCourse">
                    Add Course
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Videos
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/GetAllVideos">
                    Get All Videos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/AddVideo">
                    Add Video
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Students
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/GetAllVideos">
                    Get All Students
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

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
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                        <li>
                                            <Link className="dropdown-item" to="/ChangePassword">
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

export default AdminNavbar
