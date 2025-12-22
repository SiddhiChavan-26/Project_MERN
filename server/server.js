const express = require('express')

const app = express()

const userRouter = require('./routes/users')

app.use(express.json())
app.use('/user',userRouter)

app.listen(4000, 'localhost', () => {
    console.log("Server started at port 4000")
})