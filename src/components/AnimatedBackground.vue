<template>
  <div class="background-container" ref="bgContainer">
    <svg class="geometric-pattern" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <!-- Top decorative lines -->
      <line x1="0" y1="100" x2="1200" y2="100" stroke="#000" stroke-width="1" opacity="0.1" />
      <line x1="0" y1="200" x2="1200" y2="200" stroke="#000" stroke-width="1" opacity="0.08" />
      
      <!-- Left decorative elements -->
      <g class="geometric-element" opacity="0.15">
        <circle cx="100" cy="200" r="40" fill="none" stroke="#000" stroke-width="2" />
        <circle cx="100" cy="200" r="25" fill="none" stroke="#000" stroke-width="1" />
      </g>
      
      <!-- Right decorative elements -->
      <g class="geometric-element" opacity="0.15">
        <circle cx="1100" cy="600" r="35" fill="none" stroke="#000" stroke-width="2" />
        <circle cx="1100" cy="600" r="20" fill="none" stroke="#000" stroke-width="1" />
      </g>
      
      <!-- Center vertical lines -->
      <line x1="600" y1="0" x2="600" y2="800" stroke="#000" stroke-width="0.5" opacity="0.05" />
      
      <!-- Bottom accent -->
      <line x1="0" y1="750" x2="1200" y2="750" stroke="#000" stroke-width="1" opacity="0.1" />
      
      <!-- Subtle corner patterns -->
      <g opacity="0.12">
        <polygon points="50,50 100,50 75,100" fill="none" stroke="#000" stroke-width="1" />
        <polygon points="1150,750 1100,750 1125,700" fill="none" stroke="#000" stroke-width="1" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const bgContainer = ref(null)

onMounted(() => {
  const elements = bgContainer.value.querySelectorAll('.geometric-element')
  
  elements.forEach((el, index) => {
    gsap.to(el, {
      opacity: 0.25,
      duration: 3,
      delay: index * 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })
})
</script>

<style scoped>
.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 1;
}

.geometric-pattern {
  width: 100%;
  height: 100%;
}
</style>
