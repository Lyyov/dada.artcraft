interface IHomeHeroItem {
    text1?: string;
    text2: string;
}
export const HomeHeroItem = ({ text1, text2 }: IHomeHeroItem) => (
    <div className="relative text-center flex items-center justify-center">
        {text1 && (
            <>
                <span className={`uppercase text-center text-[30px] md:text-[40px] font-bold mb-1.5 text-foreground-secondary`}>
                    {text1}
                </span>
                <br />
            </>
        )}
        <span className={`uppercase text-center text-[40px] font-bold text-foreground-secondary md:text-[85px] leading-[1]`}>{text2}</span>
    </div>
)