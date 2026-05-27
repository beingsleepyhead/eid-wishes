<template>
  <div class="message-container" ref="messageContainer">
    <div class="message-text" ref="messageText">
      <p class="main-message">Wishing you a joyful Eid filled with love, happiness, and countless blessings.</p>
      <p class="secondary-message">May this special day bring you closer to your loved ones and fill your heart with joy.</p>
    </div>
    
    <div class="decorative-line" ref="decorativeLine"></div>
    
    <div class="closing" ref="closing">
      <p class="closing-text">Eid Mubarak!</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const messageContainer = ref(null)
const messageText = ref(null)
const decorativeLine = ref(null)
const closing = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })

  // Animate message text
  tl.from(messageText.value, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out'
  }, 0)

  // Animate decorative line
  tl.from(decorativeLine.value, {
    scaleX: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out'
  }, 0.3)

  // Animate closing
  tl.from(closing.value, {
    opacity: 0,
    y: 15,
    duration: 0.6,
    ease: 'power3.out'
  }, 0.6)

  // Subtle glow effect on closing text
  gsap.to(closing.value, {
    textShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    duration: 2,
    delay: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
})
</script>

<style scoped>
.message-container {
  position: relative;
  z-index: 5;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}

.message-text {
  text-align: center;
}

.main-message {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #333;
  line-height: 1.8;
  margin: 0 0 1rem 0;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.secondary-message {
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  color: #555;
  line-height: 1.7;
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.3px;
}

.decorative-line {
  width: 60px;
  height: 2px;
  background: #000;
  margin: 2rem auto;
  transform-origin: center;
}

.closing {
  text-align: center;
}

.closing-text {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #000;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .message-container {
    padding: 0 0.5rem;
  }

  .main-message,
  .secondary-message {
    line-height: 1.6;
  }

  .decorative-line {
    width: 50px;
    height: 1.5px;
    margin: 1.5rem auto;
  }
}
</style>
