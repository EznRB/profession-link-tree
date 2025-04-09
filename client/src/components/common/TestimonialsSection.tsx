import { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
  theme: "barber" | "mechanic" | "nutritionist" | "photographer" | "dentist" | "personal";
};

export default function TestimonialsSection({
  testimonials,
  theme
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const themeClasses = {
    barber: {
      text: "text-barber-accent",
      border: "border-barber-secondary",
      button: "hover:bg-barber-primary hover:border-barber-primary",
    },
    mechanic: {
      text: "text-mechanic-accent",
      border: "border-mechanic-primary",
      button: "hover:bg-mechanic-primary hover:border-mechanic-primary",
    },
    nutritionist: {
      text: "text-nutritionist-accent",
      border: "border-nutritionist-primary",
      button: "hover:bg-nutritionist-primary hover:border-nutritionist-primary",
    },
    photographer: {
      text: "text-photographer-accent",
      border: "border-photographer-primary",
      button: "hover:bg-photographer-primary hover:border-photographer-primary",
    },
    dentist: {
      text: "text-dentist-accent",
      border: "border-dentist-primary",
      button: "hover:bg-dentist-primary hover:border-dentist-primary",
    },
    personal: {
      text: "text-personal-accent",
      border: "border-personal-primary",
      button: "hover:bg-personal-primary hover:border-personal-primary",
    },
  };

  const classes = themeClasses[theme];

  return (
    <div className="mb-8 relative">
      <h2 className={`${classes.text} text-xl font-semibold mb-4 text-center`}>
        O que nossos clientes dizem
      </h2>
      
      <div className="relative">
        <TestimonialCard
          quote={testimonials[currentIndex].quote}
          author={testimonials[currentIndex].author}
          role={testimonials[currentIndex].role}
          avatarSrc={testimonials[currentIndex].avatarSrc}
          theme={theme}
        />
        
        {testimonials.length > 1 && (
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
            <button
              onClick={handlePrev}
              className={`-left-4 absolute w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center bg-gray-900/70 text-white ${classes.button}`}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleNext}
              className={`-right-4 absolute w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center bg-gray-900/70 text-white ${classes.button}`}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? `${classes.border} bg-white` : 'bg-gray-600'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}