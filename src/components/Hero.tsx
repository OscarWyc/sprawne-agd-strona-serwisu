import React from "react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      appointmentSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Profesjonalna naprawa sprzętu AGD
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Twój sprzęt AGD przestał działać? Zaufaj naszym specjalistom z wieloletnim doświadczeniem. Szybka naprawa, uczciwe ceny, gwarancja jakości.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToAppointment} className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
                Umów wizytę serwisu
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8" onClick={() => document.getElementById("services")?.scrollIntoView({
              behavior: "smooth"
            })}>
                Nasze usługi
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img alt="Technik naprawiający pralkę" className="rounded-xl shadow-2xl max-w-full md:max-w-lg object-cover" src="/lovable-uploads/631741ad-3a05-449e-80ba-2db3181f6262.jpg" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;