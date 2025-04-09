type ServiceCardProps = {
  title: string;
  icon: string;
  description: string;
  features: string[];
  theme: "barber" | "mechanic" | "nutritionist";
};

export default function ServiceCard({
  title,
  icon,
  description,
  features,
  theme,
}: ServiceCardProps) {
  const themeClasses = {
    barber: {
      bg: "bg-gray-900 bg-opacity-80",
      border: "border-barber-secondary hover:border-barber-accent",
      title: "text-barber-secondary",
      icon: "text-barber-secondary",
      button: "border-barber-secondary text-barber-secondary hover:bg-barber-secondary",
    },
    mechanic: {
      bg: "bg-gray-900 bg-opacity-80",
      border: "border-mechanic-primary hover:border-mechanic-accent",
      title: "text-mechanic-primary",
      icon: "text-mechanic-primary",
      button: "border-mechanic-primary text-mechanic-primary hover:bg-mechanic-primary",
    },
    nutritionist: {
      bg: "bg-white bg-opacity-10",
      border: "border-nutritionist-primary hover:border-nutritionist-accent",
      title: "text-white",
      icon: "text-nutritionist-accent",
      button: "border-white text-white hover:bg-white hover:text-nutritionist-primary",
    },
  };

  const classes = themeClasses[theme];

  return (
    <div
      className={`${classes.bg} rounded-xl p-6 border-l-4 ${classes.border} backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-lg`}
    >
      <h3
        className={`${classes.title} flex items-center text-xl font-semibold mb-3`}
      >
        <i className={`${icon} mr-3 text-2xl ${classes.icon}`}></i>
        {title}
      </h3>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      <ul className="mb-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className={`fas fa-check ${classes.icon} mt-1 mr-2`}></i>
            <span className="text-sm text-gray-200">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`inline-block px-4 py-2 border ${classes.button} rounded-full text-sm font-semibold transition hover:text-white`}
      >
        Ver detalhes
      </a>
    </div>
  );
}
