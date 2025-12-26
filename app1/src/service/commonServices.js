import axios from 'axios'
import config from './config'

export async function loginUser(email,password)
{
    const URL = config.BASE_URL + "/user/signin"
    const body = { email, password }
    
    const response = await axios.post(URL, body) 
 }

export async function getAllCourses(){
    console.log('getAllCourses()')
    const URL = config.BASE_URL + '/user/all-active-courses'
    const response = await axios.get(URL)
    console.log(response.data)
    return response.data
}