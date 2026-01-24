export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.client) {
    if (to.path === '/success') {
      const bookingInfo = sessionStorage.getItem('bookingSuccessInfo')
      if (!bookingInfo) return navigateTo('/')
    }
    if (to.path === '/payment-failed') {
      const failReason = sessionStorage.getItem('paymentFailedReason')
      if (!failReason) return navigateTo('/')
    }
  }
})