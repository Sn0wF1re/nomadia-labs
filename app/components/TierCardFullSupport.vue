<script setup lang="ts">
import { Motion } from 'motion-v';
</script>
<template>
  <Motion as="div"
    :initial="{ opacity: 0, y: 30 }"
    :in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true }"
    :transition="{ duration: 0.6, delay: 0.3 }"
    class="h-full"
  >
    <Card class="h-full rounded-sm shadow-xl border-[#C5A059] border-2 bg-white flex flex-col">
      <CardHeader class="bg-[#0C354D] p-8">
        <CardTitle class="text-2xl font-bold text-white font-montserrat">
          TIER 3
        </CardTitle>
        <p class="text-xl font-light mt-2 text-white/90 font-playfair">
          Full Support
        </p>
      </CardHeader>
      <CardContent class="p-8 bg-white flex-1 flex flex-col justify-between">
        <div class="mb-8">
          <p class="text-sm text-gray-700 mb-5 font-medium leading-relaxed font-inter">
            <strong class="text-[#0C354D]">Best for:</strong> Complex decisions requiring ongoing support
          </p>
          <p class="text-sm text-gray-700 leading-relaxed font-inter">
            Comprehensive partnership throughout your decision journey with continuous guidance, emotional support, and expert advice.
          </p>
        </div>
        <div class="bg-[#C5A059]/15 p-6 rounded-sm mt-4 border-2 border-[#C5A059]">
          <p class="text-xs uppercase tracking-wider font-bold mb-3 text-[#C5A059] font-montserrat">
            OUTCOME
          </p>
          <p class="text-sm text-[#0C354D] font-semibold leading-relaxed font-inter">
            Emotional guidance through the decision process with complete support from start to finish
          </p>
        </div>
        <Button class="w-full mt-8 bg-[#0DA797] hover:bg-[#0C354D] text-white transition-all duration-300 h-12 rounded-sm font-montserrat">
          START YOUR JOURNEY
        </Button>
      </CardContent>
    </Card>
  </Motion>
</template>
