import { Container } from "../common/container/Container"
import { FlexContainer } from "../common/container/FlexContainer"
import { Card } from "../common/card/Card"


interface AgricCardProps {
    text: string;
    image: string;
    index?: number;
}

export const AgricCard: React.FC<AgricCardProps> = ({ text, image, index }): JSX.Element => {
    return (
        <Card>
            <FlexContainer tag="div" styles="lg:my-4 my-10 relative flex items-center flex-col">
                <FlexContainer tag="div" styles="absolute top-[-25px] border-4 rounded-full w-[50px] h-[50px] items-center justify-center font-roboto-sherif bg-purple text-white">{index}</FlexContainer>
                <Container tag="div" styles={'agriImage rounded-3xl mb-4 w-full h-[auto] border-4 border-white'}>
                    <img
                        src={image}
                        alt={text}
                        className="w-full h-full object-cover rounded-3xl"
                    />

                </Container>
                <Card.CardDescription styles={'text-2xl lg:text-xl text-center tablet:!text-lg font-semibold text-white font-roboto'}>
                    {text}
                </Card.CardDescription>
            </FlexContainer>
        </Card>
    )
}