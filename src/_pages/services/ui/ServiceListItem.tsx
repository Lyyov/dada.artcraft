import Image from "next/image"
import { IServiceContent } from "../types"
import clsx from "clsx"

export const ServiceListItem = ({ imgSrc, title, text }: IServiceContent) => (
    <div className={clsx(
        "group relative transition-transform duration-300 ease-in-out hover:scale-105"
    )}>
        <Image
            loading="lazy"
            src={imgSrc}
            alt={`Service ${title}`}
            width={305}
            height={376}
            className="w-full h-[280px] lg:h-auto"
        />
        <div className={
            clsx(
                "flex justify-center items-center flex-col absolute inset-0 px-4",
            )
        }>
            <div className="title-secondary">{title}</div>
            <p className={clsx(

                'paragraph text-center mt-4 md:mt-7',
                'group-hover:h-auto group-hover:overflow-visible lg:h-12 lg:overflow-hidden transition-all duration-300 ease-in-out'
            )}>{text}</p>
        </div>
    </div>

)
