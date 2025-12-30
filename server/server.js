const express = require('express')
const cors = require('cors')

const coursesRouter= require('./routes/courses')
const userRouter = require('./routes/users')
const videosRouter = require('./routes/videos')
const studentRouter = require("./routes/student")
const {authUser, checkAuthorization} = require('./utils/auth')

const app = express()
app.use(cors())
app.use(express.json())

//app.use(authUser)

app.use('/course',coursesRouter)
app.use('/user',userRouter)
app.use('/videos', videosRouter)
app.use("/student",studentRouter)


app.listen(4000, 'localhost', () => {
    console.log("Server started at port 4000")
})