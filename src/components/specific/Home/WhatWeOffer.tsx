import Button from "@/components/common/button/Button"
import { AgricCard } from "@/components/shared/AgricCard"
import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"

export const WhatWeOffer: React.FC = (): JSX.Element => {
    return (
        <Container tag={'section'} styles={'h-screen mb-[600px]'}>
            <Container tag={'div'} styles={'w-full bg-offer-bg bg-center bg-cover'}>
                <FlexContainer tag="div" styles={'flex-col justify-center items-center w-full h-[45vh] bg-neutral-col-300'}>
                    <Typography ariaLabel="offer" title="offer" variant={'h2'}
                        styles={'w-full max-w-[800px] px-16 text-center text-6xl text-white font-roboto-serif font-semibold mb-6'}>
                        We Offers Agriculture Eco Services
                    </Typography>
                    <Button variant={'purple'} styles={'w-52'} ariaLabel=" Explore" title="Explore" text="Explore More" />
                </FlexContainer>
            </Container>
            <Container tag="div" styles={'bg-green/70 px-16 py-16'}>
                <Typography variant="h3" styles=" text-2xl z-50 mb-6 text-white font-bold font-roboto border-b-2 border-white max-w-[260px] ">
                    Our Cleaning Process
                </Typography>
                <FlexContainer tag="div" styles={'flex-row gap-16 justify-between mt-8'}>
                    <p className=" text-white text-6xl mb-3 text-left font-roboto-serif font-semibold w-full max-w-[500px]">
                        How We Do Agriculture Work
                    </p>
                    <p className=" text-xl text-left text-white mb-3 w-full max-w-[500px] font-roboto-serif">
                        Lorem ipsum dolor sit amet consectetur.
                        Consectetur lobortis in fermentum tortor viverra
                        fermentum tortor viverra.
                    </p>
                </FlexContainer>

                <FlexContainer tag="div" styles={' justify-center items-center mt-8 '}>
                    <AgricCard text='Lorem Ipsum' image="assets/images/agric.jpg" />
                    <div>
                        <img src="assets/images/Line.svg" alt="line" className="" />
                    </div>
                    <AgricCard text='Lorem Ipsum' image="assets/images/agric.jpg" />
                    <div>
                        <img src="assets/images/Line.svg" alt="line" className="" />
                    </div>
                    <AgricCard text='Lorem Ipsum' image="assets/images/agric.jpg" />
                    <div>
                        <img src="assets/images/Line.svg" alt="line" className="" />
                    </div>
                    <AgricCard text='Lorem Ipsum' image="assets/images/agric.jpg" />
                </FlexContainer>
            </Container>
        </Container>
    )
}