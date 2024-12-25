import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const login = (data) => api.post('/login', data);
export const getUsers = (page) => api.get(`/users?page=${page}`);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/${id}`);
