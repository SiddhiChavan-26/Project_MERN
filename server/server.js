const express = require('express')

const videosRouter = require('./routes/videos')
const studentRouter = require("./routes/student")

const app = express()


const userRouter = require('./routes/users')

app.use(express.json())
app.use('/user',userRouter)

app.use(express.json())

app.use('/videos', videosRouter)
app.use("/student",studentRouter)



app.listen(4000, 'localhost', () => {
    console.log("Server started at port 4000")
})