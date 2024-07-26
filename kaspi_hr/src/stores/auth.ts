import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserDataType } from '@/utils/types'
import { useRouter } from 'vue-router'
import { authInstance } from '@/api/instanse'
import { useToast } from 'primevue/usetoast'
import axios from 'axios'

const userData = {
  email: 'test@gmail.com',
  password: 'test1234'
}

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const isLogin = ref<boolean>(!!sessionStorage.getItem('token') || false)
  const accesstoken = ref<string>('')
  const userData = ref<UserDataType | {}>({})
  const toast = useToast()

  const logIn = async (data: UserDataType): Promise<void> => {
    try {
      const response = await authInstance.post('login', data)

      if (response.status === 200) {
        const { token, user } = response.data
        isLogin.value = true
        accesstoken.value = token
        userData.value = user
        sessionStorage.setItem('token', accesstoken.value)
        localStorage.setItem('user', JSON.stringify(userData.value))
        router.push('/feed')
      } else {
        throw Error(response.data)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
        isLogin.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: error.response?.data.error, life: 3000 });
      }
    }
  }

  const signup = async (data: UserDataType): Promise<void> => {
    try {
      const response = await authInstance.post('signup', data)

      if (response.status === 200) {
        router.push('/')
      } else {
        throw Error(response.data)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
        toast.add({ severity: 'error', summary: 'Error', detail: error.response?.data.error, life: 3000 });
      }
    }
  }

  const setIsLogin = (payload: boolean): void => {
    isLogin.value = payload
  }

  const setUserData = () => {
    userData.value = {}
  }

  return { isLogin, logIn, setIsLogin, signup, setUserData }
})
