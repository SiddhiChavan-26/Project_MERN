import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import { ToastContainer } from 'react-toastify'
import RegisterCourse from "./pages/RegisterCourse"
import Mycourses from "./pages/Mycourses"


// functional components
function App() {
  return (
    <>
        <Routes>          
          <Route path="/*" element={<Home /> } />
          <Route path="/about" element={<About /> } />
          <Route path ="/registercourse" element={<RegisterCourse/>}/>
          <Route path="/mycourses" element={< Mycourses />}/>
        </Routes>
      
      <ToastContainer />
    </>
  )
}

export default App
