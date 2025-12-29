import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get_All_Courses, delete_Course } from "../service/courseService";
import { ToastContainer, toast } from "react-toastify";

export default function AllCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { loadCourses(); }, []);
  const loadCourses = async () => {
    const result = await get_All_Courses();
    if (result && result.status === "success") {
      setCourses(result.data);
    }
  };
    const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      const result = await delete_Course(id);
      if (result && result.status === "success") {
        toast.success("Course deleted successfully!");
        setCourses(courses.filter((c) => c.course_id !== id));
      } else {
        toast.error(`Error: ${result.message || "Delete failed"}`);
      }
    }
  };
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString.split(/[ T]/)[0]);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };
  return (
    <div className="container mt-5">
      <ToastContainer />
      <h1 className="text-center mb-5 fw-light">All Courses</h1>
      <div className="table-responsive shadow-sm">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th className="text-start">Course Name</th>
              <th className="text-start">Description</th>
              <th>Fees</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Expire Days</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {courses.map((c) => (
              <tr key={c.course_id}>
                <td>{c.course_id}</td>
                <td className="text-start">{c.course_name}</td>
                <td className="text-start">{c.description}</td>
                <td>₹{c.fees}</td>
                <td>{formatDate(c.start_date)}</td>
                <td>{formatDate(c.end_date)}</td>
                <td>{c.video_expire_days}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                   
                    <button 
                      onClick={() => navigate(`/update-course/${c.course_id}`)}
                      className="btn btn-warning btn-sm fw-bold px-3"
                    >
                      Edit
                    </button>
                    
                    <button 
                      onClick={() => handleDelete(c.course_id)}
                      className="btn btn-danger btn-sm fw-bold px-3"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}