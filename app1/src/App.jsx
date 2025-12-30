import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import { ToastContainer } from 'react-toastify'
import AddCourse from "./pages/AddCourse"
import AllCourses from "./pages/AllCourses"
import UpdateCourse from "./pages/updateCourse"

function App() {
  return (
    <>
        <Routes>          
          <Route path="/*" element={<Home /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/AddCourse" element={<AddCourse/>} />
          <Route path="/AllCourses" element={<AllCourses/>} />
          <Route path="/update-course/:id" element={<UpdateCourse />} />
        </Routes>
      
      <ToastContainer />
    </>
  )
}

export default App
