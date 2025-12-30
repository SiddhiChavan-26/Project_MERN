const express = require('express');
const pool = require('../db/pool');
const result = require('../utils/result');

const router = express.Router();

// 1. GET all courses
router.get('/all-courses', (req, res) => {
  const sql = `SELECT * FROM courses`;
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

// 2. ADD new course
router.post('/add', (request, response) => {
  const { course_name, description, fees, start_date, end_date, video_expire_days } = request.body;

  const sql = `INSERT INTO courses(course_name, description, fees, start_date, end_date, video_expire_days)
               VALUES (?, ?, ?, ?, ?, ?)`;

  pool.query(
    sql,
    [course_name, description, fees, start_date, end_date, video_expire_days],
    (error, data) => {
      response.send(result.createResult(error, data));
    }
  );
});

// 3. GET single course by ID
router.get('/getCourse/:course_id', (req, res) => {
  const { course_id } = req.params;

  const sql = `SELECT * FROM courses WHERE course_id = ?`;
  pool.query(sql, [course_id], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

// 4. UPDATE course
router.put('/update/:course_id', (req, res) => {
  const { course_id } = req.params;
  const { course_name, description, fees, start_date, end_date, video_expire_days } = req.body;

  const sql = `UPDATE courses
               SET course_name=?, description=?, fees=?, start_date=?, end_date=?, video_expire_days=?
               WHERE course_id=?`;

  pool.query(
    sql,
    [course_name, description, fees, start_date, end_date, video_expire_days, course_id],
    (error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});

// 5. GET details for "view more"
router.get('/details/:course_id', (req, res) => {
  const { course_id } = req.params;

  const sql = `SELECT * FROM courses WHERE course_id = ?`;

  pool.query(sql, [course_id], (error, data) => {
    res.send(result.createResult(error, data ? data[0] : null));
  });
});

// 6. DELETE course
router.delete("/delete/:courseId", (req, res) => {
  const { courseId } = req.params;

  const sql = "DELETE FROM courses WHERE course_id = ?";

  pool.query(sql, [courseId], (err, data) => {
    if (err) {
      return res.send(result.createResult(err));
    }
    res.send(result.createResult(null, data));
  });
});

// 7. GET course by name
router.get('/getCourseByName/:course_name', (req, res) => {
  const { course_name } = req.params;

  const sql = `SELECT * FROM courses WHERE course_name = ?`;

  pool.query(sql, [course_name], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

// 8. View more by course_id
router.get("/viewmore", (req, res) => {
  const { course_id } = req.query;

  const sql = "SELECT course_name, start_date, end_date, fees FROM courses WHERE course_id = ?";

  pool.query(sql, [course_id], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

module.exports = router;
