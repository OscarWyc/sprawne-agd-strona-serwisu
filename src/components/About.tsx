
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1595079676601-f1adf5be5dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Zespół serwisowy Sprawne AGD"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">O nas</h2>
              <p className="text-lg text-gray-600 mb-4">
                Firma <span className="font-semibold">Sprawne AGD</span> działa na rynku od ponad 15 lat, zapewniając profesjonalne usługi naprawy sprzętu AGD dla klientów indywidualnych i biznesowych.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Nasz zespół tworzą certyfikowani technicy z wieloletnim doświadczeniem. Regularnie się szkolimy, aby nadążać za nowymi technologiami i rozwiązaniami w branży.
              </p>
              <p className="text-lg text-gray-600">
                Stawiamy na jakość, rzetelność i zadowolenie klienta. Wykorzystujemy oryginalne części zamienne i oferujemy gwarancję na wszystkie wykonywane przez nas naprawy.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <p className="text-4xl font-bold text-blue-600">15+</p>
                <p className="text-gray-600 mt-1">Lat doświadczenia</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">10 000+</p>
                <p className="text-gray-600 mt-1">Naprawionych urządzeń</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">98%</p>
                <p className="text-gray-600 mt-1">Zadowolonych klientów</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">24h</p>
                <p className="text-gray-600 mt-1">Szybka pomoc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
