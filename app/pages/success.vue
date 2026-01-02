
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'

const route = useRoute()
const name = computed(() => route.query.name as string || '')
const email = computed(() => route.query.email as string || '')
const phone = computed(() => route.query.phone as string || '')
const tier = computed(() => route.query.tier as string || 'clarity')

const calSlug = computed(() => tier.value === 'expert' ? 'secret' : '15min')
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
    Cal.ns["${calNamespace.value}"]( "inline", {
      elementOrSelector: "#${calDivId.value}",
      config: {"layout":"month_view"},
      calLink: "clinton-mokaya-6h2vam/${calSlug.value}",
      prefill: {
        name: "${name.value}",
        email: "${email.value}",
        phone: "${phone.value}"
      }
    });
    Cal.ns["${calNamespace.value}"]( "ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#c5a059"}},"hideEventTypeDetails":true,"layout":"month_view"});
  `
  document.body.appendChild(script)
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-off-white px-6 pt-24 pb-24">
    <div class="max-w-lg w-full bg-white rounded-lg shadow-xl border-2 border-sand-gold p-10 text-center">
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
