// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { locales } from "../i18n.configs";

// export default getRequestConfig( async ( {locale}) => {
//     if(!locales.includes(locale as any )) notFound();


//     return {
//         messages: (await import(`./locales/${locale}.json`)).default,

//     };
// })





// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { locales, Locale } from "../i18n.configs";

// export default getRequestConfig(async ({ locale, headers }) => {
//     // headers allaqachon Headers instansiyasi sifatida keladi, await kerak emas
//     const headerLocale = headers?.get("X-NEXT-INTL-LOCALE");

//     // locale'ni tekshirish (headerLocale optional bo'lishi mumkin)
//     if (!locales.includes(locale as Locale) && (!headerLocale || !locales.includes(headerLocale as Locale))) {
//         notFound();
//     }

//     return {
//         messages: (await import(`./locales/${locale}.json`)).default,
//     };
// });






// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { locales, Locale } from "../i18n.configs"; // Locale tipini import qilamiz

// export default getRequestConfig(async ({ locale }: { locale: string }) => {
//     // locale'ni Locale tipiga tekshirish uchun type guard ishlatamiz
//     if (!locales.includes(locale as Locale)) notFound();

//     return {
//         messages: (await import(`./locales/${locale}.json`)).default,
//     };
// });




import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, Locale } from "../i18n.configs";

export default getRequestConfig(async ({ locale }: { locale: string }) => {
    if (!locales.includes(locale as Locale)) notFound();

    return {
        locale,
        messages: (await import(`./locales/${locale}.json`)).default,
    };
});