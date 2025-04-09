import { useState } from "react";
import BarberProfile from "./BarberProfile";
import MechanicProfile from "./MechanicProfile";
import NutritionistProfile from "./NutritionistProfile";
import PhotographerProfile from "./PhotographerProfile";
import DentistProfile from "./DentistProfile";
import PersonalTrainerProfile from "./PersonalTrainerProfile";

type ProfileType = "barber" | "mechanic" | "nutritionist" | "photographer" | "dentist" | "personal";

export default function LinkTree() {
  const [activeProfile, setActiveProfile] = useState<ProfileType>("barber");

  return (
    <div className="min-h-screen">
      {/* Navigation tabs for different professions */}
      <div className="flex justify-center sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm py-3 border-b border-gray-800 shadow-lg">
        <div className="flex flex-wrap justify-center gap-2 px-4 max-w-4xl mx-auto">
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeProfile === "barber"
                ? "bg-barber-primary text-white shadow-md shadow-barber-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-barber-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("barber")}
          >
            <i className="fas fa-cut mr-2"></i>Barbeiro
          </button>
          
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeProfile === "mechanic"
                ? "bg-mechanic-primary text-white shadow-md shadow-mechanic-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-mechanic-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("mechanic")}
          >
            <i className="fas fa-wrench mr-2"></i>Mecânico
          </button>
          
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeProfile === "nutritionist"
                ? "bg-nutritionist-primary text-white shadow-md shadow-nutritionist-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-nutritionist-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("nutritionist")}
          >
            <i className="fas fa-apple-alt mr-2"></i>Nutricionista
          </button>
          
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeProfile === "photographer"
                ? "bg-photographer-primary text-white shadow-md shadow-photographer-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-photographer-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("photographer")}
          >
            <i className="fas fa-camera mr-2"></i>Fotógrafo
          </button>
          
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeProfile === "dentist"
                ? "bg-dentist-primary text-white shadow-md shadow-dentist-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-dentist-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("dentist")}
          >
            <i className="fas fa-tooth mr-2"></i>Dentista
          </button>
          
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeProfile === "personal"
                ? "bg-personal-primary text-white shadow-md shadow-personal-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-personal-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("personal")}
          >
            <i className="fas fa-dumbbell mr-2"></i>Personal
          </button>
        </div>
      </div>

      {/* Render the active profile */}
      {activeProfile === "barber" && <BarberProfile />}
      {activeProfile === "mechanic" && <MechanicProfile />}
      {activeProfile === "nutritionist" && <NutritionistProfile />}
      {activeProfile === "photographer" && <PhotographerProfile />}
      {activeProfile === "dentist" && <DentistProfile />}
      {activeProfile === "personal" && <PersonalTrainerProfile />}
    </div>
  );
}
