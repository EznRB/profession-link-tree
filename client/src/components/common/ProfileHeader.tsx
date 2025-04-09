type ProfileHeaderProps = {
  name: string;
  title: string;
  imageSrc: string;
  badges: string[];
  theme: "barber" | "mechanic" | "nutritionist";
};

export default function ProfileHeader({
  name,
  title,
  imageSrc,
  badges,
  theme,
}: ProfileHeaderProps) {
  const themeClasses = {
    barber: {
      border: "border-barber-secondary",
      badge: "bg-barber-secondary",
      name: "from-barber-secondary to-barber-accent",
      title: "text-barber-accent",
    },
    mechanic: {
      border: "border-mechanic-primary",
      badge: "bg-mechanic-primary",
      name: "from-mechanic-primary to-mechanic-accent",
      title: "text-mechanic-accent",
    },
    nutritionist: {
      border: "border-white",
      badge: "bg-nutritionist-primary",
      name: "from-nutritionist-primary to-nutritionist-accent",
      title: "text-nutritionist-accent",
    },
  };

  const classes = themeClasses[theme];

  return (
    <div className="text-center mb-8 animate-[fadeIn_1s_ease-out]">
      <div className="relative inline-block mb-6">
        <img
          src={imageSrc}
          alt={`${name} - ${title}`}
          className={`w-40 h-40 rounded-full object-cover border-4 ${classes.border} shadow-lg floating`}
        />
        <div
          className={`absolute bottom-2 right-2 ${classes.badge} text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-gray-900`}
        >
          <i className="fas fa-check text-sm"></i>
        </div>
      </div>

      <h1
        className={`text-3xl font-bold mb-1 bg-gradient-to-r ${classes.name} bg-clip-text text-transparent`}
      >
        {name}
      </h1>
      <p className={`${classes.title} text-lg font-medium mb-3`}>{title}</p>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {badges.map((badge, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-opacity-10 bg-white rounded-full text-xs font-medium border border-opacity-10 border-white"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
