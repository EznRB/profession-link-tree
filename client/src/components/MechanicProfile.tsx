import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialCard from "./common/TestimonialCard";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import { mechanicData } from "@/lib/data";

export default function MechanicProfile() {
  return (
    <div className="bg-mechanic text-white min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Profile Header */}
        <ProfileHeader
          name={mechanicData.name}
          title={mechanicData.title}
          imageSrc={mechanicData.imageSrc}
          badges={mechanicData.badges}
          theme="mechanic"
        />

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={mechanicData.phoneNumber}
          message={mechanicData.whatsappMessage}
          label={mechanicData.whatsappLabel}
          theme="mechanic"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8">
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
