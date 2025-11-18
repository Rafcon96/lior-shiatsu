import React, { useState, useEffect } from 'react'
import { Box, Container, Typography, TextField, Button, Alert } from '@mui/material'
import { styled } from '@mui/material/styles'
import { getGlobal } from '../../utils/payloadApi'

const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 0),
  },
}))

const FormBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '24px',
  padding: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '0 auto',
}))

/**
 * Render Form block from Payload
 * @param {Object} block - Form block data from Payload
 * @param {string} locale - Current locale
 */
export const RenderForm = ({ block, locale = 'he' }) => {
  const [form, setForm] = useState(null)
  const [formData, setFormData] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const fetchForm = async () => {
      if (!block || !block.form) return

      try {
        // Fetch form configuration from Payload
        // Note: This assumes forms are stored in a 'forms' collection
        const formId = typeof block.form === 'object' ? block.form.id : block.form
        const response = await fetch(
          `${process.env.REACT_APP_PAYLOAD_API_URL || 'http://localhost:3000/api'}/forms/${formId}?locale=${locale}`
        )
        if (response.ok) {
          const formData = await response.json()
          setForm(formData)
          
          // Initialize form data object
          const initialData = {}
          if (formData.fields) {
            formData.fields.forEach((field) => {
              initialData[field.name] = ''
            })
          }
          setFormData(initialData)
        }
      } catch (error) {
        console.error('Error fetching form:', error)
      }
    }

    fetchForm()
  }, [block, locale])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage({ type: '', text: '' })

    try {
      const formId = typeof block.form === 'object' ? block.form.id : block.form
      const response = await fetch(
        `${process.env.REACT_APP_PAYLOAD_API_URL || 'http://localhost:3000/api'}/form-submissions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            form: formId,
            submissionData: formData,
          }),
        }
      )

      if (response.ok) {
        setMessage({ type: 'success', text: 'Form submitted successfully!' })
        setFormData({})
      } else {
        setMessage({ type: 'error', text: 'Failed to submit form. Please try again.' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  if (!block || !form) return null

  return (
    <FormContainer>
      <Container maxWidth="md">
        {block.introContent && block.enableIntro && (
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <div
              dangerouslySetInnerHTML={{
                __html: block.introContent,
              }}
            />
          </Box>
        )}

        <FormBox component="form" onSubmit={handleSubmit}>
          {form.fields?.map((field) => (
            <TextField
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.blockType === 'email' ? 'email' : field.blockType === 'number' ? 'number' : 'text'}
              required={field.required}
              fullWidth
              margin="normal"
              multiline={field.blockType === 'textarea'}
              rows={field.blockType === 'textarea' ? 4 : 1}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          ))}

          {message.text && (
            <Alert severity={message.type === 'success' ? 'success' : 'error'} sx={{ mt: 2 }}>
              {message.text}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : form.submitButtonLabel || 'Submit'}
          </Button>
        </FormBox>
      </Container>
    </FormContainer>
  )
}

export default RenderForm

