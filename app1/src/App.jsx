import {  useState } from "react"
import { Routes, Route} from "react-router";
import { ToastContainer } from "react-toastify";

import AllCourses from "./pages/AllCourses";
import UpdateCourse from "./pages/updateCourse";
import AddCourse from "./pages/AddCourse"

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




function App() {

    const [LoginStatus, setLoginStatus] = useState(false)   

  
  return (
    <>  
        <LoginContext.Provider value={{LoginStatus, setLoginStatus}}> 

        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path="/view-more/:course_id" element={<ViewMore />} />       
         <Route path="/" element={<Home /> } />
          <Route path='/Login' element={<Login/>} />
          <Route path="/about" element={<About /> } />
          <Route path="/register" element={<Register />} />

          <Route path="/viewmore/:course_id" element={<ViewMore />} />  

          <Route path ="/registercourse/:course_id" element={<RegisterCourse/>}/>
          <Route path="/mycourses" element={< Mycourses />}/>
          <Route path="/video/:video_id" element={<VideoDisplay/>}/>

          <Route path='/GetAllVideos' element={<GetAllVideos/> } />
          <Route path="/update-video/:course_id/:video_id" element={<UpdateVideos />} />
          <Route path='/AddVideo' element={<AddVideo/>} />
          <Route path='/ChangePassword' element={<ChangePassword/>} />
    
          <Route path="/AddCourse" element={<AddCourse/>} />
          <Route path="/AllCourses" element={<AllCourses/>} />
          <Route path="/update-course/:id" element={<UpdateCourse />} />

          </Routes>
        </LoginContext.Provider>

      <ToastContainer />
    </>
  );
}

export default App;