type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
  theme: "barber" | "mechanic" | "nutritionist";
};

export default function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
  theme,
}: TestimonialCardProps) {
  const themeClasses = {
    barber: {
      bg: "bg-gray-800 bg-opacity-60",
      border: "border-gray-700",
      authorText: "text-barber-accent",
      avatarBorder: "border-barber-secondary",
    },
    mechanic: {
      bg: "bg-gray-800 bg-opacity-60",
      border: "border-gray-700",
      authorText: "text-mechanic-accent",
      avatarBorder: "border-mechanic-primary",
    },
    nutritionist: {
      bg: "bg-white bg-opacity-10",
      border: "border-white border-opacity-10",
      authorText: "text-nutritionist-accent",
      avatarBorder: "border-nutritionist-accent",
    },
  };

  const classes = themeClasses[theme];

  return (
    <div
      className={`${classes.bg} rounded-xl p-6 mb-8 relative overflow-hidden border ${classes.border}`}
    >
      <div className="absolute top-6 left-6 text-gray-700 opacity-10 text-5xl">
        <i className="fas fa-quote-left"></i>
      </div>
      <p className="relative z-10 text-gray-300 italic mb-4 text-sm leading-relaxed">
        {quote}
      </p>
      <div className="flex items-center">
        <img
          src={avatarSrc}
          alt={author}
          className={`w-10 h-10 rounded-full object-cover mr-3 border-2 ${classes.avatarBorder}`}
        />
        <div>
          <p className={`${classes.authorText} font-semibold text-sm`}>
            {author}
          </p>
          <p className="text-gray-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
