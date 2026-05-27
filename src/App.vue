<template>
  <div class="app-container">
    <AnimatedBackground />
    <ParticleField />
    <div class="content-wrapper">
      <AnimatedCrescent />
      <EidGreeting :name="personName" />
      <PersonalMessage :name="personName" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AnimatedBackground from './components/AnimatedBackground.vue'
import ParticleField from './components/ParticleField.vue'
import AnimatedCrescent from './components/AnimatedCrescent.vue'
import EidGreeting from './components/EidGreeting.vue'
import PersonalMessage from './components/PersonalMessage.vue'
import { getUrlParams } from './utils/urlParams.js'

const personName = ref('DEAR FRIEND')

onMounted(() => {
  const params = getUrlParams()
  if (params.name) {
    personName.value = params.name.toUpperCase()
  }
})
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  background: white;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  position: relative;
  z-index: 10;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

@media (max-width: 768px) {
  .content-wrapper {
    gap: 1rem;
    padding: 1rem;
  }
}
</style>
