const express = require('express')
const videosRouter = require('./routes/videos')

const app = express()

app.use(express.json())
app.use('/videos', videosRouter)

app.listen(4000, 'localhost', () => {
    console.log("Server started at port 4000")
})