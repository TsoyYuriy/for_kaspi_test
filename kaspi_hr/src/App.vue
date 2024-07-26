<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/Header/AppHeader.vue'
import {useAuthStore} from '@/stores/auth'
import AppFooter from '@/components/Footer/AppFooter.vue'

const userStore = useAuthStore()

</script>

<template>
  <div class="container">
    <app-toast position="top-center"/>
    <app-header />
    <main class="content container__inner">
      <RouterView />
    </main>

    <template v-if="userStore.isLogin">
      <app-footer/>
    </template>
  </div>
</template>

<style lang="scss"></style>
