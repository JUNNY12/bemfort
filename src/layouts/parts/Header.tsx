import Logo from '@/assets/images/logo.png'
import Facebook from '@/assets/vector/facebook.svg'
import Instagram from '@/assets/vector/instagram.svg'
import Twitter from '@/assets/vector/twitter.svg'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <div className="absolute z-50 top-[20px] left-[50%] translate-x-[-50%] flex w-[95%] rounded-full items-center justify-between py-2 px-10 bg-[#fff]">
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
