<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer'

useSeoMeta({
  title: 'Booking Confirmed | Nomadia',
  description: 'Your advisory session has been booked. Schedule your call with Nomadia.',
  robots: 'noindex, nofollow', // Don't index transactional pages
})

const open = ref(true)
const bookingComplete = ref(false)
const route = useRoute()
const router = useRouter()



let bookingInfo = {
  name: '',
  email: '',
  phone: '',
  tier: '',
  q1: '',
  q2: '',
  q3: ''
}

if (import.meta.client) {
  const raw = sessionStorage.getItem('bookingSuccessInfo')
  if (raw) {
    try {
      const parsed = JSON.parse(raw)
      bookingInfo = {
        name: parsed.name || '',
        email: parsed.email || '',
        phone: parsed.phone || '',
        tier: parsed.tier ?? '',
        q1: parsed.q1 || '',
        q2: parsed.q2 || '',
        q3: parsed.q3 || ''
      }
      sessionStorage.removeItem('bookingSuccessInfo')
    } catch {}
  }
}

const name = computed(() => bookingInfo.name)
const email = computed(() => bookingInfo.email)
const phone = computed(() => bookingInfo.phone)
const tier = computed(() => bookingInfo.tier)
const q1 = computed(() => bookingInfo.q1)
const q2 = computed(() => bookingInfo.q2)
const q3 = computed(() => bookingInfo.q3)
const isPremium = computed(() => {
  // If you add a 'full-support' tier, update this logic
  return tier.value === 'full-support'
})

// Normalize tier to string for calSlug
const calSlug = computed(() => {
  if (tier.value === 'expert') return 'expert'
  // fallback to clarity for 'clarity' or anything else
  return 'clarity'
})
const calNamespace = computed(() => `cal-success-${calSlug.value}`)
const calDivId = computed(() => `my-cal-inline-${calSlug.value}`)

const isDesktop = useMediaQuery('(min-width: 640px)')

const Modal = computed(() => ({
  Root: isDesktop.value ? Dialog : Drawer,
  Content: isDesktop.value ? DialogContent : DrawerContent,
  Header: isDesktop.value ? DialogHeader : DrawerHeader,
  Title: isDesktop.value ? DialogTitle : DrawerTitle,
  Description: isDesktop.value ? DialogDescription : DrawerDescription,
}))

// Props for the modal root - Drawer uses `dismissible`, Dialog uses event handlers
const modalRootProps = computed(() => {
  if (!isDesktop.value) {
    // Drawer: use dismissible prop to prevent closing on outside click
    return { dismissible: false }
  }
  return {}
})

onMounted(() => {
  // Remove any previous embed script
  const prev = document.getElementById('cal-embed-script')
  if (prev) prev.remove()

  // Build cal.com embed URL with query params for prefill
  const params = new URLSearchParams({
    name: name.value,
    email: email.value,
    phone: phone.value,
    q1: q1.value,
    q2: q2.value,
    q3: q3.value
  })
  const calLink = `loki-lucky-hw9pzx/${calSlug.value}?${params.toString()}`

  // Inject cal.com embed script and register booking callback inside the embed
  const script = document.createElement('script')
  script.id = 'cal-embed-script'
  script.type = 'text/javascript'
  script.innerHTML = `
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "${calNamespace.value}", {origin:"https://app.cal.com"});
    Cal("preload", { calLink: "${calLink}" });
    Cal.ns["${calNamespace.value}"]( "inline", {
      elementOrSelector: "#${calDivId.value}",
      config: {"layout":"month_view"},
      calLink: "${calLink}"
    });
    Cal.ns["${calNamespace.value}"]( "ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#c5a059"}, "dark":{"cal-brand":"#c5a059"}},"hideEventTypeDetails":true,"layout":"month_view"});
    Cal.ns["${calNamespace.value}"]( "on", {
      action: "bookingSuccessfulV2",
      callback: function(data) {
        window.postMessage({ calBookingComplete: true }, "*");
      }
    });
  `
  document.body.appendChild(script)

  // Listen for booking complete event from embed script
  function handleCalBookingComplete(event: MessageEvent) {
    if (event?.data?.calBookingComplete) {
      bookingComplete.value = true
    }
  }
  window.addEventListener('message', handleCalBookingComplete)
  onUnmounted(() => {
    window.removeEventListener('message', handleCalBookingComplete)
  })
})

function onClose() {
  open.value = false
  router.push('/')
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
        alt="Booking confirmed background"
        class="w-full h-full object-cover"
        width="2070"
        height="1380"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0C354D]/70 to-[#0C354D]/50" />
    </div>
    <component
      :is="Modal.Root"
      v-model:open="open"
      v-bind="modalRootProps"
    >
      <component
        :is="Modal.Content"
        class="sm:max-w-lg max-h-screen overflow-y-auto"
        :class="[{ 'px-2 pb-8 *:px-4': !isDesktop }]"
        @pointerDownOutside.prevent
        @escapeKeyDown.prevent
      >
        <div
          class="w-full bg-white/90 rounded-xl p-4 md:p-8 text-center backdrop-blur-md z-10 mx-auto"
          :class="{
            'border-2 border-sand-gold': isPremium,
          }"
        >
          <template v-if="!bookingComplete">
            <component :is="Modal.Title" class="text-2xl md:text-3xl font-bold text-midnight-blue font-playfair text-center mb-2">
              Payment Successful!
            </component>
            <component :is="Modal.Description" class="text-base text-sand-gold font-montserrat text-center mb-4">
              Thank you for booking your session with Nomadia.
            </component>
          </template>
          <Motion as="div"
            :initial="{ scale: 0, opacity: 0 }"
            :animate="{ scale: 1, opacity: 1 }"
            :transition="{ duration: 0.5, type: 'spring', stiffness: 200 }"
            class="flex justify-center items-center mb-4"
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#C5A059" fill-opacity="0.15"/>
              <circle cx="32" cy="32" r="28" fill="#C5A059" fill-opacity="0.25"/>
              <path d="M20 34L29 43L44 26" stroke="#249794" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Motion>
          <p v-if="!bookingComplete" class="text-sm md:text-base text-gray-700 font-inter mb-6 md:mb-8">You're one step closer to clarity. Please schedule your session below.</p>
          <div v-if="!bookingComplete" class="w-full flex justify-center">
            <div :id="calDivId" style="width:100%;height:400px;overflow:auto"></div>
          </div>
          <div v-else class="flex flex-col items-center justify-center py-12">
            <p class="text-lg font-bold font-playfair text-midnight-blue mb-2">Booking Complete!</p>
            <p class="text-base text-gray-700 mb-6">Your session is confirmed. Check your email for details.</p>
            <button @click="router.push('/')" class="px-6 py-2 rounded-lg bg-sand-gold text-white font-bold shadow hover:bg-sand-gold/80 transition">Go Home</button>
          </div>
          <p class="mt-6 md:mt-8 text-xs text-gray-500 font-montserrat">If you have any questions, contact us at <a href="mailto:advisory@nomadialabs.com" class="text-sand-gold underline">advisory@nomadialabs.com</a></p>
        </div>
      </component>
    </component>
  </div>
</template>
