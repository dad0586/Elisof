"use client";

import React, { useRef, useState } from "react";
import { Locale, usePathname, useRouter } from "../../../i18n.configs";
import Image from "next/image";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { cn } from "@/lib/utils/cn";

const LangSwitcher11 = ({
  locale,
  type,
}: {
  locale: Locale;
  type: "default" | "auth";
}) => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(locale);
  
  const pathName = usePathname();
  const router = useRouter();
  const langRef = useRef<HTMLDivElement>(null); 

  const langsList = ["uz", "en", "ru"];
  const reorderedLangsList = [
    locale,
    ...langsList.filter((item) => item !== lang),
  ];

  const handleOpenSelector = () => {
    setOpen((prev) => !prev);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleOpenSelector();
    }
  };

  const changeLocale = (locale: Locale) => {
    setLang(locale);
    router.replace(pathName, { locale: locale });
  };

  const handleLocaleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    locale: Locale
  ) => {
    if (event.key === "Enter") {
      changeLocale(locale);
    }
  };


  useClickOutside(langRef, setOpen);

  return (
    <div
      tabIndex={0}
      role="button"
      aria-pressed="false"
      onClick={handleOpenSelector}
      onKeyDown={handleKeyDown}
      style={{
        boxShadow: "0px 4px 4px rgba(0 0 0 0.1)",
      }}
      className="relative"
      ref={langRef}
    >
      <div className="cursor-pointer">
        <div className="flex items-center">
          <Image
            src="/svgs/globe.svg"
            width={20}
            height={20}
            alt="globe"
            className="md:w-auto"
          />
          <Image
            src="/svgs/chevron-down.svg"
            width={20}
            height={20}
            alt="Dropdown"
          />
        </div>
        <ul
          className={cn(
            "absolute z-10 left-auto right-0 top-[30px] transition-all ease-in-out bg-bgColor flex flex-col gap-[6px] rounded-[8px] lg:text-[18px] lg:leading-[140%] text-md overflow-hidden",
            {
              "h-auto bg-[rgb(247,247,249)] max-h-[130px] px-[25px] pl-[15px] pr-[30px] py-[8px]": open,
              "max-h-0 px-[0px] py-[0px]": !open,
              "right-0 top-[30px]": type === "auth",
            }
          )}
        >
          {reorderedLangsList.map((item, index) => (
            <li
              role="menuitem"
              tabIndex={0}
              className={cn(
                "flex items-center gap-2 uppercase pb-[5px] font-medium",
                null,
                {
                  "font-bold text-accentColor border-b border-solid border-accentColor":
                    locale === item,
                }
              )}
              onClick={() => changeLocale(item as Locale)}
              onKeyDown={(event) => handleLocaleKeyDown(event, item as Locale)}
              key={index}
            >
              {item === "uz" && (
                <Image
                  src="/svgs/uzFlag.svg"
                  width={20}
                  height={20}
                  alt="O'zbekiston bayrog'i"
                />
              )}
              {item === "ru" && (
                <Image
                  src="/svgs/ruFlag.svg"
                  width={20}
                  height={20}
                  alt="Rossiya bayrog'i"
                />
              )}
              {item === "en" && (
                <Image
                  src="/svgs/enFlag.svg"
                  width={20}
                  height={20}
                  alt="AQSh bayrog'i"
                />
              )}
              <span
                className={cn({
                  "text-red-600": item === "en", 
                  "text-green-600": item === "uz", 
                  "text-blue-600": item === "ru", 
                  "font-interPrimary": true,
                })}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LangSwitcher11;