import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants/constants'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { DropNav } from '../nav/DropNav'
import { Container } from '../container/Container'
import { useToggleNav } from '@/hooks/useToggleNav'

export default function Header() {
  const { open, openNav, overlay, closeNav, sidebarRef, hamburgerRef } = useToggleNav()
  const isScrollAboveThreshold = useScrollPosition(300)

  return (
    <Container tag='div'>
      <div ref={sidebarRef} className={`z-[110] w-[250px] transition-[margin-left] ease-linear duration-500 ${open ? 'ml-0' : '-ml-[250px]'}`}>
        {open && <DropNav open={open} toggleNav={closeNav} />}
      </div>

      {overlay && <div onClick={closeNav} className="fixed w-full h-full bg-green/40 z-[100] ease-in-out duration-500"></div>}


      <div
        className={`absolute lg:sticky sm:!fixed z-[60] top-[20px]
      lg:top-0 sm:!top-3 left-[50%] lg:left-0 lg:right-0 sm:!left-1/2 sm:!right-3
      translate-x-[-50%] lg:translate-x-0 sm:!translate-x-[-50%] flex w-[95%] sm:!w-[90%] 
      lg:w-full  rounded-full lg:rounded-none items-center justify-between ease-in-out
      duration-500 py-2 px-16 lg:px-8 tablet:px-4
      ${!isScrollAboveThreshold ? 'bg-[#fff]' : 'bg-light-green'}`}>

        <div className="logo">
          <img src='/assets/images/logo.png' alt="" />
        </div>

        <div
          ref={hamburgerRef}
          className={`hamburger-menu hidden tablet:block text-[25px] cursor-pointer ${!isScrollAboveThreshold ? 'text-black' : 'text-dark-green'}`}
          onClick={openNav}
        >
          <GiHamburgerMenu />
        </div>
        <div className="nav font-roboto flex justify-between basis-[70%] lg:basis-[60%] tablet:hidden">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              className={`ease-in-out duration-500 hover:border-b-2 hover:border-green`}
              key={index}
              to={link.path}
              style={({ isActive }) => ({ color: isActive ? "green" : "black", borderBottom: isActive ? "2px solid green" : "", fontWeight: isActive ? 'bold' : 'normal' })}
            >
              {link.text}
            </NavLink>
          ))}

        </div>
        <div className="flex text-2xl gap-x-4 social-btn justify-between basis-[10%] tablet:hidden">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = link.icon
            return (
              <div className="icon" key={index}>
                <NavLink to={link.path}>
                  <Icon />
                </NavLink>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
