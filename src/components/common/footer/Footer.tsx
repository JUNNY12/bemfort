import Button from "@/components/common/button/Button"
import Typography from "@/components/common/typography/Typography"
import { Link, NavLink } from "react-router-dom"
import SupportLineCard from "@/components/shared/SupportLineCard"
import { useGetPathName } from "@/hooks/useGetPathName"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { NAV_LINKS } from "@/constants/constants"
import { COMPANY_NAME } from "@/constants/constants"


export default function Footer() {
  const { userPage } = useGetPathName()

  return (
    <div className="footer bg-white p-10 lg:p-0 relative ">
      {
        userPage !== 'contact' && (
          <div className="hold-space p-10 lg:p-0 relative">
            <SupportLineCard styles={"lg:gap-5 absolute lg:relative -top-1/2 lg:top-0 -translate-y-1/2 lg:translate-y-0 left-1/2 lg:left-0 translate-x-[-50%] lg:translate-x-0 lg:!rounded-none lg:w-full tablet:flex-col z-[20]"} />
          </div>
        )
      }

      <div className="flex tablet:flex-col lg:p-5 gap-6">
        <div className="subscribe basis-1/2">
          <div className="logo_mini">
            <img src={`/assets/images/large_logo.png`} alt="mini_logo" className="w-[150px] mx-auto lg:mx-0" />
            <p className="text-center lg:text-left mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="form">
            <form action="">
              <div className="relative input-outline">
                <img className="absolute top-1/2 translate-y-[-50%] left-3 z-3" src='/assets/vector/email.svg' alt="" />
                <input type="text" className="bg-light-green pl-10 py-3 border block w-full" placeholder="Email Address" />
              </div>
              <Button styles={`text-white ease-in-out duration-500 h-[48px] block bg-green py-3 mt-2 w-full hover:bg-transparent hover:border-green hover:border hover:text-green`} text={'Subscribe'} />
            </form>
          </div>

        </div>

        <div className="footerlinks basis-1/2 p-10 lg:px-0 lg:pb-0">
          <Typography variant={"h1"} styles="text-3xl font-bold" children={"Links"} />
          <div className="links flex flex-row mini-tablet:flex-col justify-between gap-3 mt-5">
            {
              NAV_LINKS.map((link, index) => (
                <NavLink to={link.path} key={index} className="text-lg hover:text-green hover:font-bold ease-in-out duration-500">
                  {link.text}
                </NavLink>
              ))
            }
          </div>
        </div>



      </div>

      <div className="bg-green h-[0.5px] mt-10 lg:w-[90%] lg:mx-auto"></div>
      <div className="copyright flex items-center lg:flex-col justify-between py-6">
        <div className="copy lg:text-center">
          &copy; 2024 {COMPANY_NAME} | All Rights Reserved
        </div>
        <div className="text-[45px] flex justify-between lg:justify-center gap-3 lg:gap-4 lower-ico bg-light-green text-dark-green p-2 px-4 lg:w-[85%] lg:my-2 lg:mx-auto rounded-[15px]">
          <Link target="_blank" to="/social">
            <FaFacebook />
          </Link>
          <Link target="_blank" to="/social">
            <FaInstagram />
          </Link>
          <Link target="_blank" to="/social">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  )
}
