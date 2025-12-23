const express = require('express')

const coursesRouter= require('./routes/courses')
const userRouter = require('./routes/users')
const videosRouter = require('./routes/videos')
const studentRouter = require("./routes/student")

const app = express()

app.use(express.json())


app.use('/course',coursesRouter)
app.use('/user',userRouter)
app.use('/videos', videosRouter)
app.use("/student",studentRouter)


app.listen(4000, 'localhost', () => {
    console.log("Server started at port 4000")
})