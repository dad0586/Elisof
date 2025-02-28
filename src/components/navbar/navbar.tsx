'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./navbar.scss";
import { useTranslations } from "next-intl";
import { Locale } from "../../../i18n.configs";
import LangSwitcher11 from "../language/language";

const Navbar = ({ locale }: { locale: Locale }) => {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden"; // Ekran oynashining oldini olish
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.currentTarget.getAttribute('href');
    if (target && target.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
    document.body.style.overflow = "auto"; // Link bosilganda menyuni yopish va sahifani normal qilish
  };

  const t = useTranslations();

  return (
    <>
      <header>
        <div className="myContainer ">
          <div className="main-navbar_header">
            {/* Logo */}
            <div className="main-logo">
              <Link href="/" onClick={handleLinkClick}>
                <Image src="/logo.svg" alt="Logo" width={130} height={100} />
              </Link>
            </div>

            {/* Navbar */}
            <nav className={`navbar ${menuOpen ? "active" : ""}`}>
              <Link href="/" onClick={handleLinkClick}>Home</Link>
              <Link href="#product" onClick={handleLinkClick}>Products</Link>
              <Link href="#about-us" onClick={handleLinkClick}>About us</Link>
              <Link href="#clients" onClick={handleLinkClick}>Our clients</Link>
              <Link href="#news" onClick={handleLinkClick}>News</Link>
              <Link href="#footerId" onClick={handleLinkClick}>Contact us</Link>
            </nav>


            <div className="right-side">

              <div className="language-selector">
                <LangSwitcher11 type="default" locale={locale}/>
              </div>


              <div className="burger-menu" onClick={handleMenuToggle}>
                {menuOpen ? <span className="close-icon">x</span> : <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>}
              </div>
            </div>
          </div>


          {menuOpen && (
            <div className="burger-dropdown">
              <nav>
                <Link href="/" onClick={handleLinkClick}>Home</Link>
                <Link href="#product" onClick={handleLinkClick}>Products</Link>
                <Link href="#about-us" onClick={handleLinkClick}>About us</Link>
                <Link href="#clients" onClick={handleLinkClick}>Our clients</Link>
                <Link href="#news" onClick={handleLinkClick}>News</Link>
                <Link href="#footerId" onClick={handleLinkClick}>Contact us</Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;