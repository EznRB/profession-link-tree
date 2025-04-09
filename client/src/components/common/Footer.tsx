type FooterProps = {
  copyright: string;
  theme: "barber" | "mechanic" | "nutritionist" | "photographer" | "dentist" | "personal";
};

export default function Footer({ copyright, theme }: FooterProps) {
  const themeClasses = {
    barber: "text-gray-400 border-gray-700",
    mechanic: "text-gray-400 border-gray-700",
    nutritionist: "text-gray-300 border-white border-opacity-10",
    photographer: "text-gray-400 border-gray-700",
    dentist: "text-gray-300 border-white border-opacity-10",
    personal: "text-gray-400 border-gray-700",
  };

  return (
    <div
      className={`text-center ${themeClasses[theme]} text-xs border-t pt-4 mt-8`}
    >
      <p>{copyright}</p>
    </div>
  );
}
