import ProfileHeader from "./common/ProfileHeader";
import ServiceCard from "./common/ServiceCard";
import TestimonialCard from "./common/TestimonialCard";
import SocialLinks from "./common/SocialLinks";
import WhatsAppButton from "./common/WhatsAppButton";
import Footer from "./common/Footer";
import { nutritionistData } from "@/lib/data";

export default function NutritionistProfile() {
  return (
    <div className="bg-nutritionist text-white min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Profile Header */}
        <ProfileHeader
          name={nutritionistData.name}
          title={nutritionistData.title}
          imageSrc={nutritionistData.imageSrc}
          badges={nutritionistData.badges}
          theme="nutritionist"
        />

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber={nutritionistData.phoneNumber}
          message={nutritionistData.whatsappMessage}
          label={nutritionistData.whatsappLabel}
          theme="nutritionist"
        />

        {/* Services */}
        <div className="grid gap-6 mb-8">
          {nutritionistData.services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              theme="nutritionist"
            />
          ))}
        </div>

        {/* Testimonial */}
        <TestimonialCard
          quote={nutritionistData.testimonial.quote}
          author={nutritionistData.testimonial.author}
          role={nutritionistData.testimonial.role}
          avatarSrc={nutritionistData.testimonial.avatarSrc}
          theme="nutritionist"
        />

        {/* Social Media */}
        <SocialLinks
          links={nutritionistData.socialLinks}
          theme="nutritionist"
        />

        {/* Footer */}
        <Footer copyright={nutritionistData.copyright} theme="nutritionist" />
      </div>
    </div>
  );
}
