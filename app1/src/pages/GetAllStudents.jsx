import React from 'react'
import Navbar from '../components/Navbar'
import {useState, useEffect} from 'react'
//import { useNavigate } from 'react-router'
import AdminNavbar from '../components/AdminNavbar'
import NavbarSwitch from '../components/NavbarSwitch'
import { getAllStudents } from '../service/studentServices'

function GetAllStudents() {

  const [student, setStudent] = useState([])
  //const [selectedCourse, setSelectedCourse] = useState('')

 // const navigate = useNavigate()

    useEffect(() => {
        console.log("useEffect ")
        
        const getStudent = async()=> {
            console.log('getStudents called!')
            const result = await getAllStudents()
            console.log(result);
            
            if(result.data.status == 'success'){
                setStudent(result.data.data)
            }
        }

        getStudent()
    } , [])

        // const handleCourseFilter = async (course_id) => {
        //     setSelectedCourse(course_id)
        //     console.log(course_id)
        //     // All Courses selected
        //     if (course_id === '') {
        //       const result = await get_videos()
        //       if (result.status === 'success') {
        //         setVideos(result.data)
        //       }
        //       return
        //     }

        //     // Specific course selected
        //     const result = await getVideosByCourseId(course_id)
        //     if (result.status === 'success') {
        //       console.log(result.data)
        //       setVideos(result.data)
        //     }
        // }


    // const deleteVideo = async (video_id) => {
    //     console.log('delete called!')
    //     const result = await delete_Video(video_id)
    //     if(result.status === 'success'){
    //       alert("Video deleted successfully !!")
    //       setVideos(prev => prev.filter(v => v.video_id !== video_id))
    //     }
    // }



  return (
  <>
    <NavbarSwitch/>
    
    <div className="container mt-4">
       <h1>All students</h1>
      {/* <div className="mb-3">
        <label className="form-label fw-bold">Filter by Course</label>
        {/* <select className="form-select w-25" value={selectedCourse} onChange={(e) => handleCourseFilter(e.target.value)}> */}
          {/* <option value="">All Courses</option>
          <option value="1">C Programming</option>
          <option value="4">Python</option>
          <option value="3">Java</option>
          <option value="5">Web Development</option>
          <option value="7">GEN AI</option>
        </select> */}
      {/* </div> */} 

      <table className="table table-hover table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Mobile No</th>
          </tr>
        </thead>

        <tbody>
          {student.length > 0 ? (
            student.map((s) => (
              <tr key={s.reg_no}>
                <td>{s.reg_no}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course_name}</td>
                <td>{s.mobile_no}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No students found
              </td>
            </tr>
          )}
        </tbody>


      </table>
    </div>
  </>
);

}

export default GetAllStudents