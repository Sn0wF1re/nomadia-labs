<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer'

const router = useRouter()
const open = ref(true)

const isDesktop = useMediaQuery('(min-width: 640px)')

const Modal = computed(() => ({
  Root: isDesktop.value ? Dialog : Drawer,
  Content: isDesktop.value ? DialogContent : DrawerContent,
  Header: isDesktop.value ? DialogHeader : DrawerHeader,
  Title: isDesktop.value ? DialogTitle : DrawerTitle,
  Description: isDesktop.value ? DialogDescription : DrawerDescription,
}))

const handleRetry = () => {
  router.push('/')
}

// Watch for modal close and redirect home
watch(open, (isOpen) => {
  if (!isOpen) {
    router.push('/')
  }
})
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
    <component :is="Modal.Root" v-model:open="open">
      <component
        :is="Modal.Content"
        class="sm:max-w-lg"
        :class="[{ 'px-2 pb-8 *:px-4': !isDesktop }]"
      >
        <component :is="Modal.Header">
          <component :is="Modal.Title" class="text-2xl md:text-3xl font-bold text-red-600 font-playfair text-center">
            Payment Failed
          </component>
          <component :is="Modal.Description" class="text-base text-gray-700 font-montserrat text-center">
            Unfortunately, your payment could not be processed.
          </component>
        </component>
        <div class="w-full bg-white/90 rounded-xl p-4 md:p-8 text-center backdrop-blur-md z-10 mx-auto">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-4">
            <circle cx="32" cy="32" r="32" fill="#C5A059" fill-opacity="0.10"/>
            <circle cx="32" cy="32" r="28" fill="#C5A059" fill-opacity="0.18"/>
            <path d="M22 22L42 42M42 22L22 42" stroke="#E53E3E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="text-sm md:text-base text-gray-700 font-inter mb-6 md:mb-8">Please check your payment details and try again. If you need help, contact us at <a href="mailto:advisory@nomadia.co.ke" class="text-sand-gold underline">advisory@nomadia.co.ke</a></p>
          <button @click="handleRetry" class="mt-4 px-6 py-2 rounded-lg bg-sand-gold text-white font-bold shadow hover:bg-sand-gold/80 transition">Try Again</button>
        </div>
      </component>
    </component>
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
