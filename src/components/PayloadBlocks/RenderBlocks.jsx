import React from 'react'
import RenderHero from './Hero'
import RenderCallToAction from './CallToAction'
import RenderContent from './Content'
import RenderMediaBlock from './MediaBlock'
import RenderArchive from './Archive'
import RenderForm from './Form'

/**
 * Render all blocks from a Payload page layout
 * @param {Array} blocks - Array of block objects from Payload
 * @param {string} locale - Current locale
 */
export const RenderBlocks = ({ blocks, locale = 'he' }) => {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'cta':
            return <RenderCallToAction key={index} block={block} locale={locale} />
          
          case 'content':
            return <RenderContent key={index} block={block} locale={locale} />
          
          case 'mediaBlock':
            return <RenderMediaBlock key={index} block={block} />
          
          case 'archive':
            return <RenderArchive key={index} block={block} locale={locale} />
          
          case 'formBlock':
            return <RenderForm key={index} block={block} locale={locale} />
          
          default:
            console.warn(`Unknown block type: ${block.blockType}`)
            return null
        }
      })}
    </>
  )
}

/**
 * Render a page with hero and blocks
 * @param {Object} page - Page data from Payload
 * @param {string} locale - Current locale
 */
export const RenderPage = ({ page, locale = 'he' }) => {
  if (!page) return null

  return (
    <>
      {page.hero && <RenderHero hero={page.hero} locale={locale} />}
      {page.layout && <RenderBlocks blocks={page.layout} locale={locale} />}
    </>
  )
}

export default RenderBlocks

