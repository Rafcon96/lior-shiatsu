import express from 'express'
import { getPayload } from 'payload'
import config from './payload.config.js'

const app = express()

// Redirect root to admin
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  const payloadInstance = await getPayload({ config })

  // Add Payload middleware - Payload v3 uses express middleware
  app.use(payloadInstance.router)

  const port = process.env.PORT || 3000

  app.listen(port, async () => {
    console.log(`Payload server running on http://localhost:${port}`)
    console.log(`Admin panel: http://localhost:${port}/admin`)
  })
}

start().catch((error) => {
  console.error('Error starting server:', error)
  process.exit(1)
})

