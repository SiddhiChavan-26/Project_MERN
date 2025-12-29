import config from './config'
import axios from 'axios'



export default async function get_videos(){
    console.log("get_videos called!!")
    const URL = config.BASE_URL + '/videos/allVideos'
    const token = sessionStorage.getItem('token')
    const headers = { token }
    const response = await axios.get(URL,{headers})
    console.log(response.data)
    return response.data
}
//for update videos
export async function getVideoById(video_id){
    console.log("Getvideo by id called !")
    console.log(video_id)
    const URL = `${config.BASE_URL}/videos/getVideo/${video_id}`;
    const token = sessionStorage.getItem('token')
    const headers = { token }
    const response = await axios.get(URL,{headers})
    console.log(response.data)
    return response.data
}

export async function updateVideo(video_id, course_id, title, youtube_url, description) {
  console.log("updateVideo called!")
  const URL = config.BASE_URL + `/videos/update/${video_id}`
  const body = { course_id, title, youtube_url, description }
  const token = sessionStorage.getItem('token')
  const headers = { token }
  const response = await axios.put(URL, body,{headers})
  console.log(response.data)
  return response.data
}

//to update the video get coursename by course id 
export async function getCourseById(course_id) { 
  const URL = config.BASE_URL + `/course/getCourse/${course_id}`; 
  const token = sessionStorage.getItem('token')
  const headers = { token }
  const response = await axios.get(URL, {headers}); 
  return response.data; 
}

export async function getCourseIdByName(course_name) { 
  console.log("Fetching course_id for:", course_name); 
  const URL = config.BASE_URL + `/course/getCourseByName/${course_name}`; 
  const token = sessionStorage.getItem('token')
  const headers = { token }
  const response = await axios.get(URL, {headers}); 
  return response.data; 
}

export async function addNewVideo(course_id, title, youtube_url, description){
  console.log('addNewVideo called!!')
  const URL = config.BASE_URL + `/videos/add`
  const body = {course_id, title, youtube_url, description}
  const token = sessionStorage.getItem('token')
  const headers = { token }
  const response = await axios.post(URL, body,{headers})
  console.log(response.data)
  return response.data
}