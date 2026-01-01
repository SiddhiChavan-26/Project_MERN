const express = require("express")
const crypto = require('crypto-js')
const result = require("../utils/result")
const pool = require("../db/pool")
const { checkAuthorization } = require("../utils/auth")

const router = express.Router()

// Register student to course
router.post("/register_to_course/:course_id", (req, res) => {
    const {  email, name, mobile_no } = req.body;
    const {course_id} =req.params
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
        const insertSql = `INSERT INTO students (course_id,email, name, mobile_no) VALUES (?, ?, ?, ?)`;
        pool.query(insertSql,[course_id,email, name, mobile_no],(error, data) => {
                res.send(result.createResult(error, data));
            }
        );
    });
});

// //register student to course (without login checking)
// router.post("/register_to_course",(req,res)=>{
//     const { course_id, email, name, mobile_no } = req.body
//     const Sql = `INSERT INTO students( course_id, email, name, mobile_no) VALUES (?, ?, ?, ?)`
//     pool.query(Sql,[course_id, email, name, mobile_no],(error, data) => {
//                 res.send(result.createResult(error, data));
//             }
//         );
// })

//Get all registered courses of student
router.get("/my_courses/:name",(req,res)=>{
    console.log("req.params ", req.params);
    const {name} = req.params
    console.log("name: ", name);
    const sql="SELECT c.course_name FROM courses c INNER JOIN students s ON c.course_id = s.course_id WHERE name=?"
    pool.query(sql,[name],(error,data)=>{
        console.log(data)
        res.send(result.createResult(error,data))
    })
                
})

//get all registered courses of a student along with valid videos -
router.get("/my-coursewith-videos/:email",(req,res)=>{
    const {email} = req.params
    const sql="SELECT c.course_name, c.start_date, c.end_date,v.video_id, v.added_at, v.youtube_url FROM courses c INNER JOIN videos v ON c.course_id = v.course_id INNER JOIN students s ON s.course_id= c.course_id WHERE email=? AND (start_date + video_expire_days) < CURDATE()"
    pool.query(sql,[email],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

//Change password
router.put("/change-password",(req,res)=>{
    const {password, email}=req.body
    const hashedPassword = crypto.SHA256(password).toString()
    const sql = "UPDATE users SET password = ? WHERE email =?"
    pool.query(sql,[hashedPassword,email],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})
//display video api
router.get("/video/:video_id",(req, res) =>{
    const { video_id } = req.params;
    const sql = `SELECT title, youtube_url, added_at, description FROM videos WHERE video_id = ?`;
    pool.query(sql, [video_id], (error, data) => {
    res.send(result.createResult(error, data[0]));
  });

})

//get all students
router.get("/getAllstudents",checkAuthorization,(req,res)=>{
    const sql= `SELECT s.reg_no, s.name, s.email, c.course_name, s.mobile_no FROM students s INNER JOIN courses c ON s.course_id = c.course_id `
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error, data))
    })
})
module.exports = router
