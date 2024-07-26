<template>
  <div class="feed">
    <input type="text" class="search-input" placeholder="Search" />

    <div class="posts" :style="{textAlign: isLoading ? 'center' : 'left'}">
      <template v-if="isLoading">
        <app-progress-spinner />
      </template>
      <template v-else>
        <card-post :is-posts="true" v-for="post in allPosts" :key="post._id" :data="post" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { postsInstance } from '@/api/instanse'
import CardPost from '@/components/CardPost/CardPost.vue'
import type { PostType } from '@/utils/types'

const allPosts = ref<PostType[] | []>([])
const isLoading = ref<boolean>(true)

const getPosts = async (): Promise<void> => {
  try {
    const response = await postsInstance.get('posts')
    allPosts.value = response.data
    isLoading.value = false
  } catch (error) {
    console.log(error)
    // isLoading.value = false
  }
}

onMounted(async () => {
  await getPosts()
})
</script>

<style scoped lang="scss" src="./feed.scss"></style>
