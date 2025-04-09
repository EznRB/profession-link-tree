import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialsSection from "./common/TestimonialsSection";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import { dentistData } from "@/lib/data";
import { Smile } from "lucide-react";

export default function DentistProfile() {
  return (
    <div className="bg-dentist text-white min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 opacity-5">
        <Smile className="w-48 h-48 -rotate-12" />
      </div>
      
      <div className="max-w-md mx-auto relative z-10">
        {/* Profile Header */}
        <ProfileHeader
          name={dentistData.name}
          title={dentistData.title}
          imageSrc={dentistData.imageSrc}
          badges={dentistData.badges}
          theme="dentist"
        />

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={dentistData.phoneNumber}
          message={dentistData.whatsappMessage}
          label={dentistData.whatsappLabel}
          theme="dentist"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dentist-secondary/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {dentistData.services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              theme="dentist"
            />
          ))}
        </div>

        {/* Testimonial - usando o testimonial como um array de um item */}
        <TestimonialsSection
          testimonials={[dentistData.testimonial]}
          theme="dentist"
        />

        {/* Social Media */}
        <SocialLinks
          links={dentistData.socialLinks}
          theme="dentist"
        />

        {/* Footer */}
        <Footer copyright={dentistData.copyright} theme="dentist" />
      </div>
    </div>
  );
}