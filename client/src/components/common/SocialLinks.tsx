type SocialLink = {
  icon: string;
  url: string;
};

type SocialLinksProps = {
  links: SocialLink[];
  theme: "barber" | "mechanic" | "nutritionist";
};

export default function SocialLinks({ links, theme }: SocialLinksProps) {
  const themeClasses = {
    barber: "hover:from-barber-primary hover:to-barber-secondary",
    mechanic: "hover:from-mechanic-primary hover:to-red-800",
    nutritionist: "hover:from-nutritionist-primary hover:to-green-600",
  };

  return (
    <div className="flex justify-center gap-4 mb-8">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white transition hover:-translate-y-1 hover:bg-gradient-to-br ${themeClasses[theme]}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
}
