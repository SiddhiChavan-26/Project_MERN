import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { LoginContext } from "./pages/LoginContext";

// Page Components
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AllCourses from "./pages/AllCourses";
import UpdateCourse from "./pages/UpdateCourse";
import AddCourse from "./pages/AddCourse";

import GetAllVideos from "./pages/GetAllVideos";
import UpdateVideos from "./pages/UpdateVideos";
import AddVideo from "./pages/AddVideo";

import ChangePassword from "./pages/ChangePassword";

import RegisterCourse from "./pages/RegisterCourse";
import Mycourses from "./pages/Mycourses";
import ViewMore from "./pages/ViewMore";

function App() {

  const [LoginStatus, setLoginStatus] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ LoginStatus, setLoginStatus }}>
        <Routes>

          {/* Home & Auth Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />

          {/* Courses */}
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="/AllCourses" element={<AllCourses />} />
          <Route path="/update-course/:id" element={<UpdateCourse />} />
          <Route path="/view-more/:course_id" element={<ViewMore />} />

          {/* Students */}
          <Route path="/registercourse" element={<RegisterCourse />} />
          <Route path="/mycourses" element={<Mycourses />} />

          {/* Videos */}
          <Route path="/GetAllVideos" element={<GetAllVideos />} />
          <Route path="/update-video/:course_id/:video_id" element={<UpdateVideos />} />
          <Route path="/AddVideo" element={<AddVideo />} />

          {/* Settings */}
          <Route path="/ChangePassword" element={<ChangePassword />} />

        </Routes>
      </LoginContext.Provider>

      <ToastContainer />
    </>
  );
}

export default App;
