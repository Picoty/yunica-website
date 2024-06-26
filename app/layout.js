import { Poppins } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const poppins = Poppins({
  weight: ['400','800'],
  subsets:['latin'],
  preload: false
 
});

export const metadata = {
  title: "Yunica`s Website",
  description: "Web Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>
      <Header />
        {children}
        </body>
    </html>
  );
}
