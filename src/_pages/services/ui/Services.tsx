import clsx from "clsx";
import Image from "next/image";
import { SERVICES_CONTENT, SERVICES_HOW_IT_WORK } from "../consts";
import { ServiceListItem } from "./ServiceListItem";
import { HowItWorksItem } from "./HowItWorksItem";
import { ButtonLink } from "@/shared/ui/button";
import { GoodToKnowSlider } from "./goodToKnow/GoodToknowSlider";

export const Services = () => {
    return (
        <div>
            <section className={clsx(
                "bg-background-secondary section lg:pb-0"
            )}>
                <div className="grid lg:grid-cols-[1fr_minmax(0,_60%)] xl:grid-cols-[1fr_minmax(0,_40%)] lg:gap-0">
                    <div className="lg:order-2 ">
                        <Image
                            loading="lazy"
                            className="m-auto w-full"
                            src={`/assets/pour-gif-min.gif`}
                            alt="banner"
                            width={1000}
                            height={700}
                        />
                    </div>
                    <div className="px-4 pt-3 lg:order-1 lg:max-w-[750px] m-auto lg:pb-[100px]">
                        <p className="paragraph paragraph-secondary-leading text-foreground-secondary lg:mt-12">
                            We imagine and explore possibilities. Our projects start with
                            observing and analyzing the essence and uniqueness of the brand we
                            need to create, the story behind and the focal points.
                        </p>
                        <p className="paragraph paragraph-black-leading text-foreground-secondary lg:mt-12">
                            When we create a brand, we focus on finding the values and
                            characteristics that help people feel what the brand means and why
                            it needs to stand out. We create points of contact and facilitate
                            the connection between your service and customers because brands are
                            made for people and are about people.
                        </p>
                        <p className="paragraph paragraph-black-leading italic text-accent leading-6 lg:mt-12">
                            Design is a second chance to <br /> make a first impression
                        </p>
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="section pt-10 lg:w-3/4 xl:w-full mx-auto">
                    <h3 className="title-primary">What we do</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-7">
                        {
                            SERVICES_CONTENT.map(({ imgSrc, title, text }) => (
                                <ServiceListItem
                                    key={title}
                                    imgSrc={imgSrc}
                                    title={title}
                                    text={text}
                                />
                            ))
                        }
                    </div>
                </section>
                <section className="section">
                    <h3 className="title-primary">How it works</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-11 md:gap-7">
                        {
                            SERVICES_HOW_IT_WORK.map(({ title, text }) => (
                                <HowItWorksItem
                                    key={title}
                                    title={title}
                                    text={text}
                                />
                            ))
                        }
                    </div>
                    <div className="text-center mt-14 lg:mt-[90px]">
                        <ButtonLink href="/contact" label="Apply" className="mt-0" />
                    </div>
                </section>
                <section className="section">
                    <h3 className="title-primary">Good to know</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 md:gap-7 lg:items-center justify-center">
                        <Image
                            loading="lazy"
                            className="mx-auto"
                            src={"/assets/services/good-to-know.png"}
                            width={600}
                            height={600}
                            alt=""
                        />
                        <div className="md:max-w-[500px] md:mx-auto">
                            <GoodToKnowSlider />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}