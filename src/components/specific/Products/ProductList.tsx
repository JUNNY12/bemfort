import { FlexContainer } from "@/components/common/container/FlexContainer";
import Typography from "@/components/common/typography/Typography";
import { APCards, FAQardsData, productListData } from "@/constants/constants";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
import { Container } from "@/components/common/container/Container";
import ProductImage from "/public/assets/images/productImage.jpg";
import AgricProductCard from "@/components/common/card/AgricProductCard";
import FAQards from "@/components/shared/FAQards";
import { BiPhoneCall } from "react-icons/bi";

export default function ProductList() {
  return (
    <FlexContainer tag={"div"} styles="justify-between flex-wrap gap-10 lg:gap-4 pb-[100px] lg:pb-[50px]">
        <FlexContainer tag="div" styles="basis-[40%] lg:basis-[100%] bg-light-green flex-col px-7 py-7 pt-0 rounded-[9px] order-1 lg:order-1">
            <Typography variant={"h2"} children={"Product Lists"} styles="py-4 font-bold" />
            <FlexContainer tag="div" styles="flex-col">
                { 
                    productListData.map((items)=> (
                        <Link className="justify-between hover:bg-light-yellow flex flex-row items-center bg-white p-3 mb-3 rounded-[5px]" to={items.link}>
                            <p className="font-bold">{items.text}</p>
                            <BiSolidRightArrow/>
                        </Link>
                    ))
                } 
            </FlexContainer>
        </FlexContainer>
        {/* Image */}
        <FlexContainer tag="div" styles="group relative overflow-hidden lg:h-[200px] basis-[55%] lg:basis-[100%] bg-green order-2 lg:order-2">
            <Container tag="div" className="group-hover: bg-black/60 block absolute top-0 left-0 bottom-0 right-0 z-10" children={''}/>
            <img src={ProductImage} className="group-hover: block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 z-3"/>
        </FlexContainer>

        {/* Need Help */}
        <FlexContainer tag="div" styles="basis-[40%] lg:basis-[100%] bg-taint-white flex-col px-7 py-7 pt-0 rounded-[9px] order-3 lg:order-5">
            <FlexContainer tag="div" styles="flex-col w-[100%] h-full justify-center" >
                <FlexContainer tag="div" styles="p-10 h-[70%] items-center">
                    <Typography variant="h1" styles="text-center font-bold font-roboto-serif text-white">
                        Need Help! Get In Touch Quickly
                    </Typography>
                </FlexContainer>
                <FlexContainer tag="div" styles="p-2 bg-green items-center justify-center font-bold">
                    <p className="bg-light-yellow p-2 text-[25px] rounded-full mr-3 text-green">
                        <BiPhoneCall />
                    </p>
                    <p className="text-white">
                        +234-90-xxxx-4325
                    </p>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>

         {/* Agriculture Products */}
         <FlexContainer tag="div" styles="basis-[55%] lg:basis-[100%] flex-col order-4 lg:order-3">
                <Typography variant="h1" children={"Agriculture Products"} styles="text-5xl lg:text-4xl mb-4 font-bold font-roboto-serif"/>
                <Container tag="div" styles="pb-4">
                    <p className="mb-3">
                        Lorem ipsum dolor sit amet consectetur. Consectetur lobortis in fermentum tortor viverra volutpat posuere ipsum. Vel massa adipiscing mauris elementum nulla. Vulputate elementum vestibulum sem mollis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Consectetur lobortis in fermentum tortor viverra volutpat posuere ipsum. Vel massa adipiscing mauris elementum nulla. Vulputate elementum vestibulum sem mollis.
                    </p>
                </Container>

                <FlexContainer tag="div" styles="flex-col gap-3">
                    {
                        APCards.map((items) => (
                            <AgricProductCard title={items.prod_name} description={items.desc} linkTo={items.link}/>
                        ))
                    }
                </FlexContainer>
        </FlexContainer>

        {/* WCOS */}
        <FlexContainer tag="div" styles="basis-[40%] lg:basis-[100%] gap-2 flex-col order-5 lg:order-6">
            <FlexContainer tag="div" styles="flex-col">
                <Typography variant="h2" styles="font-roboto-serif font-bold text-4xl lg:w-full w-[350px] mb-2">
                    Why Choose Our Services
                </Typography>
                <FlexContainer tag="div" styles="gap-4 flex-col !text-sm">
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
                </FlexContainer>
            </FlexContainer>
            <FlexContainer tag="div" styles="flex-col">
                <Typography variant="h2" styles="font-roboto-serif font-bold text-4xl w-[350px] mb-2">
                    Our Benefits
                </Typography>
                <FlexContainer tag="div" styles="gap-4 flex-col !text-sm">
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
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>

        {/* FAQs */}
        <FlexContainer tag="div" styles="basis-[55%] lg:basis-[100%] flex-col order-6 lg:order-4">
            <FlexContainer tag="div" styles="flex-col">
                    <Typography variant="h2" styles="font-roboto-serif font-bold text-4xl mb-2 lg:my-4 lg:mb-8">
                        Frequently Asked Questions
                    </Typography>
                    <FlexContainer tag="div" styles="p-7 gap-4 flex-col !text-sm bg-light-green">
                        {
                            FAQardsData.map((items, i) => (
                                <FAQards index={(i+1)} question={items.question} answer={items.answer}/>
                            ))
                        }
                    </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    </FlexContainer>
  )
}
