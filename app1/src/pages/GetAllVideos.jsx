import React from 'react'
import Navbar from '../components/Navbar'
import {useState, useEffect} from 'react'
import get_videos from '../service/videoServices'
import { useNavigate } from 'react-router'
import { delete_Video } from '../service/videoServices'
import AdminNavbar from '../components/AdminNavbar'
import NavbarSwitch from '../components/NavbarSwitch'
import { getVideosByCourseId } from '../service/videoServices'
import { get_All_Courses } from '../service/coursesService'

function GetAllVideos() {

  const [videos, setVideos] = useState([])
  const [courses, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState('')

  const navigate = useNavigate()

    useEffect(() => {
        console.log("All videos loaded !")
        
        const getVideos = async()=> {
            console.log('getVideos called!')
            const result = await get_videos()
            if(result.status == 'success'){
                setVideos(result.data)
            }
        }

        const loadCourses = async () => {
        const result = await get_All_Courses()
        if (result.status === 'success') {
            setCourses(result.data)
        }
        }

        getVideos()
        loadCourses()
    } , [])

        const handleCourseFilter = async (course_id) => {
            setSelectedCourse(course_id)
            console.log(course_id)
            
            if (course_id === '') {
              const result = await get_videos()
              if (result.status === 'success') {
                setVideos(result.data)
              }
              return
            }

            const result = await getVideosByCourseId(course_id)
            if (result.status === 'success') {
              console.log(result.data)
              setVideos(result.data)
            }
        }


    const deleteVideo = async (video_id) => {
        console.log('delete called!')
        const result = await delete_Video(video_id)
        if(result.status === 'success'){
          alert("Video deleted successfully !!")
          setVideos(prev => prev.filter(v => v.video_id !== video_id))
        }
    }



  return (
  <>
    <NavbarSwitch/>
    
    <div className="container mt-4">
       <h1>All videos</h1>
      <div className="mb-3">
        <label className="form-label fw-bold">Filter by Course</label>
        <select className="form-select w-25" value={selectedCourse} onChange={(e) => handleCourseFilter(e.target.value)}>
          <option value="">All Courses</option>

            {courses.map(course => (
                <option key={course.course_id} value={course.course_id}>
                    {course.course_name}
                </option>
            ))}
        </select>
      </div>

      <table className="table table-hover table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Course id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Youtube URL</th>
            <th>Added At</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {videos.map((v) => (
            <tr key={v.video_id}>
              <td>{v.video_id}</td>
              <td>{v.course_id}</td>
              <td>{v.title}</td>
              <td>{v.description}</td>
              <td>
                <a href={v.youtube_url} target="_blank" rel="noreferrer">
                  {v.youtube_url}
                </a>
              </td>
              <td>{v.added_at}</td>
              <td className="text-center">
                <button className="btn btn-warning btn-sm me-2"onClick={() => navigate(`/update-video/${v.course_id}/${v.video_id}`)}>
                  ✏️
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteVideo(v.video_id)}>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  </>
);

}

export default GetAllVideos