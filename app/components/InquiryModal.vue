
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = defineModel<boolean>('open', {
  default: false,
})


const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const loading = ref(false)

async function handleInquiry() {
  loading.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 1200))

    // update parent state and close modal automatically
    isOpen.value = false
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogContent class="[&>button:last-child]:hidden bg-off-white rounded-lg shadow-xl w-full max-w-lg p-8 border border-sand-gold">
      <DialogHeader class="pr-8">
        <DialogTitle class="text-2xl font-bold mb-2 text-midnight-blue font-playfair">Request Full Support</DialogTitle>
        <DialogDescription class="mb-6 text-sand-gold font-montserrat">
          Our team will reach out for a high-touch onboarding.
        </DialogDescription>
        <DialogClose as-child>
          <Button class="absolute top-4 right-4 text-lg text-midnight-blue bg-transparent hover:bg-sand-gold-light/40 px-2 py-0" variant="ghost">&times;</Button>
        </DialogClose>
      </DialogHeader>
      <form @submit.prevent="handleInquiry" class="space-y-4">
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
          <Label class="block text-xs font-montserrat mb-1">Tell us about your needs</Label>
          <Input v-model="message" placeholder="Describe your situation..." required />
        </div>
        <DialogFooter>
          <Button type="submit" class="w-full bg-midnight-blue text-white py-2 rounded-sm font-montserrat text-base mt-2 hover:bg-sand-gold transition-all" :disabled="loading">
            <span v-if="loading">Sending...</span>
            <span v-else>Send Inquiry</span>
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
