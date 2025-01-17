'use client'

import { IImage } from "@/shared/types/imageProps";
import Image from "next/image";
import { useModal } from "../../providers/WorkImageModal";

export const ImageContainer = ({
    imageId, className = "", width = '500', height = '500', ...props }: IImage) => {
    const { zoomHandler } = useModal();

    return (<div className={"h-full relative" + className} >
        <Image
            {...props}
            width={width}
            height={height}
            className={"h-full w-full cursor-zoom-in object-cover" + className}
            onClick={() => zoomHandler(imageId)}
        />
    </div >
    )
};
