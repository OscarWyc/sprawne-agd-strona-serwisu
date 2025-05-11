
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    applianceType: "",
    issueDescription: "",
    preferredDate: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Zgłoszenie przyjęte",
        description: "Skontaktujemy się z Tobą wkrótce w celu potwierdzenia terminu.",
      });
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        applianceType: "",
        issueDescription: "",
        preferredDate: ""
      });
    }, 1500);
  };

  const applianceTypes = [
    "Pralka", "Lodówka", "Zmywarka", "Kuchenka", 
    "Piekarnik", "Mikrofalówka", "Płyta indukcyjna", "Okap kuchenny",
    "Ekspres do kawy", "Odkurzacz", "Suszarka do ubrań", "Klimatyzator",
    "Robot kuchenny", "Inny"
  ];

  return (
    <section id="appointment" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Umów wizytę serwisu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wypełnij poniższy formularz, a my skontaktujemy się z Tobą, aby potwierdzić termin wizyty.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Imię</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Podaj swoje imię"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nazwisko</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Podaj swoje nazwisko"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Podaj numer telefonu"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Podaj adres email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Adres</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Podaj pełny adres serwisu"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="applianceType">Typ sprzętu</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("applianceType", value)}
                  value={formData.applianceType}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz typ sprzętu" />
                  </SelectTrigger>
                  <SelectContent>
                    {applianceTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferowana data wizyty</Label>
                <Input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  placeholder="Wybierz datę"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="issueDescription">Opis usterki</Label>
              <Textarea
                id="issueDescription"
                name="issueDescription"
                value={formData.issueDescription}
                onChange={handleChange}
                required
                placeholder="Opisz problem ze sprzętem"
                className="resize-none h-32"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
