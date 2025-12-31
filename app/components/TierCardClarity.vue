<script setup lang="ts">
import { Motion } from 'motion-v';
</script>
<template>
  <Motion as="div"
    :initial="{ opacity: 0, y: 30 }"
    :in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true }"
    :transition="{ duration: 0.6, delay: 0.1 }"
    class="h-full"
  >
    <Card class="h-full rounded-sm shadow-lg border-0 bg-white flex flex-col">
      <CardHeader class="bg-[#7FBAB4]/30 p-6">
        <CardTitle class="text-2xl font-bold text-[#0C354D] font-montserrat">
          TIER 1
        </CardTitle>
        <p class="text-xl font-light mt-2 text-[#0C354D] font-playfair">
          Clarity Call
        </p>
      </CardHeader>
      <CardContent class="p-6 bg-white flex-1 flex flex-col justify-between">
        <div class="mb-6">
          <p class="text-sm text-gray-700 mb-4 font-medium font-inter">
            <strong class="text-[#0C354D]">Best for:</strong> Someone who doesn't know where to start
          </p>
          <p class="text-sm text-gray-700 leading-relaxed font-inter">
            A focused 60-minute consultation to identify your key priorities and create a roadmap forward.
          </p>
        </div>
        <div class="bg-[#9E7F5E]/15 p-5 rounded-sm mt-4 border-2 border-[#9E7F5E]">
          <p class="text-xs uppercase tracking-wider font-bold mb-2 text-[#9E7F5E] font-montserrat">
            OUTCOME
          </p>
          <p class="text-sm text-[#0C354D] font-semibold font-inter">
            Clear next steps and a personalized action plan
          </p>
        </div>
        <Button class="w-full mt-6 bg-[#0DA797] hover:bg-[#0C354D] text-white transition-all duration-300 rounded-sm font-montserrat">
          START YOUR JOURNEY
        </Button>
      </CardContent>
    </Card>
  </Motion>
</template>
