
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type TestimonialProps = {
  text: string;
  author: string;
  rating: number;
  service: string;
};

const Testimonial = ({ text, author, rating, service }: TestimonialProps) => (
  <Card className="shadow-md hover:shadow-lg transition-shadow border-none">
    <CardContent className="pt-6">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <p className="text-gray-600 italic">"{text}"</p>
    </CardContent>
    <CardFooter className="border-t pt-4 flex flex-col items-start">
      <p className="font-medium">{author}</p>
      <p className="text-sm text-gray-500">{service}</p>
    </CardFooter>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      text: "Szybka i profesjonalna naprawa pralki. Technik wyjaśnił przyczynę usterki i naprawił sprzęt na miejscu. Polecam!",
      author: "Anna Kowalska",
      rating: 5,
      service: "Naprawa pralki"
    },
    {
      text: "Zepsuła mi się lodówka tuż przed świętami. Firma Sprawne AGD uratowała sytuację - naprawili usterkę tego samego dnia. Jestem bardzo zadowolony!",
      author: "Marek Nowak",
      rating: 5,
      service: "Naprawa lodówki"
    },
    {
      text: "Fachowa pomoc i uczciwe podejście. Technik nie tylko naprawił piekarnik, ale pokazał mi jak uniknąć podobnych problemów w przyszłości.",
      author: "Katarzyna Wiśniewska",
      rating: 4,
      service: "Naprawa piekarnika"
    },
    {
      text: "Serwisanci szybko zdiagnozowali i naprawili usterkę w zmywarce. Cena zgodna z wyceną, bez ukrytych kosztów. Polecam!",
      author: "Piotr Zieliński",
      rating: 5,
      service: "Naprawa zmywarki"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Opinie naszych klientów</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Poznaj opinie osób, które skorzystały z naszych usług i przekonały się o jakości naszej pracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              rating={testimonial.rating}
              service={testimonial.service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
