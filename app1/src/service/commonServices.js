import axios from 'axios'
import config from './configs'

export async function loginUser(email,password)
{
    const URL = config.BASE_URL + "/user/signin"
    const body = { email, password }
    
    const response = await axios.post(URL, body) 
    return response.data
}