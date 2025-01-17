import { IImage } from "@/shared/types/imageProps"
import { ImageContainer } from "../../workImageContainer";

interface IWorkImagesSection {
    images: IImage[][];
}
export const WorkImagesSection = ({ images }: IWorkImagesSection) => images.map((section, index) => {
    const gridCols = section.map(col => col.colWidth ? col.colWidth + 'fr' : '1fr').join(' ');
    return (
        <section className="section grid" key={index} style={{
            gridTemplateColumns: gridCols
        }}>
            {
                section.map(({ alt, src, imageId }, index) => (
                    <ImageContainer src={src} alt={alt} key={index} imageId={imageId} />
                ))
            }
        </section>
    )
})