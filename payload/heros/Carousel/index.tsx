'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Page } from '@/payload-types'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { useEffect, useMemo, useState } from 'react'

const AUTO_ADVANCE_INTERVAL = 6500

export const CarouselHero: React.FC<Page['hero']> = ({ slides }) => {
  const { setHeaderTheme } = useHeaderTheme()
  const [activeIndex, setActiveIndex] = useState(0)

  const safeSlides = useMemo(() => {
    if (!Array.isArray(slides)) return []
    return slides.filter(Boolean)
  }, [slides])

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  useEffect(() => {
    if (safeSlides.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1
        return next >= safeSlides.length ? 0 : next
      })
    }, AUTO_ADVANCE_INTERVAL)

    return () => {
      window.clearInterval(timer)
    }
  }, [safeSlides.length])

  if (!safeSlides.length) return null

  return (
    <section className="relative -mt-[10.4rem] overflow-hidden text-white" data-theme="dark">
      <div className="relative h-[32rem] w-full min-h-[70vh] md:min-h-[80vh]">
        {safeSlides.map((slide, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div className="absolute inset-0 -z-10">
                {slide.media && typeof slide.media === 'object' ? (
                  <Media
                    fill
                    priority={index === 0}
                    imgClassName="object-cover"
                    resource={slide.media}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-indigo-900 to-slate-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
              </div>

              <div className="container flex h-full items-end pb-16">
                <div className="max-w-xl">
                  {slide.subheading && (
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-200">
                      {slide.subheading}
                    </p>
                  )}

                  {slide.heading && (
                    <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                      {slide.heading}
                    </h1>
                  )}

                  {slide.richText ? (
                    <RichText className="mt-6 text-lg text-slate-100/90" data={slide.richText} />
                  ) : null}

                  {Array.isArray(slide.links) && slide.links.length > 0 && (
                    <ul className="mt-8 flex flex-wrap gap-4">
                      {slide.links.map(({ link }, i) => {
                        if (!link) return null

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
            </div>
          )
        })}
      </div>

      {safeSlides.length > 1 && (
        <div className="container absolute inset-x-0 bottom-10 flex justify-center gap-3">
          {safeSlides.map((_, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  isActive ? 'w-8 bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={isActive}
                type="button"
                onClick={() => setActiveIndex(index)}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}
