import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import NavBar from "./components/NavBar";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Rest countries API",
  description: "Rest countries API by Chouaib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className}`}>
        <NavBar />
        <div className="w-full min-h-max font-semibold sm:p-10 p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
