import axios from 'axios';

const ApiFormData = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
}); 

const Api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

const config = {
    headers: { 
        'authorization' : 'Bearer ${localStorage.getItem("token")}'
    }
}

export const createUserApi = (data) => ApiFormData.post('/api/user/register', data);
export const loginUserApi = (data) => Api.post('/api/user/login', data);
export const getUserByIdApi = (id) =>Api.get(`/api/user/id/${id}`);
export const deleteUserApi = (id) => Api.delete(`/api/user/delete/${id}`, config);
export const updateUserApi = (id, data) =>Api.put(`/api/user/update/${id}`, data);
export const getAllUsersApi = () => Api.get('/api/user/all', config);