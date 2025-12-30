
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { viewmore } from "../service/commonServices";

function ViewMore() {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate()
  
  useEffect(()=>{
    console.log("useEffect called()");
    console.log(course);
    if(course_id){
    fetchCourse()}
  },[course_id])


  const fetchCourse =async ()=>{
    console.log("fetchcourse() called");
    const result =await viewmore(course_id)
    console.log("result:",result);
    if(result?.data?.length > 0){
      console.log("inside if");
      setCourse(result.data[0])
    }
    
  }
  
  if (!course) {
    return <h4 className="text-center mt-5">Loading...</h4>;
  }
  return (
    <div className="container mt-4">
      <div className="row border p-3 shadow-sm rounded align-items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="col-md-4 text-center">
          <img
            src={course.image || "/images/course.jpg"}
            alt="course"
            className="img-fluid rounded"
            style={{ maxHeight: "220px" }}
          />
        </div>

         <div className="col-md-8">
          <h2>{course.course_name}</h2>
          <p><b>Start:</b> {new Date(course.start_date).toLocaleDateString()}</p>
          <p><b>End:</b> {new Date(course.end_date).toLocaleDateString()}</p>
          <p><b>Fees:</b> ₹{course.fees}</p>
          <button className="btn btn-success"
          onClick={() => navigate(`/registercourse/${course_id}`)}>Register to Course</button>
        </div>

      </div>
    </div>
  );
}

export default ViewMore;

