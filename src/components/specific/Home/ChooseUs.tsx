import { Container } from "@/components/common/container/Container"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"


export const ChooseUs = (): JSX.Element => {
    return (
        <FlexContainer tag="section" styles={'mt-44 mini-tablet:!mt-24 mx-16 lg:mx-8 tablet:mx-4 relative flex-row mlg:flex-col justify-between mlg:items-center gap-4 font-roboto-serif'}>
            <div className={' w-1/2 mlg:w-full'}>
                <div className={''}>
                    <img
                        src={'/assets/images/Arrow 1.svg'}
                        alt={'Choose Us'}
                        className=" w-[150px] h-[150px]  absolute -top-36 -left-16"
                    />
                </div>
                <Typography
                    variant="h3"
                    styles={'text-2xl mobile-big:text-xl mb-3 text-neutral-col-600 border-b-2 border-neutral-col-600 w-[300px] mobile-big:w-[250px] font-semibold font-roboto'}>
                    Your reason to choose us
                </Typography>
                <p className=" text-dark-green text-6xl lg:text-5xl md:!text-3xl mb-3 text-left font-roboto-serif font-semibold">
                    Vulputate lementum vestibulum sem molli
                </p>
                <p className=" text-xl mobile-big:text-lg text-left mb-3">
                    Lorem ipsum dolor sit amet consectetur.
                    Consectetur lobortis in fermentum tortor viverra
                    volutpat posuere ipsum. Vel massa adipiscing mauris
                    elementum nulla. Vulputate elementum vestibulum sem mollis.
                </p>

                <Container tag="div" styles={'my-8'}>
                    <article className=" flex justify-between gap-6 border-b pb-2 border-neutral-col-300">
                        <div className=" border-2 border-dark-purple bg-light-yellow rounded-[100%] p-10 relative h-20 w-20 mobile-big:h-16 mobile-big:w-16 mobile-big:p-8 mb-4">
                            <img
                                src={'assets/images/healthicons_fruits.svg'}
                                alt={'service'}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                        <div>
                            <Typography variant="h3" styles={'text-2xl font-semibold mb-2 mobile-big:text-xl'}>Lorem Ipsum Sylum</Typography>
                            <p className=" mb-2 text-base">Lorem ipsum dolor sit amet consectetur.
                                Vulputate sollicitudin nisl scelerisque orci
                                enim ut nunc.
                            </p>
                        </div>
                    </article>
                </Container>
                <Container tag="div" styles={'my-8'}>
                    <article className=" flex justify-between gap-6 ">
                        <div className=" border-2 border-dark-purple bg-light-yellow rounded-[100%] p-10 relative h-20 w-20 mobile-big:h-16 mobile-big:w-16 mobile-big:p-8 mb-4">
                            <img
                                src={'assets/images/healthicons_fruits.svg'}
                                alt={'service'}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                        <div>
                            <Typography variant="h3" styles={'text-2xl font-semibold mb-2 mobile-big:text-xl'}>Lorem Ipsum Sylum</Typography>
                            <p className=" mb-2 text-base">Lorem ipsum dolor sit amet consectetur.
                                Vulputate sollicitudin nisl scelerisque orci
                                enim ut nunc.
                            </p>
                        </div>
                    </article>
                </Container>
            </div>

            <div className={''}>
                <div className=" h-[680px] mobile-big:h-auto">
                    <img src="/assets/images/main.svg" alt="" className=" h-full mobile-big:h-auto" />
                </div>
            </div>

        </FlexContainer>
    )
}
