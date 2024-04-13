import Logo from '@/assets/images/logo.png'
import Facebook from '@/assets/vector/facebook.svg'
import Instagram from '@/assets/vector/instagram.svg'
import Twitter from '@/assets/vector/twitter.svg'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'


export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute lg:sticky sm:!fixed z-[60] top-[20px] lg:top-0 sm:!top-3 left-[50%] lg:left-0 lg:right-0 sm:!left-1/2 sm:!right-3 translate-x-[-50%] lg:translate-x-0 sm:!translate-x-[-50%] flex w-[95%] sm:!w-[90%] lg:w-full  rounded-full lg:rounded-none items-center justify-between py-2 px-10 sm:!px-5 bg-[#fff]">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div 
        className="menubtn hidden sm:block text-[25px] cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <GiHamburgerMenu/>
      </div>
      <div className="nav flex justify-between basis-[70%] sm:hidden">
        <NavLink to="./">
          Home
        </NavLink>
        <NavLink to="/services">
          Services
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/products">
          Products
        </NavLink>
        <NavLink to="/career">
          Career
        </NavLink>
        <NavLink to="">
          Contact
        </NavLink>
      </div>
      <div className="flex social-btn justify-between basis-[10%] sm:hidden">
        <div className="icon">
          <NavLink to="">
            <img src={Twitter} alt="" />
          </NavLink>
        </div>
        <div className="icon">
          <NavLink to="">
            <img src={Facebook} alt="" />
          </NavLink>

        </div>
        <div className="icon">
          <NavLink to="">
            <img src={Instagram} alt="" />
          </NavLink>

        </div>
      </div>
    </div>
  )
}
