import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from "react";
import { useParams } from 'react-router';
import {toast} from 'react-toastify';
import {getVideoById, updateVideo } from '../service/videoServices';
import { getCourseById } from '../service/videoServices';

function UpdateVideos() {

    const { video_id, course_id} = useParams();
    const [course_name, setCourseName] = useState('');
    const [title, setTitle] = useState('')
    const [youtube_url, setYoutubeUrl] = useState('')
    const [description, setDescription] = useState('')
   

    useEffect(() => {
      console.log("Video loaded!")
      console.log(video_id, course_id)
      const getVideo = async () => {
        const result = await getVideoById(video_id)
        console.log(result)
        if(result.status === 'success' && result.data){
            const v = result.data[0]
            console.log(v)
            setTitle(v.title)
            setYoutubeUrl(v.youtube_url )
            setDescription(v.description )
        }
      }

      const getCourse = async () => { 
        const result = await getCourseById(course_id); 
        if (result.status === 'success' && result.data) { 
          setCourseName(result.data[0].course_name || '')
        } 
      };

      if (video_id ) getVideo()
        if(course_id) getCourse()
    }, [video_id,course_id])

    const update = async ()=> {
        console.log("update called!")
        const result = await updateVideo(video_id, course_id, title, youtube_url, description)
        if (result.status == "success")
            toast.success("Video Updated")
    }

  return (
  <>
    <Navbar />

    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow p-4" style={{ width: "450px" }}>
        
        <h4 className="text-center mb-4">Edit Video</h4>

       <div className="mb-3"> <label className="form-label">Course</label> <input type="text" className="form-control" value={course_name} readOnly /> </div>

        
        <div className="mb-3">
          <label className="form-label">Video Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label className="form-label">YouTube URL</label>
          <input type="text" className="form-control" value={youtube_url} onChange={(e) => setYoutubeUrl(e.target.value)}/>
        </div>

        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>

       
        <button
          className="btn btn-primary w-100" onClick={update}>Update Video
        </button>

      </div>
    </div>
  </>
)

}

export default UpdateVideos