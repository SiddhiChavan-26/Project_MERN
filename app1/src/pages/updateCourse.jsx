import { useEffect, useState } from "react";
import { getCourseById, updateCourse } from "../service/courseService";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router";
import React from "react";
import NavbarSwitch from "../components/NavbarSwitch";


export default function UpdateCourse({ id, onBack }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    course_name: "",
    description: "",
    fees: "",
    start_date: "",
    end_date: "",
    video_expire_days: ""
  });

  useEffect(() => {
        const loadCourse = async () => {
        try {
          const res = await getCourseById(id);

          if (res.status !== "success") {
            toast.error(res.error || "Course not found");
            return;
          }

          const data = res.data;

          data.start_date = data.start_date?.split("T")[0];
          data.end_date = data.end_date?.split("T")[0];

          setCourse(data);

        } catch (err) {
          toast.error("Backend server unreachable");
          console.log(err);
        }
  };
    loadCourse();
  }, [id]);



  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await updateCourse(id, course);
      if (res.status === "success") {
        toast.success("Updated Successfully");
        onBack();
      } else {
        toast.error("Update failed");
      }
    } catch {
      toast.error("Server error - check backend token restrictions");
    }
  };

  return (
    <>
    <NavbarSwitch/>
    
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '90vh',
      width: '100%',
      padding: '20px'
    }}>
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '550px', borderRadius: '12px' }}>
        <h3 className="text-center mb-4 text-info">Update Course Details</h3>

        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label fw-bold">Course Name</label>
            <input 
              className="form-control"
              value={course.course_name}
              onChange={(e) => setCourse({ ...course, course_name: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea 
              className="form-control"
              rows="3"
              value={course.description}
              onChange={(e) => setCourse({ ...course, description: e.target.value })}
              required
            />
          </div>

          <div className="row mb-3">
            <div className="col">
              <label className="form-label fw-bold">Fees (₹)</label>
              <input 
                type="number" 
                className="form-control"
                value={course.fees}
                onChange={(e) => setCourse({ ...course, fees: e.target.value })}
                required
              />
            </div>
            <div className="col">
              <label className="form-label fw-bold">Expire Days</label>
              <input 
                type="number" 
                className="form-control"
                value={course.video_expire_days}
                onChange={(e) => setCourse({ ...course, video_expire_days: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <label className="form-label fw-bold">Start Date</label>
              <input 
                type="date" 
                className="form-control"
                value={course.start_date}
                onChange={(e) => setCourse({ ...course, start_date: e.target.value })}
                required
              />
            </div>
            <div className="col">
              <label className="form-label fw-bold">End Date</label>
              <input 
                type="date" 
                className="form-control"
                value={course.end_date}
                onChange={(e) => setCourse({ ...course, end_date: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-info text-white btn-lg">
              Save Changes
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={onBack}>
              Cancel & Back
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}