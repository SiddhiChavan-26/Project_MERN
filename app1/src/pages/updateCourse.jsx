import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById, updateCourse } from "../service/courseService";
import { toast } from "react-toastify";

export default function UpdateCourse() {
  const { course_id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    course_name: "",
    description: "",
    fees: "",
    start_date: "",
    end_date: "",
    video_expire_days: "",
  });

  // Load Course Data
  useEffect(() => {
    const fetch = async () => {
      const res = await getCourseById(course_id);
      if (res.status === "success") {
        setCourse(res.data);
      } else {
        toast.error("Failed to load course");
      }
    };
    fetch();
  }, [course_id]);

  // Update Course
  const onUpdate = async (e) => {
    e.preventDefault();

    const res = await updateCourse(course_id, course);

    if (res.status === "success") {
      toast.success("Course Updated Successfully!");
      navigate("/courses");
    } else {
      toast.error("Update Failed!");
    }
  };

  const formatInputDate = (str) => (str ? str.split(/[ T]/)[0] : "");

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div
        className="card shadow-lg p-4 bg-white border-0"
        style={{ width: "100%", maxWidth: "500px", borderRadius: "12px" }}
      >
        <h2 className="text-center mb-4 fw-light">Update Course</h2>

        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-muted">
              Course Name
            </label>
            <input
              type="text"
              className="form-control"
              value={course.course_name}
              onChange={(e) =>
                setCourse({ ...course, course_name: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-muted">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              value={course.description}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-muted">Fees</label>
            <input
              type="number"
              className="form-control"
              value={course.fees}
              onChange={(e) =>
                setCourse({ ...course, fees: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-muted">
              Start Date
            </label>
            <input
              type="date"
              className="form-control"
              value={formatInputDate(course.start_date)}
              onChange={(e) =>
                setCourse({ ...course, start_date: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-muted">
              End Date
            </label>
            <input
              type="date"
              className="form-control"
              value={formatInputDate(course.end_date)}
              onChange={(e) =>
                setCourse({ ...course, end_date: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-muted">
              Video Expire Days
            </label>
            <input
              type="number"
              className="form-control"
              value={course.video_expire_days}
              onChange={(e) =>
                setCourse({
                  ...course,
                  video_expire_days: e.target.value,
                })
              }
            />
          </div>

          <button
            type="submit"
            className="btn w-100 text-white fw-bold py-2 mt-2"
            style={{ backgroundColor: "#00d2ff", border: "none" }}
          >
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
}
