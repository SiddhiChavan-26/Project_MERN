const express = require('express')
const crypto = require('crypto-js')

const pool = require('../db/pool')
const result = require('../utils/result')
const router = express.Router()

router.post('/signUp',(req,res) =>{
    const{email,password,role} = req.body
    const hashedPassword = crypto.SHA256(password).toString()
    const sql = "INSERT INTO users(email,password,role) VALUES(?,?,?)"
    pool.query(sql,[email,hashedPassword,role],(error,data)=>{
        res.send(result.createResult(error, data))
    })
})
router.post('/login',(req,res) => {
    const{email,password,role} = req.body
    const hashedPassword = crypto.SHA256(password).toString()
    const sql = `SELECT * FROM users WHERE email=? AND password = ? `
    pool.query(sql,[email,hashedPassword,role],(error,data)=>{
        if(error)
        {
            res.send(result.createResult(error))
        }else if(data.length==0) 
            {
                res.send(result.createResult("incorrect email and password"))   
            }else{
                res.send(result.createResult(null,data))
            } 
    })
});

router.get('/course/all-active-courses',(req,res) => {
   // const{course_name,DESCRIPTION,fees,start_date,end_date,video_expire_days} = req.body
    const sql = "SELECT * FROM courses WHERE end_date >= CURRENT_DATE"
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })
}) 


module.exports = router