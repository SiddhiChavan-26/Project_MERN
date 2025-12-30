const express = require('express');
const cors = require('cors');

const coursesRouter = require('./routes/courses');
const userRouter = require('./routes/users');
const videosRouter = require('./routes/videos');
const studentRouter = require("./routes/student");

const { authUser, checkAuthorization } = require('./utils/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// app.use(authUser); // uncomment if you want authentication globally

// Routes
app.use('/course', coursesRouter);
app.use('/user', userRouter);
app.use('/videos', videosRouter);
app.use("/student", studentRouter);

// Start server
app.listen(4000, 'localhost', () => {
    console.log("Server started at port 4000");
});
