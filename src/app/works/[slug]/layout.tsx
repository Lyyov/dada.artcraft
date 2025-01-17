import { WORKS_CONTENT } from "@/entities/works/consts/worksContent";
import { OneWorkProvider } from "@/entities/works/providers/WorkImageModal";

interface IOneWorkLyout {
    children: React.ReactNode;
    params: Promise<{ slug: string }>
}

export default async function RootLayout({
    children,
    params
}: IOneWorkLyout) {
    const slug = (await params).slug;
    const currentWork = WORKS_CONTENT.find(work => work.slug === slug);
    const images = currentWork ? currentWork.images.flat() : []
    return <OneWorkProvider images={images}>{children}</OneWorkProvider>;
}
