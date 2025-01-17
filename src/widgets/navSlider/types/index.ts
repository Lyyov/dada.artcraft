import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface INavSliderItem {
    href: string;
    text?: string;
    cover: string | StaticImport;
    imgAlt: string;
}