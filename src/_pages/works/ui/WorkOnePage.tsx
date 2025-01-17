import { IWork } from "@/entities/works/types/worksTypes"
import { ImageContainer } from "@/entities/works/workImageContainer"
import { WorkImagesSection } from "@/entities/works/workImagesSection";

export const WorkOnePage = ({ images, description, name, info }: IWork) => {
    const coverImage = images[0][0];
    return (
        <div className="container">
            <div className="section pb-4 md:pb-10">
                <ImageContainer src={coverImage.src} alt={coverImage.alt} imageId={coverImage.imageId} />
            </div>
            <section className="section pb-4 md:pb-10">
                <h3 className="title-primary text-foreground-secondary md:mt-12 mb-5">{name}</h3>
                <h4 className="title-secondary text-foreground-secondary">{info}</h4>
            </section>
            <section className="section mx-auto mb-0 md:mb-12">
                {
                    description.map((paragraph, index) => (
                        <p key={index} className="paragraph text-foreground-secondary paragraph-secondary-leading">
                            {paragraph}
                        </p>
                    ))
                }
            </section>
            <WorkImagesSection images={images.slice(1)} />
        </div>
    )
}
