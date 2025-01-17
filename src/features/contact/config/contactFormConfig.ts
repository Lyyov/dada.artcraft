import { IContactBriefForm, IContactForm, TContactFormConfig } from "../types";

export const contactFormConfig: TContactFormConfig<IContactForm> = {
    firstName: {
        type: "text",
        label: "First Name",
        name: "firstName",
        id: "firstName",
        maxLength: 12,
        required: true,
        componentType: 'input',
        gridCols: 6
    },
    lastName: {
        type: "text",
        label: "Last Name",
        name: "lastName",
        id: "lastName",
        maxLength: 12,
        required: true,
        componentType: "input",
        gridCols: 6
    },
    email: {
        type: "email",
        label: "Email",
        name: "email",
        id: "email",
        maxLength: 32,
        required: true,
        componentType: 'input',
    },
    message: {
        type: "text",
        label: "Message",
        name: "message",
        id: "message",
        maxLength: 100,
        rows: 5,
        required: true,
        componentType: "textarea"
    }
}

export const contactBriefFormConfig: TContactFormConfig<IContactBriefForm> = {
    firstName: {
        type: "text",
        label: "First Name",
        name: "firstName",
        id: "firstName",
        maxLength: 12,
        required: true,
        componentType: 'input',
    },
    company: {
        type: "text",
        label: "Organization/Company",
        name: "company",
        id: "company",
        maxLength: 12,
        required: true,
        componentType: "input",
    },
    phone: {
        type: "tel",
        label: "Phone",
        name: "phone",
        id: "phone",
        maxLength: 23,
        componentType: "input",
    },
    email: {
        type: "email",
        label: "Email",
        name: "email",
        id: "email",
        maxLength: 32,
        required: true,
        componentType: 'input',
    },
    services: {
        type: "text",
        label: "What services are you interested in?",
        name: "services",
        id: "services",
        maxLength: 100,
        rows: 3,
        required: true,
        componentType: "textarea"
    },
    project: {
        type: "text",
        label: "Describe your project.",
        name: "project",
        id: "project",
        maxLength: 100,
        rows: 3,
        required: true,
        componentType: "textarea"
    },
    deadlines: {
        type: "text",
        label: "Deadlines",
        name: "deadlines",
        id: "deadlines",
        maxLength: 100,
        rows: 3,
        required: true,
        componentType: "textarea"
    }
}