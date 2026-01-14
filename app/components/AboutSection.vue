<script setup lang="ts">
import { Globe } from 'lucide-vue-next'
</script>
<template>
  <section id="about" class="py-24 px-6 bg-off-white relative overflow-x-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-sand-gold" />
    <div class="max-w-7xl mx-auto">
      <Motion as="h2"
        class="text-4xl md:text-5xl font-semibold text-center mb-16 text-midnight-blue font-playfair"
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
          <div class="bg-sand-gold-light/20 p-8 rounded-sm border border-sand-gold/30">
            <h3 class="text-2xl font-semibold mb-4 text-midnight-blue font-playfair">How We Help</h3>
            <p class="text-gray-800 leading-relaxed font-medium font-inter">
              We help you make clear, confident, and informed decisions—whether it’s choosing a destination, planning your lifestyle, managing costs, or preparing for long-term moves.
              Our advisory services combine research, real-world insights, and expert guidance to help you evaluate options and choose the path that best fits your goals.
            </p>
          </div>
        </Motion>
        <Motion as="div"
          :initial="{ opacity: 0, x: 30 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          <NuxtImg
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Kenya relocation consultants - team collaboration"
            class="w-full h-full object-cover rounded-sm shadow-md"
            width="2070"
            height="1380"
            loading="lazy"
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
          <Globe class="w-10 h-10 text-midnight-blue mb-2" />
          <h3 class="text-3xl font-semibold text-center text-midnight-blue font-playfair">Our Global Perspective</h3>
        </div>
        <div class="bg-sand-gold-light/20 p-8 rounded-sm border border-sand-gold/30 max-w-3xl mx-auto">
          <p class="text-gray-800 leading-relaxed font-medium font-inter text-center">
            At Nomadia, our advisors bring a wealth of first-hand experience from living and working across the globe - including Finland, the UK, China, Germany, and the rest of Europe. Our team understands the challenges and opportunities of moving abroad, navigating new cultures, and building a life in unfamiliar places.<br><br>
            Whether you’re seeking guidance on immigration, adapting to a new environment, or making important decisions about your future, we offer advice rooted in diverse backgrounds and real-world journeys. We’re here to help you thrive - wherever you choose to call home.
          </p>
        </div>
      </Motion>
    </div>
  </section>
</template>
