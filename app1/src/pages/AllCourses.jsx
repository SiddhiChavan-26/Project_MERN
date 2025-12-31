import { useEffect, useState } from "react";
import { get_All_Courses, deleteCourse } from "../service/coursesService";
import { toast } from "react-toastify";

export default function AllCourses({ onEdit }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Accessing without token: ensure get_All_Courses doesn't force a token header
      const res = await get_All_Courses();
      if (res.status === "success") setCourses(res.data);
    } catch (error) {
      toast.error("Failed to load courses. Check backend access.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourse(id);
        toast.success("Course deleted successfully");
        loadData();
      } catch {
        toast.error("Error deleting course");
      }
    }
  };

  return (
    /* CENTERING WRAPPER: Centers the table horizontally and adds vertical spacing */
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      padding: '40px 20px',
      minHeight: '80vh' 
    }}>
      
      <div className="container shadow-lg p-4 bg-white rounded">
        <h2 className="text-center mb-4 text-primary">Course Management List</h2>
        
        <div className="table-responsive">
          <table className="table table-hover table-bordered text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Course</th>
                <th>Description</th>
                <th>Fees</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Expire</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <tr key={course.course_id}>
                    <td>{course.course_id}</td>
                    <td className="fw-bold">{course.course_name}</td>
                    <td className="text-truncate" style={{ maxWidth: '200px' }}>
                      {course.description}
                    </td>
                    <td className="text-success fw-bold">₹{course.fees}</td>
                    <td>{course.start_date}</td>
                    <td>{course.end_date}</td>
                    <td><span className="badge bg-info text-dark">{course.video_expire_days} days</span></td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button 
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => onEdit(course.course_id)}
                        >
                          Update
                        </button>

                        <button 
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(course.course_id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-muted p-5">No courses available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}