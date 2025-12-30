import {  useState } from "react"
import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import ViewMore from "./pages/ViewMore"
import Login from "./pages/Login"
import About from "./pages/About"
// import Register from "./pages/Register"
import GetAllVideos from './pages/GetAllVideos'
import UpdateVideos from './pages/UpdateVideos'
import AddVideo from "./pages/AddVideo"
import { ToastContainer } from 'react-toastify'
import { LoginContext } from "./pages/LoginContext"
import RegisterCourse from "./pages/RegisterCourse"
import Mycourses from "./pages/Mycourses"
import ChangePassword from "./pages/ChangePassword"


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
          <Route path="/about" element={<About /> } />
          <Route path ="/registercourse" element={<RegisterCourse/>}/>
          <Route path="/mycourses" element={< Mycourses />}/>
          <Route path='/GetAllVideos' element={<GetAllVideos/> } />
          <Route path="/update-video/:course_id/:video_id" element={<UpdateVideos />} />
          <Route path='/AddVideo' element={<AddVideo/>} />
          <Route path='/ChangePassword' element={<ChangePassword/>} />
        </Routes>
         </LoginContext.Provider>
      <ToastContainer />
    </>
  )
}

export default App
