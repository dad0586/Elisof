// import { createSharedPathnamesNavigation } from "next-intl/navigation";

// export const locales = ["ru", "uz", "en"] as const;
// export type Locale = (typeof locales)[number];

// export const localeNames: Record<Locale, string> = {
//   uz: "UZ",
//   ru: "RU",
//   en: "EN",
// };

// export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation(
//   { locales }
// );


import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["ru", "uz", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
    uz: "UZ",
    ru: "RU",
    en: "EN",
};

// locales'ni readonly string[] sifatida aniq koʻrsatamiz
export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({
    locales: locales as readonly string[],
});