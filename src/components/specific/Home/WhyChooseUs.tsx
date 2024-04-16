import Button from "@/components/common/button/Button"
import { ChooseCard } from "@/components/shared/ChooseCard"
import { Container } from "@/components/common/container/Container"
import Typography from "@/components/common/typography/Typography"
import { CHOOSE_US_DATA } from "@/constants/constants"
import { Fade, JackInTheBox } from "react-awesome-reveal"

export const WhyChooseUs = (): JSX.Element => {
    return (
        <Container tag="section" styles={'lg:mt-8'}>

            <div className="w-full h-full bg-why-choose-us bg-cover bg-center mb-32 tablet:mb-6">
                <div className="w-full h-full bg-taint-white/60 backdrop-brightness-75">
                    <div className=" absolute top-2 left-2 z-50">
                        <img src="/assets/images/leafBg.svg" alt="" />
                    </div>
                    <div className=" absolute top-2 right-2 z-50">
                        <img src="/assets/images/leafBg.svg" alt="" />
                    </div>
                    <div className=" absolute top-0 left-[45%] tablet:left-[40%] transform -translate-x-1/2">
                        <img src="/assets/images/Arrow2.svg" className="tablet:w-[200px] " alt="" />
                    </div>
                    <Fade cascade damping={0.2} direction="up" duration={1000}>
                        <div className=" flex justify-center flex-col items-center mx-16 lg:mx-8 tablet:!mx-4">
                            <Typography variant="h3" styles="mt-32 text-2xl mobile-big:text-xl z-50 mb-6 text-green font-bold font-roboto border-b-2 border-green max-w-[300px] ">
                                Why Choose Us
                            </Typography>

                            <Typography variant="h3" styles=" font-semibold z-50 max-w-[750px] text-center font-roboto-serif text-6xl lg:text-5xl md:!text-3xl ">
                                Vulputate elementum vestibulum sem
                            </Typography>
                        </div>
                    </Fade>


                    <div className="grid grid-cols-2 mobile-big:grid-cols-1 gap-8 pb-48 tablet:pb-12 mt-8 mx-16 lg:mx-8 tablet:!mx-4">
                        {CHOOSE_US_DATA.map((item, index) => (
                            <JackInTheBox key={index} cascade damping={0.2} duration={1500}>
                                <ChooseCard
                                    title={item.title}
                                    description={item.description}
                                />
                            </JackInTheBox>
                        ))}
                    </div>

                    <div className="tablet:hidden absolute left-0 right-0 bottom-[-6rem] bg-purple flex items-center mx-16 p-8 h-48">
                        <div className="h-24 flex items-center justify-between border-y-2 border-white border-dotted w-full max-w-[1200px] mx-auto px-8">
                            <p className="font-roboto-serif text-2xl font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <Button
                                title="More Services"
                                ariaLabel="More Services"
                                variant={'green'}
                                text='More Services'
                                styles={'bg-green  border border-white font-roboto-serif w-[250px] font-semibold hover:shadow-ambient ease-in-out duration-500'}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </Container>
    )
}
