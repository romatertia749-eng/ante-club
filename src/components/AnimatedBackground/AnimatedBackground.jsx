import React, { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const chips = []
    const chipCount = 20

    const createChip = () => {
      const chip = document.createElement('div')
      const isGold = Math.random() > 0.5
      chip.className = `absolute rounded-full ${isGold ? 'bg-gold' : 'bg-black border-2 border-gold'}`
      const size = 20 + Math.random() * 30
      chip.style.width = `${size}px`
      chip.style.height = `${size}px`
      chip.style.left = `${Math.random() * 100}%`
      chip.style.top = `${-50 - Math.random() * 50}px`
      chip.style.opacity = '0.3'
      chip.style.zIndex = '0'
      
      const fallDuration = 8 + Math.random() * 12
      const rotationDuration = 2 + Math.random() * 3
      const horizontalDrift = (Math.random() - 0.5) * 100
      const rotations = Math.floor((fallDuration / rotationDuration) * 360)
      
      const chipId = `chip-${Date.now()}-${Math.random()}`
      chip.id = chipId
      
      chip.style.animation = `fallRotate-${chipId} ${fallDuration}s linear infinite`
      
      const style = document.createElement('style')
      style.textContent = `
        @keyframes fallRotate-${chipId} {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          100% {
            transform: translateY(calc(100vh + 100px)) translateX(${horizontalDrift}px) rotate(${rotations}deg);
          }
        }
      `
      document.head.appendChild(style)
      
      container.appendChild(chip)
      chips.push({ chip, style })

      setTimeout(() => {
        if (chip.parentNode) {
          chip.parentNode.removeChild(chip)
        }
        if (style.parentNode) {
          style.parentNode.removeChild(style)
        }
      }, fallDuration * 1000)
    }

    const interval = setInterval(() => {
      if (chips.length < chipCount) {
        createChip()
      }
    }, 1000)

    for (let i = 0; i < chipCount; i++) {
      setTimeout(() => createChip(), i * 500)
    }

    return () => {
      clearInterval(interval)
      chips.forEach(({ chip, style }) => {
        if (chip.parentNode) {
          chip.parentNode.removeChild(chip)
        }
        if (style.parentNode) {
          style.parentNode.removeChild(style)
        }
      })
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    />
  )
}

export default AnimatedBackground

