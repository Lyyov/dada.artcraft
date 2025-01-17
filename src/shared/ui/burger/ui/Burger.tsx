'use client';

import clsx from "clsx";

interface IBurger {
    isNavMenuOpen: boolean;
    toggleNavMenu: () => void;
}

export const Burger = ({ isNavMenuOpen, toggleNavMenu }: IBurger) => (
    <button
        className={clsx(
            'absolute cursor-pointer h-[30px] w-[20px] text-center float-right select-none z-20',
            'p-0 m-0 bg-transparent border-none top-[15px] right-4 block md:hidden',
            'after:content-[""] after:h-[2px] after:w-full after:inline-block after:bg-background-primary after:absolute after:left-0 after:transition-all after:duration-200 after:ease-out',
            'before:content-[""] before:h-[2px] before:w-full before:inline-block before:bg-background-primary before:absolute before:left-0 before:transition-all before:duration-200 before:ease-out',
            isNavMenuOpen ? 'after:rotate-[-45deg] after:bottom-[14px]' : 'after:rotate-0 after:bottom-[6px]',
            isNavMenuOpen ? 'before:rotate-[45deg] before:top-[14px]' : 'before:rotate-0 before:top-[6px]',
        )}
        onClick={toggleNavMenu}
    >
        <div className={clsx(
            'h-[2px] bg-background-primary my-[14px] transition-all duration-200 ease-out rounded-sm inline-block',
            isNavMenuOpen ? 'w-0' : 'w-[20px]'
        )}></div>
    </button>

)
