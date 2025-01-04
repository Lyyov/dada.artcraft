import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
interface IBackdropPortal {
    children: React.ReactNode;
    show?: boolean;
    onClose?: () => void;
    selector: string;
};
export const BackdropPortal = ({ children, selector, show }: IBackdropPortal) => {
    const ref = useRef<Element | null>(null);
    useEffect(() => {
        ref.current = document.getElementById(selector);
    }, [selector]);

    return show && ref.current ? createPortal(children, ref.current) : null;
};