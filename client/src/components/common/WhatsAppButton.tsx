type WhatsAppButtonProps = {
  phoneNumber: string;
  message: string;
  label: string;
  theme: "barber" | "mechanic" | "nutritionist";
};

export default function WhatsAppButton({
  phoneNumber,
  message,
  label,
  theme,
}: WhatsAppButtonProps) {
  const themeClasses = {
    barber: "from-barber-secondary to-barber-primary",
    mechanic: "from-mechanic-primary to-red-700",
    nutritionist: "from-nutritionist-primary to-green-700",
  };

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className={`block bg-gradient-to-r ${themeClasses[theme]} text-white text-center py-4 px-6 rounded-full font-bold text-lg mb-8 transform transition hover:-translate-y-1 hover:shadow-lg shine-effect w-full`}
    >
      <i className="fab fa-whatsapp mr-2"></i>
      {label}
    </button>
  );
}
