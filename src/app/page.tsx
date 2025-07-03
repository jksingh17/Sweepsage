'use client';
import React, { useRef } from 'react';
//import Navbar from '@/app/component/Header'; // Adjust path as necessary
import Main from '@/app/component/Main';
import Service from '@/app/component/Service';
//import Team from '@/app/component/Team';
import Faq from '@/app/component/Faq';
//import Footer from '@/app/component/Footer';
import WhyUs from '@/app/component/Whyus';
import Step from '@/app/component/Step';
import Contact from '@/app/component/Contact';
//import Reviews from '@/app/component/Reviews';
import Stat from '@/app/component/Stat';
import AboutUs from '@/app/component/Aboutus';
import Ad from '@/app/component/Ad';

const Page: React.FC = () => {
  const sectionRefs = {
    Home: useRef<HTMLElement>(null),
    Services: useRef<HTMLElement>(null),
    WhyUs: useRef<HTMLElement>(null),
    Reviews: useRef<HTMLElement>(null),
    AboutUs: useRef<HTMLElement>(null),
    FAQs: useRef<HTMLElement>(null),
    Footer: useRef<HTMLElement>(null),
  };

  return (
    <div>
      
      <section ref={sectionRefs.Home}>
        <Main />
      </section>

      <section ref={sectionRefs.Services}>
        <Service />
      </section>

      <Stat />

      <section ref={sectionRefs.WhyUs}>
        <WhyUs />
      </section>
      <br /><br />
      <Ad />

      <Step />

      {/* <section ref={sectionRefs.Reviews}>
        <Reviews />
      </section> */}
    <br /><br />
      

      <Contact />
<br /><br />
      <section ref={sectionRefs.AboutUs}>
        <AboutUs />
        <br /><br />
      </section>

      <section ref={sectionRefs.FAQs}>
        <Faq />
        <br /><br />
      </section>

      
    </div>
  );
};

export default Page;
