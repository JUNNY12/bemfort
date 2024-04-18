import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

export const useToggleNav = () => {
    const [open, setOpen] = useState(false)
    const [overlay, setOverlay] = useState(false)
    const location = useLocation()
    const sidebarRef = useRef<HTMLDivElement>(null)
    const hamburgerRef = useRef<HTMLDivElement>(null)

    // Close the sidebar when the route changes
    useEffect(() => {
        setOpen(false)
        setOverlay(false)
        document.body.style.overflow = 'unset'
        window.scrollTo(0, 0)
    }, [location.pathname])

     // Close the sidebar when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const isSidebarClick = sidebarRef.current && sidebarRef.current.contains(event.target as Node)
            const isHamburgerClick = hamburgerRef.current && hamburgerRef.current.contains(event.target as Node)
            if (!isSidebarClick && !isHamburgerClick) {
                setOpen(false)
                document.body.style.overflow = 'unset'
            }
        }

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    const openNav = () => {
        setOpen(prev => !prev)
        setOverlay(true)
        document.body.style.overflow = 'hidden'
    }

    const closeNav = () => {
        setOpen(prev => !prev)
        setOverlay(false)
        document.body.style.overflow = 'unset'
    }

    return { open, openNav, closeNav, sidebarRef, hamburgerRef , overlay}
}
