<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  open: boolean
  onClose: () => void
}>()

const name = ref('')
const email = ref('')
const phone = ref('')
const description = ref('')
const loading = ref(false)
const error = ref('')

function handleSubmit() {
  loading.value = true
  error.value = ''
  // TODO: Save to DB or send email for manual follow-up
  setTimeout(() => {
    loading.value = false
    props.onClose()
    // Optionally show a success message
  }, 2000)
}
</script>

<template>
  <Dialog :open="props.open" @close="props.onClose">
    <div class="bg-off-white rounded-lg shadow-xl w-full max-w-lg p-8 border border-sand-gold relative">
      <Button class="absolute top-4 right-4 text-2xl text-midnight-blue bg-transparent hover:bg-sand-gold-light/40 px-2 py-0" @click="props.onClose" variant="ghost">&times;</Button>
      <h2 class="text-2xl font-bold mb-2 text-midnight-blue font-playfair">Full Support Inquiry</h2>
      <p class="mb-6 text-sand-gold font-montserrat">Let us know about your relocation or project needs. We'll follow up personally.</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
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
          <Label class="block text-xs font-montserrat mb-1">Project Description</Label>
          <Input v-model="description" as="textarea" rows="4" required />
        </div>
        <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>
        <Button type="submit" class="w-full bg-midnight-blue text-white py-3 rounded-sm font-montserrat text-lg mt-2 hover:bg-sand-gold transition-all" :disabled="loading">
          <span v-if="loading">Sending...</span>
          <span v-else>Send Inquiry</span>
        </Button>
      </form>
    </div>
  </Dialog>
</template>
