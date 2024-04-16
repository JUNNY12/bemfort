import { Container } from "@/components/common/container/Container"
import Typography from "@/components/common/typography/Typography"
import { register } from 'swiper/element/bundle'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Fade } from "react-awesome-reveal"

register()

export default function CareerCarousel() {

    return (
        <Container tag='section' styles={'relative mx-16 my-16 lg:my-8 md:!mt-4 lg:mx-8 md:!mx-4'}>
            <swiper-container
                navigation-next-el=".custom-next-button"
                navigation-prev-el=".custom-prev-button"
                navigation="true"
                slidesPerView={1}
                loop={true}
                speed={3000}
                effect="flip"
                grab-cursor="true"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <swiper-slide>
                    <div className="text-5xl"></div>
                    <Container tag="div" styles={'px-16 lg:px-8 md:!px-4 py-16 md:pt-8 bg-taint-white'}>
                        <Typography variant="h1" styles={'text-6xl lg:text-5xl md:!text-3xl mb-3 font-bold text-center text-green mb-6 font-roboto-serif'}>
                            Join Our Team
                        </Typography>
                        <Fade cascade damping={0.2} duration={1000} direction="up">
                            <p className=" text-justify mb-6 text-base md:text-sm font-roboto">
                                Lorem ipsum dolor sit amet consectetur.
                                Consectetur lobortis in fermentum tortor viverra
                                volutpat posuere ipsum. Vel massa adipiscing
                                mauris elementum nulla. Vulputate elementum
                                vestibulum sem mollis.Lorem ipsum dolor sit
                                amet consectetur. Consectetur lobortis in
                                fermentum tortor viverra volutpat posuere ipsum.
                                Vel massa adipiscing mauris elementum nulla.
                                Vulputate elementum vestibulum sem mollis.
                            </p>
                            <p className=" text-justify text-base md:text-sm font-roboto mb-6">
                                Lorem ipsum dolor sit amet consectetur.
                                Consectetur lobortis in fermentum tortor viverra
                                volutpat posuere ipsum. Vel massa adipiscing
                                mauris elementum nulla. Vulputate elementum
                                vestibulum sem mollis.Lorem ipsum dolor sit
                                amet consectetur. Consectetur lobortis in
                                fermentum tortor viverra volutpat posuere ipsum.
                                Vel massa adipiscing mauris elementum nulla.
                                Vulputate elementum vestibulum sem mollis.
                            </p>
                        </Fade>
                    </Container>
                </swiper-slide>

                <swiper-slide>
                    <div className="text-5xl"></div>
                    <Container tag="div" styles={'px-16 lg:px-8 md:!px-4 py-16 md:pt-8 bg-taint-white'}>
                        <Typography variant="h1" styles={'text-6xl lg:text-5xl md:!text-3xl mb-3 font-bold text-center text-green mb-6 font-roboto-serif'}>
                            Join Our Team
                        </Typography>
                        <Fade cascade damping={0.2} duration={1000} direction="up">
                            <p className=" text-justify mb-6 text-base md:text-sm font-roboto">
                                Lorem ipsum dolor sit amet consectetur.
                                Consectetur lobortis in fermentum tortor viverra
                                volutpat posuere ipsum. Vel massa adipiscing
                                mauris elementum nulla. Vulputate elementum
                                vestibulum sem mollis.Lorem ipsum dolor sit
                                amet consectetur. Consectetur lobortis in
                                fermentum tortor viverra volutpat posuere ipsum.
                                Vel massa adipiscing mauris elementum nulla.
                                Vulputate elementum vestibulum sem mollis.
                            </p>
                            <p className=" text-justify text-base md:text-sm font-roboto mb-6">
                                Lorem ipsum dolor sit amet consectetur.
                                Consectetur lobortis in fermentum tortor viverra
                                volutpat posuere ipsum. Vel massa adipiscing
                                mauris elementum nulla. Vulputate elementum
                                vestibulum sem mollis.Lorem ipsum dolor sit
                                amet consectetur. Consectetur lobortis in
                                fermentum tortor viverra volutpat posuere ipsum.
                                Vel massa adipiscing mauris elementum nulla.
                                Vulputate elementum vestibulum sem mollis.
                            </p>
                        </Fade>
                    </Container>
                </swiper-slide>

                <swiper-slide>
                    <div className="text-5xl"></div>
                    <Container tag="div" styles={'px-16 lg:px-8 md:!px-4 py-16 md:pt-8 bg-taint-white'}>
                        <Typography variant="h1" styles={'text-6xl lg:text-5xl md:!text-3xl mb-3 font-bold text-center text-green mb-6 font-roboto-serif'}>
                            Join Our Team
                        </Typography>
                        <Fade cascade damping={0.2} duration={1000} direction="up">
                            <p className=" text-justify mb-6 text-base md:text-sm font-roboto">
                                Lorem ipsum dolor sit amet consectetur.
                                Consectetur lobortis in fermentum tortor viverra
                                volutpat posuere ipsum. Vel massa adipiscing
                                mauris elementum nulla. Vulputate elementum
                                vestibulum sem mollis.Lorem ipsum dolor sit
                                amet consectetur. Consectetur lobortis in
                                fermentum tortor viverra volutpat posuere ipsum.
                                Vel massa adipiscing mauris elementum nulla.
                                Vulputate elementum vestibulum sem mollis.
                            </p>
                            <p className=" text-justify text-base md:text-sm font-roboto mb-6">
                                Lorem ipsum dolor sit amet consectetur.
                                Consectetur lobortis in fermentum tortor viverra
                                volutpat posuere ipsum. Vel massa adipiscing
                                mauris elementum nulla. Vulputate elementum
                                vestibulum sem mollis.Lorem ipsum dolor sit
                                amet consectetur. Consectetur lobortis in
                                fermentum tortor viverra volutpat posuere ipsum.
                                Vel massa adipiscing mauris elementum nulla.
                                Vulputate elementum vestibulum sem mollis.
                            </p>
                        </Fade>
                    </Container>
                </swiper-slide>



            </swiper-container>
            <div className="nav-btn custom-prev-button">
                <FaChevronLeft />
            </div>

            <div className="nav-btn custom-next-button">
                <FaChevronRight />
            </div>
        </Container>
    )
}
