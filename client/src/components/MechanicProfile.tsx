import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialCard from "./common/TestimonialCard";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import { mechanicData } from "@/lib/data";
import { Wrench, Car, Clock, Calendar, MapPin, Phone, Gauge, Settings } from "lucide-react";

export default function MechanicProfile() {
  return (
    <div className="bg-mechanic text-white min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Decorative elements specific to mechanic */}
      <div className="absolute top-20 left-0 opacity-5">
        <Wrench className="w-48 h-48 -rotate-12" />
      </div>
      <div className="absolute bottom-20 right-0 opacity-5">
        <Car className="w-48 h-48 rotate-12" />
      </div>
      
      <div className="max-w-md mx-auto relative z-10">
        {/* Profile Header */}
        <ProfileHeader
          name={mechanicData.name}
          title={mechanicData.title}
          imageSrc={mechanicData.imageSrc}
          badges={mechanicData.badges}
          theme="mechanic"
        />

        {/* Business Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-6 border border-mechanic-accent/20 shadow-xl">
          <h2 className="text-mechanic-accent font-semibold text-lg mb-3 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-mechanic-primary" />
            Horário de Funcionamento
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Segunda - Sexta</span>
              <span>08:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sábado</span>
              <span>08:00 - 12:00</span>
            </div>
            <div className="flex justify-between">
              <span>Domingo</span>
              <span>Fechado</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 gap-3">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 text-mechanic-primary flex-shrink-0" />
              <span className="text-sm">Av. dos Mecânicos, 456 - Bairro Industrial<br />São Paulo - SP</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-mechanic-primary flex-shrink-0" />
              <span className="text-sm">(11) 3456-7890</span>
            </div>
          </div>
        </div>

        {/* Highlighted Services */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-mechanic-accent/20">
            <Gauge className="w-8 h-8 mx-auto mb-2 text-mechanic-primary" />
            <div className="text-sm font-medium">Diagnóstico Computadorizado</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-mechanic-accent/20">
            <Settings className="w-8 h-8 mx-auto mb-2 text-mechanic-primary" />
            <div className="text-sm font-medium">Reparo em Suspensão</div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={mechanicData.phoneNumber}
          message={mechanicData.whatsappMessage}
          label={mechanicData.whatsappLabel}
          theme="mechanic"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-mechanic-primary/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {mechanicData.services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              theme="mechanic"
            />
          ))}
        </div>
        
        {/* Emergency Button */}
        <div className="mb-8">
          <button 
            className="w-full py-3.5 bg-mechanic-primary hover:bg-mechanic-primary/90 text-white rounded-lg flex items-center justify-center font-medium transition-all shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Emergência 24h
          </button>
        </div>

        {/* Testimonial */}
        <TestimonialCard
          quote={mechanicData.testimonial.quote}
          author={mechanicData.testimonial.author}
          role={mechanicData.testimonial.role}
          avatarSrc={mechanicData.testimonial.avatarSrc}
          theme="mechanic"
        />

        {/* Social Media */}
        <SocialLinks
          links={mechanicData.socialLinks}
          theme="mechanic"
        />

        {/* Footer */}
        <Footer copyright={mechanicData.copyright} theme="mechanic" />
      </div>
    </div>
  );
}
