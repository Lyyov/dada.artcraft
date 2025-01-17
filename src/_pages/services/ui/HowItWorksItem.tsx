import { IServiceContent } from "../types";

export const HowItWorksItem = ({ title, text }: Omit<IServiceContent, 'imgSrc'>) => (
    <div>
        <div className="title-secondary border-b-[1px] border-[#979797] pb-4 md:pb-7">{title}</div>
        <p className="paragraph text-center mt-4 md:mt-7">{text}</p>
    </div>
)