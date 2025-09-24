import React, { useRef } from "react";
import { AppProps } from "next/app";
import "../app/globals.css";
//import Layout from "../app/layout";
import Navbar from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import Faq from "@/app/component/Faq";
const MyApp = ({ Component, pageProps }: AppProps) => {
  // Define sectionRefs as an object containing multiple ref elements
  const sectionRefs = {
    Home: useRef<HTMLElement>(null),
    Whyus: useRef<HTMLElement>(null),
    Services: useRef<HTMLElement>(null),
    Reviews: useRef<HTMLElement>(null),
    AboutUs: useRef<HTMLElement>(null),
    FAQs: useRef<HTMLElement>(null),
    Footer: useRef<HTMLElement>(null)
  };

  return (
    <div>
     <Navbar sectionRefs={sectionRefs} />
      <Component {...pageProps} />
      <Faq/>
      <br /><br />
      <Footer />
    </div>
  );
};

export default MyApp;
