const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()


router.get('/all_videos', (req, res) => {
    const course_id = req.body
    const sql = `SELECT * FROM videos WHERE course_id = ?`
    pool.query(sql, [course_id], (error, data) => {
        res.send(createResult(error, data))
        // console.log(data);
    })
})

router.post('/add', (req, res) => {
    const {course_id, title, youtube_url, description} = req.body
    const sql = `INSERT INTO VIDEOS(course_id, title, youtube_url, description) VALUES (?,?,?,?)`
    pool.query(sql , [course_id, title, youtube_url, description], (error , data) => {
        res.send(createResult(error, data))
    })

})

//request parameter(write parameters in the URL)
router.put('/update/:video_id', (req, res) => {
    const video_id = req.params.video_id
    const {course_id, title, youtube_url, description} = req.body
    const sql = `UPDATE videos SET course_id = ?, title = ?, youtube_url = ?, description =? WHERE video_id = ?`
    pool.query(sql, [course_id, title, youtube_url, description, video_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

//delete video on video_id
router.delete('/delete/:video_id', (req, res) => {
    const video_id = req.params.video_id
    const sql = `DELETE FROM videos WHERE video_id = ?`
    pool.query(sql , [video_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router