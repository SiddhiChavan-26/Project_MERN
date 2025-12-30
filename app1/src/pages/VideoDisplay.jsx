import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getVideo } from '../service/studentServices';
import NavbarSwitch from '../components/NavbarSwitch';

function VideoDisplay() {
  const [video, setVideo] = useState(null)
  const navigate = useNavigate();
  const {video_id}= useParams();

  useEffect(()=>{
    console.log("useEffect()");

    const fetchVideo =async ()=>{
      const result =await getVideo(video_id)
      if (result.data.status === "success") {
        setVideo(result.data.data);
      }
    }
    
    if(video_id){
      fetchVideo()
    }
  },[video_id])
  
  if (!video) {
    return <div className="container mt-5">Loading video...</div>;
  }
  const videoIdFromUrl = video.youtube_url.includes("v=") ? video.youtube_url.split("v=")[1].split("&")[0] : video.youtube_url.split("/").pop();
  return (
    <>
    <NavbarSwitch />
      <div className="container mt-4">

      {/* Back Button */}
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {/* Title */}
      <h2>{video.title}</h2>
      <p className="text-muted">{video.description}</p>

      {/* Video Player */}
      <div className="ratio ratio-16x9 mb-4">
        <iframe
          src={`https://www.youtube.com/embed/${videoIdFromUrl}`}
          title="Video Player"
          allowFullScreen
        ></iframe>
      </div>

      {/* Added Date */}
      <p className="text-muted">
        Added on: {new Date(video.added_at).toLocaleString()}
      </p>

      </div>
      
    </>
  )
}

export default VideoDisplay
