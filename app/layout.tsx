import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProviders } from '@/components/Providers/theme';

const space_grotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
    title: 'Hung-Dev',
    description: 'Better than nothing',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            className={space_grotesk.className}
            suppressHydrationWarning
        >
            <body className='text-black bg-white antialiased dark:bg-gray-950 dark:text-white'>
                <ThemeProviders>
                    <div className='container flex h-screen flex-col px-4'>
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </ThemeProviders>
            </body>
        </html>
    );
}
