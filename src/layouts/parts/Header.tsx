import Logo from '@/assets/images/logo.png'
import Facebook from '@/assets/vector/facebook.svg'
import Instagram from '@/assets/vector/instagram.svg'
import Twitter from '@/assets/vector/twitter.svg'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <div className="absolute lg:sticky z-[60] top-[20px] lg:top-0 left-[50%] lg:left-0 translate-x-[-50%] lg:translate-x-0 flex w-[95%] lg:w-full  rounded-full lg:rounded-none items-center justify-between py-2 px-10 bg-[#fff]">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav flex justify-between basis-[70%]">
        <NavLink to="">
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
        <NavLink to="">
          Career
        </NavLink>
        <NavLink to="">
          Contact
        </NavLink>
      </div>
      <div className="flex social-btn justify-between basis-[10%]">
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
