import { useContext } from "react";
import { LoginContext } from "../pages/LoginContext";

import Navbar from "./Navbar";
import AdminNavbar from "./AdminNavbar"; 
import StudentNavbar from "./StudentNavbar";

function NavbarSwitch(){
    const {LoginStatus } = useContext(LoginContext)
    const role = sessionStorage.getItem('role')

    if(!LoginStatus){
        return <Navbar/>
    }

    if(role === 'admin' ){
        return <AdminNavbar />
    }

    return <StudentNavbar/>
}

export default NavbarSwitch