<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  open: boolean
  tier: 1 | 2
  amount: number
  onClose: () => void
}>()

const name = ref('')
const email = ref('')
const phone = ref('')
const questions = ref(['', '', ''])
const loading = ref(false)
const error = ref('')

const tierLabel = computed(() => props.tier === 1 ? 'Clarity Call' : 'Expert Direction')

function handlePay() {
  loading.value = true
  error.value = ''
  // TODO: Integrate IntaSend SDK for M-Pesa STK Push here
  // On success: save data, redirect to /schedule-appointment
  setTimeout(() => {
    loading.value = false
    props.onClose()
    // router.push('/schedule-appointment')
  }, 2000)
}
</script>

<template>
  <Dialog :open="props.open" @close="props.onClose">
    <div class="bg-off-white rounded-lg shadow-xl w-full max-w-lg p-8 border border-sand-gold relative">
      <Button class="absolute top-4 right-4 text-2xl text-midnight-blue bg-transparent hover:bg-sand-gold-light/40 px-2 py-0" @click="props.onClose" variant="ghost">&times;</Button>
      <h2 class="text-2xl font-bold mb-2 text-midnight-blue font-playfair">Start Your Journey</h2>
      <p class="mb-6 text-sand-gold font-montserrat">{{ tierLabel }} &mdash; {{ amount.toLocaleString() }} KES</p>
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
        <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>
        <Button type="submit" class="w-full bg-midnight-blue text-white py-3 rounded-sm font-montserrat text-lg mt-2 hover:bg-sand-gold transition-all" :disabled="loading">
          <span v-if="loading">Processing...</span>
          <span v-else>Pay & Book</span>
        </Button>
      </form>
    </div>
  </Dialog>
</template>
