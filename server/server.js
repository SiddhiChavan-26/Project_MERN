const express = require('express')
const coursesRouter=express.Router()

const app = express()

app.use('/course',coursesRouter)

app.listen(4000, 'localhost', () => {
    console.log("Server started at port 4000")
})