<script setup lang="ts">
import { Motion } from 'motion-v'
import { Globe } from 'lucide-vue-next'
</script>
<template>
  <section id="about" class="py-24 px-6 bg-[#FEFDFB] relative">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[#C5A059]" />
    <div class="max-w-7xl mx-auto">
      <Motion as="h2"
        class="text-4xl md:text-5xl font-semibold text-center mb-16 text-[#0C354D] font-playfair"
        :initial="{ opacity: 0, y: 20 }"
        :in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.6 }"
      >
        About Us
      </Motion>
      <div class="grid md:grid-cols-2 gap-12 mb-16">
        <Motion as="div"
          :initial="{ opacity: 0, x: -30 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          <div class="bg-[#F9DEB2]/20 p-8 rounded-sm border border-[#C5A059]/30">
            <h3 class="text-2xl font-semibold mb-4 text-[#0C354D] font-playfair">Our Mission</h3>
            <p class="text-gray-800 leading-relaxed font-medium font-inter">
              We believe everyone deserves access to expert guidance for life's most important decisions. Whether you're choosing a career path, making a major purchase, or navigating a life transition, we provide the clarity and support you need to move forward with confidence.
            </p>
          </div>
        </Motion>
        <Motion as="div"
          :initial="{ opacity: 0, x: 30 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Team collaboration"
            class="w-full h-full object-cover rounded-sm shadow-md"
          />
        </Motion>
      </div>
      <Motion as="div"
        class="space-y-8"
        :initial="{ opacity: 0, y: 30 }"
        :in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.6 }"
      >
        <div class="flex flex-col items-center mb-8">
          <Globe class="w-10 h-10 text-[#0C354D] mb-2" />
          <h3 class="text-3xl font-semibold text-center text-[#0C354D] font-playfair">Our Global Perspective</h3>
        </div>
        <div class="bg-[#F9DEB2]/20 p-8 rounded-sm border border-[#C5A059]/30 max-w-3xl mx-auto">
          <p class="text-gray-800 leading-relaxed font-medium font-inter text-center">
            At Nomadia, our advisors bring a wealth of first-hand experience from living and working across the globe - including Finland, the UK, China, and Germany. Our team understands the challenges and opportunities of moving abroad, navigating new cultures, and building a life in unfamiliar places.<br><br>
            Whether you’re seeking guidance on immigration, adapting to a new environment, or making important decisions about your future, we offer advice rooted in diverse backgrounds and real-world journeys. We’re here to help you thrive - wherever you choose to call home.
          </p>
        </div>
      </Motion>
    </div>
  </section>
</template>
