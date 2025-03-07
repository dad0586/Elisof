
import createMiddleware from "next-intl/middleware";
import { locales, Locale } from "../i18n.configs";

export default createMiddleware({
    locales: locales as readonly string[],
    defaultLocale: "en" as const,
});

export const config = {
    matcher: ["/", "/(en|uz|ru)/:path*"], 
};