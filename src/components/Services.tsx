
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WashingMachine, Refrigerator, Microwave } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => (
  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
    <CardHeader className="pb-2">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600">{description}</CardDescription>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    {
      title: "Naprawa pralek",
      description: "Naprawiamy pralki wszystkich marek. Diagnozujemy problemy z pompami, łożyskami, modułami elektronicznymi i innymi częściami.",
      icon: WashingMachine
    },
    {
      title: "Naprawa lodówek",
      description: "Serwis lodówek i zamrażarek. Rozwiązujemy problemy z chłodzeniem, uszczelkami, termostatami i układami elektronicznymi.",
      icon: Refrigerator
    },
    {
      title: "Naprawa kuchenek i piekarników",
      description: "Naprawa kuchenek gazowych, elektrycznych i piekarników. Wymiana grzałek, czujników temperatury i modułów sterujących.",
      icon: Microwave
    },
    {
      title: "Naprawa mikrofalówek",
      description: "Profesjonalny serwis kuchenek mikrofalowych. Naprawa magnetronów, płyt elektronicznych i elementów mechanicznych.",
      icon: Microwave
    },
  ];

  const additionalApplianceTypes = [
    "Zmywarki", "Ekspresy do kawy", "Odkurzacze", "Suszarki do ubrań", 
    "Klimatyzatory", "Okapy kuchenne", "Płyty indukcyjne", "Roboty kuchenne"
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze usługi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zajmujemy się naprawą i serwisowaniem szerokiej gamy sprzętu AGD. Nasi technicy posiadają wiedzę i doświadczenie w rozwiązywaniu problemów ze sprzętem różnych marek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-center">Naprawiamy również:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalApplianceTypes.map((appliance, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="font-medium text-gray-700">{appliance}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
