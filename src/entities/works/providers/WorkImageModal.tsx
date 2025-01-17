"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import SliderContainer from "@/shared/ui/slider/ui/SliderContainer";
import { WorkImageModal } from "../workImageModal";
import { IImage } from "@/shared/types/imageProps";

type TWorkLayout = {
    children: React.ReactNode;
    images: IImage[];
};

type TOneWorkContext = {
    zoomHandler: (e: number) => void;
};

const INITIAL_STATE: TOneWorkContext = {
    zoomHandler: () => { },
};

const OneWorkContext = createContext(INITIAL_STATE);

export function OneWorkProvider({ children, images }: TWorkLayout) {
    const [show, setShow] = useState(false);
    const [initialSlide, setInitialSlide] = useState(2);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [show]);

    const closeModal = () => setShow(false);

    const zoomHandler = (imgId: number) => {
        setShow(true);
        setInitialSlide(imgId);
    };

    const zoomItems = images.map((item, key) => {
        return (
            <div key={key} className="h-full">
                <div className="h-full flex items-center justify-center relative">
                    <div className="absolute z-[1] inset-0 bg-black/80" onClick={closeModal}></div>
                    <img className="relative z-10" loading="lazy" src={typeof item.src === 'string' ? item.src : undefined} alt={item.alt} />
                </div>
            </div>
        );
    });

    const contextProps = useMemo(() => {
        return {
            show,
            setShow,
            closeModal,
            zoomHandler,
        };
    }, [show]);

    return (
        <OneWorkContext.Provider value={contextProps}>
            {show ? (
                <WorkImageModal show={show} closeModal={closeModal}>
                    <SliderContainer
                        customSettings={{
                            fade: true,
                            initialSlide,
                            speed: 500,
                            dots: false,
                        }}
                        className="one-work-modal-slider"
                    >
                        {zoomItems && zoomItems}
                    </SliderContainer>
                </WorkImageModal>
            ) : null}

            {children}
            {/* @TODO Add nav slider */}
        </OneWorkContext.Provider>
    );
}

export const useModal = (): TOneWorkContext => {
    return useContext(OneWorkContext);
};