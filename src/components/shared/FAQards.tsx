import { useState } from "react";
import { FlexContainer } from "../common/container/FlexContainer";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { Container } from "../common/container/Container";

interface FAQardsProps{
    index: string | number,
    question: string,
    answer: string

}

export default function FAQards({index, question, answer}: FAQardsProps) {
    const [open, setOpen] = useState(false);

    const handleToggle = () =>{
        setOpen(!open);
    }

  return (
    <FlexContainer tag="div" styles="relative flex-col">
        <FlexContainer tag="div" styles="relative z-10 bg-white px-5 py-6 rounded-[15px] justify-between">
            <FlexContainer tag="div" styles="items-center font-bold basis-[85%]">
                <h3 className="mr-2 basis-[7%]">{index}</h3>
                <p>{question}</p>
            </FlexContainer>
            <Container tag="div" styles="basis-[10%]">
                <FlexContainer 
                    click={handleToggle} 
                    tag="div" 
                    styles="cursor-pointer bg-green text-white text-[30px] flex-none rounded-full w-10 h-10 items-center justify-center">
                    { open ? ( <BiMinus/> ) : ( <BiPlus/> ) } 
                </FlexContainer>
            </Container>
        </FlexContainer>
        <FlexContainer tag="div" styles={`transition-all py-2 relative ${open === true ? "": "-mt-20" }`}>
            {answer}
        </FlexContainer>
    </FlexContainer>
  )
}
