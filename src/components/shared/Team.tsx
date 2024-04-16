import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"
import { TeamCard } from "@/components/shared/TeamCard"
import { TEAM_DATA } from "@/constants/constants"
import { Fade, Roll } from "react-awesome-reveal"

export const Team = (): JSX.Element => {
    return (
        <Container tag="section" styles={'bg-taint-white mt-24 tablet:mt-12 pt-16 pb-24 relative'}>

            <div className=" absolute top-0 right-0">
                <img
                    src={'/assets/images/leafBg.svg'}
                    alt={'Choose Us'}
                    className=""
                />
            </div>
            <div className=" absolute bottom-0 left-0">
                <img
                    src={'/assets/images/leafBg.svg'}
                    alt={'Choose Us'}
                    className=""
                />
            </div>
            <div className="absolute lg:hidden left-1/2 top-[30%] transform -translate-x-1/2 -translate-y-1/2">
                <img
                    src={'/assets/images/leafBg.svg'}
                    alt={'Choose Us'}
                    className=""
                />
            </div>

            <div className={''}>
                <img
                    src={'/assets/images/Arrow3.svg'}
                    alt={'Choose Us'}
                    className=" w-[100px] h-[100px]  absolute top-0 left-0"
                />
            </div>
            <Container tag='div' styles={'mx-16 lg:mx-8 tablet:mx-4'}>
                <Container tag="div" styles={'mt-12'}>
                    <Fade duration={1000} direction="left">
                        <Typography
                            variant="h3"
                            styles={'text-2xl mobile-big:text-xl mb-3 text-neutral-col-600 border-b-2 border-neutral-col-600 w-[228px] mobile-big:w-[190px] font-semibold font-roboto'}>
                            Our Team Members
                        </Typography>
                    </Fade>

                    <FlexContainer tag="div" styles={'flex-row md:flex-col gap-16 tablet:gap-3 justify-between mt-8 tablet:mt-3'}>
                        <Fade duration={1000} direction="up">
                            <p className=" text-dark-green text-6xl tablet:text-[52px] sm:!text-[32px] sm:!leading-[40px] mb-3 tablet:!mb-0 text-left font-roboto-serif font-semibold w-full max-w-[500px]">
                                Professional Team Members
                            </p>
                        </Fade>
                        <Fade duration={1000} direction="up">
                            <p className=" text-xl text-left mb-3 w-[500px] tablet:w-full font-roboto-serif">
                                Lorem ipsum dolor sit amet consectetur.
                                Consectetur lobortis in fermentum tortor viverra
                                fermentum tortor viverra.
                            </p>
                        </Fade>
                    </FlexContainer>
                </Container>
                <Container tag="div" styles={' mt-8 tablet:mt-3 grid grid-cols-3 lg:grid-cols-2 mini-tablet:grid-cols-1  gap-6'}>
                    {TEAM_DATA.map((item, index) => (
                        <Roll key={index} cascade damping={0.2} duration={1500}>
                            <TeamCard
                                name={item.name}
                                role={item.position}
                                image={item.image}
                            />
                        </Roll>
                    ))}
                </Container>
            </Container>
        </Container>
    )
}