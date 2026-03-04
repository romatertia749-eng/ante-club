
import React from 'react'
import backgroundVideo from '../../assets/images/backgrounds/video_preview_h264 (online-video-cutter.com).mp4'

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
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  )
}

export default AnimatedBackground
