import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialsSection from "./common/TestimonialsSection";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import { photographerData } from "@/lib/data";
import { Camera } from "lucide-react";

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

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={photographerData.phoneNumber}
          message={photographerData.whatsappMessage}
          label={photographerData.whatsappLabel}
          theme="photographer"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-photographer-secondary/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {photographerData.services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              theme="photographer"
            />
          ))}
        </div>

        {/* Testimonial - usando o testimonial como um array de um item */}
        <TestimonialsSection
          testimonials={[photographerData.testimonial]}
          theme="photographer"
        />

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