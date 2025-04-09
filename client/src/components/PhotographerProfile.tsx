import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialsSection from "./common/TestimonialsSection";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import ProfessionalBio from "./common/ProfessionalBio";
import SpecialOffers from "./common/SpecialOffers";
import ImageGallery from "./common/ImageGallery";
import { photographerData } from "@/lib/data";
import { Camera, Calendar, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PhotographerProfile() {
  return (
    <div className="bg-photographer text-white min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 opacity-5">
        <Camera className="w-48 h-48 -rotate-12" />
      </div>
      
      <div className="max-w-md mx-auto relative z-10">
        {/* Profile Header */}
        <ProfileHeader
          name={photographerData.name}
          title={photographerData.title}
          imageSrc={photographerData.imageSrc}
          badges={photographerData.badges}
          theme="photographer"
        />

        {/* Professional Bio with credentials */}
        <ProfessionalBio 
          bio={photographerData.bio}
          credentials={photographerData.credentials}
          location={photographerData.location}
          theme="photographer"
        />

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={photographerData.phoneNumber}
          message={photographerData.whatsappMessage}
          label={photographerData.whatsappLabel}
          theme="photographer"
        />

        {/* Special Offers */}
        <SpecialOffers
          offers={photographerData.specialOffers}
          theme="photographer"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <h2 className="text-photographer-accent font-semibold text-xl mb-2 text-center">
            Serviços Oferecidos
          </h2>
          <div className="absolute inset-0 bg-gradient-to-b from-photographer-secondary/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {photographerData.services.map((service, index) => (
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
              theme="photographer"
            />
          ))}
        </div>
        
        {/* Booking Button */}
        <div className="mb-8">
          <a 
            href="#orcamento"
            className="w-full py-3.5 bg-photographer-primary hover:bg-photographer-primary/90 text-white rounded-lg flex items-center justify-center font-medium transition-all shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Solicitar Orçamento Personalizado
          </a>
        </div>

        {/* Gallery */}
        <ImageGallery 
          images={photographerData.gallery}
          theme="photographer"
        />

        {/* Testimonials */}
        <TestimonialsSection
          testimonials={photographerData.testimonials}
          theme="photographer"
        />

        {/* FAQ Accordion */}
        {photographerData.faq && photographerData.faq.length > 0 && (
          <div className="mb-8">
            <h2 className="text-photographer-accent font-semibold text-xl mb-4 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              {photographerData.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="px-4 py-3 text-white hover:text-photographer-accent text-left">
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
          links={photographerData.socialLinks}
          theme="photographer"
        />

        {/* Footer */}
        <Footer copyright={photographerData.copyright} theme="photographer" />
      </div>
    </div>
  );
}