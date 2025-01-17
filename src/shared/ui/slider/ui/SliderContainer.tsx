"use client";

import Slider, { Settings } from "react-slick";
import { useState } from "react";
import { Arrow } from "./Arrow";


interface TSliderContainer {
    customSettings: Settings;
    className?: string;
    children: React.ReactNode;
    arrowBackground?: string;
}

export default function SliderContainer({
    customSettings,
    className,
    children,
    arrowBackground,
}: TSliderContainer) {
    const [settings] = useState({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow background={arrowBackground} direction="right" />,
        prevArrow: <Arrow background={arrowBackground} direction="left" />,
        ...customSettings,
    });

    return (
        <Slider {...settings} className={`slider ${className}`}>
            {children}
        </Slider>
    );
}
