import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialCard from "./common/TestimonialCard";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import { barberData } from "@/lib/data";

export default function BarberProfile() {
  return (
    <div className="bg-barber text-white min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Profile Header */}
        <ProfileHeader
          name={barberData.name}
          title={barberData.title}
          imageSrc={barberData.imageSrc}
          badges={barberData.badges}
          theme="barber"
        />

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={barberData.phoneNumber}
          message={barberData.whatsappMessage}
          label={barberData.whatsappLabel}
          theme="barber"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8">
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
