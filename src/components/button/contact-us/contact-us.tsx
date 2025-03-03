import { useTranslations } from "next-intl";
import "./contact-us.scss";

const ContactUs = () => {
  const t = useTranslations("ContactUs");
  const handleContactClick = () => {
    const footerElement = document.getElementById("footerId");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll qilish
    }
  };

  return (
    <div className="contact-us">
      <button className="" onClick={handleContactClick}> {t ("button")} </button>
    </div>
  );
};

export default ContactUs;