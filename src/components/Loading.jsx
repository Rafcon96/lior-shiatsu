import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '50vh',
  gap: theme.spacing(2),
}))

/**
 * Loading component with optional message
 */
export const Loading = ({ message = 'Loading...', fullScreen = false }) => {
  const containerStyle = fullScreen
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.9)',
        zIndex: 9999,
      }
    : {}

  return (
    <LoadingContainer sx={containerStyle}>
      <CircularProgress />
      {message && (
        <Typography variant="body1" color="text.secondary">
          {message}
        </Typography>
      )}
    </LoadingContainer>
  )
}

export default Loading

