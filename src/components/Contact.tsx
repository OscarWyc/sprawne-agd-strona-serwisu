
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Masz pytania? Potrzebujesz szybkiej pomocy? Skontaktuj się z nami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Dane kontaktowe</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telefon</p>
                    <p className="text-blue-600 font-medium text-lg mt-1">+48 123 456 789</p>
                    <p className="text-gray-500 text-sm mt-1">Dostępni od poniedziałku do piątku, 8:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-blue-600 font-medium text-lg mt-1">kontakt@sprawneagd.pl</p>
                    <p className="text-gray-500 text-sm mt-1">Odpowiadamy w ciągu 24 godzin</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Adres</p>
                    <p className="text-gray-700 mt-1">ul. Serwisowa 42</p>
                    <p className="text-gray-700">00-001 Warszawa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Godziny pracy</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
                      <p className="text-gray-700">Poniedziałek - Piątek:</p>
                      <p className="text-gray-700">8:00 - 18:00</p>
                      <p className="text-gray-700">Sobota:</p>
                      <p className="text-gray-700">9:00 - 14:00</p>
                      <p className="text-gray-700">Niedziela:</p>
                      <p className="text-gray-700">Zamknięte</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-xl overflow-hidden shadow-lg">
            {/* This would normally be a Google Maps iframe - using a placeholder for now */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438421855!2d20.896111476953123!3d52.233065600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1683984796574!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa lokalizacji"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
