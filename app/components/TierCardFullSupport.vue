<script setup lang="ts">
import { Motion } from 'motion-v';
const props = defineProps<{ disabled?: boolean }>()
const emit = defineEmits(['start'])
</script>
<template>
  <Motion as="div"
    :initial="{ opacity: 0, y: 30 }"
    :in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true }"
    :transition="{ duration: 0.6, delay: 0.3 }"
    class="h-full"
  >
      <Card class="h-full rounded-sm shadow-xl border-2 border-sand-gold bg-white flex flex-col">
      <CardHeader class="bg-midnight-blue p-8">
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
            <strong class="text-midnight-blue">Best for:</strong> Complex decisions requiring ongoing support
          </p>
          <p class="text-sm text-gray-700 leading-relaxed font-inter">
            Comprehensive partnership throughout your decision journey with continuous guidance, emotional support, and expert advice.
          </p>
        </div>
        <div class="bg-sand-gold/15 p-6 rounded-sm mt-4 border-2 border-sand-gold">
          <p class="text-xs uppercase tracking-wider font-bold mb-3 text-sand-gold font-montserrat">
            OUTCOME
          </p>
          <p class="text-sm text-midnight-blue font-semibold leading-relaxed font-inter">
            Emotional guidance through the decision process with complete support from start to finish
          </p>
        </div>
          <Button class="w-full mt-6 bg-teal hover:bg-midnight-blue text-white transition-all duration-300 rounded-sm font-montserrat" :disabled="props.disabled" @click="$emit('start')">
          START YOUR JOURNEY
        </Button>
      </CardContent>
    </Card>
  </Motion>
</template>
