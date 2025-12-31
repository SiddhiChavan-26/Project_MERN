import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { get_All_Courses, deleteCourse } from "../service/coursesService";
import NavbarSwitch from "../components/NavbarSwitch";

export default function AllCourses() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        const loadData = async () => {
            try {
                const res = await get_All_Courses();
                const body = res.data;
                const data =
                    body?.data ||
                    body?.courses ||
                    body?.result ||
                    body ||
                    [];

                if (Array.isArray(data)) {
                    setCourses(data);
                } else {
                    console.log("API Response:", body);
                    toast.error("Invalid API format");
                }

            } catch (error) {
                console.error("Fetch Error:", error);
                toast.error("Network error while fetching courses");
            }
        };

        loadData();
    }, []);

   


    const handleDelete = async (id) => {
        try {
            await deleteCourse(id);
            toast.success("Course deleted successfully");
            setCourses(prev => prev.filter(c => c.course_id !== id));
            // loadData();
        } catch (err) {
            console.log(err)
            toast.error("Error deleting course");
        }
    };

    return (
        <>
        <NavbarSwitch/>
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
        </>
    );

}