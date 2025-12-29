import { createContext, useState } from "react"
import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import ViewMore from "./pages/ViewMore"
// import Login from "./pages/Login"
import About from "./pages/About"
<<<<<<< HEAD
// import Register from "./pages/Register"
=======
import GetAllVideos from './pages/GetAllVideos'
import UpdateVideos from './pages/UpdateVideos'
import AddVideo from "./pages/AddVideo"
>>>>>>> main
import { ToastContainer } from 'react-toastify'
import RegisterCourse from "./pages/RegisterCourse"
import Mycourses from "./pages/Mycourses"
// import {  useState} from "react"
// import { LoginContext } from "./pages/LoginContext"
import Login from "./pages/Login"


export const LoginContext = createContext()

// functional components
function App() {
<<<<<<< HEAD
    // const [LoginStatus, setLoginStatus] = useState(false)
  return (
    <>
     {/* <LoginContext.Provider value={{LoginStatus, setLoginStatus }}> */}
        <Routes>   
          {/* <Route path="/login" element={<Login/>} />  
          <Route path="/register" element={<Register />} />     */}
          <Route path="/view-more/:course_id" element={<ViewMore />} />
          <Route path="/*" element={<Home /> } />
=======
  // const [loginStatus, setLoginStatus] = useState(false)
  return (
    <>  
        
        <Routes>          
          <Route path="*" element={<Home /> } />
          {/* <LoginContext.Provider value={{loginStatus, setLoginStatus}}> */}
            <Route path='/Login' element={<Login/>} />
          {/* </LoginContext.Provider> */}
>>>>>>> main
          <Route path="/about" element={<About /> } />
          <Route path ="/registercourse" element={<RegisterCourse/>}/>
          <Route path="/mycourses" element={< Mycourses />}/>
          <Route path='/GetAllVideos' element={<GetAllVideos/> } />
          <Route path="/update-video/:course_id/:video_id" element={<UpdateVideos />} />
          <Route path='/AddVideo' element={<AddVideo/>} />
          
        </Routes>
<<<<<<< HEAD
        {/* </LoginContext.Provider> */}
=======

>>>>>>> main
      <ToastContainer />
    </>
  )
}

export default App
