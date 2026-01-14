<script setup lang="ts">
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

const year = new Date().getFullYear()
</script>

<template>
  <div class="overflow-x-clip">
    <!-- Navigation -->
    <Motion as=nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="
        scrolled ? 'bg-off-white/90 backdrop-blur-md shadow-sm' : 'bg-white/10 backdrop-blur-sm'
      "
      :initial="{ y: -100 }"
      :animate="{ y: 0 }"
      :transition="{ duration: 0.3 }"
    >
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
         <NuxtImg src="/nomadia-logo.png" alt="Nomadia logo" width="40" height="40" />
          <span class="text-2xl font-semibold font-playfair" :class="$route.name === 'index' ? (scrolled ? 'text-midnight-blue' : 'text-white') : 'text-midnight-blue'">Nomadia</span>
        </div>
        <div v-if="$route.name === 'index'" class="hidden md:flex items-center gap-8 font-montserrat">
          <NuxtLink to="/#tiers" class="text-xs font-medium uppercase tracking-wider transition-colors" :class="scrolled ? 'text-midnight-blue hover:text-teal' : 'text-white hover:text-sand-gold-light'">Advisory Tiers</NuxtLink>
          <NuxtLink to="/#about" class="text-xs font-medium uppercase tracking-wider transition-colors" :class="scrolled ? 'text-midnight-blue hover:text-teal' : 'text-white hover:text-sand-gold-light'">About</NuxtLink>
          <NuxtLink to="/#footer-contact" class="text-xs font-medium uppercase tracking-wider transition-colors" :class="scrolled ? 'text-midnight-blue hover:text-teal' : 'text-white hover:text-sand-gold-light'">Contact</NuxtLink>
          <NuxtLink to="/#blog" class="text-xs font-medium uppercase tracking-wider transition-colors" :class="scrolled ? 'text-midnight-blue hover:text-teal' : 'text-white hover:text-sand-gold-light'">Blog</NuxtLink>
        </div>
      </div>
    </Motion>

    <slot />
    
    <!-- Footer -->
    <footer class="bg-midnight-blue text-white py-12 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
                <NuxtImg src="/nomadia-logo.png" alt="Nomadia logo" width="40" height="40" class="rounded-full" />
              <h3 class="text-2xl font-playfair">Nomadia</h3>
            </div>
            <p class="text-sm text-white/70 font-inter">Expert travel and relocation guidance. </p>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-wider mb-4 font-bold text-sand-gold-light font-montserrat">Quick Links</h4>
            <ul class="space-y-2 text-sm font-inter">
              <li><NuxtLink to="/#tiers" class="text-white/70 hover:text-[#0DA797] transition-colors">Advisory Tiers</NuxtLink></li>
              <li><NuxtLink to="/#about" class="text-white/70 hover:text-[#0DA797] transition-colors">About Us</NuxtLink></li>
              <li><NuxtLink to="/#footer-contact" class="text-white/70 hover:text-[#0DA797] transition-colors">Contact</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-wider mb-4 font-bold text-sand-gold-light font-montserrat">Legal</h4>
            <ul class="space-y-2 text-sm font-inter">
              <li><NuxtLink to="/#" class="text-white/70 hover:text-[#0DA797] transition-colors">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/#" class="text-white/70 hover:text-[#0DA797] transition-colors">Terms of Service</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-wider mb-4 font-bold text-sand-gold-light font-montserrat">Connect</h4>
            <p class="text-sm text-white/70 font-inter">advisory@nomadialabs.com</p>
          </div>
        </div>
        <div class="border-t border-sand-gold/30 pt-8 text-center text-sm text-white/60 font-inter">
          © {{ year }} Nomadia. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
