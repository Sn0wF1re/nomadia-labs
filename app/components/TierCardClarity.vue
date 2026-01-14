<script setup lang="ts">
const props = defineProps<{ disabled?: boolean }>()
const emit = defineEmits(['start'])
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
      <CardHeader class="bg-teal-light/30 p-6">
        <CardTitle class="text-2xl font-bold text-midnight-blue font-montserrat">
          TIER 1
        </CardTitle>
        <p class="text-md font-light mt-2 text-midnight-blue font-playfair">
          Clarity Call
        </p>
        <p class="text-md font-light mt-2 text-midnight-blue font-playfair">
          Duration: 30 minutes
        </p>
        <p class="text-md font-light mt-2 text-midnight-blue font-playfair">
          Fee: KES 5,000
        </p>
      </CardHeader>
      <CardContent class="p-6 bg-white flex-1 flex flex-col justify-between">
        <div class="mb-6">
          <p class="text-sm text-gray-700 mb-4 font-medium font-inter">
            <strong class="text-midnight-blue">Best for:</strong> Individuals unsure where to start with travel or relocation
          </p>
          <p class="text-sm text-gray-700 leading-relaxed font-inter">
            A focused 30-minute consultation to establish direction and eliminate uncertainty
          </p>
        </div>
        <div class="bg-sand-gold/15 p-5 rounded-sm mt-4 border-2 border-sand-gold">
          <p class="text-xs uppercase tracking-wider font-bold mb-2 text-sand-gold font-montserrat">
            OUTCOME
          </p>

          <ul class="list-disc pl-5">
            <li class="text-sm text-midnight-blue font-semibold font-inter">
              Identify key priorities and options
            </li>
            <li class="text-sm text-midnight-blue font-semibold font-inter">
              Clear starting point and practical roadmap
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
