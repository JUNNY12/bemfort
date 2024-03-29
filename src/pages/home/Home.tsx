import Button from "@/components/common/button/Button"
import { FlexContainer } from "@/components/common/container/FlexContainer"
import Typography from "@/components/common/typography/Typography"


export default function Home(): JSX.Element {
    return (
        <div className="bg-light-green shadow-penumbra px-8 py-8">
            <h1 className=" text-green font-roboto">Home</h1>
            <p className=" text-green font-roboto-serif">This is the Home page.</p>
            <Typography variant="h1" styles={'bg-red-500'}>This is the Home page.</Typography>
            <Button
                handleClick={() => { console.log('Button clicked') }}
                styles={'bg-violet-500 w-[200px] mt-6 mb-6 h-[50px] text-white rounded-md shadow-md hover:bg-violet-600'}
                type={'submit'}
                title={'Submit'}
                disabled={false}
            >
                Submit
            </Button>

            <FlexContainer tag="section" styles={'flex-row flex-wrap gap-6 justify-between '}>
                <div className=" bg-red-400 h-24 w-24 "></div>
                <div className=" bg-yellow-400 h-24 w-24"></div>
                <div className=" bg-red-400 h-24 w-24"></div>
            </FlexContainer>

        </div>
    )
} 
