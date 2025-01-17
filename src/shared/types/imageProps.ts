import { ImageProps } from "next/image";

export interface IImage extends ImageProps {
    imageId: number;
    colWidth?: number;
}