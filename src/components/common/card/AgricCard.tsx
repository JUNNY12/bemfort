import { Container } from "../container/Container"
import { FlexContainer } from "../container/FlexContainer"
import { Card } from "./Card"


interface AgricCardProps {
    text: string;
    image: string;
}

export const AgricCard: React.FC<AgricCardProps> = ({ text, image }): JSX.Element => {
    return (
        <Card>
            <FlexContainer tag="div" styles="flex items-center flex-col">
                <Container tag="div" styles={'rounded-3xl mb-4 w-[200px] h-[200px] border-4 border-white'}>
                    <img
                        src={image}
                        alt={text}
                        className="w-full h-full object-cover rounded-3xl"
                    />

                </Container>
                <Card.CardDescription styles={'text-2xl font-semibold text-white font-roboto'}>
                    {text}
                </Card.CardDescription>
            </FlexContainer>
        </Card>
    )
}