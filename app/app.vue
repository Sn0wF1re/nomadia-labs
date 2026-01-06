import { useHead } from 'nuxt/app'

useHead({
    link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
})
<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>