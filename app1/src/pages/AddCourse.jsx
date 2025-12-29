import React, { useState } from "react";
import { newCourse } from "../service/courseService";
import { toast } from "react-toastify";

export default function AddCourse() {
  const [course_Name, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [fees, setFees] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [expireDays, setExpireDays] = useState("");

  const course = async () => {
    if (course_Name === "")
      toast.warn("Course name must be entered");
    else if (description === "")
      toast.warn("Description must be entered");
    else if (fees === "")
      toast.warn("Fees must be entered");
    else if (startDate === "")
      toast.warn("Start date must be entered");
    else if (endDate === "")
      toast.warn("End date must be entered");
    else if (expireDays === "")
      toast.warn("Expire days must be entered");
    else {
      const result = await newCourse({
        course_Name,description,fees,startDate,endDate,expireDays,
      });

      if (result.status === "success") {
        toast.success("New course added successfully");
      } else {
        toast.error(result.error);
      }
    }
  };

  return (
    <div className="container col-md-6 mt-4">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Add New Course</h3>

        <label>Course Name</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter course name"
          onChange={(e) => setCourseName(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Fees</label>
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter course fees"
          onChange={(e) => setFees(e.target.value)}
        />

        <label>Start Date</label>
        <input
          type="date"
          className="form-control mb-3"
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label>End Date</label>
        <input
          type="date"
          className="form-control mb-3"
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label>Video Expire Days</label>
        <input
          type="number"
          className="form-control mb-4"
          placeholder="Enter number of days"
          onChange={(e) => setExpireDays(e.target.value)}
        />

        <button className="btn btn-info text-white w-100" onClick={course}>
          Add Course
        </button>
      </div>
    </div>
  );
}
