<script setup lang="ts">
import { Motion } from 'motion-v'
const team = [
  { name: 'Sarah Mitchell', role: 'Founder & Lead Advisor', bio: '15+ years experience in strategic consulting and life coaching' },
  { name: 'David Chen', role: 'Senior Advisor', bio: 'Expert in career transitions and professional development' },
  { name: 'Emma Rodriguez', role: 'Research Specialist', bio: 'Data-driven insights for informed decision making' }
]
</script>
<template>
  <section id="about" class="py-24 px-6 bg-[#FEFDFB] relative">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[#9E7F5E]" />
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
          <div class="bg-[#F9DEB2]/20 p-8 rounded-sm border border-[#9E7F5E]/30">
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
        <h3 class="text-3xl font-semibold mb-8 text-center text-[#0C354D] font-playfair">Our Team</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.name" class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#F9DEB2]/40 to-[#7FBAB4]/40 rounded-full" />
            <h4 class="text-xl font-semibold mb-2 text-[#0C354D] font-playfair">{{ member.name }}</h4>
            <p class="text-sm uppercase tracking-wider text-[#9E7F5E] font-bold mb-3 font-montserrat">{{ member.role }}</p>
            <p class="text-sm text-gray-700 font-medium font-inter">{{ member.bio }}</p>
          </div>
        </div>
      </Motion>
    </div>
  </section>
</template>
