<template>
  <canvas ref="canvas" class="particle-canvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null)

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 1.5 + 0.5
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = (Math.random() - 0.5) * 0.5
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.opacity += (Math.random() - 0.5) * 0.02
    this.opacity = Math.max(0.1, Math.min(0.6, this.opacity))

    if (this.x < 0) this.x = this.canvas.width
    if (this.x > this.canvas.width) this.x = 0
    if (this.y < 0) this.y = this.canvas.height
    if (this.y > this.canvas.height) this.y = 0
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

onMounted(() => {
  const canvasEl = canvas.value
  const ctx = canvasEl.getContext('2d')
  
  canvasEl.width = window.innerWidth
  canvasEl.height = window.innerHeight

  const particles = []
  const particleCount = 30

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvasEl))
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    
    particles.forEach(particle => {
      particle.update()
      particle.draw(ctx)
    })
    
    requestAnimationFrame(animate)
  }

  animate()

  window.addEventListener('resize', () => {
    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight
  })
})
</script>

<style scoped>
.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
</style>
