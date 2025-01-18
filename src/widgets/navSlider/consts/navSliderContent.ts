import { WORKS_CONTENT } from "@/entities/works/consts/worksContent";
import { INavSliderItem } from "../types";



export const NAV_SLIDER_CONTENT: INavSliderItem[] = WORKS_CONTENT.map(({ slug, href, images, cover }) => {
    const imgAlt = slug + " work images.";
    if (slug === 'mancomm') {
        const imgCover = images.flat()[3].src;
        return ({
            href: href,
            cover: imgCover,
            imgAlt
        })
    }
    if (slug === 'saula') {
        const imgCover = images.flat()[6].src;
        return ({
            href: href,
            cover: imgCover,
            imgAlt
        })
    }

    return ({
        href: href,
        cover,
        imgAlt
    })
})