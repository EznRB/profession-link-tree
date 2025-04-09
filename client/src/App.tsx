import { Link, Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import LinkTree from "@/components/LinkTree";
import UserManagement from "@/components/UserManagement";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LinkTree} />
      <Route path="/admin/users" component={UserManagement} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <nav className="border-b py-2 px-4">
          <div className="container mx-auto flex gap-4">
            <Link href="/">
              <span className="font-medium hover:underline cursor-pointer">Home</span>
            </Link>
            <Link href="/admin/users">
              <span className="font-medium hover:underline cursor-pointer">Gerenciar Usuários</span>
            </Link>
          </div>
        </nav>
        <main className="container mx-auto py-4">
          <Router />
        </main>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
