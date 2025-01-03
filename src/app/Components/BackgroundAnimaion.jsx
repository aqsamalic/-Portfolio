



'use client'

import React, { useRef, useEffect, useState } from 'react'

const BackgroundAnimation = () => {
  const canvasRef = useRef(null)
  const [isClient, setIsClient] = useState(false) // Track client-side rendering
  const [isHovering, setIsHovering] = useState(false) // Track hover state

  useEffect(() => {
    setIsClient(true) // Set to true when the component is mounted on the client
  }, [])

  useEffect(() => {
    if (!isClient) return // Ensure this runs only on the client

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let mouse = { x: undefined, y: undefined }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000)
      particles = []

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1,
        })
      }
    }

    const updateParticles = () => {
      particles.forEach((p) => {
        p.x += isHovering ? p.speedX * 3 : p.speedX // Triple speed on hover
        p.y += isHovering ? p.speedY * 3 : p.speedY

        if (p.x > canvas.width) p.x = 0
        else if (p.x < 0) p.x = canvas.width

        if (p.y > canvas.height) p.y = 0
        else if (p.y < 0) p.y = canvas.height

        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < (isHovering ? 200 : 100)) { // Increase interaction range on hover
            const angle = Math.atan2(dy, dx)
            const force = ((isHovering ? 200 : 100) - distance) / (isHovering ? 200 : 100)
            const spreadMultiplier = isHovering ? 12 : 2 // Drastically increase force multiplier on hover
            p.x -= Math.cos(angle) * force * spreadMultiplier
            p.y -= Math.sin(angle) * force * spreadMultiplier
          }
        }
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      particles.forEach((p1, index) => {
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < (isHovering ? 200 : 100)) { // Increase connection distance on hover
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      mouse.x = undefined
      mouse.y = undefined
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseenter', handleMouseEnter)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseenter', handleMouseEnter)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [isClient, isHovering])

  if (!isClient) return null // Avoid rendering on the server

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#020817',
        zIndex: -1,
      }}
    />
  )
}

export default BackgroundAnimation



