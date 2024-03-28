import LogoMini from "@/assets/vector/logo_mini.svg";
import Button from "@/components/common/button/Button";
import Email from "@/assets/vector/email.svg";
import Typography from "@/components/common/typography/Typography";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="support-line">

      </div>
      <div className="flex">
        <div className="subcribe bg-light-purple basis-1/2">
          <div className="logo_mini">
            <img src={LogoMini} alt="mini_logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="form bg-light-yellow">
            <form action="">
              <div className="relative input-outline bg-[tomato]">
                <img className="absolute top-1/2 translate-y-[-50%] left-3 z-3" src={Email} alt="" />
                <input type="text" className="pl-10 py-3 border block w-full" placeholder="Email Address"/>
              </div>
              <Button styles={`block bg-green py-3 mt-2 w-full`} children={'Subscribe'}/>
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
    </div>
  )
}
