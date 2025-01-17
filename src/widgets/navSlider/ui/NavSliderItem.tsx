import Image from "next/image";
import Link from "next/link";
import { INavSliderItem } from "../types";

export const NavSliderItem = ({ cover, href, imgAlt, text }: INavSliderItem) => (
    <div className="group h-full rounded-md relative w-[36vw] overflow-hidden" key={imgAlt}>
        <Link href={href} className="absolute z-10 inset-0" aria-label={imgAlt}>
            {text}
        </Link>
        <div className="sliderPortofolio__nav-img">
            <Image className="group-hover:scale-110 transition-transform duration-500 ease-in-out w-[150px] h-[110px] md:w-[36vw] md:h-[48vh] object-cover object-center" width={900} height={900} alt={imgAlt} loading="lazy" src={cover} />
        </div>
    </div>
)