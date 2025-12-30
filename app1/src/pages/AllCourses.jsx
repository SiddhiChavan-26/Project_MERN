import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { get_All_Courses, deleteCourse } from "../service/coursesService";

export default function AllCourses() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await get_All_Courses();
        if (res.status === 'success') setCourses(res.data);
    };

    const handleDelete = async (id) => {
        try {
            const result = await deleteCourse(id);
            toast.success("Course deleted successfully");

            await loadData();   // ✅ FIXED (refresh updated)

        } catch (err) {
            toast.error("Error deleting course");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Course Management</h2>
            <div className="table-responsive shadow-sm">
                <table className="table table-bordered table-hover align-middle text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Course Name</th>
                            <th>Description</th>
                            <th>Fees</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Expire</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.course_id}>
                                <td>{course.course_id}</td>
                                <td className="text-start fw-bold">{course.course_name}</td>
                                <td className="text-start">{course.description}</td>
                                <td>₹{course.fees}</td>
                                <td>{new Date(course.start_date).toLocaleDateString()}</td>
                                <td>{new Date(course.end_date).toLocaleDateString()}</td>
                                <td>{course.video_expire_days} Days</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-warning btn-sm fw-bold"
                                            onClick={() => navigate(`/update-course/${course.course_id}`)}
                                        >
                                            Update
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm fw-bold"
                                            onClick={() => handleDelete(course.course_id)}
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