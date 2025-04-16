import "../globals.css";

import {HeaderPublic} from "../../components/headerPublic"


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
        <HeaderPublic/>

        {children}

      </body>
    </html>
  );
}
