import { IContactFormFieldProps } from "@/features/contact/types"
import clsx from "clsx"
import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react"

type TInputProps<T> = IContactFormFieldProps<T> & {
    mode?: 'dark' | 'light';
}

const darkModeStyle = "border-[#41504b] focus:border-foreground-accent-hover text-foreground-secondary";

export const InputField = <T,>({ componentType, gridCols, mode = 'light', ...props }: TInputProps<T>) => {
    const inputProps = props as InputHTMLAttributes<HTMLInputElement>;
    const textAreaProps = props as DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
    console.log('gridCols', gridCols);
    return (
        <div className="relative">
            {
                componentType !== "textarea" ? (
                    <input
                        className={clsx(
                            "input",
                            mode === 'dark' && darkModeStyle
                        )}
                        {...inputProps}
                    />
                ) : (
                    <textarea
                        className={
                            clsx(
                                "input h-auto p-4",
                                mode === 'dark' && darkModeStyle
                            )
                        }
                        {...textAreaProps}
                    />
                )
            }
            <label className={clsx(
                "text-[11px] tracking-[.18px] text-left uppercase font-semibold",
                "absolute top-[5px] left-2.5 p-[5px] transition-transform duration-300 ease-in-out",
                props.value ? "translate-y-[-17px]" : "",
                mode === 'dark' ? "text-foreground-accent-hover bg-background-secondary" : "text-foreground-primary bg-background-primary"
            )} htmlFor={props.name?.toString()}>
                {props.label}
            </label>
        </div>
    )
}
