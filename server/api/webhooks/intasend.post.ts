export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // IntaSend sends the transaction state in the 'state' or 'invoice.state' field
  const { invoice_id, state, api_ref } = body

  if (state === 'COMPLETE') {
    // 1. Update your database (e.g., mark the booking as paid)
    // console.log(`Payment successful for reference: ${api_ref}`)
  } else if (state === 'FAILED') {
    // 2. Handle failure (e.g., log it or notify the team)
  }

  // Always return a 200 OK to IntaSend so they stop retrying
  return { received: true }
})