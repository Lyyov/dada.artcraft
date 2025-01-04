'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useToggleNavMenu = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (!document) return;

        const bodyClassList = document.body.classList;
        bodyClassList.remove("blocked");
        setIsNavMenuOpen(false);
    }, [pathname]);

    const toggleNavMenu = () => {

        if (!document) return;

        const bodyClassList = document.body.classList;
        if (isNavMenuOpen) {
            bodyClassList.remove("blocked");
            setIsNavMenuOpen(false);

        } else {
            bodyClassList.add("blocked");
            setIsNavMenuOpen(true);
        }
    };

    return { isNavMenuOpen, toggleNavMenu };
}