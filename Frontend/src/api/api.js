import axios from 'axios'

const token=localStorage.getItem('token')
const api = axios.create({
    baseURL:"https://online-examsystem-8tiv.onrender.com/api",
    headers:{
        "Content-Type":"application/json",
        "authorization":`Bearer ${token}`
    }
})
export default api