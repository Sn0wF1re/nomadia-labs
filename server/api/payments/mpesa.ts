// /server/api/payments/mpesa.ts
export default defineEventHandler(async (event) => {
  const API_URL = "https://api.intasend.com/api/v1/payment/mpesa-stk-push/"
  
  const body = await readBody(event)
  const config = useRuntimeConfig()
  console.log('Intasend Publishable Key:', config.intasendPublishableKey) // Debugging line
  const requestHeaders = {
    "Content-Type": "application/json",
    "X-IntaSend-Public-API-Key": config.intasendPublishableKey
  }

  try {
    const data = await $fetch(API_URL, {
      method: "POST",
      headers: requestHeaders,
      body
    })
    return data
  } catch (error) {
    // Log error for debugging
    console.error('IntaSend API error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Intasend Request Failed',
      data: error
    })
  }
})