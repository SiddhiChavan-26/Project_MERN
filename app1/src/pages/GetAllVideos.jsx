import React from 'react'
import Navbar from '../components/Navbar'
import {useState, useEffect} from 'react'
import get_videos from '../service/videoServices'
import { useNavigate } from 'react-router'

function GetAllVideos() {

  const [videos, setVideos] = useState([])
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

        getVideos()
    } , [])



  return (
  <>
    <Navbar />
    
    <div className="container mt-4">
       <h1>All videos</h1>
      <div className="mb-3">
        <label className="form-label fw-bold">Filter by Course</label>
        <select className="form-select w-25">
          <option value="">All Courses</option>
          <option value=" ">MERN</option>
          <option value= "">Python</option>

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
                <button className="btn btn-danger btn-sm">
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
