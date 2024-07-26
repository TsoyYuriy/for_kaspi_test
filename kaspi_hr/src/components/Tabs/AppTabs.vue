<template>
  <div class="tab-nav">
    <span
      v-for="tab in names"
      :key="tab.name"
      :class="['tab-nav__item', { selected: tab.name === selectedTab }]"
      @click="clickOnTab(tab.name)"
      >{{ tab.label }}
    </span>
  </div>
  <div class="tab-content">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  names: {
    type: Array,
    required: true
  },
  selectedTab: {
    type: String,
    required: false
  }
})

const emit = defineEmits(['changeTab'])

const clickOnTab = (tabName) => {
  emit('changeTab', tabName)
}
</script>

<style scoped lang="scss" src="./tabs.scss"></style>