import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

export default function AnimatedReveal({ children, delay = 0, direction = 'up', once = true }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [once])

  const translateMap = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(40px)',
    right: 'translateX(-40px)',
  }

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : translateMap[direction] ?? translateMap.up,
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Box>
  )
}


