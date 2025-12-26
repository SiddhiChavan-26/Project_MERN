import axios from './axios'
import config from './config'



export async function getAllCourses(token) {
    const URL = config.BASE_URL + '/course/all-courses'
    const headers = { token }
    const response = await axios.get(URL, { headers })
    return response.data
}

