import { Container } from "@/components/common/container/Container"
import Typography from "@/components/common/typography/Typography"


export const ChooseUs = (): JSX.Element => {
    return (
        <Container tag="section" styles={'px-16 relative mb-32 flex justify-between gap-4 font-roboto-serif h-screen'}>
            <div className={' w-1/2'}>
                <div className={''}>
                    <img
                        src={'/assets/images/Arrow 1.svg'}
                        alt={'Choose Us'}
                        className=" w-[100px] h-[100px]  absolute -top-24 left-0"
                    />
                </div>
                <Typography
                    variant="h3"
                    styles={'text-2xl mb-3 text-neutral-col-600 border-b-2 border-neutral-col-600 max-w-[300px] font-semibold font-roboto'}>
                    Your reason to choose us
                </Typography>
                <p className=" text-dark-green text-6xl mb-3 text-left font-roboto-serif font-semibold">
                    Vulputate lementum vestibulum sem molli
                </p>
                <p className=" text-xl text-left mb-3">
                    Lorem ipsum dolor sit amet consectetur.
                    Consectetur lobortis in fermentum tortor viverra
                    volutpat posuere ipsum. Vel massa adipiscing mauris
                    elementum nulla. Vulputate elementum vestibulum sem mollis.
                </p>

                <Container tag="div" styles={'my-8'}>
                    <article className=" flex justify-between gap-6 border-b pb-2 border-neutral-col-300">
                        <div className=" border-2 border-dark-purple bg-light-yellow rounded-[100%] p-10 relative h-20 w-20 mb-4">
                            <img
                                src={'assets/images/healthicons_fruits.svg'}
                                alt={'service'}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                        <div>
                            <Typography variant="h3" styles={'text-2xl font-semibold mb-2'}>Lorem Ipsum Sylum</Typography>
                            <p className=" mb-2">Lorem ipsum dolor sit amet consectetur.
                                Vulputate sollicitudin nisl scelerisque orci
                                enim ut nunc.
                            </p>
                        </div>
                    </article>
                </Container>
                <Container tag="div" styles={'my-8'}>
                    <article className=" flex justify-between gap-6">
                        <div className=" border-2 border-dark-purple bg-light-yellow rounded-[100%] p-10 relative h-20 w-20 mb-4">
                            <img
                                src={'assets/images/healthicons_fruits.svg'}
                                alt={'service'}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                        <div>
                            <Typography variant="h3" styles={'text-2xl font-semibold mb-2'}>Lorem Ipsum Sylum</Typography>
                            <p className=" mb-2">Lorem ipsum dolor sit amet consectetur.
                                Vulputate sollicitudin nisl scelerisque orci
                                enim ut nunc.
                            </p>
                        </div>
                    </article>
                </Container>
            </div>

            <div className={''}>
                <div className=" h-[700px] ">
                    <img src="/assets/images/main.svg" alt="" className=" h-full" />
                </div>
            </div>

        </Container>
    )
}
