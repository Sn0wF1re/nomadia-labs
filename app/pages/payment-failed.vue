<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const handleRetry = () => {
  router.push('/')
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 overflow-hidden bg-payment-failed-brand">
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=2070&auto=format&fit=crop"
        alt="Payment failed background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#1B263B]/80 to-[#249794]/60" />
    </div>
    <div class="max-w-lg w-full bg-white/90 rounded-xl shadow-2xl border-2 border-red-400 p-10 text-center backdrop-blur-md z-10">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-4">
        <circle cx="32" cy="32" r="32" fill="#C5A059" fill-opacity="0.10"/>
        <circle cx="32" cy="32" r="28" fill="#C5A059" fill-opacity="0.18"/>
        <path d="M22 22L42 42M42 22L22 42" stroke="#E53E3E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h1 class="text-4xl font-bold mb-4 text-red-600 font-playfair">Payment Failed</h1>
      <p class="text-lg text-gray-700 font-montserrat mb-6">Unfortunately, your payment could not be processed.</p>
      <p class="text-base text-gray-700 font-inter mb-8">Please check your payment details and try again. If you need help, contact us at <a href="mailto:advisory@nomadia.co.ke" class="text-sand-gold underline">advisory@nomadia.co.ke</a></p>
      <button @click="handleRetry" class="mt-4 px-6 py-2 rounded-lg bg-sand-gold text-white font-bold shadow hover:bg-sand-gold/80 transition">Try Again</button>
    </div>
  </div>
</template>

<style scoped>
@layer components {
  .bg-payment-failed-brand {
    background: linear-gradient(120deg, var(--color-midnight-blue) 0%, var(--color-teal) 60%, var(--color-sand-gold) 100%);
    background-size: 200% 200%;
    animation: bgMove 12s ease-in-out infinite alternate;
  }
  @keyframes bgMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
}
</style>
