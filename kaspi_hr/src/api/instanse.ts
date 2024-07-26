import axios from "axios";

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_USER
})

export const postsInstance = axios.create({
  baseURL: import.meta.env.VITE_POSTS,
})


postsInstance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})
