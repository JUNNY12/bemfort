import Typography from "@/components/common/typography/Typography"
import { FaPhone, FaEnvelope } from "react-icons/fa6"
import { IoLocationOutline } from "react-icons/io5"


interface SupportProps {
  styles?: string
}

export default function SupportLineCard({ styles }: SupportProps) {
  return (
    <div className={` flex justify-between w-[80%] bg-light-yellow p-5 rounded-[16px] ${styles}`}>
      <div className="brick flex items-center flex-col">
        <div className="mb-3 text-3xl bg-green border-2 border-white p-4 rounded-lg text-white">
          <FaPhone />
        </div>
        <Typography variant={"h3"} styles="text-lg font-bold" children={"Helpline and Support"} />
        <p>+23490 xxxx-8905</p>
      </div>

      <div className="brick flex items-center flex-col">
        <div className="mb-3 text-3xl bg-green border-2 border-white p-4 rounded-lg text-white">
          <IoLocationOutline />
        </div>
        <Typography variant={"h3"} styles="text-lg font-bold" children={"Our Address"} />
        <p>lorem ipsum ipsum</p>
      </div>

      <div className="brick flex items-center flex-col">
        <div className="mb-3 text-3xl bg-green border-2 border-white p-4 rounded-lg text-white">
          <FaEnvelope />
        </div>
        <Typography variant={"h3"} styles="text-lg font-bold" children={"Send a mail"} />
        <p>agrictech@info.com</p>
      </div>
    </div>
  )
}
