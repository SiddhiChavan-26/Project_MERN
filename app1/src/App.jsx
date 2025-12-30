import { createContext, useState } from "react"
import { Navigate, Route, Routes } from "react-router"
import { ToastContainer } from 'react-toastify'

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


// functional components
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
           <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About /> } />
          <Route path ="/registercourse" element={<RegisterCourse/>}/>
          <Route path="/mycourses" element={< Mycourses />}/>
          <Route path='/GetAllVideos' element={<GetAllVideos/> } />
          <Route path="/update-video/:course_id/:video_id" element={<UpdateVideos />} />
          <Route path='/AddVideo' element={<AddVideo/>} />
        </Routes>
         </LoginContext.Provider>

      <ToastContainer />
    </>
  )
}

export default App
