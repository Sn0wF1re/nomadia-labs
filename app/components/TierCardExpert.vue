<script setup lang="ts">
const props = defineProps<{ disabled?: boolean }>()
const emit = defineEmits(['start'])
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
      <CardHeader class="bg-teal p-6">
        <CardTitle class="text-2xl font-bold text-white font-montserrat">
          TIER 2
        </CardTitle>
        <p class="text-md font-light mt-2 text-white font-playfair">
          Expert Direction
        </p>
        <p class="text-md font-light mt-2 text-white font-playfair">
          Duration: 60 minutes
        </p>
        <p class="text-md font-light mt-2 text-white font-playfair">
          Fee: KES 25,000
        </p>
      </CardHeader>
      <CardContent class="p-6 bg-white flex-1 flex flex-col justify-between">
        <div class="mb-6">
          <p class="text-sm text-gray-700 mb-4 font-medium font-inter">
            <strong class="text-midnight-blue">Best for:</strong> Individuals or families ready to make relocation decisions.
          </p>
          <p class="text-sm text-gray-700 leading-relaxed font-inter">
            Deep-dive analysis with comprehensive research, data, and expert recommendations tailored to your situation.
          </p>
        </div>
        <div class="bg-sand-gold/15 p-5 rounded-sm mt-4 border-2 border-sand-gold">
          <p class="text-xs uppercase tracking-wider font-bold mb-2 text-sand-gold font-montserrat">
            OUTCOME
          </p>
          <ul class="list-disc pl-5">
            <li class="text-sm text-midnight-blue font-semibold font-inter">
              Deep-dive into goals, budget, lifestyle, and long-term plans
            </li>
            <li class="text-sm text-midnight-blue font-semibold font-inter">
              Recommendations tailored to your situation
            </li>
            <li class="text-sm text-midnight-blue font-semibold font-inter">
              Connect with people who have relocated to up to 3 chosen destinations
            </li>
          </ul>
        </div>
        <Button class="w-full mt-6 bg-teal hover:bg-midnight-blue text-white transition-all duration-300 rounded-sm font-montserrat" :disabled="props.disabled" @click="$emit('start')">
          START YOUR JOURNEY
        </Button>
      </CardContent>
    </Card>
  </Motion>
</template>
