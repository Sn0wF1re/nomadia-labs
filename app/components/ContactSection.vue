<script setup lang="ts">
import { Motion } from 'motion-v'
</script>
<template>
  <section id="contact" class="py-24 px-6 bg-[#FEFDFB] relative">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[#C5A059]" />
    <div class="max-w-2xl mx-auto">
      <Motion as="h2"
        class="text-4xl md:text-5xl font-semibold text-center mb-12 text-[#0C354D] font-playfair"
        :initial="{ opacity: 0, y: 20 }"
        :in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.6 }"
      >
        Get in Touch
      </Motion>
      <Motion as="form"
        class="space-y-6"
        :initial="{ opacity: 0, y: 30 }"
        :in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.6 }"
      >
        <div>
          <label for="name" class="text-xs uppercase tracking-wider font-montserrat">Name</label>
          <input id="name" class="mt-2 rounded-sm w-full border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none font-inter" />
        </div>
        <div>
          <label for="email" class="text-xs uppercase tracking-wider font-montserrat">Email</label>
          <input id="email" type="email" class="mt-2 rounded-sm w-full border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none font-inter" />
        </div>
        <div>
          <label for="message" class="text-xs uppercase tracking-wider font-montserrat">Message</label>
          <textarea id="message" rows="5" class="mt-2 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none font-inter" />
        </div>
        <Button type="submit" class="w-full bg-[#0DA797] hover:bg-[#0C354D] text-white transition-all duration-300 rounded-sm font-montserrat">SEND MESSAGE</Button>
      </Motion>
    </div>
  </section>
</template>
