import { ChevronRight } from "@/shared/icons";
import clsx from "clsx";

interface IArrowSlider {
    className?: string;
    background?: string;
    onClick?: () => void;
    direction?: "left" | "right";
}

export const Arrow = ({ className, onClick, direction = 'left' }: IArrowSlider) => {
    return (
        <button onClick={onClick} className={clsx(
            "absolute -top-2 md:top-0 h-9 w-9 text-foreground-primary flex items-center justify-center z-[1] cursor-pointer text-center",
            "md:opacity-50 md:hover:opacity-100",
            direction === "left" ? "-left-2" : "-right-2",
            className,
        )}>
            <ChevronRight className={clsx(
                'size-8 stroke-[1px]',
                direction === "left" ? "rotate-[180deg]" : "rotate-[0deg]"
            )} />
        </button>
    );
}