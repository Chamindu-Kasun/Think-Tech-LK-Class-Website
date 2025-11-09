import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QuizLockProvider } from '@/context/QuizLockContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Think Tech LK - Advanced Level Education Hub",
  description: "Premier destination for A/L education resources in Sri Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          src="https://quote-widget-app.vercel.app/quote-widget.js"
          data-api="https://quote-widget-app.vercel.app/api/random-quote"
          data-position="bottom-right"
          data-icon="🦉"
          data-autohide="50000">
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('think-tech-theme') || 'system'
                const root = document.documentElement
                root.classList.remove('light', 'dark')
                
                if (theme === 'system') {
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                  root.classList.add(systemTheme)
                } else {
                  root.classList.add(theme)
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="think-tech-theme"
        >
          <QuizLockProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </QuizLockProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
