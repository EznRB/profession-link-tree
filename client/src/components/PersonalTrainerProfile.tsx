import React from "react";
import { personalTrainerData } from "../lib/data";
import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialCard from "./common/TestimonialCard";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";

export default function PersonalTrainerProfile() {
  return (
    <div className="min-h-screen bg-personal text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Profile Header */}
        <div className="mb-12 animate-fadeIn">
          <ProfileHeader
            name={personalTrainerData.name}
            title={personalTrainerData.title}
            imageSrc={personalTrainerData.imageSrc}
            badges={personalTrainerData.badges}
            theme="personal"
          />
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="border-b-4 border-personal-accent pb-2">Serviços Fitness</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {personalTrainerData.services.map((service, index) => (
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
                  theme="personal"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="border-b-4 border-personal-accent pb-2">Depoimentos</span>
          </h2>
          <TestimonialCard
            quote={personalTrainerData.testimonial.quote}
            author={personalTrainerData.testimonial.author}
            role={personalTrainerData.testimonial.role}
            avatarSrc={personalTrainerData.testimonial.avatarSrc}
            theme="personal"
          />
        </div>

        {/* Social Links */}
        <div className="mb-12 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="border-b-4 border-personal-accent pb-2">Minhas Redes</span>
          </h2>
          <div className="max-w-md mx-auto">
            <SocialLinks links={personalTrainerData.socialLinks} theme="personal" />
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="mb-16 flex justify-center animate-fadeIn" style={{ animationDelay: '1s' }}>
          <WhatsAppButton
            phoneNumber={personalTrainerData.phoneNumber}
            message={personalTrainerData.whatsappMessage}
            label={personalTrainerData.whatsappLabel}
            theme="personal"
          />
        </div>

        {/* Footer */}
        <Footer copyright={personalTrainerData.copyright} theme="personal" />
      </div>
    </div>
  );
}