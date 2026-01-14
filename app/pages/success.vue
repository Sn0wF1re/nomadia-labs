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
const route = useRoute()
const router = useRouter()
const name = computed(() => route.query.name as string || '')
const email = computed(() => route.query.email as string || '')
const phone = computed(() => route.query.phone as string || '')
const tier = computed(() => route.query.tier as string || 'clarity')
const isPremium = computed(() => tier.value === 'full-support')

const calSlug = computed(() => tier.value === 'expert' ? 'expert' : 'clarity')
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

  // Inject cal.com embed script
  const script = document.createElement('script')
  script.id = 'cal-embed-script'
  script.type = 'text/javascript'
  script.innerHTML = `
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "${calNamespace.value}", {origin:"https://app.cal.com"});
    Cal("preload", { calLink: "loki-lucky-hw9pzx/${calSlug.value}" });
    Cal.ns["${calNamespace.value}"]( "inline", {
      elementOrSelector: "#${calDivId.value}",
      config: {"layout":"month_view"},
      calLink: "loki-lucky-hw9pzx/${calSlug.value}",
      prefill: {
        name: "${name.value}",
        email: "${email.value}",
        phone: "${phone.value}"
      }
    });
    Cal.ns["${calNamespace.value}"]( "ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#c5a059"}, "dark":{"cal-brand":"#c5a059"}},"hideEventTypeDetails":true,"layout":"month_view"});
  `
  document.body.appendChild(script)
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
    <component :is="Modal.Root" v-model:open="open" v-bind="modalRootProps">
      <component
        :is="Modal.Content"
        class="sm:max-w-lg"
        :class="[{ 'px-2 pb-8 *:px-4': !isDesktop }]"
      >
        <component :is="Modal.Header">
          <component :is="Modal.Title" class="text-2xl md:text-3xl font-bold text-midnight-blue font-playfair text-center">
            Payment Successful!
          </component>
          <component :is="Modal.Description" class="text-base text-sand-gold font-montserrat text-center">
            Thank you for booking your session with Nomadia.
          </component>
        </component>
        <div
          class="w-full bg-white/90 rounded-xl p-4 md:p-8 text-center backdrop-blur-md z-10 mx-auto"
          :class="{
            'border-2 border-sand-gold': isPremium,
          }"
        >
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
          <p class="text-sm md:text-base text-gray-700 font-inter mb-6 md:mb-8">You're one step closer to clarity. Please schedule your session below.</p>
          <div class="w-full flex justify-center">
            <div :id="calDivId" style="width:100%;height:400px;overflow:scroll"></div>
          </div>
          <p class="mt-6 md:mt-8 text-xs text-gray-500 font-montserrat">If you have any questions, contact us at <a href="mailto:advisory@nomadialabs.com" class="text-sand-gold underline">advisory@nomadialabs.com</a></p>
        </div>
      </component>
    </component>
  </div>
</template>
