import LogoMini from "@/assets/vector/logo_mini.svg"
import Button from "@/components/common/button/Button"
import Email from "@/assets/vector/email.svg"
import Typography from "@/components/common/typography/Typography"
import { NavLink } from "react-router-dom"
import SupportLineCard from "@/components/shared/SupportLineCard"
import { useGetPathName } from "@/hooks/useGetPathName"

export default function Footer() {
  const { userPage } = useGetPathName()


  return (
    <div className="footer bg-white p-10 relative">
      {
        userPage !== 'contact' && (
          <div className="hold-space p-10 relative">
            <SupportLineCard styles={"absolute -top-1/2 -translate-y-1/2 left-1/2 translate-x-[-50%]"} />
          </div>
        )
      }

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
