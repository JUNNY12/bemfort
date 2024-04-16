import Button from "@/components/common/button/Button"
import { AgricCard } from "@/components/shared/AgricCard"
import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"
import { Fade } from "react-awesome-reveal"

export const WhatWeOffer: React.FC = (): JSX.Element => {
    return (
        <Container tag={'section'} styles={'mb-40 relative'}>
            <Container tag={'div'} styles={'w-full bg-offer-bg bg-center bg-cover'}>
                <FlexContainer tag="div" styles={'flex-col justify-center items-center w-full h-[45vh] bg-neutral-col-300'}>
                    <Fade cascade damping={0.2} duration={1000} direction="up">
                        <Typography ariaLabel="offer" title="offer" variant={'h2'}
                            styles={'w-full max-w-[800px] px-16 lg:px-8 tablet:px-4 text-center text-6xl font-roboto-serif text-6xl lg:text-5xl md:!text-3xl text-white font-roboto-serif font-semibold mb-6'}>
                            We Offers Agriculture Eco Services
                        </Typography>
                    </Fade>
                    <Fade cascade damping={0.2} duration={1000} direction="up">
                        <Button variant={'purple'} styles={'w-60 hover:shadow-ambient ease-in-out duration-500 h-[45px]'} ariaLabel=" Explore" title="Explore" text="Explore More" />
                    </Fade>
                </FlexContainer>
            </Container>
            <Container tag="div" styles={'bg-green/70 px-16 lg:px-8 tablet:px-4 py-6'}>
                <Typography variant="h3" styles=" text-2xl mobile-big:text-xl mobile-big:w-[210px] z-50 mb-6 mobile-big:!mb-3 text-white font-bold font-roboto border-b-2 border-white w-[260px] ">
                    Our Cleaning Process
                </Typography>
                <Fade cascade direction="up" damping={0.2} duration={1000}>
                    <FlexContainer tag="div" styles={'flex-row xmd:flex-col gap-16 xmd:gap-4 mini-mobile:!gap-2 justify-between mt-8 tablet:!mt-3'}>
                        <p className=" text-white text-6xl lg:text-5xl md:!text-3xl mb-3 mini-tablet:!mb-0 text-left font-roboto-serif font-semibold  max-w-[500px]">
                            How We Do Agriculture Work
                        </p>
                        <p className=" text-xl mini-tablet:text-lg text-left text-white mb-3 w-[500px] xmd:!w-full font-roboto">
                            Lorem ipsum dolor sit amet consectetur.
                            Consectetur lobortis in fermentum tortor viverra
                            fermentum tortor viverra.
                        </p>
                    </FlexContainer>
                </Fade>
                <Fade direction="up" cascade damping={0.2} duration={1000}>
                    <Container tag="div" styles={' grid relative grid-cols-7 mlg:gap-y-32 sm:!gap-y-16 place-items-center mt-8 mlg:grid-cols-3  sm:!grid-cols-1 '}>
                        <div className=" ">
                            <AgricCard text='Lorem Ipsum' image="assets/images/agric.jpg" index={1} />
                        </div>
                        <div className="sm:rotate-90">
                            <img src="assets/images/Line.svg" alt="line" className="mlg:w-[6.5rem]" />
                        </div>

                        <div className="hidden mlg:block absolute rotate-90 right-[6%] sm:!hidden">
                            <img src="assets/images/Line.svg" alt="line" className="w-[6.5rem]" />
                        </div>
                        <div>
                            <AgricCard text='Lorem Ipsum' image="assets/images/agric.jpg" index={2} />
                        </div>
                        <div className=" mlg:hidden sm:!block sm:rotate-90 ">
                            <img src="assets/images/Line.svg" alt="line" className=" mlg:w-[6.5rem]" />
                        </div>
                        <div className=" mlg:order-5 sm:!order-3">
                            <AgricCard text='Lorem Ipsum' image="assets/images/agric.jpg" index={3} />
                        </div>
                        <div className="mlg:order-3 sm:rotate-90 sm:!order-5">
                            <img src="assets/images/Line.svg" alt="line" className=" mlg:w-[6.5rem]" />
                        </div>
                        <div className="hidden mlg:block absolute rotate-90 left-[6%] sm:!hidden">
                            <img src="assets/images/Line.svg" alt="line" className=" w-[6.5rem]" />
                        </div>
                        <div className=" sm:order-5">
                            <AgricCard text='Lorem Ipsum' image="assets/images/agric.jpg" index={4} />
                        </div>
                    </Container>
                </Fade>
            </Container>
        </Container>
    )
}