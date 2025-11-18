'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <section
      className="relative -mt-[10.4rem] bg-neutral-950 text-white"
      data-theme="dark"
    >
      <div className="container relative z-10 flex flex-col gap-12 pb-20 pt-36 lg:flex-row lg:items-center lg:gap-16">
        <div className="order-2 w-full lg:order-1 lg:w-1/2">
          <div className="mx-auto max-w-[36.5rem]">
            {richText && <RichText className="mb-8" data={richText} enableGutter={false} />}
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex flex-wrap gap-4">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="order-1 w-full lg:order-2 lg:w-1/2">
          {media && typeof media === 'object' && (
            <Media
              className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
              fill
              imgClassName="object-cover"
              priority
              resource={media}
              size="(max-width: 1024px) 100vw, 50vw"
            />
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[12.5rem] bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  )
}
