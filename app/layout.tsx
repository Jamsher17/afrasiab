import Footer from "./footer";
import "./globals.css";
import { Header } from "./header";
import { Ubuntu } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";
import { Providers } from "./providers";

const ubuntu = Ubuntu({
  subsets: ["cyrillic-ext"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Afrasiab Travel",
  description:
    "Туристическая компания “Afrasiab Travel” приглашает вас посетить Узбекистан",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-darkBlue">
        <main className={ubuntu.className}>
          <Providers>
            <Header />
            <ScrollToTop />
            {/* <ErrorBoundary fallback={<Error />}> */}

            <main className="bg-[#F6F6F6]">{children}</main>
          </Providers>
          {/* </ErrorBoundary> */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
