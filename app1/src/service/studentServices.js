import axios from "axios";
import config from "./config";

export async function registerToCourse(course_id, name, email, mobile_no){
    console.log("registerToCourse() called");
    const URL = config.BASE_URL +`/student/register_to_course/${course_id}`
    const token = sessionStorage.getItem("token")
    const headers = {
        token
    }
    const body ={course_id,name,email,mobile_no}
    const response =  await axios.post( URL, body, {headers} )
    return response
}

export async function getMycourses(email){
    console.log("getMycourses() called");

    const URL = config.BASE_URL +`/student/my-coursewith-videos/${email}`
    // const body ={name}
    console.log(email);
    const token = sessionStorage.getItem("token")
    const headers = {
        token
    }
    const response = await axios.get(URL,{headers})
    
    console.log("response is ",response)
    return response
    
}

export async function getVideo(video_id){
    console.log("getvideo called()");
    const URL = config.BASE_URL+ `/student/video/${video_id}`
    const token = sessionStorage.getItem("token")
    const headers = {
        token
    }
    console.log(video_id);
    const response = await axios.get(URL,{headers})
    console.log("response is",response);
    return response
}

export async function getAllStudents(){
    console.log("getAllStudents() called");
    const URL = config.BASE_URL+`/student/getAllStudents`
    const token = sessionStorage.getItem("token")
    const headers={
        token
    }
    const response =await axios.get(URL,{headers})
    console.log("response is",response);
    return response
}