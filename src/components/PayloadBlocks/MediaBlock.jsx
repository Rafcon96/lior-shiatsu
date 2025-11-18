import React from 'react'
import { Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import { getMediaUrl } from '../../utils/payloadApi'

const MediaContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
  '& video': {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
}))

/**
 * Render Media block from Payload
 * @param {Object} block - Media block data from Payload
 */
export const RenderMediaBlock = ({ block }) => {
  if (!block || !block.media) return null

  const mediaUrl = getMediaUrl(block.media)
  const mediaType = block.media.mimeType || ''

  return (
    <MediaContainer>
      <Container maxWidth="lg">
        {mediaType.startsWith('video/') ? (
          <video controls src={mediaUrl} style={{ width: '100%' }} />
        ) : (
          <img src={mediaUrl} alt={block.media.alt || ''} />
        )}
      </Container>
    </MediaContainer>
  )
}

export default RenderMediaBlock

