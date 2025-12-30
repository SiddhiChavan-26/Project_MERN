import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import {useState} from 'react'
import { useNavigate } from "react-router"  
import { getAllCourses } from '../service/commonServices'

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
        <Navbar />
            <div className="container">
                <div className="row">
                    {course.map(e => {
                        return <div className="mt-3 col-4">
                            <div className="card" style={{ width: "20rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ height: "2rem" }}>{e.course_name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Starts on : {e.start_date}</h6>
                                    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Rs. {e.price}</h6> */}
                                    <button className="btn btn-primary" onClick={() => navigate("/view-more/1")}>View More</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
    </>
}


