import { useEffect, useState } from 'react'

import { Icons } from '@/components/elements/Icons'

interface PlatformCardProps {
  url: string
  type: string
  username: string
}

export default function PlatformCard(props: PlatformCardProps) {
  const { url, type, username } = props
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }

    // Initial check
    checkDarkMode()

    // Listen for changes in dark mode (in case it toggles)
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    // Cleanup observer on unmount
    return () => observer.disconnect()
  }, [])

  return (
    <a href={url} rel='noreferrer noopener' target='_blank'>
      <div className='border-border bg-primary-foreground hover:border-foreground/25 mb-5 flex w-72 rounded-[4px] border p-3 transition-all hover:shadow-xs'>
        {type === 'github' && (isDarkMode ? <Icons.github_dark /> : <Icons.github />)}
        {type === 'discord' && <Icons.discord />}
        {type === 'facebook' && <Icons.facebook />}
        {type === 'reddit' && <Icons.reddit />}
        {type === 'x' && (isDarkMode ? <Icons.x_dark /> : <Icons.x />)}
        {type === 'steam' && <Icons.steam />}
        {type === 'instagram' && <Icons.instagram />}

        <div className='text-primary ml-3 grow font-semibold'>{username}</div>
        <div className='text-gray-400'>
          <Icons.links />
        </div>
      </div>
    </a>
  )
}
