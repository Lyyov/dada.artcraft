'use client';

import SliderContainer from "@/shared/ui/slider/ui/SliderContainer";
import { SERVICES_WHAT_TO_KNOW } from "../../consts";
import { HowItWorksItem } from "../HowItWorksItem";

export const GoodToKnowSlider = () => {
    return (
        <SliderContainer
            customSettings={{
                fade: true,
                speed: 1000,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
            }}
        >
            {SERVICES_WHAT_TO_KNOW.map(({ title, text }) => (
                <HowItWorksItem key={title} title={title} text={text} />
            ))}
        </SliderContainer>

    )
}