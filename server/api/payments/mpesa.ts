// /server/api/payments/mpesa.ts
export default defineEventHandler(async (event) => {
  const API_URL = "https://api.intasend.com/api/v1/payment/mpesa-stk-push/"
  
  const body = await readBody(event)
  const config = useRuntimeConfig()
  
  const requestHeaders = {
    accept: "application/json",
    "content-type": "application/json",
    authorization: `Bearer ${config.intasendKey}`
  }

  try {
    const data = await $fetch(API_URL, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(body)
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