import { useState } from "react";
import BarberProfile from "./BarberProfile";
import MechanicProfile from "./MechanicProfile";
import NutritionistProfile from "./NutritionistProfile";
import PhotographerProfile from "./PhotographerProfile";
import DentistProfile from "./DentistProfile";
import PersonalTrainerProfile from "./PersonalTrainerProfile";
import { Scissors, Wrench, Apple, Camera, Smile, Dumbbell } from "lucide-react";

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
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
              activeProfile === "barber"
                ? "bg-barber-primary text-white shadow-md shadow-barber-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-barber-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("barber")}
          >
            <Scissors className="w-4 h-4 mr-1.5" /> Barbeiro
          </button>
          
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
              activeProfile === "mechanic"
                ? "bg-mechanic-primary text-white shadow-md shadow-mechanic-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-mechanic-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("mechanic")}
          >
            <Wrench className="w-4 h-4 mr-1.5" /> Mecânico
          </button>
          
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
              activeProfile === "nutritionist"
                ? "bg-nutritionist-primary text-white shadow-md shadow-nutritionist-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-nutritionist-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("nutritionist")}
          >
            <Apple className="w-4 h-4 mr-1.5" /> Nutricionista
          </button>
          
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
              activeProfile === "photographer"
                ? "bg-photographer-primary text-white shadow-md shadow-photographer-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-photographer-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("photographer")}
          >
            <Camera className="w-4 h-4 mr-1.5" /> Fotógrafo
          </button>
          
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
              activeProfile === "dentist"
                ? "bg-dentist-primary text-white shadow-md shadow-dentist-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-dentist-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("dentist")}
          >
            <Smile className="w-4 h-4 mr-1.5" /> Dentista
          </button>
          
          <button
            type="button"
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
              activeProfile === "personal"
                ? "bg-personal-primary text-white shadow-md shadow-personal-primary/30"
                : "bg-gray-800 text-gray-300 hover:bg-personal-primary/80 hover:text-white"
            }`}
            onClick={() => setActiveProfile("personal")}
          >
            <Dumbbell className="w-4 h-4 mr-1.5" /> Personal
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
