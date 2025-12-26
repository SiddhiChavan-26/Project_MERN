import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import { ToastContainer } from 'react-toastify'


// functional components
function App() {
  return (
    <>
        <Routes>          
          <Route path="/*" element={<Home /> } />
          <Route path="/about" element={<About /> } />
        </Routes>
      
      <ToastContainer />
    </>
  )
}

export default App
