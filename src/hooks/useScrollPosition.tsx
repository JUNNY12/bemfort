import { useState, useEffect } from 'react'

export function useScrollPosition(threshold = 50) {
    const [isScrollAboveThreshold, setIsScrollAboveThreshold] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setIsScrollAboveThreshold(scrollY > threshold)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [threshold])

    return isScrollAboveThreshold
}

