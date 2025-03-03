
import Link from "next/link";
import "./footer.scss"
import { LuInstagram } from "react-icons/lu";
import { PiTelegramLogo } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("footer")
    return (
        <footer className="footer" id="footerId">
            <div className="myContainer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>{t("home")}</h3>
                        <ul>
                            <Link href="#about"> <li>{t("about_us")}</li></Link>
                            <Link href="#products"> <li>{t("products")}</li></Link>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>{t("our_client")}</h3>
                        <ul>
                            <Link href="#news"> <li>{t("news")}</li></Link>
                            <Link href="#contacts"> <li>{t("contact_us")}</li></Link>
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
        </footer>
    );
};

export default Footer;
