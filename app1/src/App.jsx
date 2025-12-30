import { createContext, useState } from "react"
import { Navigate, Route, Routes } from "react-router"

import Home from "./pages/Home"
import ViewMore from "./pages/ViewMore"
import About from "./pages/About"

// import Register from "./pages/Register"

import GetAllVideos from './pages/GetAllVideos'
import UpdateVideos from './pages/UpdateVideos'
import AddVideo from "./pages/AddVideo"

import { ToastContainer } from 'react-toastify'
import RegisterCourse from "./pages/RegisterCourse"
import Mycourses from "./pages/Mycourses"
// import {  useState} from "react"
// import { LoginContext } from "./pages/LoginContext"
import Login from "./pages/Login"


export const LoginContext = createContext()

// functional components
function App() {
    // const [LoginStatus, setLoginStatus] = useState(false)
  return (
    <>  
        
        <Routes>          
          <Route path="*" element={<Home /> } />
          {/* <LoginContext.Provider value={{loginStatus, setLoginStatus}}> */}
            <Route path='/Login' element={<Login/>} />
            <Route path="/register" element={<Register />} />
          
        
          {/* </LoginContext.Provider> */}
          <Route path="/view-more/:course_id" element={<ViewMore />} />
          <Route path="/about" element={<About /> } />
          <Route path ="/registercourse" element={<RegisterCourse/>}/>
          <Route path="/mycourses" element={< Mycourses />}/>
          <Route path='/GetAllVideos' element={<GetAllVideos/> } />
          <Route path="/update-video/:course_id/:video_id" element={<UpdateVideos />} />
          <Route path='/AddVideo' element={<AddVideo/>} />
          
        </Routes>
        {/* </LoginContext.Provider> */}


      <ToastContainer />
    </>
  )
}

export default App
