const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')
const {checkAuthorization} = require('../utils/auth')

const router = express.Router()

router.get('/all-courses', (request, response) => {
  const { start_date, end_date } = request.body
  const sql = `SELECT * FROM courses WHERE start_date >= ? AND end_date <= ?`
  pool.query(sql, [start_date, end_date], (error, data) => {
    response.send(result.createResult(error, data))
  })
})

//get course code for update video
router.get('/getCourse/:course_id', (req, res) =>{
    const {course_id} = req.params
    const sql = `SELECT * FROM courses WHERE course_id = ?`;

    pool.query(sql, [course_id], (error, data)=>{
        res.send(result.createResult(error, data))
    })
})

router.post('/add', checkAuthorization, (request, response) => {
  const {course_name,description,fees,start_date,end_date,video_expire_days} = request.body

  const sql = `INSERT INTO courses(course_name, description, fees, start_date, end_date, video_expire_days) VALUES (?, ?, ?, ?, ?, ?) `
  pool.query(sql,[course_name, description, fees, start_date, end_date, video_expire_days],(error, data) => {
      response.send(result.createResult(error, data))
    }
  )
})


router.put('/update/:course_id', checkAuthorization,(request, response) => {
  const { course_id } = request.params
  const {course_name,description,fees,start_date,end_date,video_expire_days} = request.body

  const sql = `UPDATE courses SET course_name=?, description=?, fees=?, start_date=?, end_date=?, video_expire_days=? WHERE course_id=? `
    pool.query(sql,[course_name, description, fees, start_date, end_date, video_expire_days, course_id],(error, data) => {
      response.send(result.createResult(error, data))
    }
  )
})


router.delete('/delete/:course_id', (request, response) => {
  const { course_id } = request.params
  const sql = `DELETE FROM courses WHERE course_id=?`
  pool.query(sql, [course_id], (error, data) => {
    response.send(result.createResult(error, data))
  })
})

//to get course id by course name to Add video
router.get('/getCourseByName/:course_name', (req, res) => {
  const {course_name} = req.params
  const sql = `SELECT * FROM courses WHERE course_name = ?`
  pool.query(sql, [course_name], (error, data) =>{
    res.send(result.createResult(error, data))
  })
})

router.get("/viewmore", (req, res) => {
  const { course_id } = req.query
  const sql = "SELECT course_name, start_date, end_date, fees FROM courses WHERE course_id = ?"
  pool.query(sql, [course_id], (error, data) => {
    res.send(result.createResult(error, data))
   
  })
})




module.exports = router
