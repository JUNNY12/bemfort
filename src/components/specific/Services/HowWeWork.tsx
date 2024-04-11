import { AgricCard } from "@/components/shared/AgricCard";
import { Container } from "@/components/common/container/Container";
import { FlexContainer } from "@/components/common/container/FlexContainer";
import Typography from "@/components/common/typography/Typography";
import PlaceholderImg from "@/../public/assets/images/agricPlaceholder.jpg";

export default function HowWeWork(){
    return(
        <Container tag="div" styles="text-white bg-green-alt p-[64px] lg:p-[32px]">
            <FlexContainer tag="div" styles="flex-row lg:flex-col lg:items-start items-center">
                <FlexContainer tag="div" styles="flex-col basis-1/2">
                    <Typography variant="h3" styles="underline">Our Cleaning Process</Typography>
                    <Typography variant="h1" styles="font-roboto-serif font-bold text-5xl">How We Do <br/>Agricultural Work</Typography>
                </FlexContainer>
                <Container tag="div" styles="basis-1/2">
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Consectetur lobortis in fermentum tortor viverra volutpat posuere ipsum. Vel massa adipiscing .
                    </p>
                </Container>
            </FlexContainer>

            <FlexContainer tag="div" styles={'flex-wrap lg:justify-between justify-start items-center mt-8 '}>
                <AgricCard text='Lorem Ipsum' image={ PlaceholderImg } />
                    <div className="mx-[-10px]">
                        <img src="assets/images/Line.svg" alt="line" className="" />
                    </div>
                <AgricCard text='Lorem Ipsum' image={ PlaceholderImg } />
                    <div  className="lg:hidden block">
                        <img src="assets/images/Line.svg" alt="line" className="" />
                    </div>
                <AgricCard text='Lorem Ipsum' image={ PlaceholderImg } />
                    <div className="mx-[-10px]">
                        <img src="assets/images/Line.svg" alt="line" className="" />
                    </div>
                <AgricCard text='Lorem Ipsum' image={ PlaceholderImg } />
                </FlexContainer>
                <Container tag="div" styles="lg:py-[50px] py-[40px]" children={undefined}></Container>
        </Container>
    )
}