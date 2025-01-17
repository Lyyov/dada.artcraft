import { ContactForm } from "@/features/contact";
import { contactBriefFormConfig } from "@/features/contact/config/contactFormConfig";

const INITIAL_STATE = {
    firstName: "",
    company: "",
    phone: "",
    email: "",
    services: "",
    project: "",
    deadlines: "",
};
export const Brief = () => {
    return (
        <div className="bg-background-secondary">
            <div className="container py-20 max-w-[660px]">
                <h3 className="title-primary text-accent mt-0 mb-10">Brief</h3>
                <p className="paragraph mt-2 text-foreground-accent-hover">
                    This enquiry will help us to understand your needs and be ready to
                    discuss a potential solution to suit the requierments, so we can
                    look forward to be involved in your project.
                </p>
                <ContactForm initialData={INITIAL_STATE} config={contactBriefFormConfig} agreement="By clicking on, you consent to the processing of personal data and
              agree with the privacy policy." mode="dark" />

            </div>
        </div>
    )
}