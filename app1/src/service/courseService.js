import axios from 'axios'
import config from './config'



export async function get_All_Courses() {
    const URL = config.BASE_URL + '/course/all-courses'
    const response = await axios.get(URL)
    return response.data
}


export async function newCourse(){
    const URL=config.BASE_URL + '/course/add'
    const body={course_name,description,fees,start_date,end_date,video_expire_days}
    const response=await axios.post(URL,body)
    return response.data
}
