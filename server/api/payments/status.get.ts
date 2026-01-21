export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)
  const config = useRuntimeConfig()

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing tracking ID' })
  }

  try {
    // IntaSend Status API
    const data = await $fetch(`https://api.intasend.com/api/v1/payment/status/`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${config.intasendKey}`,
      },
      body: { invoice_id: id }
    })

    return data
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to check status',
      data: error.data
    })
  }
})