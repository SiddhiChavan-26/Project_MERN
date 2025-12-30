const express = require('express');
const pool = require('../db/pool');
const result = require('../utils/result');

const router = express.Router();


router.get('/all-courses', (request, response) => {
  const sql = `SELECT * FROM courses`;
  pool.query(sql, (error, data) => {
    response.send(result.createResult(error, data));
  });
});


router.post('/add', (request, response) => {
  const { course_name, description, fees, start_date, end_date, video_expire_days } = request.body;
  const sql = `INSERT INTO courses(course_name, description, fees, start_date, end_date, video_expire_days) VALUES (?, ?, ?, ?, ?, ?)`;
  pool.query(sql, [course_name, description, fees, start_date, end_date, video_expire_days], (error, data) => {
    response.send(result.createResult(error, data));
  });
});


router.put('/update/:course_id', (request, response) => {
  const { course_id } = request.params;
  const { course_name, description, fees, start_date, end_date, video_expire_days } = request.body;
  const sql = `UPDATE courses SET course_name=?, description=?, fees=?, start_date=?, end_date=?, video_expire_days=? WHERE course_id=?`;
  pool.query(sql, [course_name, description, fees, start_date, end_date, video_expire_days, course_id], (error, data) => {
    response.send(result.createResult(error, data));
  });
});


router.delete("/delete/:courseId", (req, res) => {
  const { courseId } = req.params;

  const deleteCourse = "DELETE FROM courses WHERE course_id = ?";

  pool.query(deleteCourse, [courseId], (err, result) => {
    if (err) {
      console.error("DELETE course ERROR:", err);
      return res.status(500).send({ error: "Failed to delete course" });
    }
    res.send({ status: "success", message: "Course and its students deleted successfully" });
  });
});



  
module.exports = router;