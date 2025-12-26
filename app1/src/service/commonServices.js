// console.log('common Services')
import config from './config'
import axios from 'axios'

export async function getAllCourses(){
    console.log('getAllCourses()')
    const URL = config.BASE_URL + '/user/all-active-courses'
    const response = await axios.get(URL)
    console.log(response.data)
    return response.data
}