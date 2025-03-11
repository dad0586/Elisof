import { useTranslations } from "next-intl";
import "./contact-us.scss";

const ContactUs = () => {
  const t = useTranslations("ContactUs");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const navbarHeight = document.querySelector(".fixed")?.getBoundingClientRect().height || 0;
        const extraOffset = 10;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - extraOffset;

        window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
        });
    }
};

  return (
    <div className="contact-us">
      <button className="" onClick={()=> scrollToSection("request")}> {t ("button")} </button>
    </div>
  );
};

export default ContactUs;