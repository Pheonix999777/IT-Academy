import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { ContactInformation } from "./Components/ContactInformation/ContactInformation";
import { Map } from "./Components/Map/Map";
import { Faq } from "./Components/Faq/Faq";

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SectionHeader
        title={"Contact Us"}
        text={
          "Have questions or want to learn more about our programs? We're here to help."
        }
      />

      <ContactInformation />
      <Map />
      <Faq />
    </div>
  );
};

export default Contact;
