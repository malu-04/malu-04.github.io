import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/ThemeProvider";
import '@/styles/globals.css'
import { Layout } from "@/components/Layout";
import { Providers } from "@/providers";

export const metadata: Metadata = {
  title: "Malu — Home",
  description: "Malu home page",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#4c33d8",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout(
  { children, }: { children: React.ReactNode; }
) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}