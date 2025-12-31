import {React, useState } from 'react'
import {registerToCourse} from '../service/studentServices'
import { toast } from 'react-toastify'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { viewmore } from '../service/commonServices'

function RegisterCourse() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    const [course, setCourse]= useState(null)

    const {course_id} = useParams()

    useEffect(()=>{
        console.log("useEffect called()");
        console.log(course);
        if(course_id){
        fetchCourse()}
      },[course_id])
    
      const fetchCourse =async ()=>{
        console.log("fetchcourse() called");
        const result =await viewmore(course_id)
        console.log("result:",result);
        if(result?.data?.length > 0){
          console.log("inside if");
          setCourse(result.data[0])
        }  
      }

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

    if (!course) {
    return <h4 className="text-center mt-5">Loading...</h4>;
  }
  return <>
     <div className="container mt-5">
      <div className="row justify-content-center">

        {/* COURSE INFO CARD */}
        <div className="col-md-8 mb-4">
          <div className="card shadow-sm">
            <table className="table mb-0">
              <tbody>
                <tr>
                  <th>Course Name</th>
                  <td>{course.course_name}</td>
                </tr>
                <tr>
                  <th>Fees (₹)</th>
                  <td>{course.fees}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* REGISTER FORM CARD */}
        <div className="col-md-8">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Register to Course</h3>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                className="form-control"
                placeholder="Enter your name"
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Mobile Number</label>
              <input
                className="form-control"
                placeholder="Enter your mobile number"
                onChange={e => setMobile(e.target.value)}
              />
            </div>

            <button
              className="btn btn-info text-white w-100"
              onClick={register}
            >
              Register
            </button>
          </div>
        </div>

      </div>
    </div>

    </>
  
}

export default RegisterCourse
