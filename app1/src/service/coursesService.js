import axios from "axios";
import config from "./config";


export const get_All_Courses = async () => {
    try {
        const response = await axios.get(`${config.BASE_URL}/course/all-courses`);
        return response.data; 
    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};

export async function newCourse(courseData) {
    const response = await axios.post(`${config.BASE_URL}/course/add`, courseData);
    return response.data;
}

export async function getCourseById(id) {
    const response = await axios.get(`${config.BASE_URL}/course/details/${id}`);
    return response.data;
}

export async function updateCourse(id, body) {
    const response = await axios.put(`${config.BASE_URL}/course/update/${id}`, body);
    return response.data;
}

export async function deleteCourse(courseId) {
    const response = await axios.delete(`${config.BASE_URL}/course/delete/${courseId}`);
    return response.data;
}
