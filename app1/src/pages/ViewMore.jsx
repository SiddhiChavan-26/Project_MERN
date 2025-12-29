
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { viewmore } from "../service/commonServices";

function ViewMore() {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    viewmore(course_id).then(res => {
      setCourse(res.data[0]);
    });
  }, [course_id]);

  if (!course) return <h4>Loading...</h4>;

  return (
    <div className="container mt-4">
      <div className="row border p-3 shadow-sm rounded align-items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="col-md-4 text-center">
          <img
            src={course.image || "/images/course.jpg"}
            alt="course"
            className="img-fluid rounded"
            style={{ maxHeight: "220px" }}
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="col-md-8">
          <h2>{course.course_name}</h2>

          <p>
            <b>Start Date:</b>{" "}
            {new Date(course.start_date).toLocaleDateString("en-IN")}
          </p>

          <p>
            <b>End Date:</b>{" "}
            {new Date(course.end_date).toLocaleDateString("en-IN")}
          </p>

          <p><b>Fees:</b> ₹{course.fees}</p>

          <button className="btn btn-success">
            Register to Course
          </button>
        </div>

      </div>
    </div>
  );
}

export default ViewMore;

