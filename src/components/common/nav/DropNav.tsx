import { Container } from "../container/Container"
import { FlexContainer } from "../container/FlexContainer"
import { COMPANY_NAME } from "@/constants/constants"
import { MdClose } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { NAV_LINKS } from '@/constants/constants'
import { FaChevronRight } from "react-icons/fa6"
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6"

interface DropNavProps {
    open: boolean
    toggleNav: () => void
}

export const DropNav: React.FC<DropNavProps> = ({ open, toggleNav }: DropNavProps) => {
    return (
        <Container tag="div" styles={`hidden ${open ? 'tablet:block' : ''} bg-green
        w-[450px] mini-tablet:w-full h-full overflow-y-auto fixed z-[9999] p-8 mini-tablet:p-4`}>
            <FlexContainer tag="div" styles=" justify-between items-center mb-8">
                <div className="text-white capitalize text-3xl font-roboto-serif font-bold">{COMPANY_NAME}</div>
                <div onClick={toggleNav} role="button" className=" bg-white text-black p-2 text-2xl sm:text-xl cursor-pointer">
                    <MdClose />
                </div>
            </FlexContainer>
            <Container tag="div">
                {
                    NAV_LINKS.map((link, index) => (
                        <NavLink to={link.path} key={index}>
                            <FlexContainer tag="div" key={index} styles="mb-3 group justify-between font-roboto-serif items-center border-b border-white pb-2 cursor-pointer ">
                                <div className="text-white text-xl">{link.text}</div>
                                <div className=" p-2 bg-white group-hover:bg-light-yellow group-hover:text-purple text-black text-2xl sm:text-xl ease-in-out duration-500"><FaChevronRight /></div>
                            </FlexContainer>
                        </NavLink>
                    ))
                }
            </Container>

            <Container tag="div" styles="font-roboto-serif  absolute -bottom-[110px] pb-6">
                <Container tag="div">
                    <FlexContainer tag="div" styles=" items-center">
                        <div className="bg-white text-black p-2 rounded-full text-2xl sm:!text-xl cursor-pointer">
                            <FaEnvelope />
                        </div>
                        <div className="text-white text-xl ml-8">Support@gmail.com</div>
                    </FlexContainer>

                    <FlexContainer tag="div" styles="mt-4 items-center">
                        <div className="bg-white text-black p-2 rounded-full text-2xl sm:!text-xl cursor-pointer">
                            <FaPhone />
                        </div>
                        <div className="text-white text-xl  ml-8">+234-906-789-4032</div>
                    </FlexContainer>
                </Container>
                <Container tag="div" styles="mt-8">
                    <FlexContainer tag="div" styles="items-center">
                        <div className="text-white text-xl">Follow Us</div>
                        <div className="flex flex-wrap gap-6 ml-6 sm:ml-3">
                            <div className="bg-white text-black p-2 rounded-full text-2xl sm:!text-xl  cursor-pointer">
                                <FaFacebook />
                            </div>
                            <div className="bg-white text-black p-2 rounded-full text-2xl sm:text-xl cursor-pointer">
                                <FaXTwitter />
                            </div>
                            <div className="bg-white text-black p-2 rounded-full text-2xl sm:text-xl cursor-pointer">
                                <FaInstagram />
                            </div>
                        </div>
                    </FlexContainer>
                </Container>
            </Container>
        </Container>
    )
}
