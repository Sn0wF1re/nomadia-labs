<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Nomadia Labs | Kenya Relocation Advisory | Move to Finland, UK, Germany, China & Europe',
  description: 'Expert relocation guidance for Kenyans moving abroad. From Nairobi to Finland, UK, Germany, China & Europe. Visa support, pre-departure planning, and settlement assistance for individuals, families & professionals.',
  keywords: 'relocate from Kenya, Kenya to Finland, Kenya to UK, Kenya to Germany, Kenya to China, Kenya to Europe, emigration from Kenya, Kenyan diaspora, international relocation Nairobi, Kenya relocation consultant, move abroad from Kenya, Kenyan professionals abroad, visa guidance Kenya, expat advisory Kenya, Nomadia, Nomadia Labs, Nomadia Kenya, Nomadia Labs Kenya, relocation, relocating',
  ogTitle: 'Nomadia | Kenya Relocation Advisory | Move to Finland, UK, Germany & Europe',
  ogDescription: 'Expert relocation guidance for Kenyans moving to Finland, UK, Germany, China & Europe. Visa support, destination planning, and settlement assistance.',
  ogImage: '/og-image.png',
  ogUrl: 'https://nomadialabs.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Nomadia | Kenya Relocation Advisory | Move Abroad with Confidence',
  twitterDescription: 'Expert relocation guidance for Kenyans moving to Finland, UK, Germany, China & Europe. From Nairobi to your new home.',
  twitterImage: '/og-image.png',
})

// Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Nomadia Labs',
        alternateName: ['Nomadia Labs Kenya', 'Nomadia Kenya', 'Nomadia'],
        url: 'https://nomadialabs.com',
        logo: 'https://nomadialabs.com/nomadia-logo.png',
        description: 'Kenya\'s premier relocation advisory helping Kenyans relocate to Finland, UK, Germany, China and Europe with expert guidance, visa guidance, and settlement assistance.',
        areaServed: [
          { '@type': 'Country', name: 'Kenya' },
          { '@type': 'Country', name: 'Finland' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'Country', name: 'China' },
        ],
        sameAs: [
          'https://twitter.com/nomadia',
          'https://linkedin.com/company/nomadia',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'advisory@nomadialabs.com',
          contactType: 'customer service',
          areaServed: 'KE',
          availableLanguage: ['English', 'Swahili'],
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Kenya Relocation Advisory',
        provider: {
          '@type': 'Organization',
          name: 'Nomadia',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        description: 'Expert relocation advisory for Kenyans moving to Finland, UK, Germany, China & Europe. Visa guidance, pre-departure planning, and settlement support.',
        offers: [
          {
            '@type': 'Offer',
            name: 'Clarity Call',
            description: 'A focused 30-minute consultation for Kenyans planning to relocate abroad. Get direction on destinations like Finland, UK, Germany, or China.',
            price: '5000',
            priceCurrency: 'KES',
          },
          {
            '@type': 'Offer',
            name: 'Expert Direction',
            description: 'Deep-dive relocation analysis for Kenyan individuals and families. Comprehensive research on Finland, UK, Germany, China & Europe with tailored recommendations.',
            price: '25000',
            priceCurrency: 'KES',
          },
          {
            '@type': 'Offer',
            name: 'Full Support',
            description: 'Complete relocation partnership for Kenyans moving abroad. Visa application help, step-by-step guidance, network introductions, and ongoing support for moves to Finland, UK, Germany, China & Europe.',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 'Contact for pricing',
            },
          },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Nomadia Labs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nomadia Labs is Kenya\'s premier relocation advisory service, helping individuals, families, and professionals relocate from Kenya to destinations including Finland, UK, Germany, China, and other European countries.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can Nomadia help me relocate from Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nomadia provides expert guidance through three advisory tiers: Clarity Call (15-min focused consultation), Expert Direction (45-min comprehensive session), and Full Support (complete end-to-end relocation assistance including visa support and settlement services).',
            },
          },
          {
            '@type': 'Question',
            name: 'Which countries can I relocate to with Nomadia\'s help?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nomadia specializes in helping Kenyans relocate to Finland, United Kingdom, Germany, China, and other European destinations including France, Netherlands, Sweden, Norway, and Denmark.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does relocation advisory cost at Nomadia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nomadia offers three pricing tiers: Clarity Call at 5,000 KES for a 30-minute consultation, Expert Direction at 25,000 KES for a 60-minute session, and Full Support with custom pricing based on your relocation needs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Nomadia based in Nairobi, Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Nomadia Labs is based in Nairobi, Kenya. Our consultants live and work in multiple countries worldwide. We serve Kenyans across the country who are planning to relocate abroad.',
            },
          },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://nomadialabs.com/#website',
        url: 'https://nomadialabs.com',
        name: 'Nomadia Labs',
        alternateName: ['Nomadia', 'Nomadia Kenya'],
        description: 'Kenya\'s premier relocation advisory for moving abroad',
        publisher: {
          '@id': 'https://nomadialabs.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://nomadialabs.com/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    }, 
  ],
})

// Shared data state
const activeTier = ref<1 | 2 | null>(null) // 1, 2, or 3

// Individual modal visibility states  
const showInquiry = ref(false)
const showPayment = ref(false)

// Handle opening modals with tier selection
function openPayment(tier: 1 | 2) {
  activeTier.value = tier
  showPayment.value = true
}

function openInquiry() {
  showInquiry.value = true
}

// Reset tier on modal close
watch([showInquiry, showPayment], ([inquiryOpen, paymentOpen]) => {
  if (!inquiryOpen && !paymentOpen) {
    activeTier.value = null
  }
})
</script>

<template>
  <div class="w-full min-h-screen bg-off-white">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
          alt="Kenya relocation advisory hero - professional workspace"
          class="w-full h-full object-cover"
          width="2070"
          height="1380"
          loading="eager"
          fetchpriority="high"
          preload
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0C354D]/70 to-[#0C354D]/50" />
      </div>
      <Motion as="div"
        class="relative z-10 max-w-4xl mx-auto px-6 text-center"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
      >
        <h1 class="text-5xl md:text-7xl mb-6 leading-tight text-white font-playfair">
          Relocate from Kenya with Confidence. Settle Abroad Seamlessly.
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-inter">
          Nomadia provides expert relocation guidance for Kenyans moving to Finland, UK, Germany, China & Europe. From Kenya to your new home.
        </p>
      </Motion>
    </section>

    <!-- Advisory Tiers Section -->
    <section id="tiers" class="py-24 px-6 bg-off-white relative">
      <div class="absolute top-15 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-sand-gold" />
      <div class="max-w-7xl mx-auto">
        <Motion as="div"
          class="text-center mb-16"
          :initial="{ opacity: 0, y: 20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          <h2 class="text-4xl md:text-5xl font-semibold text-midnight-blue font-playfair">Advisory Tiers</h2>
          <p class="text-sm font-regular text-sand-gold mt-2">*All advisory sessions include written notes shared within 48 hours.</p>
        </Motion>
        <!-- Desktop: Grid layout -->
        <div class="hidden md:grid md:grid-cols-3 gap-8">
          <TierCardClarity :disabled="showPayment" @start="() => openPayment(1)" />
          <TierCardExpert :disabled="showPayment" @start="() => openPayment(2)" />
          <TierCardFullSupport :disabled="showInquiry" @start="() => openInquiry()" />
        </div>
        <!-- Mobile: Stacked cards effect - each card stacks on top of previous -->
        <div class="md:hidden flex flex-col relative -mx-6">
          <div class="sticky top-16 z-10 transform-gpu px-2 pb-80">
            <TierCardClarity :disabled="showPayment" @start="() => openPayment(1)" class="shadow-lg w-full" />
          </div>
          <div class="sticky top-16 z-20 transform-gpu px-2 pb-80">
            <TierCardExpert :disabled="showPayment" @start="() => openPayment(2)" class="shadow-xl w-full" />
          </div>
          <div class="sticky top-16 z-30 transform-gpu px-2">
            <TierCardFullSupport :disabled="showInquiry" @start="() => openInquiry()" class="shadow-2xl w-full" />
          </div>
        </div>

        <!-- Dialogs rendered at the section root -->
        <PaymentModal v-model:open="showPayment" :tier="activeTier" />
        <InquiryModal v-model:open="showInquiry" />
      </div>
    </section>
    <!-- About Section -->
    <AboutSection />
    <!-- Contact Section -->
    <!-- <ContactSection /> -->
    <FooterContact />
  </div>
</template>
