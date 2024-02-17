import { Inter } from "next/font/google";
import "./globals.css";
import UserContext from "./context/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Debuggers App",
  description: "Still under Ideation!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContext>{children}</UserContext>
      </body>
    </html>
  );
}
