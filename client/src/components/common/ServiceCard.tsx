import { Clock, Calendar } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  icon: string;
  description: string;
  features: string[];
  price?: string;
  duration?: string;
  bookingUrl?: string;
  featured?: boolean;
  theme: "barber" | "mechanic" | "nutritionist" | "photographer" | "dentist" | "personal";
};

export default function ServiceCard({
  title,
  icon,
  description,
  features,
  price,
  duration,
  bookingUrl = "#",
  featured = false,
  theme,
}: ServiceCardProps) {
  const themeClasses = {
    barber: {
      bg: "bg-gray-900 bg-opacity-80",
      border: "border-barber-secondary hover:border-barber-accent",
      title: "text-barber-secondary",
      icon: "text-barber-secondary",
      button: "border-barber-secondary text-barber-secondary hover:bg-barber-secondary",
      buttonCta: "bg-barber-primary hover:bg-barber-primary/90 text-white",
      featured: "from-barber-primary/20 to-barber-secondary/20 border-barber-primary",
      featuredTag: "bg-barber-primary text-white",
    },
    mechanic: {
      bg: "bg-gray-900 bg-opacity-80",
      border: "border-mechanic-primary hover:border-mechanic-accent",
      title: "text-mechanic-primary",
      icon: "text-mechanic-primary",
      button: "border-mechanic-primary text-mechanic-primary hover:bg-mechanic-primary",
      buttonCta: "bg-mechanic-primary hover:bg-mechanic-primary/90 text-white",
      featured: "from-mechanic-primary/20 to-red-700/20 border-mechanic-primary",
      featuredTag: "bg-mechanic-primary text-white",
    },
    nutritionist: {
      bg: "bg-white bg-opacity-10",
      border: "border-nutritionist-primary hover:border-nutritionist-accent",
      title: "text-white",
      icon: "text-nutritionist-accent",
      button: "border-white text-white hover:bg-white hover:text-nutritionist-primary",
      buttonCta: "bg-nutritionist-primary hover:bg-nutritionist-primary/90 text-white",
      featured: "from-nutritionist-primary/20 to-green-700/20 border-nutritionist-primary",
      featuredTag: "bg-nutritionist-primary text-white",
    },
    photographer: {
      bg: "bg-gray-900 bg-opacity-80",
      border: "border-photographer-secondary hover:border-photographer-accent",
      title: "text-photographer-secondary",
      icon: "text-photographer-accent",
      button: "border-photographer-secondary text-photographer-secondary hover:bg-photographer-secondary",
      buttonCta: "bg-photographer-primary hover:bg-photographer-primary/90 text-white",
      featured: "from-photographer-primary/20 to-photographer-secondary/20 border-photographer-primary",
      featuredTag: "bg-photographer-primary text-white",
    },
    dentist: {
      bg: "bg-white bg-opacity-10",
      border: "border-dentist-secondary hover:border-dentist-accent",
      title: "text-white",
      icon: "text-dentist-accent",
      button: "border-white text-white hover:bg-white hover:text-dentist-primary",
      buttonCta: "bg-dentist-primary hover:bg-dentist-primary/90 text-white",
      featured: "from-dentist-primary/20 to-dentist-secondary/20 border-dentist-primary",
      featuredTag: "bg-dentist-primary text-white",
    },
    personal: {
      bg: "bg-gray-900 bg-opacity-80",
      border: "border-personal-secondary hover:border-personal-accent",
      title: "text-personal-secondary",
      icon: "text-personal-accent",
      button: "border-personal-secondary text-personal-secondary hover:bg-personal-secondary",
      buttonCta: "bg-personal-primary hover:bg-personal-primary/90 text-white",
      featured: "from-personal-primary/20 to-personal-secondary/20 border-personal-primary",
      featuredTag: "bg-personal-primary text-white",
    },
  };

  const classes = themeClasses[theme];

  return (
    <div
      className={`${featured ? `bg-gradient-to-br ${classes.featured}` : classes.bg} rounded-xl p-6 ${featured ? 'border' : 'border-l-4'} ${featured ? classes.border : classes.border} backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-lg relative overflow-hidden`}
    >
      {featured && (
        <div className="absolute -right-12 top-7 w-40 transform rotate-45">
          <div className={`py-1 text-center text-xs font-bold uppercase ${classes.featuredTag}`}>
            Mais Popular
          </div>
        </div>
      )}
      
      <h3
        className={`${classes.title} flex items-center text-xl font-semibold mb-3`}
      >
        <i className={`${icon} mr-3 text-2xl ${classes.icon}`}></i>
        {title}
      </h3>
      
      {/* Preço e duração */}
      {(price || duration) && (
        <div className="flex items-center justify-between mb-3 text-gray-300">
          {price && (
            <div className="text-lg font-bold">
              {price}
            </div>
          )}
          {duration && (
            <div className="text-sm flex items-center">
              <Clock className="w-4 h-4 mr-1 opacity-70" /> {duration}
            </div>
          )}
        </div>
      )}
      
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      
      <ul className="mb-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className={`fas fa-check ${classes.icon} mt-1 mr-2`}></i>
            <span className="text-sm text-gray-200">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-col sm:flex-row gap-2">
        {featured ? (
          <a
            href={bookingUrl}
            className={`px-4 py-2 ${classes.buttonCta} rounded-full text-sm font-semibold transition flex-1 text-center flex items-center justify-center`}
          >
            <Calendar className="w-4 h-4 mr-2" /> Agendar Agora
          </a>
        ) : (
          <>
            <a
              href={bookingUrl}
              className={`px-4 py-2 border ${classes.button} rounded-full text-sm font-semibold transition hover:text-white text-center flex-1`}
            >
              Agendar
            </a>
            <a
              href="#"
              className={`px-4 py-2 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-full text-sm font-semibold transition text-center`}
            >
              Detalhes
            </a>
          </>
        )}
      </div>
    </div>
  );
}
