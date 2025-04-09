import React from "react";
import { photographerData } from "@/lib/data";
import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialCard from "./common/TestimonialCard";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";

export default function PhotographerProfile() {
  return (
    <div className="min-h-screen bg-photographer text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Profile Header */}
        <div className="mb-12 animate-fadeIn">
          <ProfileHeader
            name={photographerData.name}
            title={photographerData.title}
            imageSrc={photographerData.imageSrc}
            badges={photographerData.badges}
            theme="photographer"
          />
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="border-b-4 border-photographer-accent pb-2">Serviços Oferecidos</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {photographerData.services.map((service, index) => (
              <div 
                key={index} 
                className="animate-fadeIn" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ServiceCard
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  features={service.features}
                  theme="photographer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="border-b-4 border-photographer-accent pb-2">Depoimentos</span>
          </h2>
          <TestimonialCard
            quote={photographerData.testimonial.quote}
            author={photographerData.testimonial.author}
            role={photographerData.testimonial.role}
            avatarSrc={photographerData.testimonial.avatarSrc}
            theme="photographer"
          />
        </div>

        {/* Social Links */}
        <div className="mb-12 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="border-b-4 border-photographer-accent pb-2">Minhas Redes</span>
          </h2>
          <div className="max-w-md mx-auto">
            <SocialLinks links={photographerData.socialLinks} theme="photographer" />
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="mb-16 flex justify-center animate-fadeIn" style={{ animationDelay: '1s' }}>
          <WhatsAppButton
            phoneNumber={photographerData.phoneNumber}
            message={photographerData.whatsappMessage}
            label={photographerData.whatsappLabel}
            theme="photographer"
          />
        </div>

        {/* Footer */}
        <Footer copyright={photographerData.copyright} theme="photographer" />
      </div>
    </div>
  );
}