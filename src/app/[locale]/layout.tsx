import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/navbar/navbar';
import 'flowbite';
import 'flowbite-react';
import 'tailwindcss/tailwind.css';
import Footer from '@/components/footer/footer';
import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Locale } from '../../../i18n.configs'; 


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};


type Props = {
  children: ReactNode;
  params: { locale: Locale };
};

export default async function RootLayout({ children, params: { locale } }: Props) {

  if (!locale || !['en', 'uz', 'ru'].includes(locale)) {
    throw new Error(`Invalid locale: ${locale}. Expected one of: 'en', 'uz', 'ru'`);
  }


  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}