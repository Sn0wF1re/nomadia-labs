<script setup lang="ts">
import { Motion } from 'motion-v';
</script>
<template>
  <Motion as="div"
    :initial="{ opacity: 0, y: 30 }"
    :in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true }"
    :transition="{ duration: 0.6, delay: 0.2 }"
    class="h-full"
  >
    <Card class="h-full rounded-sm shadow-lg border-0 bg-white flex flex-col">
      <CardHeader class="bg-[#0DA797] p-6">
        <CardTitle class="text-2xl font-bold text-white font-montserrat">
          TIER 2
        </CardTitle>
        <p class="text-xl font-light mt-2 text-white font-playfair">
          Expert Direction
        </p>
      </CardHeader>
      <CardContent class="p-6 bg-white flex-1 flex flex-col justify-between">
        <div class="mb-6">
          <p class="text-sm text-gray-700 mb-4 font-medium font-inter">
            <strong class="text-[#0C354D]">Best for:</strong> Those ready to make informed decisions
          </p>
          <p class="text-sm text-gray-700 leading-relaxed font-inter">
            Deep-dive analysis with comprehensive research, data, and expert recommendations tailored to your situation.
          </p>
        </div>
        <div class="bg-[#9E7F5E]/15 p-5 rounded-sm mt-4 border-2 border-[#9E7F5E]">
          <p class="text-xs uppercase tracking-wider font-bold mb-2 text-[#9E7F5E] font-montserrat">
            OUTCOME
          </p>
          <p class="text-sm text-[#0C354D] font-semibold font-inter">
            Shortlist, data, and personalized action direction
          </p>
        </div>
        <Button class="w-full mt-6 bg-[#0DA797] hover:bg-[#0C354D] text-white transition-all duration-300 rounded-sm font-montserrat">
          START YOUR JOURNEY
        </Button>
      </CardContent>
    </Card>
  </Motion>
</template>
