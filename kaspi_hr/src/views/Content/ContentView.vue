<template>
  <div class="posts" :style="{ textAlign: isLoading ? 'center' : 'left' }">
    <template v-if="isLoading">
      <app-progress-spinner />
    </template>
    <template v-else>
      <card-post :is-post="true" :data="dataPost" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import CardPost from '@/components/CardPost/CardPost.vue'
import type { PostType } from '@/utils/types'
import { postsInstance } from '@/api/instanse'

const route = useRoute()
const postId = route.params.id
const dataPost = ref<PostType>()
const isLoading = ref<boolean>(true)

const getPost = async (): Promise<void> => {
  try {
    const response = await postsInstance.get(`posts/${postId}`)
    isLoading.value = false
    dataPost.value = response.data
  } catch (error) {
    isLoading.value = false
    console.log(error)
  }
}

onMounted(async () => {
  await getPost()
})
</script>

<style scoped></style>
