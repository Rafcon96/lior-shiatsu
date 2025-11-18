import React, { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { getPosts, getMediaUrl } from '../../utils/payloadApi'

const ArchiveContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 0),
  },
}))

const PostCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
}))

const PostMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

/**
 * Render Archive block from Payload
 * @param {Object} block - Archive block data from Payload
 * @param {string} locale - Current locale
 */
export const RenderArchive = ({ block, locale = 'he' }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      if (!block) return

      try {
        setLoading(true)
        let fetchedPosts = []

        if (block.populateBy === 'selection' && block.selectedDocs) {
          // Use selected documents
          fetchedPosts = block.selectedDocs
        } else if (block.populateBy === 'collection') {
          // Fetch from collection
          const where = {}
          if (block.categories && block.categories.length > 0) {
            where.categories = {
              in: block.categories.map((cat) => (typeof cat === 'object' ? cat.id : cat)),
            }
          }

          fetchedPosts = await getPosts(
            {
              limit: block.limit || 10,
              where,
            },
            locale
          )
        }

        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [block, locale])

  if (!block) return null

  return (
    <ArchiveContainer>
      <Container maxWidth="lg">
        {block.introContent && (
          <Box sx={{ mb: 4 }}>
            <div
              dangerouslySetInnerHTML={{
                __html: block.introContent,
              }}
            />
          </Box>
        )}

        {loading ? (
          <Typography>Loading posts...</Typography>
        ) : posts.length === 0 ? (
          <Typography>No posts found.</Typography>
        ) : (
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <PostCard>
                  {post.hero?.media && (
                    <PostMedia
                      image={getMediaUrl(post.hero.media)}
                      title={post.title}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {post.title}
                    </Typography>
                    {post.excerpt && (
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {post.excerpt}
                      </Typography>
                    )}
                    {post.slug && (
                      <Button
                        href={`/${post.slug}`}
                        variant="outlined"
                        size="small"
                        sx={{ mt: 'auto' }}
                      >
                        Read More
                      </Button>
                    )}
                  </CardContent>
                </PostCard>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </ArchiveContainer>
  )
}

export default RenderArchive

