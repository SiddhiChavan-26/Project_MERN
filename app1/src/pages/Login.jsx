import React, { useContext, useState } from "react"
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'


function Login()
{
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()

    const[LoginStatus,setLoginStatus] = useContext(LoginContext)

    const signin = () =>{
        console.log("sign in button clicked")
        console.log(`email-${email}`)
        console.log(`password-${password}`)

        if(email == '')
            toast.warn("email must be entered")
        else if(password == '')
            toast.warn("password must be entered")
        else {
            const result = loginUser(email,password)
            console.log(result)
            if(result == 'success')
            {
                sessionStorage.setItem('token',result.data.token)
                setLoginStatus(true)
                navigate('/home')
                toast.success("Login successful")

            }else{
                toast.error(result.error);
                
            }
        }
            

    }

    return (
        <div className='container w-50'>
            <div className=" mt-3 mb-3">
                <label for="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
            </div>

            <div className="mb-3">
                <label for="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="mb-3">
                <button className="btn btn-success" onClick={signin}>Signin</button>
            </div>

            <div>
                Don't have an account? then to register <Link to='/register' >Click Here</Link>
            </div>
        </div>
    )
}
export default Login