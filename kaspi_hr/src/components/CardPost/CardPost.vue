<template>
  <template v-if="isPosts">
    <router-link :to="`/content/${props.data?._id}`">
      <div class="card">
        <div class="card__wrap-img">
          <img class="card__img" :src="props.data?.image" alt="IMG" />
        </div>

        <div class="card__content">
          <p class="card__title">{{ props.data?.title }}</p>
          <p class="card__text">
            {{ props.data?.body }}
          </p>
        </div>
      </div>
    </router-link>
  </template>

  <template v-if="isPost">
    <div class="card-post">
      <div class="card-post__img-wrap">
        <img :src="props.data?.image" alt="IMG" />
      </div>

      <div class="card-post__content">
        <p class="card__title">{{ props.data?.title }}</p>
          <p class="card-post__text">
            {{ props.data?.body }}
          </p>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import type { PostType } from '@/utils/types'

type Props = {
  data?: PostType
  isPosts?: Boolean
  isPost?: Boolean
}

const props = withDefaults(defineProps<Props>(), {
  isPosts: () => false,
  isPost: () => false
})
</script>

<style scoped lang="scss" src="./card-post.scss"></style>
