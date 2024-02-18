import { Inter } from "next/font/google";
import "./globals.css";
import UserContext from "./context/page";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "Debuggers App",
  description: "Still under Ideation!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContext>{children}</UserContext><ToastContainer />
      </body>
    </html>
  );
}
