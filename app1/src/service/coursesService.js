import axios from "axios";
import config from "./config";


export const get_All_Courses = async () => {
    try {
        console.log("get_All_Courses called!");
        const URL = config.BASE_URL + `/course/all-courses`;
        const token = sessionStorage.getItem('token')
        const headers = { token }
        const response = await axios.get(URL, {headers});
        return response.data;
        // const response = await axios.get(`${config.BASE_URL}/course/all-courses`);
        // return response.data;
    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};

export async function newCourse(courseData) {
    const token = sessionStorage.getItem('token')
    const headers = { token }
    const response = await axios.post(`${config.BASE_URL}/course/add`, courseData, {headers});
    return response.data;
}

export async function getCourseById(id) {
    const token = sessionStorage.getItem('token')
    const headers = { token }
    const response = await axios.get(`${config.BASE_URL}/course/details/${id}`, {headers});
    return response.data;
}

export async function updateCourse(id, body) {
    const token = sessionStorage.getItem('token')
    const headers = { token }
    const response = await axios.put(`${config.BASE_URL}/course/update/${id}`, body, {headers});
    return response.data;
}

export async function deleteCourse(courseId) {
    const token = sessionStorage.getItem('token')
    const headers = { token }
    const response = await axios.delete(`${config.BASE_URL}/course/delete/${courseId}`, {headers});
    return response.data;
}