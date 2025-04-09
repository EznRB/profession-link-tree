import React from "react";
import { dentistData } from "@/lib/data";
import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialCard from "./common/TestimonialCard";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";

export default function DentistProfile() {
  return (
    <div className="min-h-screen bg-dentist text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Profile Header */}
        <div className="mb-12 animate-fadeIn">
          <ProfileHeader
            name={dentistData.name}
            title={dentistData.title}
            imageSrc={dentistData.imageSrc}
            badges={dentistData.badges}
            theme="dentist"
          />
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="border-b-4 border-dentist-accent pb-2">Serviços Odontológicos</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dentistData.services.map((service, index) => (
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
                  theme="dentist"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="border-b-4 border-dentist-accent pb-2">Depoimentos</span>
          </h2>
          <TestimonialCard
            quote={dentistData.testimonial.quote}
            author={dentistData.testimonial.author}
            role={dentistData.testimonial.role}
            avatarSrc={dentistData.testimonial.avatarSrc}
            theme="dentist"
          />
        </div>

        {/* Social Links */}
        <div className="mb-12 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="border-b-4 border-dentist-accent pb-2">Minhas Redes</span>
          </h2>
          <div className="max-w-md mx-auto">
            <SocialLinks links={dentistData.socialLinks} theme="dentist" />
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="mb-16 flex justify-center animate-fadeIn" style={{ animationDelay: '1s' }}>
          <WhatsAppButton
            phoneNumber={dentistData.phoneNumber}
            message={dentistData.whatsappMessage}
            label={dentistData.whatsappLabel}
            theme="dentist"
          />
        </div>

        {/* Footer */}
        <Footer copyright={dentistData.copyright} theme="dentist" />
      </div>
    </div>
  );
}