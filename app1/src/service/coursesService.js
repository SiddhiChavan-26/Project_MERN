import axios from "axios";
import config from "./config";

export async function get_All_Courses() {
    const response = await axios.get(`${config.BASE_URL}/course/all-courses`);
    return response.data;
}

export async function newCourse(courseData) {
    const response = await axios.post(`${config.BASE_URL}/course/add`, courseData);
    return response.data;
}

export async function getCourseById(id) {
    const response = await axios.get(`${config.BASE_URL}/course/details/${id}`);
    return response.data;
}

export async function updateCourse(id, body) {
  const URL = config.BASE_URL + "/course/update/" + id;
  const res = await axios.put(URL, body);
  return res.data;
}

export async function deleteCourse(courseId) {
  const URL = config.BASE_URL + `/course/delete/${courseId}`;
  const response = await axios.delete(URL);
  return response.data;
}
