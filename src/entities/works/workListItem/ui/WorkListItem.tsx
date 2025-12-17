import { ButtonLink } from "@/shared/ui/button"
import Image from "next/image"
import Link from "next/link"
import { IWorkListItem } from "../../types/worksTypes"
import clsx from "clsx"

export const WorkListItem = ({ cover, href, name, info, descriptionList }: IWorkListItem) => {
    return (
        <section key={name} className={clsx(
            "group section py-[50px]",
            "md:flex md:even:flex-row-reverse gap-0 md:gap-4 items-center",
        )}>
            <div className="-mx-4 md:mx-0">
                <Link href={href} className="w-full md:w-1/2">
                <Image
                    loading="lazy"
                    src={cover}
                    alt={`Cover for ${name}`}
                    width={555}
                    height={370}
                    className="w-full"
                />
            </Link>
            </div>
            <div className="text-center w-full md:w-1/2">
                <div className="px-[4vw] *:text-center grid grid-cols-1 gap-[10px] pt-8 md:pt-0">
                    <h4 className="title-secondary md:text-[30px]">{name}</h4>
                    <p className="title-secondary text-[17px] md:text-xl font-semibold italic leading-[1.2] mb-[2px]">{info}</p>
                    <p className="paragraph mt-0">{descriptionList}</p>
                    <ButtonLink href={href} label="See full project" className="mt-5" />
                </div>
            </div>
        </section>
    )
}