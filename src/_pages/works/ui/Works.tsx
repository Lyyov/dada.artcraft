import { WORKS_CONTENT } from "@/entities/works/consts/worksContent";
import { WorkListItem } from "@/entities/works/workListItem";

export const Works = () => {
    return (
        <div className="container -mt-[50px] md:mt-0">
            {
                WORKS_CONTENT.map((work) => (
                    <WorkListItem {...work} key={work.name} />
                ))
            }
        </div>
    )
}