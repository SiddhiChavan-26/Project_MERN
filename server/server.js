const express = require('express')

const studentRouter = require("./routes/student")
const app = express()

app.use(express.json())
app.use("/student",studentRouter)

app.listen(4000, 'localhost', () => {
    console.log("Server started at port 4000")
})