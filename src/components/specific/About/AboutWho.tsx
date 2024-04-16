import { Container } from "@/components/common/container/Container"
import Typography from "@/components/common/typography/Typography"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { Roll, Fade } from "react-awesome-reveal"
import { SERVICE_DATA } from "@/constants/constants"

export const AboutWho: React.FC = (): JSX.Element => {
    return (
        <Container tag="section" styles="grid grid-cols-2 lg:grid-cols-1 gap-32 lg:gap-16 tablet:!gap-8 m-16 lg:m-8 tablet:m-4 lg:place-items-center">
            <Container tag="div" styles={'lg:order-2'}>
                <Fade direction="left" duration={1000}>
                    <div className="relative lg:w-[500px] tablet:w-[350px] sm:!w-[250px]">
                        <img src="/assets/images/bigAbout.svg" className=" w-full h-full " alt="" />
                        <img src="/assets/images/smallAbout.svg" className="absolute -bottom-12 -right-24 tablet:-right-12 tablet:-bottom-6 sm:!-bottom-2 sm:!-right-6 z-10 w-[300px] lg:w-[250px] tablet:w-[150px] sm:!w-[100px]" alt="" />
                    </div>
                </Fade>
            </Container>
            <Container tag="div" styles={''}>
                <Fade damping={0.2} direction="up" cascade duration={1000}>
                    <Typography
                        variant="h3"
                        styles={'text-2xl mb-3 text-neutral-col-600 border-b-2 border-neutral-col-600 max-w-[150px] font-semibold font-roboto'}>
                        Who We Are
                    </Typography>
                    <p className=" text-dark-green text-6xl tablet:text-[52px] sm:!text-[32px] sm:!leading-[40px] mb-3 font-roboto-serif font-semibold">
                        Our Farmland and Who we are
                    </p>

                    <p className=" text-base text-justify mb-3 font-roboto">
                        Lorem ipsum dolor sit amet consectetur. Consectetur
                        lobortis in fermentum tortor viverra volutpat posuere
                        ipsum. Vel massa adipiscing
                        mauris elementum nulla. Vulputate elementum vestibulum sem mollis.
                    </p>

                    <p className=" text-base mb-3 text-justify font-roboto">
                        Lorem ipsum dolor sit amet consectetur. Consectetur
                        lobortis in fermentum tortor viverra volutpat posuere
                        ipsum. Vel massa adipiscing
                        mauris elementum nulla. Vulputate elementum vestibulum sem mollis.
                    </p>
                </Fade>
                <Container tag="div" styles={'grid grid-cols-2 xmd:grid-cols-1 gap-4 mt-6'}>
                    {SERVICE_DATA.slice(0, 2).map(({ description }, index) => (
                        <Roll key={index} damping={0.2} duration={1500}>
                            <ServiceCard key={index}
                                cardWrapperStyles={'p-4 lg:h-[200px]'}
                                descriptionStyles={'text-xl lg:text-2xl tablet:!text-xl'}
                                description={description}
                            />
                        </Roll>
                    )
                    )}
                </Container>
            </Container>
        </Container>
    )
}
