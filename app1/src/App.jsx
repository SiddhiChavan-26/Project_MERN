import {  useState } from "react"
import { Routes, Route} from "react-router";
import { ToastContainer } from "react-toastify";

import AllCourses from "./pages/AllCourses";
import UpdateCourse from "./pages/UpdateCourse";
import AddCourse from "./pages/AddCourse";

import About from "./pages/About"

import ViewMore from "./pages/ViewMore"
import GetAllVideos from './pages/GetAllVideos'
import UpdateVideos from './pages/UpdateVideos'
import AddVideo from "./pages/AddVideo"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"

import { LoginContext } from "./pages/LoginContext"
import RegisterCourse from "./pages/RegisterCourse"
import Mycourses from "./pages/Mycourses"
import VideoDisplay from "./pages/VideoDisplay"
import ChangePassword from "./pages/ChangePassword";
import { Navigate } from "react-router";

function App() {

  const [LoginStatus, setLoginStatus] = useState(false);

  return (
    <>  
        <LoginContext.Provider value={{LoginStatus, setLoginStatus}}> 

        <Routes>
        <Route path='/home' element={<Home/>} />     
        <Route path="/" element={<Home /> } />
        <Route path='/Login' element={<Login/>} />
        <Route path="/about" element={<About /> } />
        <Route path="/register" element={<Register />} />
          <Route path="/viewmore/:course_id" element={LoginStatus ? <ViewMore /> : <Navigate to = '/' /> } />  

          <Route path ="/registercourse/:course_id" element={LoginStatus ? <RegisterCourse/> : <Navigate to = '/' />}/>
          <Route path="/mycourses" element={LoginStatus ? < Mycourses /> : <Navigate to = '/' />}/>
          <Route path="/video/:video_id" element={LoginStatus ? <VideoDisplay/> : <Navigate to = '/' />}/>

          <Route path='/GetAllVideos' element={LoginStatus ? <GetAllVideos/> : <Navigate to = '/' />} />
          <Route path="/update-video/:course_id/:video_id" element={LoginStatus ? <UpdateVideos /> : <Navigate to = '/' />} />
          <Route path='/AddVideo' element={LoginStatus ? <AddVideo/> : <Navigate to = '/' />} />
          <Route path='/ChangePassword' element={LoginStatus ? <ChangePassword/> : <Navigate to = '/' />} />
    
          <Route path="/AddCourse" element={LoginStatus ? <AddCourse/> : <Navigate to = '/' />}/>
          <Route path="/AllCourses" element={LoginStatus ? <AllCourses/> : <Navigate to = '/' />} />
          <Route path="/update-course/:id" element={LoginStatus ? <UpdateCourse />  : <Navigate to = '/' />} />

          </Routes>
        </LoginContext.Provider>

      <ToastContainer />
    </>
  );
}

export default App;
