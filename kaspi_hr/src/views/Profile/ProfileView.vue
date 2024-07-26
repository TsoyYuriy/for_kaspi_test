<template>
  <div class="profile">
    <div class="profile__header">
      <div class="profile__avatar">
        <img src="@/assets/img/profile-img.png" alt="" />
      </div>

      <div class="profile__header-content">
        <h1 class="profile__header-title">{{ userData.username }}</h1>
        <p class="profile__header-text">A mantra goes here</p>
      </div>
    </div>

    <div class="tabs">
      <app-tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
        <div v-if="selectedTab === 'posts'" :style="{ textAlign: isLoading ? 'center' : 'left' }">
          <div class="posts">
            <template v-if="isLoading">
              <app-progress-spinner />
            </template>
            <template v-else>
              <card-post :is-posts="true" v-for="post in posts" :key="post._id" :data="post" />
            </template>
          </div>
        </div>
        <div v-if="selectedTab === 'photos'">
          <div class="photos">
            <img
              src="https://www.cnet.com/a/img/resize/c480317e8c83ee66135806207cd22c30e7864688/hub/2019/12/11/d573784c-7801-4cc3-9899-9690616a4654/twitter-in-stream-wide-pickle-rick-pringles-rick-and-morty.jpg?auto=webp&fit=crop&height=900&width=1200"
              alt="IMG"
            />
          </div>
        </div>
      </app-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { User, PostType } from '@/utils/types'
import AppTabs from '@/components/Tabs/AppTabs.vue'
import { postsInstance } from '@/api/instanse'
import CardPost from '@/components/CardPost/CardPost.vue'

const storedUser = localStorage.getItem('user')
const userData: User = storedUser ? JSON.parse(storedUser) : {}
const selectedTab = ref<string>('posts')
const posts = ref<PostType[] | []>([])
const isLoading = ref<boolean>(true)

const tabs = [
  { name: 'posts', label: 'Posts' },
  { name: 'photos', label: 'Photos' }
]

const changeTab = (tabName: string): void => {
  selectedTab.value = tabName
}

const getUserPosts = async (): Promise<void> => {
  try {
    const response = await postsInstance.get<PostType[]>('posts/user-posts')
    const { data } = response
    posts.value = data
    isLoading.value = false
  } catch (error) {
    console.log(error)
    isLoading.value = false
  }
}

onMounted(async () => {
  await getUserPosts()
})

watch(selectedTab, async (newSelectedTabs) => {
  if (newSelectedTabs === 'posts') {
    await getUserPosts()
  }
})
</script>

<style scoped lang="scss" src="./profile.scss"></style>
