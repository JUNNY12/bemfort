import Button from "@/components/common/button/Button"
import { ChooseCard } from "@/components/common/card/ChooseCard"
import { Container } from "@/components/common/container/Container"
import Typography from "@/components/common/typography/Typography"

export const WhyChooseUs = (): JSX.Element => {
    return (
        <Container tag="section" styles="">

            <div className="w-full h-full bg-why-choose-us bg-cover bg-center mb-32">
                <div className="w-full h-full bg-taint-white/50 backdrop-brightness-75">
                    <div className=" absolute top-2 left-2 z-50">
                        <img src="/assets/images/leafBg.svg" alt="" />
                    </div>
                    <div className=" absolute top-2 right-2 z-50">
                        <img src="/assets/images/leafBg.svg" alt="" />
                    </div>
                    <div className=" absolute top-0 left-[45%] transform -translate-x-1/2">
                        <img src="/assets/images/Arrow2.svg" className="" alt="" />
                    </div>
                    <div className=" flex justify-center flex-col items-center">
                        <Typography variant="h3" styles="mt-32 text-2xl z-50 mb-6 text-green font-bold font-roboto border-b-2 border-green max-w-[300px] ">
                            Why Choose Us
                        </Typography>

                        <Typography variant="h3" styles=" font-semibold z-50 max-w-[750px] text-center font-roboto text-6xl">
                            Vulputate elementum vestibulum sem
                        </Typography>
                    </div>

                    <div className="grid grid-cols-2 gap-8 px-16 pb-48 mt-8">
                        <ChooseCard
                            title="Lorem Ipsum Dolor"
                            description="Lorem ipsum dolor sit amet consectetur. Tortor libero nunc tempor nunc vitae lacinia nibh mattis."
                        />
                        <ChooseCard
                            title="Lorem Ipsum Dolor"
                            description="Lorem ipsum dolor sit amet consectetur. Tortor libero nunc tempor nunc vitae lacinia nibh mattis."
                        />
                        <ChooseCard
                            title="Lorem Ipsum Dolor"
                            description="Lorem ipsum dolor sit amet consectetur. Tortor libero nunc tempor nunc vitae lacinia nibh mattis."
                        />
                        <ChooseCard
                            title="Lorem Ipsum Dolor"
                            description="Lorem ipsum dolor sit amet consectetur. Tortor libero nunc tempor nunc vitae lacinia nibh mattis."
                        />
                    </div>

                    <div className="absolute left-0 right-0 bottom-[-6rem] bg-purple flex items-center mx-16 p-8 h-48">
                        <div className="h-24 flex items-center justify-between border-y-2 border-white border-dotted w-full max-w-[1200px] mx-auto px-8">
                            <p className="font-roboto-serif text-3xl font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <Button
                                title="More Services"
                                ariaLabel="More Services"
                                variant={'green'}
                                text='More Services'
                                styles={'bg-green  border border-white font-roboto-serif font-semibold'}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </Container>
    )
}
