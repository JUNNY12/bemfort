import { Container } from "@/components/common/container/Container"
import Typography from "@/components/common/typography/Typography"
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

export default function CareerCarousel() {
    return (
        <Container className={'career-carousel'} styles={'relative'} tag="section">
            < Swiper
                modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 1000 }}
                speed={1000}
                loop={true}
                effect="fade"
                navigation={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Container tag="div" styles={'px-16 py-16 bg-taint-white'}>
                        <Typography variant="h1" styles={'text-6xl mb-3 font-bold text-center text-green mb-6 font-roboto-serif'}>
                            Join Our Team
                        </Typography>
                        <p className=" text-justify mb-6 text-base font-roboto">
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
                        <p className=" text-justify text-base font-roboto">
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
                    </Container>
                </SwiperSlide>

                <SwiperSlide>
                    <Container tag="div" styles={'px-16 py-16 bg-taint-white'}>
                        <Typography variant="h1" styles={'text-6xl mb-3 font-bold text-center text-green mb-6 font-roboto-serif'}>
                            Join Our Team
                        </Typography>
                        <p className=" text-justify mb-6 text-base font-roboto">
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
                        <p className=" text-justify text-base font-roboto">
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
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container tag="div" styles={'px-16 py-16 bg-taint-white'}>
                        <Typography variant="h1" styles={'text-6xl mb-3 font-bold text-center text-green mb-6 font-roboto-serif'}>
                            Join Our Team
                        </Typography>
                        <p className=" text-justify mb-6 text-base font-roboto">
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
                        <p className=" text-justify text-base font-roboto">
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
                    </Container>
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}