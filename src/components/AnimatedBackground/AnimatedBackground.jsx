
import React from 'react'
import backgroundVideo from '../../assets/images/backgrounds/istockphoto-472986427-640_adpp_is (online-video-cutter.com).mp4'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <video
        className="w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  )
}

export default AnimatedBackground
