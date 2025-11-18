/**
 * Payload CMS API Client
 * Fetches data from the Payload CMS backend
 */

const API_URL = process.env.REACT_APP_PAYLOAD_API_URL || 'http://localhost:3000/api'

/**
 * Fetch a page by slug
 * @param {string} slug - Page slug
 * @param {string} locale - Locale code (e.g., 'he', 'en')
 * @returns {Promise<Object>} Page data
 */
export const getPage = async (slug, locale = 'he') => {
  try {
    const response = await fetch(
      `${API_URL}/pages?where[slug][equals]=${slug}&locale=${locale}&depth=2`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.statusText}`)
    }

    const data = await response.json()
    return data.docs?.[0] || null
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

/**
 * Fetch all pages
 * @param {string} locale - Locale code
 * @returns {Promise<Array>} Array of pages
 */
export const getPages = async (locale = 'he') => {
  try {
    const response = await fetch(
      `${API_URL}/pages?locale=${locale}&limit=100`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch pages: ${response.statusText}`)
    }

    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

/**
 * Fetch media by ID
 * @param {string|Object} mediaId - Media ID or media object
 * @returns {Promise<Object>} Media data
 */
export const getMedia = async (mediaId) => {
  if (!mediaId) return null
  
  // If it's already a populated object, return it
  if (typeof mediaId === 'object' && mediaId.url) {
    return mediaId
  }

  try {
    const response = await fetch(
      `${API_URL}/media/${mediaId}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch media: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching media:', error)
    return null
  }
}

/**
 * Get media URL
 * @param {string|Object} media - Media ID or media object
 * @returns {string} Media URL
 */
export const getMediaUrl = (media) => {
  if (!media) return ''
  
  if (typeof media === 'object') {
    return media.url || ''
  }
  
  return `${API_URL}/media/file/${media}`
}

/**
 * Fetch posts
 * @param {Object} options - Query options
 * @param {string} locale - Locale code
 * @returns {Promise<Array>} Array of posts
 */
export const getPosts = async (options = {}, locale = 'he') => {
  try {
    const { limit = 10, where = {} } = options
    const queryParams = new URLSearchParams({
      locale,
      limit: limit.toString(),
      ...where,
    })

    const response = await fetch(
      `${API_URL}/posts?${queryParams.toString()}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`)
    }

    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

/**
 * Fetch global data (Header, Footer)
 * @param {string} slug - Global slug (e.g., 'header', 'footer')
 * @param {string} locale - Locale code
 * @returns {Promise<Object>} Global data
 */
export const getGlobal = async (slug, locale = 'he') => {
  try {
    const response = await fetch(
      `${API_URL}/globals/${slug}?locale=${locale}&depth=2`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch global: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching global:', error)
    return null
  }
}

