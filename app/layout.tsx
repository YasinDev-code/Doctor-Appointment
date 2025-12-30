import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Doctor Appointment",
  description: "Doctor Appointment Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`antialiased`}>
        <Header isAuthenticated={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
