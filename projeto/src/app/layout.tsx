import "./globals.css";

import {Header} from "../components/header"
import { Metadata

 } from "next";
export const metadata: Metadata ={
  title: "Projeto de estudo",
  description:"Projeto feito para estudar next.js",
  openGraph: {
    title: "Projeto de estudo",
    description: "Projeto feito para estudar next.js",
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        <Header/>

        {children}

      </body>
    </html>
  );
}
