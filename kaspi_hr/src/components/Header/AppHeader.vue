<template>
  <header
    :class="{
      header__profile: route.path === '/profile'
    }"
  >
    <div class="container__inner header">
      <template v-if="userStore.isLogin">
        <button
          class="header_btn-back"
          @click="getBack"
          :style="{ color: route.path === '/profile' ? '#FFF' : '#000' }"
        >
          {{ route.path === '/profile' ? 'Settings' : 'Back' }}
        </button>
      </template>

      <template v-else>
        <div></div>
      </template>
      <h1 class="header__title" :style="{ color: route.path === '/profile' ? '#FFF' : '#000' }">
        {{ headerTitle($route.path) }}
      </h1>

      <div class="header__link">
        <template v-if="route.path === '/sign-up' || route.path === '/'">
          <router-link class="header__btn-link" :to="linkPath" :style="{ color: textColor }">{{
            linkText
          }}</router-link>
        </template>
        <template v-else>
          <button class="header__btn-link" @click="logout" :style="{ color: textColor }">Logout</button>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import useHeaderHook from '@/hooks/useHeaderHook'
import { headerTitle } from '@/utils/functions'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const { linkPath, linkText, textColor } = useHeaderHook()
const userStore = useAuthStore()

const getBack = () => {
  if (route.path === '/profile') {
    router.push('/settings')
  } else {
    router.go(-1)
  }
}

const logout = (): void => {
  userStore.setIsLogin(false)
  userStore.setUserData()
  localStorage.removeItem("user");
  sessionStorage.removeItem("token");
  router.push('/')
}

</script>

<style scoped lang="scss" src="./header.scss"></style>
