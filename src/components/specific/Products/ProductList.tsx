import { FlexContainer } from "@/components/common/container/FlexContainer";
import Typography from "@/components/common/typography/Typography";
import { productListData } from "@/constants/constants";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
import { Container } from "@/components/common/container/Container";
import ProductImage from "/public/assets/images/productImage.jpg";

export default function ProductList() {
  return (
    <FlexContainer tag={"div"} styles="justify-between">
        <FlexContainer tag="div" styles="basis-[46%] bg-light-green flex-col px-7 py-7 pt-0 rounded-[9px]">
            <Typography variant={"h2"} children={"Product Lists"} styles="py-4 font-bold" />
            <FlexContainer tag="div" styles="flex-col">
                { 
                    productListData.map((items, i)=> (
                        <Link className="justify-between hover:bg-light-yellow flex flex-row items-center bg-white p-3 mb-3 rounded-[5px]" to={items.link}>
                            <p className="font-bold">{items.text}</p>
                            <BiSolidRightArrow/>
                        </Link>
                    ))
                } 
            </FlexContainer>
        </FlexContainer>
        <Container tag="div" styles="relative overflow-hidden w-[46%] basis-[46%] bg-green">
            <img src={ProductImage} className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150"/>
        </Container>
    </FlexContainer>
  )
}
