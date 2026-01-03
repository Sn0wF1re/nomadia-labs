
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'

const route = useRoute()
const name = computed(() => route.query.name as string || '')
const email = computed(() => route.query.email as string || '')
const phone = computed(() => route.query.phone as string || '')
const tier = computed(() => route.query.tier as string || 'clarity')

const calSlug = computed(() => tier.value === 'expert' ? 'expert' : 'clarity')
const calNamespace = computed(() => `cal-success-${calSlug.value}`)
const calDivId = computed(() => `my-cal-inline-${calSlug.value}`)

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
    Cal.ns["${calNamespace.value}"]( "ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#c5a059"}, "dark":{"cal-brand":"#c5a059"},"hideEventTypeDetails":true,"layout":"month_view"});
  `
  document.body.appendChild(script)
})
</script>

<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
        alt="Hero background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0C354D]/70 to-[#0C354D]/50" />
    </div>
    <div class="max-w-lg w-full bg-white/90 rounded-xl shadow-2xl border-2 border-sand-gold p-10 text-center backdrop-blur-md z-10">
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
      <h1 class="text-4xl font-bold mb-4 text-midnight-blue font-playfair">Payment Successful!</h1>
      <p class="text-lg text-sand-gold font-montserrat mb-6">Thank you for booking your session with Nomadia.</p>
      <p class="text-base text-gray-700 font-inter mb-8">You're one step closer to clarity. Please schedule your session below.</p>
      <!-- Cal.com Inline Embed -->
      <div class="w-full flex justify-center">
        <div :id="calDivId" style="width:100%;height:600px;overflow:scroll"></div>
      </div>
      <p class="mt-8 text-xs text-gray-500 font-montserrat">If you have any questions, contact us at <a href="mailto:advisory@nomadia.co.ke" class="text-sand-gold underline">advisory@nomadia.co.ke</a></p>
    </div>
   </div>
</template>
