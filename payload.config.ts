import path from 'path'
import { fileURLToPath } from 'url'

import sharp from 'sharp'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { buildConfig, PayloadRequest } from 'payload'

import { Categories } from './payload/collections/Categories'
import { Media } from './payload/collections/Media'
import { Pages } from './payload/collections/Pages'
import { Posts } from './payload/collections/Posts'
import { Users } from './payload/collections/Users'
import { Footer } from './payload/Footer/config'
import { Header } from './payload/Header/config'
import { defaultLexical } from './payload/fields/defaultLexical'
import { plugins } from './payload/plugins'
import { getServerSideURL } from './payload/utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname, 'payload'),
    },
    user: Users.slug,
  },
  localization: {
    defaultLocale: 'he',
    fallback: true,
    locales: [
      {
        code: 'he',
        label: 'Hebrew',
      },
      {
        code: 'en',
        label: 'English',
      },
    ],
  },
  editor: defaultLexical,
  db: sqliteAdapter({
    client: {
      url:
        process.env.DATABASE_URI ||
        `file:${path.resolve(dirname, 'payload/dev.sqlite')}`,
    },
  }),
  collections: [Pages, Posts, Media, Categories, Users],
  globals: [Header, Footer],
  cors: [getServerSideURL()].filter(Boolean),
  csrf: [getServerSideURL()].filter(Boolean),
  plugins,
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload/payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }) => {
        if (req.user) return true

        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})

