<template>
  <div class="reading-progress" :style="{ width: progress + '%' }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

const updateProgress = () => {
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = window.scrollY
  progress.value = (scrolled / scrollHeight) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress)
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  z-index: 9999;
  transition: width 0.1s ease;
}
</style>
