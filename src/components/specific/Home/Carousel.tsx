import Slider from "react-slick"
import Typography from "@/components/common/typography/Typography"
import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import PrevButton from "@/components/common/button/PrevButton"
import NextButton from "@/components/common/button/NextButton"
import Button from "@/components/common/button/Button"
import { CardSection } from "./CardSection"


export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />
    }

    return (
        <Container tag="section" styles={'relative h-screen mb-44'}>
            <Slider {...settings}>
                <Container tag="section" styles={'h-screen bg-carousel-1 bg-cover w-full h-full '}>
                    <FlexContainer tag="div" styles={'w-full h-full bg-neutral-col-600 justify-center flex-col items-center h-screen px-36 text-center'}>
                        <Typography variant="h1" styles={'z-50 mb-4 text-white font-roboto-serif font-bold text-7xl'}>
                            Lorem ipsum dolor sit amet consectetursit.
                        </Typography>
                        <p className=" text-2xl px-44 z-50 mb-12 round text-white">
                            Lorem ipsum dolor sit amet consectetur.
                            Urna sed purus accumsan tortor suscipit tellus ut etiam posue.
                        </p>
                        <Button
                            variant="purple"
                            ariaLabel="Our Services"
                            type="button"
                            title="Our Services"
                            text="Our Services"
                            styles={'bg-dark-purple text-white z-50 py-2 px-6 rounded-sm'}
                        />
                    </FlexContainer>
                </Container>

                <Container tag="section" styles={'h-screen bg-carousel-2 bg-cover w-full h-full '}>
                    <FlexContainer tag="div" styles={'w-full h-full bg-neutral-col-600 justify-center flex-col items-center h-screen px-36 text-center'}>
                        <Typography variant="h1" styles={'z-50 mb-4 text-white font-roboto-serif font-bold text-7xl'}>
                            Lorem ipsum dolor sit amet consectetursit.
                        </Typography>
                        <p className=" text-2xl px-44 z-50 mb-12 round text-white">
                            Lorem ipsum dolor sit amet consectetur.
                            Urna sed purus accumsan tortor suscipit tellus ut etiam posue.
                        </p>
                        <Button
                            variant="purple"
                            ariaLabel="Our Services"
                            type="button"
                            title="Our Services"
                            text="Our Services"
                            styles={'bg-dark-purple text-white z-50 py-2 px-6 rounded-sm'}
                        />
                    </FlexContainer>
                </Container>

                <Container tag="section" styles={'h-screen bg-carousel-3 bg-cover w-full h-full '}>
                    <FlexContainer tag="div" styles={'w-full h-full bg-neutral-col-600 justify-center flex-col items-center h-screen px-36 text-center'}>
                        <Typography variant="h1" styles={'z-50 mb-4 text-white font-roboto-serif font-bold text-7xl'}>
                            Lorem ipsum dolor sit amet consectetursit.
                        </Typography>
                        <p className=" text-2xl px-44 z-50 mb-12 round text-white">
                            Lorem ipsum dolor sit amet consectetur.
                            Urna sed purus accumsan tortor suscipit tellus ut etiam posue.
                        </p>
                        <Button
                            variant="purple"
                            ariaLabel="Our Services"
                            type="button"
                            title="Our Services"
                            text="Our Services"
                            styles={'bg-dark-purple text-white z-50 py-2 px-6 rounded-sm'}
                        />
                    </FlexContainer>
                </Container>

                <Container tag="section" styles={'h-screen bg-carousel-2 bg-cover w-full h-full '}>
                    <FlexContainer tag="div" styles={'w-full h-full bg-neutral-col-600 justify-center flex-col items-center h-screen px-36 text-center'}>
                        <Typography variant="h1" styles={'z-50 mb-4 text-white font-roboto-serif font-bold text-7xl'}>
                            Lorem ipsum dolor sit amet consectetursit.
                        </Typography>
                        <p className=" text-2xl px-44 z-50 mb-12 round text-white">
                            Lorem ipsum dolor sit amet consectetur.
                            Urna sed purus accumsan tortor suscipit tellus ut etiam posue.
                        </p>
                        <Button
                            variant="purple"
                            ariaLabel="Our Services"
                            type="button"
                            title="Our Services"
                            text="Our Services"
                            styles={'bg-dark-purple text-white z-50 py-2 px-6 rounded-sm'}
                        />
                    </FlexContainer>
                </Container>
            </Slider>
            <CardSection />
        </Container>
    )
}


