import { ChevronRight } from "@/shared/icons";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";

interface IButtonLink extends LinkProps {
    label: string;
    className?: string;
}

export const ButtonLink = ({ className, label, ...props }: IButtonLink) => (
    <Link className={clsx(
        "btn",
        className
    )} {...props}>
        <span>{label}</span>
        <ChevronRight className="mt-1 size-[18px] stroke-2" />
    </Link>
)