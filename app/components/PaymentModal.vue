<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer'

// Two-way binding for modal state
const isOpen = defineModel<boolean>('open', {
  default: false,
})

// One way binding for tier selection
const props = defineProps<{
  tier: 1 | 2 | null
}>()

const isDesktop = useMediaQuery('(min-width: 640px)')

const Modal = computed(() => ({
  Root: isDesktop.value ? Dialog : Drawer,
  Content: isDesktop.value ? DialogContent : DrawerContent,
  Header: isDesktop.value ? DialogHeader : DrawerHeader,
  Title: isDesktop.value ? DialogTitle : DrawerTitle,
  Description: isDesktop.value ? DialogDescription : DrawerDescription,
  Footer: isDesktop.value ? DialogFooter : DrawerFooter,
  Close: isDesktop.value ? DialogClose : DrawerClose,
}))

const name = ref('')
const email = ref('')
const phone = ref('')
const q1 = ref('')
const q2 = ref('')
const q3 = ref('')
const loading = ref(false)

const tierString = computed(() => {
  if (props.tier === 1) return 'clarity'
  if (props.tier === 2) return 'expert'
  return ''
})
const amount = computed(() => tierString.value === 'clarity' ? 5 : 25)
const tierLabel = computed(() => tierString.value === 'clarity' ? 'Clarity Session' : 'Expert Session')

interface MpesaResponse {
  id?: string
  invoice?: {
    state?: string
    [key: string]: any
  }
  [key: string]: any
}

async function handlePay() {
  loading.value = true
  try {
    const payload = {
      amount: JSON.stringify(amount.value),
      phone_number: phone.value,
      api_ref: `NOMADIA-${props.tier}-${Date.now()}`,
      mobile_tarrif: 'CUSTOMER-PAYS',
      first_name: name.value,
      email: email.value,
    }
    const res = await $fetch<MpesaResponse>('/api/payments/mpesa', {
      method: 'POST',
      body: payload,
    })

    if (res?.invoice?.state === 'PENDING') {
      // Use the invoice_id from the response for status polling
      pollStatus(res.invoice?.invoice_id)
    } else {
      // If IntaSend responds but not pending, treat as failure
      loading.value = false
      if (import.meta.client) {
        sessionStorage.setItem('paymentFailedReason', res?.invoice?.state || 'Unknown error')
      }
      navigateTo('/payment-failed')
    }
  } catch (e: any) {
    loading.value = false
    // Redirect to payment-failed with error reason
    if (import.meta.client) {
      sessionStorage.setItem('paymentFailedReason', e?.message || 'Failed to initiate payment')
    }
    navigateTo('/payment-failed')
  }
}

function pollStatus(trackingId: string) {
  const interval = setInterval(async () => {
    try {
      const data: any = await $fetch(`/api/payments/status?id=${trackingId}`)
      
      // IntaSend status values
      if (data.invoice.state === 'COMPLETE') {
        clearInterval(interval)
        loading.value = false
        isOpen.value = false
        if (import.meta.client) {
          sessionStorage.setItem('bookingSuccessInfo', JSON.stringify({
            name: name.value,
            email: email.value,
            phone: phone.value,
            tier: tierString.value,
            q1: q1.value,
            q2: q2.value,
            q3: q3.value
          }))
        }
        navigateTo('/success') // Redirect to your success.vue with user data and questions
      } else if (data.invoice.state === 'FAILED') {
        clearInterval(interval)
        loading.value = false
        if (import.meta.client) {
          sessionStorage.setItem('paymentFailedReason', data?.invoice?.state || 'Payment failed')
        }
        navigateTo('/payment-failed') // Redirect to your payment-failed.vue with reason
      }
    } catch (err) {
      console.error('Status check failed', err)
    }
  }, 3000) // Check every 3 seconds
}
</script>

<template>
  <component
    :is="Modal.Root"
    v-model:open="isOpen"
    v-bind="Modal.Root === Drawer ? { dismissible: false } : {}"
  >
    <component
      :is="Modal.Content"
      class="bg-off-white rounded-lg shadow-xl w-full sm:max-w-lg border border-sand-gold"
      :class="[{ 'px-4 pb-8 pt-6': !isDesktop, 'p-8': isDesktop }]"
      @pointerDownOutside.prevent
      @escapeKeyDown.prevent
    >
      <component :is="Modal.Header" class="pr-8">
        <component :is="Modal.Title" class="text-2xl font-bold mb-2 text-midnight-blue font-playfair">Start Your Journey</component>
        <component :is="Modal.Description" class="mb-6 text-sand-gold font-montserrat">
          {{ tierLabel }} &mdash; {{ amount.toLocaleString() }} KES
        </component>
      </component>
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
            <Input v-model="q1" placeholder="Question 1" required />
            <Input v-model="q2" placeholder="Question 2" required />
            <Input v-model="q3" placeholder="Question 3" required />
          </div>
        </div>
        <component :is="Modal.Footer">
          <Button type="submit" class="w-full bg-midnight-blue text-white py-2 rounded-sm font-montserrat text-base mt-2 hover:bg-sand-gold transition-all" :disabled="loading">
            <span v-if="loading">Processing...</span>
            <span v-else>Pay & Book</span>
          </Button>
        </component>
      </form>
    </component>
  </component>
</template>
