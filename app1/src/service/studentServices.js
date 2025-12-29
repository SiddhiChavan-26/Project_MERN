import axios from "axios";
import config from "./config";

export async function registerToCourse(course_id, name, email, mobile){
    console.log("registerToCourse() called");
    const URL = config.BASE_URL +"/student/register_to_course"
    const body ={course_id, name, email, mobile}
    const response =  await axios.post( URL, body )
    return response
}

export async function getMycourses(email){
    console.log("getMycourses() called");

    const URL = config.BASE_URL +`/student/my-coursewith-videos/${email}`
    // const body ={name}
    console.log(email);
    // const token = sessionStorage.getItem("token")

    // const headers = {
    //     token
    // }
    const response = await axios.get(URL)
    
    console.log("response is ",response)
    return response
    
}