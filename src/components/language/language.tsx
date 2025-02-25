"use client";

import { useRouter, usePathname } from "next/navigation";

const Language = ({ language }: { language: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    
    // Yangi URL ni yaratish
    const newPath = `/${newLanguage}` + pathname.replace(/^\/(ru|en|uz)/, "");
    
    router.push(newPath);
  };

  return (
    <div className="language-selector">
      <select value={language} onChange={handleLanguageChange}>
        <option value="ru">🇷🇺 RU</option>
        <option value="en">🇺🇸 EN</option>
        <option value="uz">🇺🇿 UZ</option>
      </select>
    </div>
  );
};

export default Language;
