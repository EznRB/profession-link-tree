import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialsSection from "./common/TestimonialsSection";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import { personalTrainerData } from "@/lib/data";
import { Dumbbell } from "lucide-react";

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

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={personalTrainerData.phoneNumber}
          message={personalTrainerData.whatsappMessage}
          label={personalTrainerData.whatsappLabel}
          theme="personal"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-personal-secondary/20 to-transparent opacity-30 blur-xl -z-10 rounded-3xl"></div>
          {personalTrainerData.services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              theme="personal"
            />
          ))}
        </div>

        {/* Testimonial - usando o testimonial como um array de um item */}
        <TestimonialsSection
          testimonials={[personalTrainerData.testimonial]}
          theme="personal"
        />

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