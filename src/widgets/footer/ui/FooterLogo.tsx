import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
    <Link className={clsx(
        'mx-auto text-accent',
        'h-10 items-center justify-center pl-[3px] font-bold',
        'hover:decoration-0 w-fit',
    )} href="/">
        <Image
            width={137}
            height={74}
            loading="lazy"
            src={"/assets/logo/logo-text-svg.svg"}
            alt="logo"
        />

    </Link>
)