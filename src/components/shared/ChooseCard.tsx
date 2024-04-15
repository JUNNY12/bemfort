import React from 'react'
import { Container } from "../common/container/Container"
import { FlexContainer } from "../common/container/FlexContainer"
import { Card } from '../common/card/Card'

interface ChooseCardProps {
    title?: string;
    description?: string;
}

export const ChooseCard: React.FC<ChooseCardProps> = ({ title, description }): JSX.Element => {
    return (
        <Card>
            <Card.CardWrapper styles={'group bg-white bg-leaf-bg bg-no-repeat bg-right-bottom p-8 xmd:p-6 rounded-lg hover:shadow-penumbra hover:cursor-pointer ease-in-out duration-500'}>
                <FlexContainer tag="div" styles={'items-center gap-6'}>
                    <Container tag={'div'} styles={'border-2 border-dark-purple bg-light-yellow group-hover:bg-green group-hover:border-green ease-in-out  duration-500 rounded-[100%] p-10 relative h-20 w-20 mb-4'}>
                        <Card.CardIcon styles={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} icon="/assets/images/healthicons_fruits.svg" />
                    </Container>
                    <Card.CardTitle styles={'font-bold text-black text-2xl xmd:text-xl font-roboto'}>
                        {title}
                    </Card.CardTitle>
                </FlexContainer>
                <Card.CardDescription styles={'text-base font-roboto xmd:text-sm tablet:text-base mb-4'}>
                    {description}
                </Card.CardDescription>
                <Card.CardLink styles={'font-bold font-roboto mt-4 border-b-2 border-black hover:text-purple hover:border-purple ease-in-out duration-500'} linkRoute="/service" linkText={'Read More'}>
                    Read More
                </Card.CardLink>
            </Card.CardWrapper>
        </Card>
    )
}
