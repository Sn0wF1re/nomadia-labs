<script setup lang="ts">
import { ref, computed } from 'vue'

// Two-way binding for modal state
const isOpen = defineModel<boolean>('open', {
  default: false,
})

// One way binding for tier selection
const props = defineProps<{
  tier: 1 | 2 | null
}>()

const name = ref('')
const email = ref('')
const phone = ref('')
const questions = ref(['', '', ''])
const loading = ref(false)

const amount = computed(() => props.tier === 1 ? 5000 : 15000)
const tierLabel = computed(() => props.tier === 1 ? 'Clarity Session' : 'Expert Session')

async function handlePay() {
  loading.value = true
  // Simulate async
  setTimeout(() => {
    loading.value = false
    isOpen.value = false
  }, 1200)
}
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogContent class="[&>button:last-child]:hidden bg-off-white rounded-lg shadow-xl w-full max-w-lg p-8 border border-sand-gold">
      <DialogHeader class="pr-8">
        <DialogTitle class="text-2xl font-bold mb-2 text-midnight-blue font-playfair">Start Your Journey</DialogTitle>
        <DialogDescription class="mb-6 text-sand-gold font-montserrat">
          {{ tierLabel }} &mdash; {{ amount.toLocaleString() }} KES
        </DialogDescription>
        <DialogClose as-child>
          <Button class="absolute top-4 right-4 text-lg text-midnight-blue bg-transparent hover:bg-sand-gold-light/40 px-2 py-0" variant="ghost">&times;</Button>
        </DialogClose>
      </DialogHeader>
      <form @submit.prevent="handlePay" class="space-y-4">
        <div>
          <Label class="block text-xs font-montserrat mb-1">Name</Label>
          <Input v-model="name" required />
        </div>
        <div>
          <Label class="block text-xs font-montserrat mb-1">Email</Label>
          <Input v-model="email" type="email" required />
        </div>
        <div>
          <Label class="block text-xs font-montserrat mb-1">Phone Number</Label>
          <Input v-model="phone" type="tel" required />
        </div>
        <div>
          <Label class="block text-xs font-montserrat mb-1">Mandatory Questions</Label>
          <div class="space-y-2">
            <Input v-model="questions[0]" placeholder="Question 1" required />
            <Input v-model="questions[1]" placeholder="Question 2" required />
            <Input v-model="questions[2]" placeholder="Question 3" required />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" class="w-full bg-midnight-blue text-white py-2 rounded-sm font-montserrat text-base mt-2 hover:bg-sand-gold transition-all" :disabled="loading">
            <span v-if="loading">Processing...</span>
            <span v-else>Pay & Book</span>
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
