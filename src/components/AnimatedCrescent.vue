<template>
  <div class="crescent-container" ref="crescentContainer">
    <svg class="crescent-svg" viewBox="0 0 200 200" width="150" height="150">
      <!-- Crescent moon -->
      <g class="crescent-group">
        <circle cx="100" cy="100" r="80" fill="#000" />
        <circle cx="115" cy="85" r="80" fill="#fff" />
      </g>
      
      <!-- Stars -->
      <g class="stars-group">
        <circle class="star" cx="50" cy="40" r="3" fill="#000" />
        <circle class="star" cx="150" cy="50" r="2.5" fill="#000" />
        <circle class="star" cx="160" cy="130" r="2" fill="#000" />
        <circle class="star" cx="40" cy="160" r="2.5" fill="#000" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const crescentContainer = ref(null)

onMounted(() => {
  const crescentGroup = crescentContainer.value.querySelector('.crescent-group')
  const starsGroup = crescentContainer.value.querySelector('.stars-group')
  const stars = crescentContainer.value.querySelectorAll('.star')

  // Floating animation for crescent
  gsap.to(crescentGroup, {
    y: 20,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // Subtle rotation
  gsap.to(crescentGroup, {
    rotation: 5,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    transformOrigin: '100px 100px'
  })

  // Twinkling stars
  stars.forEach((star, index) => {
    gsap.to(star, {
      opacity: 0.3,
      duration: 2,
      delay: index * 0.3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })
})
</script>

<style scoped>
.crescent-container {
  position: relative;
  z-index: 5;
  animation: slideDown 1.2s ease-out forwards;
  opacity: 0;
}

.crescent-svg {
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .crescent-svg {
    width: 100px !important;
    height: 100px !important;
  }
}
</style>
