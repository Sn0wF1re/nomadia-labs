<script setup lang="ts">
import { Motion } from 'motion-v'
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div>
    <!-- Navigation -->
    <Motion as=nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="scrolled ? 'bg-[#FEFDFB]/90 backdrop-blur-md shadow-sm' : 'bg-white/10 backdrop-blur-sm'"
      :initial="{ y: -100 }"
      :animate="{ y: 0 }"
      :transition="{ duration: 0.3 }"
    >
      <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div class="text-2xl font-semibold transition-colors font-playfair" :class="scrolled ? 'text-[#0C354D]' : 'text-white'">
          Nomadia
        </div>
        <div class="hidden md:flex items-center gap-8 font-montserrat">
          <NuxtLink to="#tiers" class="text-xs font-medium uppercase tracking-wider transition-colors" :class="scrolled ? 'text-[#0C354D] hover:text-[#0DA797]' : 'text-white hover:text-[#F9DEB2]'">Advisory Tiers</NuxtLink>
          <NuxtLink to="#about" class="text-xs font-medium uppercase tracking-wider transition-colors" :class="scrolled ? 'text-[#0C354D] hover:text-[#0DA797]' : 'text-white hover:text-[#F9DEB2]'">About</NuxtLink>
          <NuxtLink to="#contact" class="text-xs font-medium uppercase tracking-wider transition-colors" :class="scrolled ? 'text-[#0C354D] hover:text-[#0DA797]' : 'text-white hover:text-[#F9DEB2]'">Contact</NuxtLink>
          <NuxtLink to="#blog" class="text-xs font-medium uppercase tracking-wider transition-colors" :class="scrolled ? 'text-[#0C354D] hover:text-[#0DA797]' : 'text-white hover:text-[#F9DEB2]'">Blog</NuxtLink>
        </div>
      </div>
    </Motion>

    <slot />
    
    <!-- Footer -->
    <footer class="bg-[#0C354D] text-white py-12 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-2xl mb-4 font-playfair">Nomadia</h3>
            <p class="text-sm text-white/70 font-inter">Expert advisory services for life's important decisions.</p>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-wider mb-4 font-bold text-[#F9DEB2] font-montserrat">Quick Links</h4>
            <ul class="space-y-2 text-sm font-inter">
              <li><NuxtLink to="#tiers" class="text-white/70 hover:text-[#0DA797] transition-colors">Advisory Tiers</NuxtLink></li>
              <li><NuxtLink to="#about" class="text-white/70 hover:text-[#0DA797] transition-colors">About Us</NuxtLink></li>
              <li><NuxtLink to="#contact" class="text-white/70 hover:text-[#0DA797] transition-colors">Contact</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-wider mb-4 font-bold text-[#F9DEB2] font-montserrat">Legal</h4>
            <ul class="space-y-2 text-sm font-inter">
              <li><NuxtLink to="#" class="text-white/70 hover:text-[#0DA797] transition-colors">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="#" class="text-white/70 hover:text-[#0DA797] transition-colors">Terms of Service</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-wider mb-4 font-bold text-[#F9DEB2] font-montserrat">Connect</h4>
            <p class="text-sm text-white/70 font-inter">hello@nomadia.com</p>
          </div>
        </div>
        <div class="border-t border-[#9E7F5E]/30 pt-8 text-center text-sm text-white/60 font-inter">
          © 2024 Nomadia. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
