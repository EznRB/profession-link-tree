type SocialLink = {
  icon: string;
  url: string;
};

type SocialLinksProps = {
  links: SocialLink[];
  theme: "barber" | "mechanic" | "nutritionist" | "photographer" | "dentist" | "personal";
};

export default function SocialLinks({ links, theme }: SocialLinksProps) {
  // Gradients para cada tema
  const themeClasses = {
    barber: "hover:from-barber-primary hover:to-barber-secondary hover:shadow-barber-primary/30",
    mechanic: "hover:from-mechanic-primary hover:to-red-800 hover:shadow-mechanic-primary/30",
    nutritionist: "hover:from-nutritionist-primary hover:to-green-600 hover:shadow-nutritionist-primary/30",
    photographer: "hover:from-photographer-primary hover:to-photographer-secondary hover:shadow-photographer-primary/30",
    dentist: "hover:from-dentist-primary hover:to-dentist-secondary hover:shadow-dentist-primary/30",
    personal: "hover:from-personal-primary hover:to-personal-secondary hover:shadow-personal-primary/30",
  };

  // Cores de borda para cada tema
  const borderClasses = {
    barber: "focus:border-barber-primary",
    mechanic: "focus:border-mechanic-primary",
    nutritionist: "focus:border-nutritionist-primary",
    photographer: "focus:border-photographer-primary",
    dentist: "focus:border-dentist-primary",
    personal: "focus:border-personal-primary",
  };

  // Função para identificar nome da rede social com base no ícone
  const getSocialNetworkName = (iconClass: string): string => {
    const icons: Record<string, string> = {
      "fab fa-facebook-f": "Facebook",
      "fab fa-instagram": "Instagram",
      "fab fa-twitter": "Twitter",
      "fab fa-linkedin-in": "LinkedIn",
      "fab fa-youtube": "YouTube",
      "fab fa-pinterest": "Pinterest",
      "fab fa-tiktok": "TikTok",
      "fab fa-behance": "Behance",
      "fab fa-flickr": "Flickr",
      "fab fa-spotify": "Spotify",
      "fab fa-whatsapp": "WhatsApp",
      "fab fa-telegram": "Telegram",
      "fab fa-google": "Google",
      "fab fa-github": "GitHub",
      "fab fa-dribbble": "Dribbble",
      "fab fa-medium": "Medium",
      "fab fa-discord": "Discord",
      "fab fa-twitch": "Twitch",
      "fab fa-snapchat-ghost": "Snapchat",
      "fab fa-reddit-alien": "Reddit",
    };

    return icons[iconClass] || "Rede Social";
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-lg mx-auto">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className={`w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-gradient-to-br ${themeClasses[theme]} border-2 border-transparent ${borderClasses[theme]} focus:outline-none`}
          target="_blank"
          rel="noopener noreferrer"
          title={getSocialNetworkName(link.icon)}
          aria-label={getSocialNetworkName(link.icon)}
          style={{ animationDelay: `${index * 0.1}s` }}
          data-social={getSocialNetworkName(link.icon).toLowerCase()}
        >
          <i className={`${link.icon} text-xl`}></i>
        </a>
      ))}
    </div>
  );
}
