"use client";
import Link from "next/link";
import "./footer.scss";
import { LuInstagram } from "react-icons/lu";
import { PiTelegramLogo } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Footer = () => {
    const t = useTranslations("footer");

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


    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

    return (
        <footer>
            <div className="footer" id="footerId">
                <div className="myContainer">
                    <div className="footer-container">
                        <div className="footer-section">
                            <h3>{t("home")}</h3>
                            <ul>
                                <li onClick={() => scrollToSection("about-us")}>{t("about_us")}</li>
                                <li onClick={() => scrollToSection("product")}>{t("products")}</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>{t("our_client")}</h3>
                            <ul>
                                <li onClick={() => scrollToSection("news")}>{t("news")}</li>
                                <li onClick={() => scrollToSection("request")}>{t("contact_us")}</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>{t("follow_us")}</h3>
                            <ul>
                                <Link href="/contacts">
                                    <li className="footer_icon-follow"> <LuInstagram /> {t("instagram")}</li>
                                </Link>
                                <Link href="/contacts">
                                    <li className="footer_icon-follow"> <PiTelegramLogo />{t("telegram")}</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>{t("location")}</h3>
                            <ul>
                                <Link href="tel:+998456678899">
                                    <li className="footer_icon-follow"> <BsTelephone />  +998 45 667 88 99</li>
                                </Link>
                                <Link href="https://maps.app.goo.gl/B7ZxDMSewXa3fx6r8" target="_blank">
                                    <li className="footer_icon-follow"> <CiLocationOn />{t("location_address")}</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>
                        {t("footer_bottom_newDate")} {currentYear}
                        <Link href="https://dynamicsoft.uz/en" target="_blank"> {t("footer_bottom_link")} </Link>
                        {t("footer_bottom")}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;