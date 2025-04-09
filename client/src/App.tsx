import { Link, Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import LinkTree from "@/components/LinkTree";
import UserManagement from "@/components/UserManagement";
import MenuHub from "@/components/MenuHub";
import NotFound from "@/pages/not-found";

// Importando os componentes de perfil profissional
import BarberProfile from "@/components/BarberProfile";
import MechanicProfile from "@/components/MechanicProfile";
import NutritionistProfile from "@/components/NutritionistProfile";
import PhotographerProfile from "@/components/PhotographerProfile";
import DentistProfile from "@/components/DentistProfile";
import PersonalTrainerProfile from "@/components/PersonalTrainerProfile";

function Router() {
  return (
    <Switch>
      <Route path="/" component={MenuHub} />
      <Route path="/linktree" component={LinkTree} />
      <Route path="/barber" component={BarberProfile} />
      <Route path="/mechanic" component={MechanicProfile} />
      <Route path="/nutritionist" component={NutritionistProfile} />
      <Route path="/photographer" component={PhotographerProfile} />
      <Route path="/dentist" component={DentistProfile} />
      <Route path="/personal" component={PersonalTrainerProfile} />
      <Route path="/admin/users" component={UserManagement} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <header className="border-b py-3 px-4 bg-gray-900 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 cursor-pointer">
                LinkTree Pro
              </span>
            </Link>
            <nav className="flex gap-6">
              <Link href="/">
                <span className="font-medium hover:text-indigo-400 transition-colors cursor-pointer">Hub</span>
              </Link>
              <Link href="/linktree">
                <span className="font-medium hover:text-indigo-400 transition-colors cursor-pointer">Demo LinkTree</span>
              </Link>
              <Link href="/admin/users">
                <span className="font-medium hover:text-indigo-400 transition-colors cursor-pointer">Admin</span>
              </Link>
            </nav>
          </div>
        </header>
        <main className="w-full">
          <Router />
        </main>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
