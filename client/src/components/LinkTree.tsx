import { useState } from "react";
import BarberProfile from "./BarberProfile";
import MechanicProfile from "./MechanicProfile";
import NutritionistProfile from "./NutritionistProfile";

type ProfileType = "barber" | "mechanic" | "nutritionist";

export default function LinkTree() {
  const [activeProfile, setActiveProfile] = useState<ProfileType>("barber");

  return (
    <div className="min-h-screen">
      {/* Navigation tabs for different professions */}
      <div className="flex justify-center sticky top-0 z-50 bg-gray-900 py-2 border-b border-gray-800">
        <div
          className="inline-flex rounded-md shadow-sm"
          role="group"
          aria-label="Profession selection"
        >
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              activeProfile === "barber"
                ? "bg-barber-primary"
                : "bg-barber-primary/70"
            } text-white hover:bg-opacity-80 focus:z-10 focus:ring-2`}
            onClick={() => setActiveProfile("barber")}
          >
            <i className="fas fa-cut mr-2"></i>Barbeiro
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              activeProfile === "mechanic"
                ? "bg-mechanic-primary"
                : "bg-mechanic-primary/70"
            } text-white hover:bg-opacity-80 focus:z-10 focus:ring-2`}
            onClick={() => setActiveProfile("mechanic")}
          >
            <i className="fas fa-wrench mr-2"></i>Mecânico
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              activeProfile === "nutritionist"
                ? "bg-nutritionist-primary"
                : "bg-nutritionist-primary/70"
            } text-white hover:bg-opacity-80 focus:z-10 focus:ring-2`}
            onClick={() => setActiveProfile("nutritionist")}
          >
            <i className="fas fa-apple-alt mr-2"></i>Nutricionista
          </button>
        </div>
      </div>

      {/* Render the active profile */}
      {activeProfile === "barber" && <BarberProfile />}
      {activeProfile === "mechanic" && <MechanicProfile />}
      {activeProfile === "nutritionist" && <NutritionistProfile />}
    </div>
  );
}
