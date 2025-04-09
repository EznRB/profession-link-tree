import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialsSection from "./common/TestimonialsSection";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import ProfessionalBio from "./common/ProfessionalBio";
import SpecialOffers from "./common/SpecialOffers";
import ImageGallery from "./common/ImageGallery";
import { barberData } from "@/lib/data";
import { Scissors, MoveHorizontal, Clock, MapPin, Calendar, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function BarberProfile() {
  return (
    <div className="bg-barber text-white min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Decorative elements specific to barber */}
      <div className="absolute top-20 left-0 opacity-5">
        <Scissors className="w-48 h-48 -rotate-12" />
      </div>
      <div className="absolute bottom-20 right-0 opacity-5">
        <MoveHorizontal className="w-48 h-48 rotate-12" />
      </div>
      
      <div className="max-w-md mx-auto relative z-10">
        {/* Profile Header */}
        <ProfileHeader
          name={barberData.name}
          title={barberData.title}
          imageSrc={barberData.imageSrc}
          badges={barberData.badges}
          theme="barber"
        />

        {/* Professional Bio with credentials */}
        <ProfessionalBio 
          bio={barberData.bio}
          credentials={barberData.credentials}
          location={barberData.location}
          theme="barber"
        />

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={barberData.phoneNumber}
          message={barberData.whatsappMessage}
          label={barberData.whatsappLabel}
          theme="barber"
        />

        {/* Special Offers */}
        <SpecialOffers
          offers={barberData.specialOffers}
          theme="barber"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <h2 className="text-barber-accent font-semibold text-xl mb-2 text-center">
            Serviços Oferecidos
          </h2>
          <div className="absolute inset-0 bg-gradient-to-b from-barber-secondary/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {barberData.services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              price={service.price}
              duration={service.duration}
              bookingUrl={service.bookingUrl}
              featured={service.featured}
              theme="barber"
            />
          ))}
        </div>
        
        {/* Business Hours */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20 shadow-xl">
          <h2 className="text-barber-accent font-semibold text-lg mb-3 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-barber-secondary" />
            Horário de Funcionamento
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Segunda - Sexta</span>
              <span>09:00 - 20:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sábado</span>
              <span>09:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span>Domingo</span>
              <span>Fechado</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 text-barber-secondary flex-shrink-0" />
              <span className="text-sm">{barberData.location.address}<br />{barberData.location.city}</span>
            </div>
          </div>
        </div>
        
        {/* Agenda Button */}
        <div className="mb-8">
          <a 
            href="#agenda"
            className="w-full py-3.5 bg-barber-secondary hover:bg-barber-secondary/90 text-white rounded-lg flex items-center justify-center font-medium transition-all shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Ver Agenda Disponível
          </a>
        </div>

        {/* Gallery */}
        <ImageGallery 
          images={barberData.gallery}
          theme="barber"
        />

        {/* Testimonials */}
        <TestimonialsSection
          testimonials={barberData.testimonials}
          theme="barber"
        />

        {/* FAQ Accordion */}
        {barberData.faq && barberData.faq.length > 0 && (
          <div className="mb-8">
            <h2 className="text-barber-accent font-semibold text-xl mb-4 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              {barberData.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="px-4 py-3 text-white hover:text-barber-accent text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* Social Media */}
        <SocialLinks
          links={barberData.socialLinks}
          theme="barber"
        />

        {/* Footer */}
        <Footer copyright={barberData.copyright} theme="barber" />
      </div>
    </div>
  );
}
