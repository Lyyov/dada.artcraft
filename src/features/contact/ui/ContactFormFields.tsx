import { InputField } from "@/shared/ui/inputField";
import { TContactFormConfig, TContactFormFields } from "../types";
import clsx from "clsx";

export const ContactFormFields = <T,>({
    setData,
    contactFormConfig,
    mode,
    data
}: {
    setData: React.Dispatch<React.SetStateAction<T>>;
    contactFormConfig: TContactFormConfig<T>;
    mode?: 'dark' | 'light';
    data: T
}) => {
    const handleChange = (field: TContactFormFields<T>, value: string) => setData(prev => ({ ...prev, [field]: value }))
    return (
        <>
            {
                Object.keys(contactFormConfig).map((field) => {
                    const config = contactFormConfig[field as TContactFormFields<T>];
                    return (
                        <div
                            key={field}
                            className={clsx(
                                config.gridCols === 6 ? "col-span-12 md:col-span-6" : "col-span-12"
                            )}>

                            <InputField mode={mode}  {...config} value={data[field as TContactFormFields<T>]?.toString() || ""} onChange={(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => handleChange(config.name, e.target.value)} />
                        </div>
                    )
                })
            }
        </>
    );
}
