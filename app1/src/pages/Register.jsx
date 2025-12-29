// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router'
// import { registerUser } from '../service/commonServices'
// import { toast } from 'react-toastify'

// function Register() {

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [role, setRole] = useState('')
//   const navigate = useNavigate()

//   const signUp = async () => {
//     if (email === '')
//       toast.warn('Email must be entered')
//     else if (password === '')
//       toast.warn('Password must be entered')
//     else if (role === '')
//       toast.warn('Please select role')
//     else {
//       const result = await registerUser(email, password, role)

//       if (result.status === 'success') {
//         toast.success('Signup successful, please login')
//         navigate('/login')
//       } else {
//         toast.error(result.error)
//       }
//     }
//   }

//   return (
//     <div className="container w-50 mt-5">
//       <h3>Register</h3>

//       <div className="mb-3">
//         <label>Email</label>
//         <input
//           type="email"
//           className="form-control"
//           onChange={e => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label>Password</label>
//         <input
//           type="password"
//           className="form-control"
//           onChange={e => setPassword(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label>Role</label>
//         <select className="form-select" onChange={e => setRole(e.target.value)}>
//           <option value="">-- Select Role --</option>
//           <option value="ADMIN">Admin</option>
//           <option value="STUDENT">Student</option>
//         </select>
//       </div>

//       <button className="btn btn-success" onClick={signUp}>
//         Signup
//       </button>

//       <p className="mt-3">
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   )
// }

// export default Register
