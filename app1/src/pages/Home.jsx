import React from 'react'
import Navbar from '../components/Navbar'
import {useState} from 'react'

export default function Home() {

    const[course, setCourse] = useState([])

    const getCourse = () => {
        const result = getAllCourses()
        if(result.status == 'success'){
            setItems(result.data)
        }
    }


    return (
        <Navbar />
            <div className="container">
                <div className="row">
                    {items.map(e => {
                        return <div className="mt-3 col-4">
                            <div className="card" style={{ width: "20rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ height: "2rem" }}>{e.course_name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Starts on : {e.start_date}</h6>
                                    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Rs. {e.price}</h6> */}
                                    <button className="btn btn-primary">View More</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
    )
}

export default Home
