'use client'

import { useEffect, useRef } from 'react'

export default function ParticalNetwork() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef([])
  const animationFrameRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set up responsive canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const numberOfParticles = Math.min(
        Math.floor((canvas.width * canvas.height) / 10000),
        200
      )

      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particlesRef.current.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        })
      }
    }

    // Draw particles and connections
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Mouse repulsion
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const repelForce = Math.min(200 / (distance * distance), 0.8)

        if (distance < 200) {
          particle.vx -= (dx / distance) * repelForce
          particle.vy -= (dy / distance) * repelForce
        }

        // Independent floating motion
        particle.vx += (Math.random() - 0.5) * 0.1
        particle.vy += (Math.random() - 0.5) * 0.1

        // Return to original position (reduced strength for more independent movement)
        particle.vx += (particle.originX - particle.x) * 0.01
        particle.vy += (particle.originY - particle.y) * 0.01

        // Apply velocity with damping
        particle.vx *= 0.95
        particle.vy *= 0.95
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        particle.x = (particle.x + canvas.width) % canvas.width
        particle.y = (particle.y + canvas.height) % canvas.height

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.fill()

        // Draw connections
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              0.15 * (1 - distance / 150)
            })`
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(draw)
    }

    // Event listeners
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    const handleResize = () => {
      resizeCanvas()
    }

    // Initialize
    resizeCanvas()
    draw()

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 bg-[#020817] pointer-events-none"
    />
  )
}
