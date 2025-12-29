import { createContext, useState } from "react"
import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import ViewMore from "./pages/ViewMore"
// import Login from "./pages/Login"
import About from "./pages/About"
// import Register from "./pages/Register"
import { ToastContainer } from 'react-toastify'


export const LoginContext = createContext()

// functional components
function App() {
    // const [LoginStatus, setLoginStatus] = useState(false)
  return (
    <>
     {/* <LoginContext.Provider value={{LoginStatus, setLoginStatus }}> */}
        <Routes>   
          {/* <Route path="/login" element={<Login/>} />  
          <Route path="/register" element={<Register />} />     */}
          <Route path="/view-more/:course_id" element={<ViewMore />} />
          <Route path="/*" element={<Home /> } />
          <Route path="/about" element={<About /> } />
        </Routes>
        {/* </LoginContext.Provider> */}
      <ToastContainer />
    </>
  )
}

export default App
