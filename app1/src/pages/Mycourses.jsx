import React from 'react'
import { useState } from 'react'
import { getMycourses } from '../service/studentServices'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import NavbarSwitch from '../components/NavbarSwitch'

function Mycourses() {
    const [courses, setCourses] =useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        console.log("useEffect called")

        const getCourses = async ()=>{
          console.log("getcourses() called")
          const email ="anil@gmail.com"
          const result = await getMycourses(email)
          console.log("result is ",result);
          console.log("before if")
          if(result.data.status =='success'){
            console.log("Inside if")
            const groupedCourses = {};

            result.data.data.forEach(item => {
            if(!groupedCourses[item.course_name]){
              groupedCourses[item.course_name] ={
                start_date: item.start_date,
                end_date: item.end_date,
                videos: []
              };
            } 
            groupedCourses[item.course_name].videos.push({
              video_id: item.video_id,
              url: item.youtube_url ,
              added_at: item.added_at
            })

          })
          console.log(groupedCourses);
          
          setCourses(groupedCourses)
        }
    }

        getCourses()
        },[]
    )
    
  return <>
  <NavbarSwitch />
      <div className="container mt-5">

  <h2 className="text-center mb-4">My Registered Courses</h2>

  <div className="accordion" id="courseAccordion">

    {Object.keys(courses).map((courseName, index) => (
      <div className="accordion-item" key={index}>

        {/* Accordion Header */}
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#course${index}`} >
            {courseName}
          </button>
        </h2>

        {/* Accordion Body */}
        <div
          id={`course${index}`}
          className="accordion-collapse collapse"
          data-bs-parent="#courseAccordion"
        >
          <div className="accordion-body">

            {/* Start & End Date */}
            <p className="fw-semibold">
              Start:{" "}
              <span className="fw-normal">
                {new Date(courses[courseName].start_date).toLocaleDateString()}
              </span>
              {" | "}
              End:{" "}
              <span className="fw-normal">
                {new Date(courses[courseName].end_date).toLocaleDateString()}
              </span>
            </p>

            <hr />

            {/* Videos Section */}
            <h5 className="mb-3">Videos</h5>

            {courses[courseName].videos.length === 0 ? (
              <p className="text-muted">No videos available</p>
            ) : (
              courses[courseName].videos.map((video, i) => (
                <div key={i} className="border rounded p-3 mb-2">
                  <div
                    className="fw-semibold text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/video/${video.video_id}`)} >
                    Video {i + 1}
                  </div>
                  <p className="text-muted mb-0">
                    Added:{" "}
                    {new Date(video.added_at).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}

          </div>
        </div>

      </div>
    ))}

  </div>
</div>

  </>
}

export default Mycourses
