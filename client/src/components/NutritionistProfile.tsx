import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialCard from "./common/TestimonialCard";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import { nutritionistData } from "@/lib/data";
import { Apple, Salad, Utensils, Clock, Calendar, MapPin, Activity, Lightbulb, Weight } from "lucide-react";

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
              <span className="text-sm">Rua da Saúde, 789 - Jardim Botânico<br />São Paulo - SP</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={nutritionistData.phoneNumber}
          message={nutritionistData.whatsappMessage}
          label={nutritionistData.whatsappLabel}
          theme="nutritionist"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-nutritionist-accent/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {nutritionistData.services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              theme="nutritionist"
            />
          ))}
        </div>
        
        {/* Appointment Button */}
        <div className="mb-8">
          <button 
            className="w-full py-3.5 bg-nutritionist-primary hover:bg-nutritionist-primary/90 text-white rounded-lg flex items-center justify-center font-medium transition-all shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Consulta Online
          </button>
        </div>

        {/* Testimonial */}
        <TestimonialCard
          quote={nutritionistData.testimonial.quote}
          author={nutritionistData.testimonial.author}
          role={nutritionistData.testimonial.role}
          avatarSrc={nutritionistData.testimonial.avatarSrc}
          theme="nutritionist"
        />

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
