import { Routes, Route, Navigate } from "react-router-dom";
import AllCourses from "./pages/AllCourses";
import UpdateCourse from "./pages/updateCourse";
import AddCourse from "./pages/AddCourse";
import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>
        <Routes>          
          <Route path="/*" element={<Home /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/AddCourse" element={<AddCourse/>} />
          <Route path="/AllCourses" element={<AllCourses/>} />
          <Route path="/update-course/:id" element={<UpdateCourse />} />
      
          <Route path="/" element={<Navigate to="/AllCourses" />} />
          <Route path="/AllCourses" element={<AllCourses />} />
        
          <Route path="/update-course/:id" element={<UpdateCourse />} />
          <Route path='/AddCourse' element={<AddCourse />} />
    </Routes>
    </>
  );
}

export default App;