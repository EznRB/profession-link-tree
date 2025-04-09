import { Calendar, Gift, Clock, Tag } from 'lucide-react';

type SpecialOffer = {
  title: string;
  description: string;
  validUntil?: string;
  couponCode?: string;
  ctaText: string;
  ctaUrl: string;
};

type SpecialOffersProps = {
  offers: SpecialOffer[];
  theme: "barber" | "mechanic" | "nutritionist" | "photographer" | "dentist" | "personal";
};

export default function SpecialOffers({ offers, theme }: SpecialOffersProps) {
  if (!offers || offers.length === 0) {
    return null;
  }

  const themeClasses = {
    barber: {
      bg: "from-barber-primary/10 to-barber-secondary/10",
      border: "border-barber-secondary/20",
      title: "text-barber-accent",
      button: "bg-barber-secondary hover:bg-barber-secondary/90",
      tag: "bg-barber-primary/20 text-barber-primary",
    },
    mechanic: {
      bg: "from-mechanic-primary/10 to-red-800/10",
      border: "border-mechanic-primary/20",
      title: "text-mechanic-accent",
      button: "bg-mechanic-primary hover:bg-mechanic-primary/90",
      tag: "bg-mechanic-primary/20 text-mechanic-primary",
    },
    nutritionist: {
      bg: "from-nutritionist-primary/10 to-green-600/10",
      border: "border-nutritionist-primary/20",
      title: "text-nutritionist-accent",
      button: "bg-nutritionist-primary hover:bg-nutritionist-primary/90",
      tag: "bg-nutritionist-primary/20 text-nutritionist-primary",
    },
    photographer: {
      bg: "from-photographer-primary/10 to-photographer-secondary/10",
      border: "border-photographer-primary/20",
      title: "text-photographer-accent",
      button: "bg-photographer-primary hover:bg-photographer-primary/90",
      tag: "bg-photographer-primary/20 text-photographer-primary",
    },
    dentist: {
      bg: "from-dentist-primary/10 to-dentist-secondary/10",
      border: "border-dentist-primary/20",
      title: "text-dentist-accent",
      button: "bg-dentist-primary hover:bg-dentist-primary/90",
      tag: "bg-dentist-primary/20 text-dentist-primary",
    },
    personal: {
      bg: "from-personal-primary/10 to-personal-secondary/10",
      border: "border-personal-primary/20",
      title: "text-personal-accent",
      button: "bg-personal-primary hover:bg-personal-primary/90",
      tag: "bg-personal-primary/20 text-personal-primary",
    },
  };

  const classes = themeClasses[theme];

  return (
    <div className="mb-8">
      <h2 className={`${classes.title} text-xl font-semibold mb-4 text-center flex items-center justify-center`}>
        <Gift className="w-5 h-5 mr-2" />
        Ofertas Especiais
      </h2>
      <div className="space-y-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${classes.bg} backdrop-blur-sm rounded-xl p-4 border ${classes.border} relative overflow-hidden shine-effect`}
          >
            <div className="absolute -right-6 -top-6 opacity-10">
              <Gift className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <h3 className={`${classes.title} font-semibold text-lg mb-2`}>
                {offer.title}
              </h3>
              <p className="text-white/90 text-sm mb-3">
                {offer.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {offer.validUntil && (
                  <div className={`${classes.tag} px-2 py-1 rounded-md text-xs font-medium flex items-center`}>
                    <Clock className="w-3 h-3 mr-1" />
                    {offer.validUntil}
                  </div>
                )}
                
                {offer.couponCode && (
                  <div className={`${classes.tag} px-2 py-1 rounded-md text-xs font-medium flex items-center`}>
                    <Tag className="w-3 h-3 mr-1" />
                    Cupom: {offer.couponCode}
                  </div>
                )}
              </div>
              
              <a
                href={offer.ctaUrl}
                className={`inline-block ${classes.button} text-white py-2 px-4 rounded-md text-sm font-medium flex items-center w-full text-center justify-center`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {offer.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}