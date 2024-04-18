import { useState } from "react"
import { FlexContainer } from "../common/container/FlexContainer"
import { BiMinus } from "react-icons/bi"
import { BiPlus } from "react-icons/bi"


interface FAQardsProps {
    index: string | number,
    question: string,
    answer: string

}

export default function FAQards({ index, question, answer }: FAQardsProps) {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <FlexContainer tag="div" styles="relative flex-col">
            <FlexContainer tag="div" styles={`border-2 border-transparent relative z-10 bg-white px-5 sm:px-3  py-6 rounded-[15px] font-roboto justify-between ${open ? "!border-green" : ""}`}>
                <FlexContainer tag="div" styles="basis-[85%]">
                    <h3 className="mr-2 basis-[7%]">{`${index}.`}</h3>
                    <p>{question}</p>
                </FlexContainer>
                <FlexContainer tag="div" styles="items-center  basis-[10%]">
                    <FlexContainer
                        click={handleToggle}
                        tag="div"
                        styles={`cursor-pointer bg-neutral-col-100 text-black text-[30px] flex-none rounded-full w-10 h-10 items-center justify-center ${open ? "!bg-light-yellow" : ""}`}>
                        {open ? (<BiMinus />) : (<BiPlus />)}
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer tag="div" styles={`transition-all duration-500 h-[120px] py-2 relative ${open === true ? "" : "-mt-[120px] opacity-0"}`}>
                {answer}
            </FlexContainer>
        </FlexContainer>
    )
}
