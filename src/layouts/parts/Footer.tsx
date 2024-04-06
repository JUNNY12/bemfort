import LogoMini from "@/assets/vector/logo_mini.svg"
import Button from "@/components/common/button/Button"
import Email from "@/assets/vector/email.svg"
import Typography from "@/components/common/typography/Typography"
import { NavLink } from "react-router-dom"

import Helpline from '@/assets/vector/Helpline.svg'
import Address from '@/assets/vector/Address.svg'
import MailSupport from '@/assets/vector/support-mail.svg'

export default function Footer() {
  return (
    <div className="footer p-10 relative">
      <div className="hold-space p-10 relative">
        <div className="support-line absolute top-[-50%] translate-y-[-50%] w-[80%] left-1/2 translate-x-[-50%] flex justify-around bg-light-yellow p-5 rounded-[16px]">
          <div className="brick flex items-center flex-col">
            <img src={Helpline} className="mb-3 w-[80px]" alt="helpline_and_support" />
            <Typography variant={"h3"} styles="text-lg font-bold" children={"Helpline and Support"} />
            <p>+23490 xxxx-8905</p>
          </div>
          <div className="brick flex items-center flex-col">
            <img src={Address} className="mb-3 w-[80px]" alt="helpline_and_support" />
            <Typography variant={"h3"} styles="text-lg font-bold" children={"Our Address"} />
            <p>lorem ipsum ipsum</p>
          </div>
          <div className="brick flex items-center flex-col">
            <img src={MailSupport} className="mb-3 w-[80px]" alt="helpline_and_support" />
            <Typography variant={"h3"} styles="text-lg font-bold" children={"Send a mail"} />
            <p>agrictech@info.com</p>
          </div>
        </div>
      </div>


      <div className="flex">
        <div className="subcribe basis-1/2">
          <div className="logo_mini">
            <img src={LogoMini} alt="mini_logo" className="w-[150px] mx-auto" />
            <p className="text-center mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="form">
            <form action="">
              <div className="relative input-outline">
                <img className="absolute top-1/2 translate-y-[-50%] left-3 z-3" src={Email} alt="" />
                <input type="text" className="bg-light-green pl-10 py-3 border block w-full" placeholder="Email Address" />
              </div>
              <Button styles={`text-white block bg-green py-3 mt-2 w-full`} text={'Subscribe'} />
            </form>
          </div>

        </div>

        <div className="footerlinks basis-1/2 p-10">
          <Typography variant={"h1"} styles="text-3xl font-bold" children={"Links"} />
          <div className="links flex flex-col gap-3 mt-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">Contact</NavLink>
          </div>
        </div>



      </div>

      <div className="divider">
        <hr className="border border-green mt-10" />
      </div>
      <div className="copyright flex justify-between py-6">
        <div className="copy">
          &copy 2024 AgricTech | All Rights Reserved
        </div>
        <div className="lower-ico bg-light-green p-2 px-4">
    
        </div>
      </div>
    </div>
  )
}
