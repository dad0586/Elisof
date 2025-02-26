'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./navbar.scss";
import { useTranslations } from "next-intl";
import Language11 from "../language/lansw";
import { Locale } from "../../../i18n.configs";



const Navbar = ({ locale }: { locale: Locale }) => {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden"; // Ekran oynashining oldini olish
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto"; // Link bosilganda menyuni yopish va sahifani normal qilish
  };
  const t = useTranslations();

  return (
    <>
      <header>
        <div className="myContainer">
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
              <Link href="/products" onClick={handleLinkClick}>Products</Link>
              <Link href="/about" onClick={handleLinkClick}>About us</Link>
              <Link href="/clients" onClick={handleLinkClick}>Our clients</Link>
              <Link href="/news" onClick={handleLinkClick}>News</Link>
              <Link href="/contacts" onClick={handleLinkClick}>Contact us</Link>
            </nav>

            {/* Burger Menu & Language */}
            <div className="right-side">
              {/* Language Selector */}
              <div className="language-selector">
                {/* <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                  <option value="ru">🇷🇺 RU</option>
                  <option value="en">🇺🇸 EN</option>
                  <option value="uz">🇺🇿 UZ</option>
                </select> */}

                <Language11 type="default" locale={locale} />


              </div>

              {/* Burger Menu */}
              <div className="burger-menu" onClick={handleMenuToggle}>
                {menuOpen ? <span className="close-icon">x</span> : <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>}
              </div>
            </div>
          </div>

          {/* Burger menyuni ekranda chiqarish */}
          {menuOpen && (
            <div className="burger-dropdown">
              <nav>
                <Link href="/" onClick={handleLinkClick}>Home</Link>
                <Link href="/products" onClick={handleLinkClick}>Products</Link>
                <Link href="/about" onClick={handleLinkClick}>About us</Link>
                <Link href="/clients" onClick={handleLinkClick}>Our clients</Link>
                <Link href="/news" onClick={handleLinkClick}>News</Link>
                <Link href="/contacts" onClick={handleLinkClick}>Contact us</Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
