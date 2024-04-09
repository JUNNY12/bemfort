import { Container } from "../common/container/Container"
import { Card } from "../common/card/Card"
import { FlexContainer } from "../common/container/FlexContainer"

interface TeamCardProps {
    name: string;
    role: string;
    image: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ image, name, role }): JSX.Element => {
    return (
        <Card>
            <Card.CardWrapper>
                <FlexContainer tag="div" styles={'flex-col items-center py-8 px-4 justify-center bg-white rounded-md shadow-penumbra'}>
                    <Container tag="div" styles={'border-2 border-purple rounded-[100%] h-[200px] w-[200px]  mb-4'}>
                        <img
                            src={image}
                            alt={''}
                            className=" w-full h-full object-cover rounded-[100%]"
                        />
                    </Container>
                    <Card.CardTitle styles={'font-bold text-black text-2xl text-center font-roboto'}>
                        {name}
                    </Card.CardTitle>
                    <Card.CardSubtitle styles={' text-base text-center mb-4'}>
                        {role}
                    </Card.CardSubtitle>
                </FlexContainer>
            </Card.CardWrapper>
        </Card>
    )
}
