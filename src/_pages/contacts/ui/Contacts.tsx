import { ContactForm } from "@/features/contact";
import { contactFormConfig } from "@/features/contact/config/contactFormConfig";
import { IContactForm } from "@/features/contact/types";
import { ButtonLink } from "@/shared/ui/button";

const INITIAL_STATE: IContactForm = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export const Contacts = () => (
  <div className="container py-20">
    <h3 className="title-primary mt-0 mb-10">Let&apos;s talk</h3>
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_50%)_minmax(0,_auto)] lg:grid-cols-[minmax(0,_40%)_minmax(0,_40%)] justify-around gap-4">
      <div>
        <h5 className="title-secondary text-left">How can we assist you?</h5>
        <p className="paragraph mt-2">
          Tell us more about your project or just say hello.
        </p>
        <ContactForm
          initialData={INITIAL_STATE}
          config={contactFormConfig}
          agreement="I hereby certify that all the information above is true and accurate."
        />
      </div>
      <div className="mt-10 md:mt-0">
        <h5 className="title-secondary text-left">You can find us at:</h5>

        <p className="paragraph text-[15px] leading-[25px] mb-7 mt-2">
          <span className="text-[15px] font-bold">Republica Moldova</span>
          <br />
          Chișinău, Roguleni 6
        </p>
        <p className="paragraph text-[15px] leading-[25px] mb-7">
          <span className="text-[15px] font-bold">Telephone</span>
          <br />
          <a href="tel:+37367200165">+373 (67) 200 165</a> <br />
        </p>
        <p className="paragraph text-[15px] leading-[25px] mb-7">
          <span className="text-[15px] font-bold">Email</span> <br />
          <a href="mailto:dada.artcraft@gmail.com">dada.artcraft@gmail.com</a>
        </p>
      </div>
    </div>
    <div className="pt-10 md:pt-20 text-center">
      <ButtonLink href={"/contacts/brief"} label="Complete the brief" />
    </div>
  </div>
);
