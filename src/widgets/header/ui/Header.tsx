"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useToggleNavMenu } from "@/shared/lib/toggleNavMenu";
import { CONTENT_NAVIGATION_MENU } from "@/shared/consts";
import { BackdropPortal } from "@/shared/ui/backdrop";
import { IContentNavMenu } from "@/shared/types/contentNavMenu";
import { Burger } from "@/shared/ui/burger";
import clsx from "clsx";

const leftItems = CONTENT_NAVIGATION_MENU.filter(({ position }) => position === "left");
const rightItems = CONTENT_NAVIGATION_MENU.filter(({ position }) => position === "right");

export const Header = () => {
    const { isNavMenuOpen, toggleNavMenu } = useToggleNavMenu();
    console.log('Header -> isNavMenuOpen', isNavMenuOpen);
    return (
        <header className="fixed z-50 w-full bg-background-secondary h-[theme(lineHeight.nav-height)]">
            <div className="container h-[theme(lineHeight.nav-height)] m-auto">

                <div
                    className={clsx(
                        'md:flex md:items-center md:justify-between md:relative md:w-full md:max-w-full md:flex-row md:h-[theme(lineHeight.nav-height)] md:top-0 md:pt-0 md:translate-x-0',
                        'bg-background-secondary fixed top-0 right-0 h-[100vh] w-[70vw] max-w-[400px]',
                        'flex-col justify-start pt-[100px] z-10 transition-transform ease-in-out duration-300',
                        isNavMenuOpen ? "translate-x-0" : "translate-x-[70vw]"
                    )}
                >
                    <ul className="flex flex-col md:flex-row">
                        {leftItems.map(({ title, url }) => (
                            <HeaderItem title={title} url={url} key={title + url} />
                        ))}
                    </ul>
                    <ul className="flex flex-col md:flex-row">
                        {rightItems.map(({ title, url }) => (
                            <HeaderItem title={title} url={url} key={title + url} />
                        ))}
                    </ul>
                    <Logo isMobile />
                </div>
                <Burger isNavMenuOpen={isNavMenuOpen} toggleNavMenu={toggleNavMenu} />
                <Logo />
                <BackdropPortal show={isNavMenuOpen} selector="nav-backdrop">
                    <div className="fixed z-10 inset-0 bg-black/40" onClick={toggleNavMenu}></div>
                </BackdropPortal>

            </div>
        </header>
    );
};

const HeaderItem = ({ title, url }: Omit<IContentNavMenu, 'position'>) => (<Link
    role="listitem"
    className="text-sm text-foreground-secondary md:text-left leading-nav-height mr-12 text-right hover:text-accent"
    href={url}
    key={title}
>
    {title}
</Link>
);

interface ILogo {
    isMobile?: boolean;
}

const Logo = ({ isMobile }: ILogo) => (
    <Link className={clsx(
        'absolute left-0 right-0 mx-auto text-[10px] text-accent uppercase tracking-[8px] leading-[1.6] z-20',
        'h-10 items-center justify-center pl-[3px] font-bold',
        'hover:decoration-0 w-fit',
        isMobile ? 'md:hidden top-[60px]' : 'flex top-[10px] md:top-[5px]',
    )} href="/">
        <Image
            className="m-auto"
            width={isMobile ? 87 : 77}
            height={isMobile ? 34 : 24}
            loading="lazy"
            src={"/assets/logo/logo-text-svg.svg"}
            alt="logo"
        />

    </Link>
)

