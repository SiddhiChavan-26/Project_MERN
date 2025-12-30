

import { ToastContainer } from "react-toastify";
import AllCourses from "./pages/AllCourses";
import UpdateCourse from "./pages/updateCourse";
import AddCourse from "./pages/AddCourse"
import { createContext, useState } from "react"
import { Navigate, Route, Routes } from "react-router"
import { ToastContainer } from 'react-toastify'
import About from "./pages/About"
import GetAllVideos from './pages/GetAllVideos'
import UpdateVideos from './pages/UpdateVideos'
import AddVideo from "./pages/AddVideo"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { LoginContext } from "./pages/LoginContext"
import RegisterCourse from "./pages/RegisterCourse"
import Mycourses from "./pages/Mycourses"

import Home from "./pages/Home"
import ViewMore from './pages/ViewMore';



function App() {

    const [LoginStatus, setLoginStatus] = useState(false)   

  
  return (
    <>  
        <LoginContext.Provider value={{LoginStatus, setLoginStatus}}> 

        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path="/" element={<Home /> } />
          <Route path='/Login' element={<Login/>} />
          <Route path="/about" element={<About /> } />
          <Route path="/register" element={<Register />} />

          <Route path="/view-more/:course_id" element={<ViewMore />} />  

          <Route path ="/registercourse" element={<RegisterCourse/>}/>
          <Route path="/mycourses" element={< Mycourses />}/>

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