import React from "react";
import { Facebook, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Sprawne<span className="text-blue-400">AGD</span></h3>
            <p className="text-gray-400 mb-6">
              Profesjonalne naprawy sprzętu AGD z gwarancją satysfakcji.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Naprawa pralek</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Naprawa lodówek</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Naprawa kuchenek</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Naprawa zmywarek</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Pozostałe sprzęty</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Przydatne linki</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Strona główna</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">O nas</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Opinie klientów</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#appointment" className="text-gray-400 hover:text-white transition-colors">Umów wizytę</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">NIP: 878-180-25-42</p>
              <p className="mb-2">87-207 Dębowa Łąka 118</p>
              <p className="mb-2">Tel: +48 784 318 143</p>
              <p className="mb-2">Email: sprawne.agd@gmaI.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sprawne AGD. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            <a href="#" className="hover:text-white transition-colors">Mapa strony</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;