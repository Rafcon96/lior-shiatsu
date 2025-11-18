/**
 * Seed script for Payload CMS
 * Creates initial content for the website
 * 
 * Usage: node scripts/seed.js
 * 
 * Make sure Payload server is running first!
 */

const API_URL = process.env.REACT_APP_PAYLOAD_API_URL || 'http://localhost:3000/api'

// Helper function to make API calls
async function apiCall(endpoint, method = 'GET', body = null, token = null) {
  const headers = {
    'Content-Type': 'application/json',
  }
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const options = {
    method,
    headers,
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  const response = await fetch(`${API_URL}${endpoint}`, options)
  
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`API Error: ${response.status} - ${error}`)
  }

  return response.json()
}

// Login to get admin token
async function login(email, password) {
  const response = await apiCall('/users/login', 'POST', {
    email,
    password,
  })
  
  return response.token
}

// Create media
async function createMedia(fileData, token) {
  // Note: This is a simplified version
  // In production, you'd need to upload actual files
  console.log('Media creation skipped - upload files manually in admin panel')
  return null
}

// Create page
async function createPage(pageData, token) {
  return apiCall('/pages', 'POST', pageData, token)
}

// Create global
async function updateGlobal(slug, data, token) {
  return apiCall(`/globals/${slug}`, 'PATCH', data, token)
}

// Seed home page
async function seedHomePage(token) {
  console.log('Creating home page...')
  
  const homePage = {
    title: {
      he: 'ליאור שחר',
      en: 'Lior Shahar',
    },
    slug: 'home',
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'ליאור שחר - מטפל מוסמך',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'rtl',
              format: '',
              indent: 0,
              type: 'heading',
              version: 1,
              tag: 'h1',
            },
          ],
          direction: 'rtl',
          format: '',
          indent: 0,
          type: 'root',
          version: 1,
        },
      },
      links: [
        {
          linkType: 'custom',
          url: '/about',
          label: {
            he: 'על הטיפול',
            en: 'About Treatment',
          },
          appearance: 'default',
        },
        {
          linkType: 'custom',
          url: '/prices',
          label: {
            he: 'מחירון',
            en: 'Pricing',
          },
          appearance: 'outline',
        },
      ],
    },
    layout: [
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'מטפל מוסמך בשיאצו, עיסוי שוודי ורקמות עמוקות, דיקור אורתופדי וסיני משולב.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'rtl',
                    format: '',
                    indent: 0,
                    type: 'paragraph',
                    version: 1,
                  },
                ],
                direction: 'rtl',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
        ],
      },
      {
        blockType: 'cta',
        richText: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'מתלבט.ת? בואו נשוחח ונתאים לכם את הטיפול המושלם',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'rtl',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'rtl',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        links: [
          {
            linkType: 'custom',
            url: '/contact',
            label: {
              he: 'צרו קשר עכשיו',
              en: 'Contact Us Now',
            },
            appearance: 'default',
          },
        ],
      },
    ],
    meta: {
      title: {
        he: 'ליאור שחר - מטפל מוסמך',
        en: 'Lior Shahar - Certified Therapist',
      },
      description: {
        he: 'מטפל מוסמך בשיאצו, עיסוי שוודי ורקמות עמוקות, דיקור אורתופדי וסיני משולב',
        en: 'Certified therapist in shiatsu, Swedish massage, deep tissue, and combined orthopedic and Chinese acupuncture',
      },
    },
    _status: 'published',
  }

  try {
    const result = await createPage(homePage, token)
    console.log('✅ Home page created:', result.slug)
    return result
  } catch (error) {
    console.error('❌ Error creating home page:', error.message)
    throw error
  }
}

// Seed header global
async function seedHeader(token) {
  console.log('Updating header...')
  
  const headerData = {
    navItems: [
      {
        link: {
          type: 'custom',
          url: '/',
          label: {
            he: 'בית',
            en: 'Home',
          },
        },
      },
      {
        link: {
          type: 'custom',
          url: '/about',
          label: {
            he: 'על הטיפול',
            en: 'About',
          },
        },
      },
      {
        link: {
          type: 'custom',
          url: '/prices',
          label: {
            he: 'מחירון',
            en: 'Prices',
          },
        },
      },
      {
        link: {
          type: 'custom',
          url: '/testimonial',
          label: {
            he: 'ביקורות מטופלים',
            en: 'Testimonials',
          },
        },
      },
      {
        link: {
          type: 'custom',
          url: '/contact',
          label: {
            he: 'צור קשר',
            en: 'Contact',
          },
        },
      },
    ],
  }

  try {
    const result = await updateGlobal('header', headerData, token)
    console.log('✅ Header updated with navigation items')
    return result
  } catch (error) {
    console.error('❌ Error updating header:', error.message)
    throw error
  }
}

// Seed footer global
async function seedFooter(token) {
  console.log('Updating footer...')
  
  const footerData = {
    navItems: [
      {
        link: {
          type: 'custom',
          url: '/about',
          label: {
            he: 'אודות',
            en: 'About',
          },
        },
      },
      {
        link: {
          type: 'custom',
          url: '/prices',
          label: {
            he: 'מחירון',
            en: 'Prices',
          },
        },
      },
      {
        link: {
          type: 'custom',
          url: '/contact',
          label: {
            he: 'צור קשר',
            en: 'Contact',
          },
        },
      },
    ],
  }

  try {
    const result = await updateGlobal('footer', footerData, token)
    console.log('✅ Footer updated with navigation items')
    return result
  } catch (error) {
    console.error('❌ Error updating footer:', error.message)
    throw error
  }
}

// Main seed function
async function seed() {
  console.log('🌱 Starting seed process...')
  console.log(`API URL: ${API_URL}`)
  
  // Get credentials from environment or prompt
  const email = process.env.PAYLOAD_ADMIN_EMAIL || 'admin@example.com'
  const password = process.env.PAYLOAD_ADMIN_PASSWORD || 'password'

  try {
    // Login
    console.log('Logging in...')
    const token = await login(email, password)
    console.log('✅ Logged in successfully')

    // Seed content
    await seedHomePage(token)
    await seedHeader(token)
    await seedFooter(token)

    console.log('\n✅ Seed process completed successfully!')
    console.log('\nNext steps:')
    console.log('1. Visit http://localhost:3000/admin to review content')
    console.log('2. Upload media files in the admin panel')
    console.log('3. Create additional pages as needed')
  } catch (error) {
    console.error('\n❌ Seed process failed:', error.message)
    console.error('\nMake sure:')
    console.error('1. Payload server is running (npm run payload:server)')
    console.error('2. Admin user exists (create one at /admin)')
    console.error('3. Environment variables are set correctly')
    process.exit(1)
  }
}

// Run seed
if (require.main === module) {
  seed()
}

module.exports = { seed }

