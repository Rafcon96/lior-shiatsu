/**
 * Performance optimization utilities
 */

/**
 * Debounce function to limit API calls
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function to limit function calls
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Lazy load images
 */
export const lazyLoadImage = (imgElement) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
          }
          observer.unobserve(img)
        }
      })
    })

    imageObserver.observe(imgElement)
  } else {
    // Fallback for browsers without IntersectionObserver
    if (imgElement.dataset.src) {
      imgElement.src = imgElement.dataset.src
    }
  }
}

/**
 * Prefetch page data
 */
export const prefetchPage = async (slug, locale = 'he') => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PAYLOAD_API_URL || 'http://localhost:3000/api'}/pages?where[slug][equals]=${slug}&locale=${locale}&depth=1`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    
    if (response.ok) {
      const data = await response.json()
      return data.docs?.[0] || null
    }
  } catch (error) {
    console.error('Prefetch error:', error)
  }
  return null
}

/**
 * Cache API responses
 */
class ApiCache {
  constructor(maxAge = 5 * 60 * 1000) { // 5 minutes default
    this.cache = new Map()
    this.maxAge = maxAge
  }

  get(key) {
    const item = this.cache.get(key)
    if (!item) return null
    
    if (Date.now() - item.timestamp > this.maxAge) {
      this.cache.delete(key)
      return null
    }
    
    return item.data
  }

  set(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    })
  }

  clear() {
    this.cache.clear()
  }
}

export const apiCache = new ApiCache()

/**
 * Cached API call
 */
export const cachedApiCall = async (url, options = {}) => {
  const cacheKey = `${url}-${JSON.stringify(options)}`
  const cached = apiCache.get(cacheKey)
  
  if (cached) {
    return cached
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    apiCache.set(cacheKey, data)
    return data
  } catch (error) {
    console.error('API call error:', error)
    throw error
  }
}

