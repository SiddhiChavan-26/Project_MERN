const express = require('express')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

const config = require('../utils/config')
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()

router.post('/signUp',(req,res) =>{
    console.log("signup")
    const{email,password,role} = req.body
    const hashedPassword = crypto.SHA256(password).toString()
    const sql = "INSERT INTO users(email,password,role) VALUES(?,?,?)"
    pool.query(sql,[email,hashedPassword,role],(error,data)=>{
        res.send(result.createResult(error, data))
    })
})
router.post('/login',(req,res) => {
    const{email,password} = req.body
    const hashedPassword = crypto.SHA256(password).toString()
    const sql = `SELECT * FROM users WHERE email=? AND password = ? `
    pool.query(sql,[email,hashedPassword],(error,data)=>{
        if(error)
        {
            res.send(result.createResult(error))
        }else if(data.length==0) 
            {
                res.send(result.createResult("incorrect email and password"))   
            }else{
                const user = data[0];
                console.log("user", user);

                // create the JWT token
                // inside the payload store the data that needs to be encryted into the token
                const payload = {
                    email: user.email,
                    role: user.role,
                };
                
                const token = jwt.sign(payload, config.SECRET);
                const userData = {
                    name: user.name,
                    mobile: user.mobile,
                    token,
                };
                res.send(result.createResult(null, userData));
            } 
    })
});

router.get('/all-active-courses',(req,res) => {
   // const{course_name,DESCRIPTION,fees,start_date,end_date,video_expire_days} = req.body
    const sql = "SELECT * FROM courses WHERE end_date >= CURRENT_DATE"
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })
}) 


module.exports = router