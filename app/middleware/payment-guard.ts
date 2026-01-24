export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.client) {
    if (to.path === '/success') {
      const bookingInfo = sessionStorage.getItem('bookingSuccessInfo')
      if (!bookingInfo) {
        window.location.href = '/'
        return
      }
    }
    if (to.path === '/payment-failed') {
      const failReason = sessionStorage.getItem('paymentFailedReason')
      if (!failReason) {
        window.location.href = '/'
        return
      }
    }
  }
})