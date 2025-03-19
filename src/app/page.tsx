import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import Simulator from "@/components/Simulator";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaMarkup pageType="home" pageUrl="https://fibreoptiquetravaux.fr/" />
      <Header />
      <main>
        <Hero />
        <Solutions />
        <div className="container mx-auto px-4 sm:px-6">
          <Simulator />
        </div>
   
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
