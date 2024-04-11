import Button from "@/components/common/button/Button";
import { Container } from "@/components/common/container/Container";
import { FlexContainer } from "@/components/common/container/FlexContainer";
import Typography from "@/components/common/typography/Typography";
import { Link } from "react-router-dom";


export default function ExploreMore() {
    return (
        <Container tag="div" styles="bg-we-offer bg-center bg-cover h-[300px]">
            <FlexContainer tag="div" styles="bg-[#0000002b] h-full w-full items-center justify-center">
                <FlexContainer tag="div" styles="flex-col items-center">
                    <Typography variant="h1" styles="font-roboto-serif font-bold text-white text-center">
                        We Offer Agriculture <br /> Eco Services
                    </Typography>
                    <Link className="text-sm bg-purple rounded-md text-white text-center mt-[16px] w-[150px] py-[12px]" to="/explore">Explore More</Link>
                </FlexContainer>
            </FlexContainer>

        </Container>
    )
}
