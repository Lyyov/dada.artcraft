
import { FOOTER_CONTENT } from "@/shared/consts";
import { Logo } from "./FooterLogo";
import { FooterSection } from "./FooterSection";
import { FooterItem } from "./FooterItem";

export const Footer = () => (
    <footer className="bg-background-secondary py-[80px] md:py-[120px]">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <Logo />
                </div>
                {
                    FOOTER_CONTENT.map(({ title, links }) => (
                        <FooterSection key={title} title={title}>
                            {links.map(({ label, href }) => (
                                <FooterItem label={label} url={href} key={label} />
                            ))}
                        </FooterSection>
                    ))
                }
            </div>
        </div>
    </footer>
);


