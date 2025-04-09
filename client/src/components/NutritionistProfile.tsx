import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialsSection from "./common/TestimonialsSection";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import ProfessionalBio from "./common/ProfessionalBio";
import SpecialOffers from "./common/SpecialOffers";
import ImageGallery from "./common/ImageGallery";
import { nutritionistData } from "@/lib/data";
import { Apple, Salad, Utensils, Clock, Calendar, MapPin, Activity, Lightbulb, Weight, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function NutritionistProfile() {
  return (
    <div className="bg-nutritionist text-white min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Decorative elements specific to nutritionist */}
      <div className="absolute top-20 left-0 opacity-5">
        <Apple className="w-48 h-48 -rotate-12" />
      </div>
      <div className="absolute bottom-20 right-0 opacity-5">
        <Salad className="w-48 h-48 rotate-12" />
      </div>
      
      <div className="max-w-md mx-auto relative z-10">
        {/* Profile Header */}
        <ProfileHeader
          name={nutritionistData.name}
          title={nutritionistData.title}
          imageSrc={nutritionistData.imageSrc}
          badges={nutritionistData.badges}
          theme="nutritionist"
        />

        {/* Professional Bio with credentials */}
        <ProfessionalBio 
          bio={nutritionistData.bio}
          credentials={nutritionistData.credentials}
          location={nutritionistData.location}
          theme="nutritionist"
        />

        {/* Nutrition Quote */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20 shadow-xl">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-6 h-6 text-nutritionist-accent flex-shrink-0 mt-1" />
            <p className="text-sm italic">
              "A alimentação adequada é a base para uma vida saudável. Pequenas 
              mudanças nos hábitos alimentares podem transformar sua saúde e bem-estar."
            </p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={nutritionistData.phoneNumber}
          message={nutritionistData.whatsappMessage}
          label={nutritionistData.whatsappLabel}
          theme="nutritionist"
        />

        {/* Special Offers */}
        <SpecialOffers
          offers={nutritionistData.specialOffers}
          theme="nutritionist"
        />

        {/* Highlighted Features */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
            <Weight className="w-7 h-7 mx-auto mb-1 text-nutritionist-accent" />
            <div className="text-xs font-medium">Perda de Peso</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
            <Activity className="w-7 h-7 mx-auto mb-1 text-nutritionist-accent" />
            <div className="text-xs font-medium">Saúde Metabólica</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
            <Utensils className="w-7 h-7 mx-auto mb-1 text-nutritionist-accent" />
            <div className="text-xs font-medium">Reeducação</div>
          </div>
        </div>

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <h2 className="text-nutritionist-accent font-semibold text-xl mb-2 text-center">
            Serviços Oferecidos
          </h2>
          <div className="absolute inset-0 bg-gradient-to-b from-nutritionist-accent/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {nutritionistData.services.map((service, index) => (
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
              theme="nutritionist"
            />
          ))}
        </div>
        
        {/* Business Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20 shadow-xl">
          <h2 className="text-nutritionist-accent font-semibold text-lg mb-3 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-nutritionist-primary" />
            Atendimentos
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Segunda - Sexta</span>
              <span>09:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sábado</span>
              <span>09:00 - 12:00</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 text-nutritionist-primary flex-shrink-0" />
              <span className="text-sm">{nutritionistData.location.address}<br />{nutritionistData.location.city}</span>
            </div>
          </div>
        </div>
        
        {/* Appointment Button */}
        <div className="mb-8">
          <a
            href="#consulta"
            className="w-full py-3.5 bg-nutritionist-primary hover:bg-nutritionist-primary/90 text-white rounded-lg flex items-center justify-center font-medium transition-all shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Consulta Online
          </a>
        </div>

        {/* Gallery */}
        <ImageGallery 
          images={nutritionistData.gallery}
          theme="nutritionist"
        />

        {/* Testimonials */}
        <TestimonialsSection
          testimonials={nutritionistData.testimonials}
          theme="nutritionist"
        />

        {/* FAQ Accordion */}
        {nutritionistData.faq && nutritionistData.faq.length > 0 && (
          <div className="mb-8">
            <h2 className="text-nutritionist-accent font-semibold text-xl mb-4 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              {nutritionistData.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="px-4 py-3 text-white hover:text-nutritionist-accent text-left">
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
          links={nutritionistData.socialLinks}
          theme="nutritionist"
        />

        {/* Footer */}
        <Footer copyright={nutritionistData.copyright} theme="nutritionist" />
      </div>
    </div>
  );
}
