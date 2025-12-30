import {React, useState } from 'react'
import {registerToCourse} from '../service/studentServices'
import { toast } from 'react-toastify'
import { useParams } from 'react-router'

function RegisterCourse() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const {course_id} = useParams()

    const register = async () =>{
        if (name == '')
            toast.warn('name must be entered')
        else if (email == '')
            toast.warn('email must be entered')
        else if (mobile == '')
            toast.warn('mobile must be entered')
        else {
        const result = await registerToCourse(course_id, name, email, mobile)
        console.log(result.data);
        if(result.data.status == "success"){
            toast.success("Register successfully")
        }
        else{
            toast.error(result.error)
        }
        }
    }


    
  return <>
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4 w-50">
            <h3 className="text-center mb-4">Register to Course</h3>

            <div className="mb-3">
            <label htmlFor="inputName" className="form-label">Full Name</label>
                <input
                    type="text"
                    className="form-control rounded"
                    id="inputName"
                    placeholder="Enter your name"
                    onChange={e=> setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email Address</label>
                <input
                    type="email"
                    className="form-control rounded"
                    id="inputEmail"
                    placeholder="Enter your email"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="inputMobile" className="form-label">Mobile Number</label>
                <input
                    type="tel"
                    className="form-control rounded"
                    id="inputMobile"
                    placeholder="Enter your mobile number"
                    onChange={e => setMobile(e.target.value)}
                />
            </div>
            <button className="btn btn-info text-white w-100 rounded"  onClick={register}>Register</button>
        </div>
    </div>

    </>
  
}

export default RegisterCourse
