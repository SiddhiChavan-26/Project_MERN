import axios from 'axios'
import config from './config'

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

export async function loginUser(email, password) {
    const URL = config.BASE_URL + "/user/login"
    const body = { email, password }
    const response = await axios.post(URL, body) 
    console.log(response)
    return response.data
}


export async function changePass(email, password){
  console.log('changePass called !')
  const URL = config.BASE_URL + `/student/change-password`
  const body =  {email, password}
  const token = sessionStorage.getItem('token')
  const headers = { token }
  const response = await axios.put(URL, body, {headers})
  console.log(response.data)
  return response.data
}
