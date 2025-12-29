import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import GetAllVideos from './pages/GetAllVideos'
import UpdateVideos from './pages/UpdateVideos'
import AddVideo from "./pages/AddVideo"
import { ToastContainer } from 'react-toastify'
import {  useState} from "react"
import { LoginContext } from "./pages/LoginContext"
import Login from "./pages/Login"


// functional components
function App() {
  const [LoginStatus, setLoginStatus] = useState(false)
  
  return (
    <>  
        <LoginContext.Provider value={{LoginStatus, setLoginStatus}}> 
        <Routes>      
          <Route path="/" element={<Home />  } />
          <Route path='/home' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path="/about" element={<About /> } />
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
