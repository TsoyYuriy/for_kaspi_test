<!-- eslint-disable vue/no-unused-vars -->
<template>
  <footer class="footer">
    <nav class="footer__nav">
      <router-link class="footer__link" to="/profile" v-slot="{ isActive }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          :stroke="isActive ? '#FFF' : '#5DB075'"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-user"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </router-link>
      <router-link class="footer__link feed" to="/feed" v-slot="{ isActive }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          :stroke="isActive ? '#FFF' : '#5DB075'"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-list"
        >
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      </router-link>
      <span class="footer__link"></span>
      <span class="footer__link"></span>
      <span class="footer__link"></span>
    </nav>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss" src="./footer.scss"></style>
