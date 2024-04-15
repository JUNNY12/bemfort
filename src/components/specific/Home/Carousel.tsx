import Typography from "@/components/common/typography/Typography"
import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Button from "@/components/common/button/Button"
import { CardSection } from "./CardSection"
import { register } from "swiper/element/bundle"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
register()

export default function Carousel() {
    return (
        <Container tag="section" styles={'relative mb-36 font-roboto-serif'}>
            <swiper-container
                navigation-next-el=".home-next-button"
                navigation-prev-el=".home-prev-button"
                navigation="true"
                slidesPerView={1}
                loop={true}
                autoplay-delay="3000"
                autoplay-disable-on-interaction="true"
                speed={3000}
                effect="cube"
                grab-cursor="true"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <swiper-slide>
                    <Container tag="section" styles={'h-screen relative bg-carousel-1 bg-cover w-full h-full '}>
                        <FlexContainer tag="div" styles={'w-full h-full bg-neutral-col-600 justify-center flex-col items-center h-screen  text-center'}>
                            <Typography variant="h1" styles={'z-50 mb-4 mx-16 lg:mx-8 tablet:mx-4 text-white font-roboto-serif font-bold text-7xl xmd:text-5xl tablet:text-4xl mobile-big:text-3xl  max-w-[700px]'}>
                                Lorem ipsum dolor sit amet consectetursit.
                            </Typography>
                            <p className="mx-16 lg:mx-8 tablet:mx-4 text-2xl max-w-[600px] xmd:text-lg mobile-big:text-base z-50 mb-12 round text-white">
                                Lorem ipsum dolor sit amet consectetur.
                                Urna sed purus accumsan tortor suscipit tellus ut etiam posue.
                            </p>
                            <Button
                                variant="purple"
                                ariaLabel="Our Services"
                                type="button"
                                title="Our Services"
                                text="Our Services"
                                styles={'bg-dark-purple text-white z-50 py-2 px-6 rounded-sm hover:bg-transparent hover:border hover:border-dark-purple ease-in-out duration-500 h-[45px] w-[200px] w-[200px] shadow-ambient'}
                            />
                        </FlexContainer>
                    </Container>
                </swiper-slide>

                <swiper-slide>
                    <Container tag="section" styles={'h-screen relative bg-carousel-1 bg-cover w-full h-full '}>
                        <FlexContainer tag="div" styles={'w-full h-full bg-neutral-col-600 justify-center flex-col items-center h-screen  text-center'}>
                            <Typography variant="h1" styles={'z-50 mb-4 mx-16 lg:mx-8 tablet:mx-4 text-white font-roboto-serif font-bold text-7xl xmd:text-5xl tablet:text-4xl mobile-big:text-3xl  max-w-[700px]'}>
                                Lorem ipsum dolor sit amet consectetursit.
                            </Typography>
                            <p className="mx-16 lg:mx-8 tablet:mx-4 text-2xl max-w-[600px] xmd:text-lg mobile-big:text-base z-50 mb-12 round text-white">
                                Lorem ipsum dolor sit amet consectetur.
                                Urna sed purus accumsan tortor suscipit tellus ut etiam posue.
                            </p>
                            <Button
                                variant="purple"
                                ariaLabel="Our Services"
                                type="button"
                                title="Our Services"
                                text="Our Services"
                                styles={'bg-dark-purple text-white z-50 py-2 px-6 rounded-sm hover:bg-transparent hover:border hover:border-dark-purple ease-in-out duration-500 h-[45px] w-[200px] shadow-ambient'}
                            />
                        </FlexContainer>
                    </Container>
                </swiper-slide>

                <swiper-slide>
                    <Container tag="section" styles={'h-screen relative bg-carousel-1 bg-cover w-full h-full '}>
                        <FlexContainer tag="div" styles={'w-full h-full bg-neutral-col-600 justify-center flex-col items-center h-screen  text-center'}>
                            <Typography variant="h1" styles={'z-50 mb-4 mx-16 lg:mx-8 tablet:mx-4 text-white font-roboto-serif font-bold text-7xl xmd:text-5xl tablet:text-4xl mobile-big:text-3xl  max-w-[700px]'}>
                                Lorem ipsum dolor sit amet consectetursit.
                            </Typography>
                            <p className="mx-16 lg:mx-8 tablet:mx-4 text-2xl max-w-[600px] xmd:text-lg mobile-big:text-base z-50 mb-12 round text-white">
                                Lorem ipsum dolor sit amet consectetur.
                                Urna sed purus accumsan tortor suscipit tellus ut etiam posue.
                            </p>
                            <Button
                                variant="purple"
                                ariaLabel="Our Services"
                                type="button"
                                title="Our Services"
                                text="Our Services"
                                styles={'bg-dark-purple text-white z-50 py-2 px-6 rounded-sm hover:bg-transparent hover:border hover:border-dark-purple ease-in-out duration-500 h-[45px] w-[200px] shadow-ambient'}
                            />
                        </FlexContainer>
                    </Container>
                </swiper-slide>

            </swiper-container>
            <div className="home-nav-btn home-prev-button">
                <FaChevronLeft />
            </div>

            <div className="home-nav-btn home-next-button">
                <FaChevronRight />
            </div>

            <CardSection />
        </Container>
    )
}