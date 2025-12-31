import React, { useEffect } from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router"  
import { getAllCourses } from '../service/commonServices'
import NavbarSwitch from '../components/NavbarSwitch'



export default function Home() {
    const navigate = useNavigate();
    const[course, setCourse] = useState([])
    useEffect(()=>{
        console.log("All courses loaded !")

        const getCourses = async() => {
            console.log("getCourses called !")
            const result = await getAllCourses()
            console.log(result.data)
            if(result.status == 'success'){
                setCourse(result.data)
            }
        }
        getCourses()
    },[])

    


    return <>
        <NavbarSwitch />
            <div className="container">
                <div className="row">
                    {course.map(e => {
                        return <div className="mt-3 col-4">
                            <div className="card" style={{ width: "20rem" }}>
                                <div className="card-body text-center">   
                                    <img src="/images/course.jpg" className="card-img-top" alt="Course" style={{ height: "180px", objectFit: "contain", padding: "15px"}} />  


                                    <h5 className="card-title fw-bold">
    {e.course_name}
  </h5>

  <p className="text-muted">
    Starts on : {new Date(e.start_date).toDateString()}
  </p>

  <button
    className="btn btn-primary"
    onClick={() => navigate(`/viewmore/${e.course_id}`)}
  >
    View More
  </button>

                                    

                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
    </>
}


