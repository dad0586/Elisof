"use client"; 
import Link from "next/link";
import "./footer.scss"
import { LuInstagram } from "react-icons/lu";
import { PiTelegramLogo } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useTranslations } from "next-intl";

const Footer = () => {


    const t = useTranslations("footer")

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <footer >
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
                                <Link href="#998456678899">
                                    <li className="footer_icon-follow"> <BsTelephone />  +998 45 667 88 99</li>
                                </Link>
                                <Link href="https://maps.app.goo.gl/B7ZxDMSewXa3fx6r8" target="_blank">
                                    <li className="footer_icon-follow"> <CiLocationOn />{t("location_address")}</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> {t("footer_bottom")} </div>
            </div>
        </footer>
    );
};

export default Footer;
