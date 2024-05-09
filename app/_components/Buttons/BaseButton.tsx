import ChevronRight from "@/app/_icons/ChevronRight";
import Link from "next/link";

type TBaseLinkButton = {
  href: string;
  text: string;
  srOnly?: string;
  className?: string;
  iconButton?: boolean;
};
export default function BaseLinkButton({
  text,
  href = "/",
  srOnly,
  className = "",
}: TBaseLinkButton) {
  return (
    <Link role="link" href={href} className={`btn ${className}`}>
      {srOnly && <span className="sr-only">{srOnly}</span>}
      <span>{text}</span>

      <span className=" ml-[5px] mt-[2px] w-8 flex justify-center">
        <ChevronRight />
      </span>
    </Link>
  );
}
