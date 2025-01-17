import { IImage } from "@/shared/types/imageProps";

export interface IWork {
    slug: string;
    name: string;
    info: string;
    cover: string;
    href: string;
    descriptionList: string;
    images: IImage[][];
    description: string[];
}

export interface IWorkListItem extends Omit<IWork, 'images' | 'description'> { }