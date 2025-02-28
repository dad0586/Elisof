import "./contact-us.scss";

const ContactUs = () => {
  const handleContactClick = () => {
    const footerElement = document.getElementById("footerId");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll qilish
    }
  };

  return (
    <div className="contact-us">
      <button onClick={handleContactClick}>Contact us</button>
    </div>
  );
};

export default ContactUs;