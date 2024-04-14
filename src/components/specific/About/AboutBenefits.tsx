import { Card } from "@/components/common/card/Card"
import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"

export const AboutBenefit: React.FC = (): JSX.Element => {
    return (
        <Container tag="section" styles={'mx-16 mt-4 lg:mx-8 tablet:mx-4 mb-32'}>
            <FlexContainer tag="div" styles={'justify-center flex-col items-center font-roboto-serif'}>
                <Typography
                    variant="h3"
                    styles={'text-2xl mb-3 text-neutral-col-600 mb-6 border-b-2 border-neutral-col-600 max-w-[150px] font-semibold font-roboto'}>
                    Our Benefits
                </Typography>
                <p className=" text-black text-6xl tablet:text-[52px] sm:!text-[32px] sm:!leading-[40px]  mb-3  max-w-[650px] text-center font-roboto-serif font-semibold">
                    We Are Distributors Of Quality 100% Organic Produce
                </p>
            </FlexContainer>

            <Container tag="div" styles={'grid grid-cols-2 lg:grid-cols-1 lg:place-items-center gap-32  lg:gap-8 tablet:gap-16 mt-6 lg:mt-0'}>
                <Container tag="div" styles={'font-roboto-serif'}>
                    <Typography variant="h3" styles={' text-dark-green text-5xl tablet:text-[52px] sm:!text-[28px] sm:!leading-[32px]  mb-3 text-left font-roboto-serif font-semibold w-full max-w-[500px]'}>
                        Best Agriculture & Organic Firms.
                    </Typography>
                    <p className=" text-base mb-6 tablet:mb-3 font-roboto">
                        Lorem ipsum dolor sit amet consectetur.
                        Consectetur lobortis in fermentum tortor viverra
                        volutpat posuere ipsum. Vel massa adipiscing mauris
                        elementum nulla. Vulputate elementum vestibulum sem mollis.
                    </p>
                    <p className=" text-base font-roboto">
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
                                        <div className="bg-green flex justify-center items-center text-4xl sm:text-2xl
                                        font-roboto-serif font-bold text-white h-[100px] sm:h-[80px] w-[100px] sm:w-[80px]
                                        rounded-[100%] border-2 border-purple">
                                            100 +
                                        </div>
                                    </Container>
                                    <Container tag="div">
                                        <Card.CardTitle styles={'text-2xl sm:text-xl font-semibold font-roboto-serif mb-2 sm:mb-1'}>
                                            Happy Customers
                                        </Card.CardTitle>
                                        <Card.CardDescription styles={'text-base sm:text-sm font-roboto-serif'}>
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
                    <div className="relative lg:w-[500px] tablet:w-[350px] sm:!w-[250px]">
                        <img src="/assets/images/BenefitMainImage.svg" className="w-full h-auto" />
                        <div className="absolute z-50 h-40 w-60 sm:w-40 sm:h-36 flex flex-col justify-center bottom-44 tablet:-top-12 p-4 -left-28 tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 bg-light-yellow text-black rounded-bl-md rounded-tr-md font-roboto">
                            <Typography styles={'text-4xl sm:text-2xl mb-2 font-semibold'} variant="h5">10+</Typography>
                            <p className="text-3xl sm:text-xl">Pure Organic Products</p>
                        </div>
                    </div>

                </Container>
            </Container>

        </Container>
    )
}