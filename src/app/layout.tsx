import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./component/Header"; // Ensure correct path
import Footer from "./component/Footer"; // Ensure correct path
import "./globals.css"; // Adjust path if necessary

interface LayoutProps {
  children: ReactNode;
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> };
}

const Layout: React.FC<LayoutProps> = ({ children, sectionRefs }) => {
  return (
    <html lang="en">
      <body>
      <Head>
        <title>Sweepsage</title>
        <meta name="description" content="Best cleaning & appliance repair services" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo1.png" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet"/>

      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Pass sectionRefs to Navbar */}
        <Navbar sectionRefs={sectionRefs} />

        {/* Main Content */}
        <main className="flex-grow  pb-[60px]">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
      </body>
    </html>
  );
};

export default Layout;
