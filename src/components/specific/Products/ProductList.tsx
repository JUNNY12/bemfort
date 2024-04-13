import { FlexContainer } from "@/components/common/container/FlexContainer";
import Typography from "@/components/common/typography/Typography";
import { APCards, FAQardsData, productListData } from "@/constants/constants";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
import { Container } from "@/components/common/container/Container";
import ProductImage from "/public/assets/images/productImage.jpg";
import AgricProductCard from "@/components/common/card/AgricProductCard";
import FAQards from "@/components/shared/FAQards";

export default function ProductList() {
  return (
    <FlexContainer tag={"div"} styles="justify-between flex-wrap gap-10">
        <FlexContainer tag="div" styles="basis-[40%] bg-light-green flex-col px-7 py-7 pt-0 rounded-[9px]">
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
        <FlexContainer tag="div" styles="group relative overflow-hidden basis-[55%] bg-green ">
            <Container tag="div" className="group-hover: bg-black/60 block absolute top-0 left-0 bottom-0 right-0 z-10" children={''}/>
            <img src={ProductImage} className="group-hover: block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 z-3"/>
        </FlexContainer>

        {/* Need Help */}
        <FlexContainer tag="div" styles="basis-[40%] bg-taint-white flex-col px-7 py-7 pt-0 rounded-[9px]">
            <FlexContainer tag="div" styles="flex-col w-[95%]" >
                <FlexContainer tag="div">
                    <Typography variant="h3">
                        Need Help! Get In Touch Quickly
                    </Typography>
                </FlexContainer>
                <FlexContainer tag="div" styles="bg-green">
                    +234-90-xxxx-4325
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>

         {/* Agriculture Products */}
         <FlexContainer tag="div" styles="basis-[55%] flex-col">
                <Typography variant="h1" children={"Agriculture Products"} styles="text-5xl mb-4 font-bold font-roboto-serif"/>
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
        <FlexContainer tag="div" styles="basis-[40%] bg-taint-white gap-2 flex-col">
            <FlexContainer tag="div" styles="flex-col">
                <Typography variant="h2" styles="font-roboto-serif font-bold text-4xl w-[350px] mb-2">
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
        <FlexContainer tag="div" styles="basis-[55%] flex-col">
            <FlexContainer tag="div" styles="flex-col">
                    <Typography variant="h2" styles="font-roboto-serif font-bold text-4xl mb-2">
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
