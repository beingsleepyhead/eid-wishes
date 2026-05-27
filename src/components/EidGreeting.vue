<template>
  <div class="greeting-container" ref="greetingContainer">
    <h1 class="greeting-text" ref="greetingText">Eid Al-Adha Mubarak</h1>
    <div class="arabic-greeting" ref="arabicGreeting">عيد الأضحى مبارك</div>
    <p class="subtitle" ref="subtitle">To <span class="name-highlight">{{ name }}</span></p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

defineProps({
  name: {
    type: String,
    default: 'DEAR FRIEND'
  }
})

const greetingContainer = ref(null)
const greetingText = ref(null)
const arabicGreeting = ref(null)
const subtitle = ref(null)

onMounted(() => {
  const tl = gsap.timeline()

  // Animate greeting text with stagger
  tl.from(greetingText.value, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out'
  }, 0.3)

  // Animate Arabic text
  tl.from(arabicGreeting.value, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out'
  }, 0.7)

  // Animate subtitle with name
  tl.from(subtitle.value, {
    opacity: 0,
    y: 15,
    duration: 0.8,
    ease: 'power3.out'
  }, 1.1)

  // Gentle pulse on greeting text
  gsap.to(greetingText.value, {
    letterSpacing: 2,
    duration: 2.5,
    delay: 1.8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
})
</script>

<style scoped>
.greeting-container {
  position: relative;
  z-index: 5;
  text-align: center;
}

.greeting-text {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 700;
  letter-spacing: 1px;
  color: #000;
  margin: 0;
  text-transform: uppercase;
  font-family: 'Georgia', serif;
}

.arabic-greeting {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  color: #333;
  margin: 1.5rem 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-family: 'Arabic Typesetting', Arial, sans-serif;
}

.subtitle {
  font-size: clamp(1rem, 3vw, 1.3rem);
  color: #666;
  margin: 1.5rem 0 0 0;
  font-weight: 400;
  letter-spacing: 1px;
}

.name-highlight {
  color: #000;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

@media (max-width: 768px) {
  .greeting-text {
    letter-spacing: 0.5px;
  }

  .name-highlight {
    text-decoration-thickness: 1.5px;
    text-underline-offset: 3px;
  }
}
</style>
