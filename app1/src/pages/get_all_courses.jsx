import { useEffect,useState } from "react";
import { getAllCourses } from "../service/courseService";
import getCourses from './get_all_courses';
import { FaEdit, FaTrash } from "react-icons/fa";



export default function AllCourses() {
  const [courses, setCourses] = useState([]);

}

useEffect(()=>{
   console.log('get all courses')
   getCourse()
},[])

const getCourse=async()=>{
    const result =await AllCourses()
    if(result.status=="success"){
        setcourses(result.data)
        console.log(result.data)
    }
}

return<>

    <div className="container mt-5">
      <h2 className="text-center mb-4">All Courses</h2>

      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Description</th>
            <th>Fees</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Expire Days</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.courseName}</td>
              <td>{c.description}</td>
              <td>₹{c.fees}</td>
              <td>{c.startDate}</td>
              <td>{c.endDate}</td>
              <td>{c.expireDays}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  <FaEdit />
                </button>
                <button className="btn btn-danger btn-sm">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


</>