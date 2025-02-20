import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.configs"


export default createMiddleware({
    locales,
    defaultLocale: 'en'
})


export const config = {
    matcher : ["/", "/(en|uz|ru)/:path*"],
};
 