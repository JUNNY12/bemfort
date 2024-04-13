import LogoMini from "@/assets/vector/logo_mini.svg"
import Button from "@/components/common/button/Button"
import Email from "@/assets/vector/email.svg"
import Typography from "@/components/common/typography/Typography"
import { Link, NavLink } from "react-router-dom"
import SupportLineCard from "@/components/shared/SupportLineCard"
import { useGetPathName } from "@/hooks/useGetPathName";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"


export default function Footer() {
  const { userPage } = useGetPathName()


  return (
    <div className="footer bg-white p-10 lg:p-0 relative overflow-hidden">
      {
        userPage !== 'contact' && (
          <div className="hold-space p-10 lg:p-0 relative">
            <SupportLineCard styles={"lg:gap-5 absolute lg:relative -top-1/2 lg:top-0 -translate-y-1/2 lg:translate-y-0 left-1/2 lg:left-0 translate-x-[-50%] lg:translate-x-0 lg:!rounded-none lg:w-full lg:flex-col z-[20]"} />
          </div>
        )
      }

      <div className="flex lg:flex-col lg:p-5">
        <div className="subscribe basis-1/2">
          <div className="logo_mini">
            <img src={LogoMini} alt="mini_logo" className="w-[150px] mx-auto lg:mx-0" />
            <p className="text-center lg:text-left mb-3">
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

        <div className="footerlinks basis-1/2 p-10 lg:px-0 lg:pb-0">
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
        <hr className="border border-green mt-10 lg:w-[90%] lg:mx-auto" />
      </div>
      <div className="copyright flex items-center lg:flex-col justify-between py-6">
        <div className="copy lg:text-center">
          &copy; 2024 AgricTech | All Rights Reserved
        </div>
        <div className="text-[45px] flex justify-between lg:justify-center gap-3 lg:gap-4 lower-ico bg-light-green text-dark-green p-2 px-4 lg:w-[85%] lg:my-2 lg:mx-auto rounded-[15px]">
          <Link to="/social">
            <FaFacebook />
          </Link>
          <Link to="/social">
            <FaInstagram />
          </Link>
          <Link to="/social">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  )
}
