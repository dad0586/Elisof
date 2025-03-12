"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import "./navbar.scss";
import { useTranslations } from "next-intl";
import { Locale } from "../../../i18n.configs";
import LangSwitcher11 from "../language/language";
import { MdOutlineCancel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ locale }: { locale: Locale }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("navbar");

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.currentTarget.getAttribute("href");
    if (target && target.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        const navbarHeight = document.querySelector(".fixed")?.getBoundingClientRect().height || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header>
      <div className="fixed w-full h-auto top-0 z-50 bg-white shadow-md">
        <div className="myContainer">
          <div className="main-navbar_header">
            <div className="main-logo">
              <Link href="/" onClick={handleLinkClick}>
                <Image className="main-logo_img logo" src="/svgs/logo.svg" alt="Logo" width={130} height={100} style={{ objectFit: 'cover' }} />
              </Link>
            </div>

            <nav className={`navbar ${menuOpen ? "active" : ""}`}>
              <Link href="/" onClick={handleLinkClick}>{t("home")}</Link>
              <Link href="#product" onClick={handleLinkClick}>{t("products")}</Link>
              <Link href="#about-us" onClick={handleLinkClick}>{t("about_us")}</Link>
              <Link href="#clients" onClick={handleLinkClick}>{t("clients")}</Link>
              <Link href="#news" onClick={handleLinkClick}>{t("news")}</Link>
              <Link href="#request" onClick={handleLinkClick}>{t("contact_us")}</Link>
            </nav>

            <div className="right-side">
              <div className="language-selector">
                <LangSwitcher11 type="default" locale={locale} />
              </div>

              <div className="burger-menu md:w-auto" onClick={handleMenuToggle}>
                {menuOpen ? (
                  <RxHamburgerMenu className="text-2xl" />
                ) : (
                  <RxHamburgerMenu className="text-2xl" />
                )}
              </div>
            </div>
          </div>

          {menuOpen && (
            <div className="burger-dropdown">
              <nav>
                <span className="close-icon" onClick={handleMenuToggle}>
                  <MdOutlineCancel />
                </span>
                <Link href="/" onClick={handleLinkClick}>{t("home")}</Link>
                <Link href="#product" onClick={handleLinkClick}>{t("products")}</Link>
                <Link href="#about-us" onClick={handleLinkClick}>{t("about_us")}</Link>
                <Link href="#clients" onClick={handleLinkClick}>{t("clients")}</Link>
                <Link href="#news" onClick={handleLinkClick}>{t("news")}</Link>
                <Link href="#request" onClick={handleLinkClick}>{t("contact_us")}</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;