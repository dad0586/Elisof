// import createMiddleware from "next-intl/middleware";
// import { locales } from "../i18n.configs"


// export default createMiddleware({
//     locales,
//     defaultLocale: 'en'
// })


// export const config = {
//     matcher : ["/", "/(en|uz|ru)/:path*"],
// };
 


import createMiddleware from "next-intl/middleware";
import { locales, Locale } from "../i18n.configs";

export default createMiddleware({
    locales: locales as readonly string[], // TypeScript uchun aniq tip
    defaultLocale: "en" as const, // defaultLocale ham aniq qiymat
});

export const config = {
    matcher: ["/", "/(en|uz|ru)/:path*"], // Hozircha OK, lekin dinamik qilish mumkin
};