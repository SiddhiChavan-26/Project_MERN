import axios from "axios";
import config from "./config";

const getAuthHeaders = () => {
  const token = sessionStorage.getItem("token");
  return { headers: { token: token } };
};

// Get all courses
export async function get_All_Courses() {
  const URL = config.BASE_URL + "/course/all-courses";
  const response = await axios.get(URL);
  return response.data;
}

// Get course by ID
export async function getCourseById(id) {
  const URL = `${config.BASE_URL}/course/details/${id}`;
  const response = await axios.get(URL);
  return response.data;
}

// Add new course
export async function newCourse(body) {
  const URL = `${config.BASE_URL}/course/add`;
  const response = await axios.post(URL, body, getAuthHeaders());
  return response.data;
}

// Update course
export async function updateCourse(id, body) {
  const URL = `${config.BASE_URL}/course/update/${id}`;
  const response = await axios.put(URL, body, getAuthHeaders());
  return response.data;
}

// Delete course
export async function delete_Course(id) {
  const URL = `${config.BASE_URL}/course/delete/${id}`;
  const response = await axios.delete(URL, getAuthHeaders());
  return response.data;
}
