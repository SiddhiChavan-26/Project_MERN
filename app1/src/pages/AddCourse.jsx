import React, { useState } from "react";
import { newCourse } from "../service/coursesService";
import { toast } from "react-toastify";

export default function AddCourse() {
  const [course_name, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [fees, setFees] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [video_expire_days, setExpireDays] = useState("");


  const addCourse = async () => {

    if (!course_name) return toast.warn("Course name must be entered");
    if (!description) return toast.warn("Description must be entered");
    if (!fees) return toast.warn("Fees must be entered");
    if (!start_date) return toast.warn("Start date must be entered");
    if (!end_date) return toast.warn("End date must be entered");
    if (!video_expire_days) return toast.warn("Expire days must be entered");

    
    const body = {
      course_name,
      description,
      fees,
      start_date,
      end_date,
      video_expire_days,
    };

    try {
      const result = await newCourse(body);

      if (result.status === "success") {
        toast.success("Course Added Successfully");

        
        setCourseName("");
        setDescription("");
        setFees("");
        setStartDate("");
        setEndDate("");
        setExpireDays("");
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  return (
    <div className="container col-md-6 mt-4">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Add New Course</h3>

        <label>Course Name</label>
        <input
          className="form-control mb-3"
          value={course_name}
          onChange={(e) => setCourseName(e.target.value)}
        />

        <label>Description</label>
        <input
          className="form-control mb-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Fees</label>
        <input
          type="number"
          className="form-control mb-3"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
        />

        <label>Start Date</label>
        <input
          type="date"
          className="form-control mb-3"
          value={start_date}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label>End Date</label>
        <input
          type="date"
          className="form-control mb-3"
          value={end_date}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label>Video Expire Days</label>
        <input
          type="number"
          className="form-control mb-4"
          value={video_expire_days}
          onChange={(e) => setExpireDays(e.target.value)}
        />

        <button className="btn btn-info text-white w-100" onClick={addCourse}>
          Add Course
        </button>
      </div>
    </div>
  );
}