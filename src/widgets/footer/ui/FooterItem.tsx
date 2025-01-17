import Link from "next/link";

export const FooterItem = ({ label, url }: {
    label: string;
    url: string;
}) => (
    <li className="leading-5"><Link
        role="listitem"
        className="font-normal text-lg text-accent text-left hover:opacity-70"
        href={url}
        key={label}
    >
        {label}
    </Link>
    </li>
);