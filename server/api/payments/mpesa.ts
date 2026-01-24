import { S } from "vue-router/dist/router-CWoNjPRp.mjs"

// /server/api/payments/mpesa.ts
export default defineEventHandler(async (event) => {
  const API_URL = "https://api.intasend.com/api/v1/payment/mpesa-stk-push/"
  
  const body = await readBody(event)
  const config = useRuntimeConfig()
  
  // Define allowed tiers and their corresponding amounts
  const allowedTiers: Record<string, number> = {
    '1': 5000,   // Clarity Session
    '2': 25000   // Expert Session
  }

  // Validate tier
  const tier = String(body.tier)
  if (!allowedTiers[tier]) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid tier selected'
    })
  }

  function generateApiRef(tier: string) {
    const tierMap: Record<string, string> = {
      '1': 'CLARITY',
      '2': 'EXPERT'
    }
    const date = new Date()
    const yyyymmdd = date.toISOString().slice(0,10).replace(/-/g, '')
    const rand = Math.random().toString(36).substring(2, 8).toUpperCase()
    const label = tierMap[tier] || 'UNKNOWN'
    return `NOMADIA-${label}-${yyyymmdd}-${rand}-${date.getTime()}`
  }

  // get amount based on tier
  const amount = allowedTiers[tier]

  // Extract other required fields
  const { phone_number, first_name, email } = body

  // Construct request body for IntaSend API
  const requestBody = {
    amount: amount,
    phone_number: phone_number,
    first_name: first_name,
    email: email,
    api_ref: generateApiRef(tier),
    mobile_tarrif: 'CUSTOMER-PAYS'
  }

  const requestHeaders = {
    accept: "application/json",
    "content-type": "application/json",
    authorization: `Bearer ${config.intasendKey}`
  }

  try {
    const data = await $fetch(API_URL, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(requestBody)
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