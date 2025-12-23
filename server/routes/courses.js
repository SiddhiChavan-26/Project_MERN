const express = require('express')
const pool = require('../db/pool')
const createResult = require('../utils/result')

const router = express.Router()


router.get('/all-courses', (request, response) => {
  const { startDate, endDate } = request.query
  const sql = `SELECT * FROM courses WHERE startDate >= ? AND endDate <= ?`
  pool.query(sql, [startDate, endDate], (error, data) => {
    response.send(createResult(error, data))
  })
})

router.post('/add', (request, response) => {
  const {courseName,description,fees,startDate,endDate,videoExpireDays} = request.body

  const sql = `INSERT INTO courses(courseName, description, fees, startDate, endDate, videoExpireDays)
    VALUES (?, ?, ?, ?, ?, ?) `
  pool.query(sql,[courseName, description, fees, startDate, endDate, videoExpireDays],
    (error, data) => {
      response.send(createResult(error, data))
    }
  )
})

router.put('/update/:courseId', (request, response) => {
  const { courseId } = request.params
  const {courseName,description,fees,startDate,endDate,videoExpireDays} = request.body

  const sql = `UPDATE courses SET courseName=?, description=?, fees=?, startDate=?, endDate=?, videoExpireDays=?
    WHERE courseId=? `
    pool.query(sql,[courseName, description, fees, startDate, endDate, videoExpireDays, courseId],
    (error, data) => {
      response.send(createResult(error, data))
    }
  )
})


router.delete('/delete/:courseId', (request, response) => {
  const { courseId } = request.params
  const sql = `DELETE FROM courses WHERE courseId=?`
  pool.query(sql, [courseId], (error, data) => {
    response.send(createResult(error, data))
  })
})

module.exports = router
