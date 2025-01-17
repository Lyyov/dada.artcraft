import SliderContainer from "@/shared/ui/slider/ui/SliderContainer";
import Image from "next/image";
import { HOME_HERO_CONTENT } from "../consts/homeHeroContent";
import { HomeHeroItem } from "./HomeHeroItem";
import { NavSlider } from "@/widgets/navSlider";

const mainSliderImg = "/assets/dada-banner11.gif";
const mainSliderSettings = {
    fade: true,
    speed: 2500,
    autoplay: false,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    dots: false,
};

export const Home = () => {
    return (
        <>
            <div className="relative h-[calc(88vh-theme(height.nav-height))]">
                <Image
                    className="object-cover object-center grayscale-[100%]"
                    fill
                    loading="lazy"
                    src={mainSliderImg}
                    alt="hero banner"
                />
                <div className="h-full flex items-center">
                    <SliderContainer
                        className="w-full sliderHomeHero"
                        customSettings={mainSliderSettings}
                    >
                        {HOME_HERO_CONTENT.map((props, index) => (
                            <HomeHeroItem key={index} {...props} />
                        ))}
                    </SliderContainer>
                </div>
            </div>
            <NavSlider />
        </>
    );
};

export default Home;