const express = require("express")

const result = require("../utils/result")
const pool = require("../db/pool")

const router = express.Router()

// Register student to course
router.post("/register_to_course", (req, res) => {
    const { course_id, email, name, mobile_no } = req.body;
    // Step 1: Check student in user table
    const checkUserSql = "SELECT * FROM users WHERE email = ?";
    pool.query(checkUserSql, [email], (error, userData) => {
        if (error) {
            return res.send(result.createResult(error));
        }
        // If student not found
        if (userData.length === 0) {
            return res.send(result.createResult("Student not found in user table"));
        }
        // Step 2: Register student to course
        const insertSql = `
            INSERT INTO students (course_id, email, name, mobile_no)
            VALUES (?, ?, ?, ?)
        `;
        pool.query(
            insertSql,
            [ course_id, email, name, mobile_no],
            (error, data) => {
                res.send(result.createResult(error, data));
            }
        );
    });
});


//Get all registered courses of student
router.get("/my_courses",(req,res)=>{
    const {name} =req.body
    const sql="SELECT c.course_name FROM courses c INNER JOIN students s ON c.course_id = s.course_id WHERE name=?"
    pool.query(sql,[name],(error,data)=>{
        res.send(result.createResult(error,data))
    })
                
})

//get all registered courses of a student along with valid videos -
router.get("/my-coursewith-videos",(req,res)=>{
    const {email} = req.body
    const sql="SELECT c.course_name, v.youtube_url FROM courses c INNER JOIN videos v ON c.course_id = v.course_id INNER JOIN students s ON s.course_id= c.course_id WHERE email=? AND (start_date + video_expire_days) < CURDATE()"
    pool.query(sql,[email],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

//Change password
router.put("/change-password",(req,res)=>{
    const {password, email}=req.body
    const sql = "UPDATE users SET password = ? WHERE email =?"
    pool.query(sql,[password,email],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

module.exports = router
