const express = require('express');
const pool = require('../db/pool');
const result = require('../utils/result');
const { checkAuthorization } = require('../utils/auth');

const router = express.Router();



router.get('/all-courses', (req, res) => {
  const sql = `SELECT * FROM courses`;
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});



router.get('/details/:course_id', (req, res) => {
  const { course_id } = req.params;

  const sql = `SELECT * FROM courses WHERE course_id = ?`;
  pool.query(sql, [course_id], (error, data) => {
    res.send(result.createResult(error, data ? data[0] : null));
  });
});


router.post('/add', checkAuthorization, (req, res) => {
  const { course_name, description, fees, start_date, end_date, video_expire_days } = req.body;

  const sql = `INSERT INTO courses(course_name, description, fees, start_date, end_date, video_expire_days)
               VALUES (?, ?, ?, ?, ?, ?)`;

  pool.query(sql,[course_name, description, fees, start_date, end_date, video_expire_days],(error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});


router.put('/update/:course_id',checkAuthorization, (req, res) => {
  const { course_id } = req.params;

  const { course_name, description, fees, start_date, end_date, video_expire_days } = req.body;

  const sql = `UPDATE courses SET course_name = ?,description = ?,fees = ?,start_date = ?,end_date = ?,video_expire_days = ? `

  pool.query(sql,[course_name, description, fees, start_date, end_date, video_expire_days, course_id],(error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});

router.delete('/delete/:course_id', checkAuthorization, (req, res) => {
  const { course_id } = req.params;

  const sql = `DELETE FROM courses WHERE course_id = ?`;

  pool.query(sql, [course_id], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

module.exports = router;
