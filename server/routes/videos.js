const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')
const { checkAuthorization } = require('../utils/auth')

const router = express.Router()


router.get('/all_videos/:course_id', (req, res) => {
    const {course_id} = req.params
    const {email, role} = req.headers

    if(role === 'admin'){
        const sql = `SELECT * FROM videos WHERE course_id = ?`
        pool.query(sql, [course_id], (error, data) => {
            res.send(result.createResult(error, data))
        })
    }
    else if(role === 'student'){
        const checkSql = `SELECT * FROM students WHERE email = ? AND course_id = ?`

        pool.query(checkSql, [email, course_id], (error, data) => {
            if(error){
                return res.send(result.createResult(error))
            }
            if(data.length === 0){
                return res.send(result.createResult("You are not registered to this course"))
            }

            const videoSql = `SELECT * FROM videos WHERE course_id = ?`
            pool.query(videoSql, [course_id], (error, data) => {
                return res.send(result.createResult(error, data))
            })
        })
        
    }
})

router.post('/add', checkAuthorization, (req, res) => {
    const {course_id, title, youtube_url, description} = req.body
    const sql = `INSERT INTO videos (course_id, title, youtube_url, description) VALUES (?,?,?,?)`
    pool.query(sql , [course_id, title, youtube_url, description], (error , data) => {
        res.send(result.createResult(error, data))
    })

})

//request parameter(write parameters in the URL)
router.put('/update/:video_id', checkAuthorization, (req, res) => {
    const {video_id} = req.params
    const {course_id, title, youtube_url, description} = req.body
    const sql = `UPDATE videos SET course_id = ?, title = ?, youtube_url = ?, description =? WHERE video_id = ?`
    pool.query(sql, [course_id, title, youtube_url, description, video_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

//delete video on video_id
router.delete('/delete/:video_id', checkAuthorization, (req, res) => {
    const {video_id} = req.params
    const sql = `DELETE FROM videos WHERE video_id = ?`
    pool.query(sql , [video_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

//get all enrolled students to the course using the course id 
//query parameter
router.get('/enrolled-students',checkAuthorization, (req, res) => {
    const {course_id} = req.query
    const sql = `SELECT * FROM students WHERE course_id = ?`
    pool.query(sql, [course_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router