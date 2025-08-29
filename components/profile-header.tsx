"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ProfileHeader() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Preload white logo to prevent lag on first dark mode switch
    const img = new window.Image()
    img.src = '/marc-profile-white.png'
  }, [])

  // Show default logo during SSR/hydration
  if (!mounted) {
    return (
      <div className="flex flex-col items-start space-y-1">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image src="/marc-profile.png" alt="Marc Teo Ong" width={80} height={80} className="object-contain" />
        </div>
        <div className="space-y-1">
          <h1 className="text-sm font-medium text-foreground leading-tight" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>Marc Teo Ong</h1>
          <p className="text-sm text-muted-foreground leading-tight" style={{fontSize: '14px'}}>Developer & Trader</p>
        </div>
      </div>
    )
  }

  // Use theme-appropriate logo
  const logoSrc = theme === 'dark' ? '/marc-profile-white.png' : '/marc-profile.png'

  return (
    <div className="flex flex-col items-start space-y-1">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image src={logoSrc} alt="Marc Teo Ong" width={80} height={80} className="object-contain" />
      </div>
      <div className="space-y-1">
        <h1 className="text-sm font-medium text-foreground leading-tight" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>Marc Teo Ong</h1>
        <p className="text-sm text-muted-foreground leading-tight" style={{fontSize: '14px'}}>Developer & Trader</p>
      </div>
    </div>
  )
}
