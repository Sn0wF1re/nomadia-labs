<script setup lang="ts">
import { Motion } from 'motion-v'
// Add new sections
// No need to import AboutSection and ContactSection due to Nuxt auto-import
</script>
<template>
  <div class="w-full min-h-screen bg-[#FEFDFB]">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
          alt="Hero background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0C354D]/70 to-[#0C354D]/50" />
      </div>
      <Motion as="div"
        class="relative z-10 max-w-4xl mx-auto px-6 text-center"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
      >
        <h1 class="text-5xl md:text-7xl mb-6 leading-tight text-white font-playfair">
          Who we are, what we do, and why it matters
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-inter">
          Expert guidance for life's most important decisions. We help you navigate complexity with clarity and confidence.
        </p>
      </Motion>
    </section>

    <!-- Advisory Tiers Section -->
    <section id="tiers" class="py-24 px-6 bg-[#FEFDFB] relative">
      <div class="w-24 h-0.5 bg-[#9E7F5E] mx-auto mb-15" />
      <div class="max-w-7xl mx-auto">
        <Motion as="h2"
          class="text-4xl md:text-5xl font-semibold text-center mb-16 text-[#0C354D] font-playfair"
          :initial="{ opacity: 0, y: 20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          Advisory Tiers
        </Motion>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TierCardClarity />
          <TierCardExpert />
          <TierCardFullSupport />
        </div>
      </div>
    </section>
    <!-- About Section -->
    <AboutSection />
    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>
