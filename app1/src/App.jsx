import { Routes, Route, Navigate } from "react-router-dom";
import AllCourses from "./pages/AllCourses";
import UpdateCourse from "./pages/updateCourse";
import AddCourse from "./pages/AddCourse";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Navigate to="/AllCourses" />} />
      <Route path="/AllCourses" element={<AllCourses />} />
    
      <Route path="/update-course/:id" element={<UpdateCourse />} />
      <Route path='/AddCourse' element={<AddCourse />} />
    </Routes>
  );
}

export default App;