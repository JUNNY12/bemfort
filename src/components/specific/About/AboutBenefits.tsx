import { Card } from "@/components/common/card/Card"
import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"

export const AboutBenefit: React.FC = (): JSX.Element => {
    return (
        <Container tag="section" styles={'p-16 mb-32'}>
            <FlexContainer tag="div" styles={'justify-center flex-col items-center font-roboto-serif'}>
                <Typography
                    variant="h3"
                    styles={'text-2xl mb-3 text-neutral-col-600 mb-6 border-b-2 border-neutral-col-600 max-w-[150px] font-semibold font-roboto'}>
                    Our Benefits
                </Typography>
                <p className=" text-black text-6xl mb-3  max-w-[650px] text-center font-roboto-serif font-semibold">
                    We Are Distributors Of Quality 100% Organic Produce
                </p>
            </FlexContainer>

            <FlexContainer tag="div" styles={'justify-between mt-6'}>
                <Container tag="div" styles={'font-roboto-serif w-2/5'}>
                    <Typography variant="h3" styles={' text-dark-green text-5xl mb-3 text-left font-roboto-serif font-semibold w-full max-w-[500px]'}>
                        Best Agriculture & Organic Firms.
                    </Typography>
                    <p className=" text-base mb-6">
                        Lorem ipsum dolor sit amet consectetur.
                        Consectetur lobortis in fermentum tortor viverra
                        volutpat posuere ipsum. Vel massa adipiscing mauris
                        elementum nulla. Vulputate elementum vestibulum sem mollis.
                    </p>
                    <p className=" text-base">
                        Lorem ipsum dolor sit amet consectetur.
                        Consectetur lobortis in fermentum tortor viverra
                        volutpat posuere ipsum. Vel massa adipiscing mauris
                        elementum nulla. Vulputate elementum vestibulum sem mollis.
                    </p>

                    <Container tag="div" styles={'mt-6'}>
                        <Card>
                            <Card.CardWrapper>
                                <FlexContainer styles={'gap-4'} tag="div">
                                    <Container tag="div">
                                        <div className="bg-green flex justify-center items-center text-4xl
                                        font-roboto-serif font-bold text-white h-[100px] w-[100px] 
                                        rounded-[100%] border-2 border-purple">
                                            100 +
                                        </div>
                                    </Container>
                                    <Container tag="div">
                                        <Card.CardTitle styles={'text-2xl font-semibold font-roboto-serif mb-2'}>
                                            Happy Customers
                                        </Card.CardTitle>
                                        <Card.CardDescription styles={'text-base font-roboto-serif'}>
                                            Lorem ipsum dolor sit amet consectetur.
                                            Sit arcu a quisque pharetra elementum dui.
                                        </Card.CardDescription>
                                    </Container>
                                </FlexContainer>
                            </Card.CardWrapper>
                        </Card>

                    </Container>
                </Container>
                <Container tag="div" styles={''}>
                    <div className="relative">
                        <img src="/assets/images/BenefitMainImage.svg" className="w-full h-auto" />
                        <div className="absolute z-50 h-40 w-60 bottom-44 p-4 -left-28 bg-light-yellow text-black rounded-bl-md rounded-tr-md font-roboto">
                            <Typography styles={'text-4xl mb-2 font-semibold'} variant="h5">10+</Typography>
                            <p className="text-3xl">Pure Organic Products</p>
                        </div>
                    </div>

                </Container>
            </FlexContainer>

        </Container>
    )
}