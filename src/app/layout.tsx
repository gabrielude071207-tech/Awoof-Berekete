import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Awoof Berekete - Authentic Nigerian & Continental Meals | Lagos",
  description: "Fresh, delicious, and nutritious Nigerian meals delivered to your door. Specializing in jollof rice, soups, continental dishes, and more. Located at 181 Akowonjo Road, Lagos.",
  keywords: ["Nigerian food", "Lagos restaurant", "Jollof rice", "African meals", "food delivery Lagos", "Akowonjo", "Nigerian restaurant"],
  openGraph: {
    title: "Awoof Berekete - Authentic Nigerian & Continental Meals",
    description: "Fresh, tasty, and affordable Nigerian meals. Order now for delivery or pickup!",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <TooltipProvider>
              <Navigation />
              {children}
              <Footer />
              <WhatsAppFloat />
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
