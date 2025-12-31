import React, { useState } from "react";
import { newCourse } from "../service/courseService";
import { toast } from "react-toastify";

export default function AddCourse() {
  const [course_name, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [fees, setFees] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [video_expire_days, setExpireDays] = useState("");

  const addCourse = async () => {
    // Validation
    if (!course_name || !description || !fees || !start_date || !end_date || !video_expire_days) {
      return toast.warn("Please fill all fields");
    }

    const body = {
      course_name,
      description,
      fees,
      start_date,
      end_date,
      video_expire_days,
    };

    try {
      // API call: ensure your service/courseService.js doesn't crash without a token
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
      toast.error("Server error - check if API allows access without token");
    }
  };

  return (
    /* STYLING FIX: inline styles to center the form on the page */
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh', // Centers vertically
      width: '100%'
    }}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '600px' }}>
        <h3 className="text-center mb-4">Add New Course</h3>

        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            value={course_name}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Fees</label>
            <input type="number" className="form-control" value={fees} onChange={(e) => setFees(e.target.value)} />
          </div>
          <div className="col">
            <label className="form-label">Expire Days</label>
            <input type="number" className="form-control" value={video_expire_days} onChange={(e) => setExpireDays(e.target.value)} />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <label className="form-label">Start Date</label>
            <input type="date" className="form-control" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="col">
            <label className="form-label">End Date</label>
            <input type="date" className="form-control" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>

        <button className="btn btn-success w-100 mb-2" onClick={addCourse}>Add Course</button>
      </div>
    </div>
  );
}