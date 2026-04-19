'use client'

import { useState } from 'react'

interface ShareBarProps {
  url: string
  title: string
}

export function ShareBar({ url, title }: ShareBarProps) {
  const [copied, setCopied] = useState(false)

  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`

  const copyLink = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="share-bar">
      <span className="share-label">Share this dispatch</span>
      <a href={fbUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-btn-fb">
        Facebook
      </a>
      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-btn-wa">
        WhatsApp
      </a>
      <button onClick={copyLink} className="share-btn share-btn-copy">
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  )
}
