import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialsSection from "./common/TestimonialsSection";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import ProfessionalBio from "./common/ProfessionalBio";
import SpecialOffers from "./common/SpecialOffers";
import ImageGallery from "./common/ImageGallery";
import { personalTrainerData } from "@/lib/data";
import { Dumbbell, Calendar, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PersonalTrainerProfile() {
  return (
    <div className="bg-personal text-white min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 opacity-5">
        <Dumbbell className="w-48 h-48 -rotate-12" />
      </div>
      
      <div className="max-w-md mx-auto relative z-10">
        {/* Profile Header */}
        <ProfileHeader
          name={personalTrainerData.name}
          title={personalTrainerData.title}
          imageSrc={personalTrainerData.imageSrc}
          badges={personalTrainerData.badges}
          theme="personal"
        />

        {/* Professional Bio with credentials */}
        <ProfessionalBio 
          bio={personalTrainerData.bio}
          credentials={personalTrainerData.credentials}
          location={personalTrainerData.location}
          theme="personal"
        />

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={personalTrainerData.phoneNumber}
          message={personalTrainerData.whatsappMessage}
          label={personalTrainerData.whatsappLabel}
          theme="personal"
        />

        {/* Special Offers */}
        <SpecialOffers
          offers={personalTrainerData.specialOffers}
          theme="personal"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <h2 className="text-personal-accent font-semibold text-xl mb-2 text-center">
            Serviços Oferecidos
          </h2>
          <div className="absolute inset-0 bg-gradient-to-b from-personal-secondary/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {personalTrainerData.services.map((service, index) => (
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
              theme="personal"
            />
          ))}
        </div>
        
        {/* Scheduling Button */}
        <div className="mb-8">
          <a 
            href="#agendar"
            className="w-full py-3.5 bg-personal-primary hover:bg-personal-primary/90 text-white rounded-lg flex items-center justify-center font-medium transition-all shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Avaliação Gratuita
          </a>
        </div>

        {/* Gallery */}
        <ImageGallery 
          images={personalTrainerData.gallery}
          theme="personal"
        />

        {/* Testimonials */}
        <TestimonialsSection
          testimonials={personalTrainerData.testimonials}
          theme="personal"
        />

        {/* FAQ Accordion */}
        {personalTrainerData.faq && personalTrainerData.faq.length > 0 && (
          <div className="mb-8">
            <h2 className="text-personal-accent font-semibold text-xl mb-4 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              {personalTrainerData.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="px-4 py-3 text-white hover:text-personal-accent text-left">
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
          links={personalTrainerData.socialLinks}
          theme="personal"
        />

        {/* Footer */}
        <Footer copyright={personalTrainerData.copyright} theme="personal" />
      </div>
    </div>
  );
}