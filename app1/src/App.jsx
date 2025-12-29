import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import GetAllVideos from './pages/GetAllVideos'
import UpdateVideos from './pages/UpdateVideos'
import AddVideo from "./pages/AddVideo"
import { ToastContainer } from 'react-toastify'
// import {  useState} from "react"
// import { LoginContext } from "./pages/LoginContext"
import Login from "./pages/Login"


// functional components
function App() {
  // const [loginStatus, setLoginStatus] = useState(false)
  return (
    <>  
        
        <Routes>          
          <Route path="*" element={<Home /> } />
          {/* <LoginContext.Provider value={{loginStatus, setLoginStatus}}> */}
            <Route path='/Login' element={<Login/>} />
          {/* </LoginContext.Provider> */}
          <Route path="/about" element={<About /> } />
          <Route path='/GetAllVideos' element={<GetAllVideos/> } />
          <Route path="/update-video/:course_id/:video_id" element={<UpdateVideos />} />
          <Route path='/AddVideo' element={<AddVideo/>} />
          
        </Routes>

      <ToastContainer />
    </>
  )
}

export default App
