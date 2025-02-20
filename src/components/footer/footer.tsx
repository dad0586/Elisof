
import Link from "next/link";
import "./footer.scss"
import { LuInstagram } from "react-icons/lu";
import { PiTelegramLogo } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="myContainer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Home</h3>
                        <ul>
                            <Link href="/about"> <li>About Us</li></Link>
                            <Link href="/products"> <li>Products</li></Link>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Our clients</h3>
                        <ul>
                            <Link href="/news"> <li>News</li></Link>
                            <Link href="/contacts"> <li>Contact us</li></Link>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Follow us</h3>
                        <ul>
                            <Link href="/contacts">
                                <li className="footer_icon-follow"> <LuInstagram />  Instagram</li>
                            </Link>
                            <Link href="/contacts">
                                <li className="footer_icon-follow"> <PiTelegramLogo /> Telegram</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Location</h3>
                        <ul>
                            <Link href="#998456678899">
                                <li className="footer_icon-follow"> <BsTelephone />  +998 45 667 88 99</li>
                            </Link>
                            <Link href="https://maps.app.goo.gl/B7ZxDMSewXa3fx6r8" target="_blank">
                                <li className="footer_icon-follow"> <CiLocationOn /> Buyuk Ipak yo‘li, 156B</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                © Copyright 2025 | Dynamicsoft | All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
