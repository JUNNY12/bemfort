
// ---- sent to null ----
// import {Swiper, SwiperSlide } from 'swiper/react';
// import {Autoplay, Navigation, Pagination} from 'swiper/modules'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Typography from '../typography/Typography';
// import Button from '../button/Button';

// export default function Carousel() {
//     return (
//     <Swiper
//         autoplay={{
//             delay: 2500,
//             disableOnInteraction: false
//         }}
//         modules={[Autoplay, Navigation, Pagination]}
//         spaceBetween={50}
//         slidesPerView={1}
//         navigation={true}
//         pagination={{ clickable: true }}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//         className='h-[100%]'
//     >
//         <SwiperSlide>
//             <div className='flex justify-center items-center flex-col h-full text-white bg-[tomato]'>
//                 <Typography styles='text-3xl text-white ' variant={'h1'} children={"Lorem ipsum dolor sit amet consectetursit."}/>
//                 <Typography styles="text-sm" variant={'h3'} children={"Lorem ipsum dolor sit amet consectetur. Urna sed purus accumsan tortor suscipit tellus ut etiam posue."} />
//                 <Button children={'Our Services'}/>
//             </div>
//         </SwiperSlide>

//         <SwiperSlide>
//             <div className='flex justify-center items-center flex-col h-full text-white bg-[tomato]'>
//                 <Typography styles='text-3xl text-white ' variant={'h1'} children={"Lorem ipsum dolor sit amet consectetursit. "}/>
//                 <Typography styles="text-sm" variant={'h3'} children={"Lorem ipsum dolor sit amet consectetur. Urna sed purus accumsan tortor suscipit tellus ut etiam posue."} />
//                 <Button children={'Our Services'}/>
//             </div>
//         </SwiperSlide>
//     </Swiper>
//   )
// }
