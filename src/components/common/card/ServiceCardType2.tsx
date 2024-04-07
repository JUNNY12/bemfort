import { Link } from "react-router-dom";
import { Container } from "../container/Container"
import { FlexContainer } from "../container/FlexContainer";
import { Card } from "./Card"
import Typography from "../typography/Typography";


interface ServiceCardType2Props {
    index?: number | string;
    title?: string;
    description?: string;
    linkTo: string;
}

export const ServiceCardType2: React.FC<ServiceCardType2Props> = ({ index, title, description, linkTo }): JSX.Element => {

    return (
        <Card>
            <Card.CardWrapper styles={'bg-white w-full w-[350px] lg:w-[100%] flex flex-col h-[auto] shadow-penumbra p-[16px]'}>
                <FlexContainer tag="div" styles="flex-row items-center">
                    <Container tag="div" styles={'border-2 border-dark-purple bg-light-yellow rounded-[100%] p-6 relative h-20 w-20'}>
                        <Card.CardIcon icon={'/assets/images/healthicons_fruits.svg'} styles={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} />
                    </Container>
                    <Card.CardTitle styles="text-bold ml-4">
                        {title}
                    </Card.CardTitle>
                </FlexContainer>
                
                <Card.CardDescription styles={'!text-[12px] text-xl font-semibold'}>
                    {description}
                </Card.CardDescription>
                <FlexContainer tag="div" styles="items-center justify-between">
                    <Container tag="div">
                        <Link className={'border-b-4 border-neutral-500'} to={linkTo}>
                            Read More
                        </Link>
                    </Container>
                    
                    <Typography variant={"h1"} styles="font-bold" children={index}/>
                </FlexContainer>
            </Card.CardWrapper>
        </Card>
    )
}