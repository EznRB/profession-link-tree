import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialsSection from "./common/TestimonialsSection";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import ProfessionalBio from "./common/ProfessionalBio";
import SpecialOffers from "./common/SpecialOffers";
import ImageGallery from "./common/ImageGallery";
import { dentistData } from "@/lib/data";
import { Smile, Calendar, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function DentistProfile() {
  return (
    <div className="bg-dentist text-white min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 opacity-5">
        <Smile className="w-48 h-48 -rotate-12" />
      </div>
      
      <div className="max-w-md mx-auto relative z-10">
        {/* Profile Header */}
        <ProfileHeader
          name={dentistData.name}
          title={dentistData.title}
          imageSrc={dentistData.imageSrc}
          badges={dentistData.badges}
          theme="dentist"
        />

        {/* Professional Bio with credentials */}
        <ProfessionalBio 
          bio={dentistData.bio}
          credentials={dentistData.credentials}
          location={dentistData.location}
          theme="dentist"
        />

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={dentistData.phoneNumber}
          message={dentistData.whatsappMessage}
          label={dentistData.whatsappLabel}
          theme="dentist"
        />

        {/* Special Offers */}
        <SpecialOffers
          offers={dentistData.specialOffers}
          theme="dentist"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <h2 className="text-dentist-accent font-semibold text-xl mb-2 text-center">
            Serviços Oferecidos
          </h2>
          <div className="absolute inset-0 bg-gradient-to-b from-dentist-secondary/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {dentistData.services.map((service, index) => (
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
              theme="dentist"
            />
          ))}
        </div>
        
        {/* Appointment Button */}
        <div className="mb-8">
          <a 
            href="#consulta"
            className="w-full py-3.5 bg-dentist-primary hover:bg-dentist-primary/90 text-white rounded-lg flex items-center justify-center font-medium transition-all shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Avaliação Gratuita
          </a>
        </div>

        {/* Gallery */}
        <ImageGallery 
          images={dentistData.gallery}
          theme="dentist"
        />

        {/* Testimonials */}
        <TestimonialsSection
          testimonials={dentistData.testimonials}
          theme="dentist"
        />

        {/* FAQ Accordion */}
        {dentistData.faq && dentistData.faq.length > 0 && (
          <div className="mb-8">
            <h2 className="text-dentist-accent font-semibold text-xl mb-4 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              {dentistData.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="px-4 py-3 text-white hover:text-dentist-accent text-left">
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
          links={dentistData.socialLinks}
          theme="dentist"
        />

        {/* Footer */}
        <Footer copyright={dentistData.copyright} theme="dentist" />
      </div>
    </div>
  );
}