import "../globals.css";

import {HeaderPrivate} from "../../components/headerPrivate"

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
        <HeaderPrivate/>

        {children}

      </body>
    </html>
  );
}
