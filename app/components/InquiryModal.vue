<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from '@/components/ui/drawer'

const isOpen = defineModel<boolean>('open', {
  default: false,
})

const isDesktop = useMediaQuery('(min-width: 640px)')

const Modal = computed(() => ({
  Root: isDesktop.value ? Dialog : Drawer,
  Content: isDesktop.value ? DialogContent : DrawerContent,
  Header: isDesktop.value ? DialogHeader : DrawerHeader,
  Title: isDesktop.value ? DialogTitle : DrawerTitle,
  Description: isDesktop.value ? DialogDescription : DrawerDescription,
  Footer: isDesktop.value ? DialogFooter : DrawerFooter,
}))


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
  <component :is="Modal.Root" v-model:open="isOpen">
    <component
      :is="Modal.Content"
      class="bg-off-white rounded-lg shadow-xl w-full sm:max-w-lg border border-sand-gold"
      :class="[{ 'px-4 pb-8 pt-6': !isDesktop, 'p-8': isDesktop }]"
    >
      <component :is="Modal.Header" class="pr-8">
        <component :is="Modal.Title" class="text-2xl font-bold mb-2 text-midnight-blue font-playfair">Request Full Support</component>
        <component :is="Modal.Description" class="mb-6 text-sand-gold font-montserrat">
          Our team will reach out for a high-touch onboarding.
        </component>
      </component>
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
        <component :is="Modal.Footer">
          <Button type="submit" class="w-full bg-midnight-blue text-white py-2 rounded-sm font-montserrat text-base mt-2 hover:bg-sand-gold transition-all" :disabled="loading">
            <span v-if="loading">Sending...</span>
            <span v-else>Send Inquiry</span>
          </Button>
        </component>
      </form>
    </component>
  </component>
</template>
