import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface IFields {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    phone?: string;
    company: string;
    services: string;
    project: string;
    deadlines: string;
};

export type TComponentType = "input" | "textarea";

export interface IContactForm extends Pick<IFields, 'firstName' | 'lastName' | 'email' | 'message'> { };
export interface IContactBriefForm extends Omit<IFields, 'lastName' | 'message'> { };

export type TContactFormFields<T> = keyof T;
type IFormFieldExtraProps<T> = { label: string, componentType: TComponentType, name: keyof T, gridCols?: number };
export interface ITextarea<T> extends Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'name'>, IFormFieldExtraProps<T> { }
export interface IInput<T> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>, IFormFieldExtraProps<T> { }

export type IContactFormFieldProps<T> = ITextarea<T> | IInput<T>;
export type TContactFormConfig<T> = Record<keyof T, IContactFormFieldProps<T>>

export function isTextarea<T>(props: ITextarea<T> | IInput<T>): props is ITextarea<T> {
    return (<ITextarea<T>>props).componentType === 'textarea';
}

export type TContactFormStatus = "false" | "error" | "ok";

export type TNotification = {
    status: TContactFormStatus;
};

export interface INotificationMessage {
    ok: string;
    error: string;
    false?: string;
};