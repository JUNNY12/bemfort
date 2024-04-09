import Typography from "@/components/common/typography/Typography"
import Helpline from '@/assets/vector/Helpline.svg'
import Address from '@/assets/vector/Address.svg'
import MailSupport from '@/assets/vector/support-mail.svg'

interface SupportProps{
    styles?:string
}

export default function SupportLineCard({styles} : SupportProps){
  return (
    <div className={`support-line w-[80%] flex justify-around bg-light-yellow p-5 rounded-[16px] ${styles}`}>
          <div className="brick flex items-center flex-col">
            <img src={Helpline} className="mb-3 w-[80px]" alt="helpline_and_support" />
            <Typography variant={"h3"} styles="text-lg font-bold" children={"Helpline and Support"} />
            <p>+23490 xxxx-8905</p>
          </div>
          <div className="brick flex items-center flex-col">
            <img src={Address} className="mb-3 w-[80px]" alt="helpline_and_support" />
            <Typography variant={"h3"} styles="text-lg font-bold" children={"Our Address"} />
            <p>lorem ipsum ipsum</p> 
          </div>
          <div className="brick flex items-center flex-col">
            <img src={MailSupport} className="mb-3 w-[80px]" alt="helpline_and_support" />
            <Typography variant={"h3"} styles="text-lg font-bold" children={"Send a mail"} />
            <p>agrictech@info.com</p>
          </div>
    </div>
  )
}
