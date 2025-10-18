import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ChatBot } from "./components/ChatBot";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import AccommodationDetail from "./pages/AccommodationDetail";
import Booking from "./pages/Booking";
import HostDashboard from "./pages/HostDashboard";
import ClientSignup from "./pages/ClientSignup";
import ClientLocation from "./pages/ClientLocation";
import ClientLogin from "./pages/ClientLogin";
import ClientHome from "./pages/ClientHome";
import HostSignup from "./pages/HostSignup";
import HostLogin from "./pages/HostLogin";
import HostHome from "./pages/HostHome";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ChatBot />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/search" element={<Search />} />
            <Route path="/accommodation/:id" element={<AccommodationDetail />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/host-dashboard" element={<HostDashboard />} />
            
            {/* Client Routes */}
            <Route path="/client-signup" element={<ClientSignup />} />
            <Route path="/client-location" element={<ClientLocation />} />
            <Route path="/client-login" element={<ClientLogin />} />
            <Route path="/client-home" element={<ClientHome />} />
            
            {/* Host Routes */}
            <Route path="/host-signup" element={<HostSignup />} />
            <Route path="/host-login" element={<HostLogin />} />
            <Route path="/host-home" element={<HostHome />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
