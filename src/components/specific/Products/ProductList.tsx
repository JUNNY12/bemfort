import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"
import { APCards, FAQardsData } from "@/constants/constants"
import { Link } from "react-router-dom"
import { BiSolidRightArrow } from "react-icons/bi"
import { Container } from "@/components/common/container/Container"
import ProductImage from "/assets/images/productImage.jpg"
import AgricProductCard from "@/components/common/card/AgricProductCard"
import FAQards from "@/components/shared/FAQards"
import { BiPhoneCall } from "react-icons/bi"
import { AGRIC_PRODUCTS } from "@/constants/constants"
import { Fade } from "react-awesome-reveal"

export default function ProductList() {
    return (
        <FlexContainer tag={"div"} styles="justify-between flex-wrap gap-10 lg:gap-4 pb-[100px] lg:pb-[50px]">
            <FlexContainer tag="div" styles="basis-[40%] lg:basis-[100%] bg-light-green flex-col p-6 sm:p-3 rounded-[9px] order-1 lg:order-1">
                <Fade direction="left" duration={1000}>
                    <Typography variant={"h2"} children={"Product Lists"} styles="py-4 sm:py-1 mb-2 font-bold" />
                </Fade>
                <FlexContainer tag="div" styles="flex-col">
                    {
                        AGRIC_PRODUCTS.map((items, i) => (
                            <Fade key={i} direction="up" duration={1000}>
                                <Link className="group justify-between hover:bg-light-yellow ease-in-out duration-500 flex flex-row items-center bg-white p-3 mb-3 rounded-[5px]" to={`/products/${items.name}`}>
                                    <p className="font-bold">{items.name}</p>
                                    <div className=" group-hover:text-green ease-in-out duration-500">
                                        <BiSolidRightArrow />
                                    </div>
                                </Link>
                            </Fade>
                        ))
                    }
                </FlexContainer>
            </FlexContainer>

            {/* Image */}
            <FlexContainer tag="div" styles="group relative overflow-hidden lg:h-[200px] basis-[55%] lg:basis-[100%] bg-green order-2 lg:order-2">
                <Container tag="div" className="group-hover: bg-black/60 block absolute top-0 left-0 bottom-0 right-0 z-10" children={''} />
                <Fade duration={1000}>
                    <img src={ProductImage} className="group-hover: block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 z-3" />
                </Fade>
            </FlexContainer>

            {/* Need Help */}
            <FlexContainer tag="div" styles="h-[300px] relative basis-[40%] lg:basis-[100%] bg-need-help bg-cover bg-center flex-col pt-0 rounded-[9px] order-3 lg:order-5">
                <FlexContainer tag="div" styles="flex-col bg-green/35  w-full h-full justify-center" >
                    <FlexContainer tag="div" styles="p-10 z-50 h-[70%] items-center justify-center">
                        <Fade duration={1000} direction="up">
                            <Typography variant="h1" styles="text-center sm:leading-[1] font-bold font-roboto-serif text-white">
                                Need Help! Get In Touch Quickly
                            </Typography>
                        </Fade>
                    </FlexContainer>
                    <FlexContainer tag="div" styles="px-6 sm:px-3 absolute bottom-0 w-full p-2 bg-green items-center gap-x-6 font-bold">
                        <Fade damping={0.2} cascade duration={1000} direction="up">
                            <p className="bg-light-yellow p-2 text-[25px] rounded-full mr-3 text-green">
                                <BiPhoneCall />
                            </p>
                            <p className="text-white text-2xl sm:text-xl">
                                +234-90-xxxx-4325
                            </p>
                        </Fade>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>

            {/* Agriculture Products */}
            <FlexContainer tag="div" styles="basis-[55%] lg:basis-[100%] flex-col order-4 lg:order-3">
                <Fade direction="up" duration={1000}>
                    <Typography variant="h1" children={"Agriculture Products"} styles="text-5xl lg:text-4xl mb-4 font-bold font-roboto-serif" />
                </Fade>
                <Container tag="div" styles="pb-4 font-roboto">
                    <Fade duration={1000} damping={0.2} cascade direction="up">
                        <p className="mb-3">
                            Lorem ipsum dolor sit amet consectetur. Consectetur lobortis in fermentum tortor viverra volutpat posuere ipsum. Vel massa adipiscing mauris elementum nulla. Vulputate elementum vestibulum sem mollis.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Consectetur lobortis in fermentum tortor viverra volutpat posuere ipsum. Vel massa adipiscing mauris elementum nulla. Vulputate elementum vestibulum sem mollis.
                        </p>
                    </Fade>
                </Container>

                <FlexContainer tag="div" styles="flex-col gap-3">
                    {
                        APCards.map((items, i) => (
                            <Fade key={i} direction="up" duration={1000} damping={0.2} cascade>
                                <AgricProductCard title={items.prod_name} description={items.desc} linkTo={items.link} />
                            </Fade>
                        ))
                    }
                </FlexContainer>
            </FlexContainer>

            {/* WCOS */}
            <FlexContainer tag="div" styles="basis-[40%] lg:basis-[100%] gap-2 flex-col order-5 lg:order-6">
                <FlexContainer tag="div" styles="flex-col">
                    <Fade direction="left" duration={1000} >
                        <Typography variant="h2" styles="font-roboto-serif font-bold text-4xl lg:w-full w-[350px] mb-2">
                            Why Choose Our Services
                        </Typography>
                    </Fade>
                    <FlexContainer tag="div" styles="gap-4 flex-col !text-sm font-roboto">
                        <Fade damping={0.2} duration={1000} direction="up" cascade>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Consectetur lobortis in fermentum tortor viverra
                                volutpat posuere ipsum. Vel massa adipiscing mauris elementum nulla.
                                Vulputate elementum vestibulum sem mollis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Consectetur lobortis in fermentum tortor viverra
                                volutpat posuere ipsum. Vel massa adipiscing mauris elementum nulla.
                                Vulputate elementum vestibulum sem mollis.
                            </p>
                        </Fade>
                    </FlexContainer>
                </FlexContainer>

                <FlexContainer tag="div" styles="flex-col mt-2">
                    <Fade direction="left" duration={1000} >
                        <Typography variant="h2" styles="font-roboto-serif font-bold text-4xl lg:w-full w-[350px] mb-2">
                            Our Benefits
                        </Typography>
                    </Fade>
                    <FlexContainer tag="div" styles="gap-4 flex-col !text-sm font-roboto">
                        <Fade damping={0.2} duration={1000} direction="up" cascade>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Consectetur lobortis in fermentum tortor viverra
                                volutpat posuere ipsum. Vel massa adipiscing mauris elementum nulla.
                                Vulputate elementum vestibulum sem mollis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Consectetur lobortis in fermentum tortor viverra
                                volutpat posuere ipsum. Vel massa adipiscing mauris elementum nulla.
                                Vulputate elementum vestibulum sem mollis.
                            </p>
                        </Fade>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>

            {/* FAQs */}
            <FlexContainer tag="div" styles="basis-[55%] lg:basis-[100%] flex-col order-6 lg:order-4">
                <FlexContainer tag="div" styles="flex-col">
                    <Fade direction="up" duration={1000}>
                        <Typography variant="h2" styles="font-roboto-serif font-bold text-4xl mb-3 lg:my-4 lg:mb-8">
                            Frequently Asked Questions
                        </Typography>
                    </Fade>
                    <FlexContainer tag="div" styles="p-7 sm:p-3 gap-4 flex-col !text-sm bg-light-green">
                        {
                            FAQardsData.map((items, i) => (
                                <FAQards key={i} index={(i + 1)} question={items.question} answer={items.answer} />
                            ))
                        }
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
