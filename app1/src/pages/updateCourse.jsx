import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCourseById, updateCourse } from "../service/coursesService";


export default function UpdateCourse() {
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
    loadCourse();
  }, [id]);

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await updateCourse(id, course);

      if (res.status === "success") {
        toast.success("Course Updated Successfully!");
        navigate("/AllCourses");
      } else {
        toast.error(res.error || "Update failed");
      }
    } catch (err) {
      toast.error("Backend server unreachable");
      console.log(err);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "450px" }}>
        <h3 className="text-center mb-4">Update Course</h3>

        <form onSubmit={handleUpdate}>
          <label className="form-label">Course Name</label>
          <input className="form-control mb-3"
            value={course.course_name}
            onChange={(e) => setCourse({ ...course, course_name: e.target.value })}
          />

          <label className="form-label">Description</label>
          <textarea className="form-control mb-3"
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />

          <label className="form-label">Fees</label>
          <input className="form-control mb-3" type="number"
            value={course.fees}
            onChange={(e) => setCourse({ ...course, fees: e.target.value })}
          />

          <label className="form-label">Start Date</label>
          <input className="form-control mb-3" type="date"
            value={course.start_date}
            onChange={(e) => setCourse({ ...course, start_date: e.target.value })}
          />

          <label className="form-label">End Date</label>
          <input className="form-control mb-3" type="date"
            value={course.end_date}
            onChange={(e) => setCourse({ ...course, end_date: e.target.value })}
          />

          <label className="form-label">Video Expire Days</label>
          <input className="form-control mb-4" type="number"
            value={course.video_expire_days}
            onChange={(e) => setCourse({ ...course, video_expire_days: e.target.value })}
          />

          <button className="btn btn-info w-100 text-white fw-bold">
            Update Course
          </button>
        </form>
      </div>
     
    </div>
  );
}
