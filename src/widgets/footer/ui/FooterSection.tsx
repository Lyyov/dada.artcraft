export const FooterSection = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="mt-8 md:mt-0">
        <div className="title-secondary text-xl text-foreground-secondary text-left mb-3 uppercase">{title}</div>
        <ul>
            {children}
        </ul>
    </div>
);
