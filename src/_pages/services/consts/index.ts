import { IServiceContent } from "../types";

export const SERVICES_CONTENT: IServiceContent[] = [
    {
        title: "Visual Identity",
        text: "We skilfully create layouts for all types of visual media, to support your brand's communication, from business cards to catalogs, roll-ups or whatever else you may think of.",
        imgSrc: "/assets/services/service1.png",
    },
    {
        title: "Brand Guidelines",
        text: "If you are a business owner or you run any kind of organisation, you will definitely need a powerful visual presence, your company's unique identity.",
        imgSrc: "/assets/services/service2.png",
    },
    {
        title: "Web Development",
        text: " “Responsive” is our second name. Whether you need a simple static website or a complex e-commerce solution we put in the same level of commitment to fine details. ",
        imgSrc: "/assets/services/service3.png",
    },
    {
        title: "Web Design",
        text: "Delighting users with a simple and memorable experience is just as important as having good code. We strive to make sure every moment your customer spends with your product is pleasing and engaging.",
        imgSrc: "/assets/services/service4.png",
    },
];
export const SERVICES_HOW_IT_WORK: Omit<IServiceContent, 'imgSrc'>[] = [
    {
        title: "Application",
        text: "Please send your brief, and we will check in a call if we're a good match for your project.",
    },
    {
        title: "Guidance",
        text: "We're here to listen and to help our customers succeed by providing efficient and creative solutions.",
    },
    {
        title: "Solution",
        text: "Based on your target goals, we will develop strategies to achieve what is suitable for your business.",
    },
    {
        title: "Execution",
        text: "We will produce competitive content and will deliver approved promotional materials on time.",
    },
];

export const SERVICES_WHAT_TO_KNOW: Omit<IServiceContent, 'imgSrc'>[] = [
    {
        title: "WHAT'S THE INVESTMENT?",
        text: "Our packages are fully customized because each person/company has its own requirements. After the consultation stage, once we understand your needs, we'll match the best solutions for your business to make sure that you get the most out of your investment.",
    },
    {
        title: "WHEN CAN WE START?",
        text: "Usually, each project is crafted for about 3-6 weeks. Our practice shows that it is best to schedule the project in advance, but it all depends on the time of the year. If you need to launch in no time, feel free to call us to find a solution.",
    },
    {
        title: "WE NEED JUST A LOGO!",
        text: "We are open to the exclusive logo service, although the logo is just one element of the brand, and we think it is better if all the elements are built around a unique strategy so that you have a consistent presence everywhere.",
    },
];