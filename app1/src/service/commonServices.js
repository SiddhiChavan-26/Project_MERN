import axios from 'axios'
import config from './config'

export async function loginUser(email,password)
{
    const URL = config.BASE_URL + "/user/signin"
    const body = { email, password }
    
    const response = await axios.post(URL, body) 
}

// REGISTER
export async function registerUser(email, password, role) {
  const URL = config.BASE_URL + '/user/signUp'
  const body = { email, password, role }
  const response = await axios.post(URL, body)
  return response.data
}



//view courses
export async function viewmore(course_id) {
  const URL = config.BASE_URL + `/course/viewmore?course_id=${course_id}`;
  const response = await axios.get(URL);
  return response.data;
}

export async function getAllCourses(){
    console.log('getAllCourses()')
    const URL = config.BASE_URL + '/user/all-active-courses'
    const response = await axios.get(URL)
    console.log(response.data)
    return response.data
}


