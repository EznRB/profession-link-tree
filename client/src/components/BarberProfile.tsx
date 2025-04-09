import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialCard from "./common/TestimonialCard";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import { barberData } from "@/lib/data";
import { Scissors, MoveHorizontal, Clock, Calendar, MapPin } from "lucide-react";

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

        {/* Business Info */}
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
              <span className="text-sm">Rua dos Barbeiros, 123 - Centro<br />São Paulo - SP</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={barberData.phoneNumber}
          message={barberData.whatsappMessage}
          label={barberData.whatsappLabel}
          theme="barber"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-barber-secondary/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {barberData.services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              theme="barber"
            />
          ))}
        </div>
        
        {/* Agenda Button */}
        <div className="mb-8">
          <button 
            className="w-full py-3.5 bg-barber-secondary hover:bg-barber-secondary/90 text-white rounded-lg flex items-center justify-center font-medium transition-all shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Ver Agenda Disponível
          </button>
        </div>

        {/* Testimonial */}
        <TestimonialCard
          quote={barberData.testimonial.quote}
          author={barberData.testimonial.author}
          role={barberData.testimonial.role}
          avatarSrc={barberData.testimonial.avatarSrc}
          theme="barber"
        />

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
