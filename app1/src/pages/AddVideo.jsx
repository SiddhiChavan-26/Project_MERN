import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { getCourseIdByName } from '../service/videoServices'
import { toast } from 'react-toastify'
import { addNewVideo } from '../service/videoServices'
import NavbarSwitch from '../components/NavbarSwitch'

function AddVideo() {

    const[course_id, setCourseId]  = useState('')
    const[course_name, setCourseName] = useState('')
    const[title, setTitle] = useState('')
    const[youtube_url, setYoutubeUrl] = useState('')
    const[description, setDescription] = useState('')

    useEffect(() => {
        console.log("useEffect !!")

        const getCourseId = async () => {
            const result = await getCourseIdByName(course_name);
            if (result.status === 'success' && result.data) {
                console.log(result.data);              
                console.log(result.data[0].course_id);    
                setCourseId(result.data[0].course_id);    
            }
        };

        getCourseId()
    }, [course_name])
 
    
    const addVideo = async () =>{
        console.log("addVideo called !")
        console.log(course_id)
        if(!course_id){
            toast.error("Invalid course name")
        }
        const result = await addNewVideo(course_id, title, youtube_url, description)
        if(result.status === 'success'){
            toast.success('Video added')

            setCourseName(''); 
            setCourseId(''); 
            setTitle(''); 
            setYoutubeUrl(''); 
            setDescription('');
        }

    }
  
    return (
    <>
        <NavbarSwitch />

        <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="card shadow p-4" style={{ width: "450px" }}>
            
            <h4 className="text-center mb-4">Add New Video</h4>

            <div className="mb-3"> 
                <label className="form-label">Course</label> 
                <select className="form-select" value={course_name} onChange={(e) => setCourseName(e.target.value)} > 
                    <option value=""disabled hidden>Select a course</option> 
                    <option value="Java">Java</option> 
                    <option value="GEN AI">GEN AI</option> 
                    <option value="Web Development">Web developement</option>
                    <option value='Python'>Python</option>
                </select> 
            </div>

            
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

        
            <button className="btn btn-primary w-100" onClick={addVideo}>Add Video</button>

        </div>
        </div>
    </>
    )
}

export default AddVideo

