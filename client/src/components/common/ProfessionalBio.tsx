import { Award, Star, MapPin } from 'lucide-react';

type Location = {
  address: string;
  city: string;
  googleMapsUrl: string;
};

type ProfessionalBioProps = {
  bio: string;
  credentials: string[];
  location?: Location;
  theme: "barber" | "mechanic" | "nutritionist" | "photographer" | "dentist" | "personal";
};

export default function ProfessionalBio({ bio, credentials, location, theme }: ProfessionalBioProps) {
  const themeClasses = {
    barber: {
      bg: "from-barber-primary/10 to-barber-secondary/10", 
      border: "border-barber-secondary/20",
      title: "text-barber-accent",
      icon: "text-barber-secondary",
    },
    mechanic: {
      bg: "from-mechanic-primary/10 to-red-800/10",
      border: "border-mechanic-primary/20",
      title: "text-mechanic-accent",
      icon: "text-mechanic-secondary",
    },
    nutritionist: {
      bg: "from-nutritionist-primary/10 to-green-600/10",
      border: "border-nutritionist-primary/20",
      title: "text-nutritionist-accent",
      icon: "text-nutritionist-secondary",
    },
    photographer: {
      bg: "from-photographer-primary/10 to-photographer-secondary/10",
      border: "border-photographer-primary/20",
      title: "text-photographer-accent",
      icon: "text-photographer-secondary",
    },
    dentist: {
      bg: "from-dentist-primary/10 to-dentist-secondary/10",
      border: "border-dentist-primary/20",
      title: "text-dentist-accent",
      icon: "text-dentist-secondary",
    },
    personal: {
      bg: "from-personal-primary/10 to-personal-secondary/10",
      border: "border-personal-primary/20",
      title: "text-personal-accent",
      icon: "text-personal-secondary",
    },
  };

  const classes = themeClasses[theme];

  return (
    <div className="mb-6">
      <div className={`bg-gradient-to-br ${classes.bg} backdrop-blur-sm rounded-xl p-4 border ${classes.border}`}>
        {/* Bio */}
        <div className="mb-4">
          <h2 className={`${classes.title} text-lg font-semibold mb-2 flex items-center`}>
            <Star className={`w-5 h-5 mr-2 ${classes.icon}`} />
            Sobre Mim
          </h2>
          <p className="text-white/90 text-sm leading-relaxed">
            {bio}
          </p>
        </div>
        
        {/* Credentials */}
        <div className="mb-4">
          <h3 className={`${classes.title} text-base font-semibold mb-2 flex items-center`}>
            <Award className={`w-5 h-5 mr-2 ${classes.icon}`} />
            Qualificações & Certificações
          </h3>
          <ul className="space-y-2">
            {credentials.map((credential, index) => (
              <li key={index} className="text-white/90 text-sm flex items-start">
                <span className="inline-block h-5 w-5 text-xs rounded-full bg-white/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                {credential}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Location if available */}
        {location && (
          <div>
            <h3 className={`${classes.title} text-base font-semibold mb-2 flex items-center`}>
              <MapPin className={`w-5 h-5 mr-2 ${classes.icon}`} />
              Localização
            </h3>
            <div className="text-white/90 text-sm">
              <p>{location.address}</p>
              <p>{location.city}</p>
              <a 
                href={location.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white underline hover:text-white/80 inline-block mt-1"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}