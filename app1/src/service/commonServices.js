import config from './config'
import axios from 'axios'


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
    // call the backend - use axios
    const response = await axios.post(URL, body) // resolve the promise
    console.log(response)
    return response.data
}