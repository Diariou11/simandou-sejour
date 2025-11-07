import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ChatBot } from "./components/ChatBot";
import { PWAInstallPrompt } from "./components/PWAInstallPrompt";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import AccommodationDetail from "./pages/AccommodationDetail";
import Booking from "./pages/Booking";
import HostDashboard from "./pages/HostDashboard";
import HostCalendar from "./pages/HostCalendar";
import HostPromotions from "./pages/HostPromotions";
import HostReports from "./pages/HostReports";
import HostServices from "./pages/HostServices";
import ClientSignup from "./pages/ClientSignup";
import ClientLocation from "./pages/ClientLocation";
import ClientLogin from "./pages/ClientLogin";
import ClientHome from "./pages/ClientHome";
import HostSignup from "./pages/HostSignup";
import HostLogin from "./pages/HostLogin";
import HostHome from "./pages/HostHome";
import HostMessages from "./pages/HostMessages";
import ClientFavorites from "./pages/ClientFavorites";
import ClientCompare from "./pages/ClientCompare";
import ClientNotifications from "./pages/ClientNotifications";
import ClientProfile from "./pages/ClientProfile";
import ClientReservations from "./pages/ClientReservations";
import ClientTransactions from "./pages/ClientTransactions";
import ClientSpecialOffers from "./pages/ClientSpecialOffers";
import ClientReviews from "./pages/ClientReviews";
import ClientSupport from "./pages/ClientSupport";
import ClientAccount from "./pages/ClientAccount";
import BookingDates from "./pages/BookingDates";
import BookingInfo from "./pages/BookingInfo";
import BookingConfirmation from "./pages/BookingConfirmation";
import HostReviewsManagement from "./pages/HostReviewsManagement";
import HostProfile from "./pages/HostProfile";
import HostSettings from "./pages/HostSettings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ChatBot />
        <PWAInstallPrompt />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/search" element={<Search />} />
            <Route path="/accommodation/:id" element={<AccommodationDetail />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/booking-dates/:id" element={<BookingDates />} />
            <Route path="/booking-info/:id" element={<BookingInfo />} />
            <Route path="/booking-confirmation/:id" element={<BookingConfirmation />} />
            <Route path="/host-dashboard" element={<HostDashboard />} />
            <Route path="/host-calendar" element={<HostCalendar />} />
            <Route path="/host-promotions" element={<HostPromotions />} />
            <Route path="/host-reports" element={<HostReports />} />
            <Route path="/host-services" element={<HostServices />} />
            
            {/* Client Routes */}
            <Route path="/client-signup" element={<ClientSignup />} />
            <Route path="/client-location" element={<ClientLocation />} />
            <Route path="/client-login" element={<ClientLogin />} />
            <Route path="/client-home" element={<ClientHome />} />
            
            {/* Host Routes */}
            <Route path="/host-signup" element={<HostSignup />} />
            <Route path="/host-login" element={<HostLogin />} />
            <Route path="/host-home" element={<HostHome />} />
            <Route path="/host-messages" element={<HostMessages />} />
          <Route path="/host-reviews" element={<HostReviewsManagement />} />
          <Route path="/host-profile" element={<HostProfile />} />
          <Route path="/host-settings" element={<HostSettings />} />
            
            {/* Client Additional Routes */}
            <Route path="/client-favorites" element={<ClientFavorites />} />
            <Route path="/client-compare" element={<ClientCompare />} />
            <Route path="/client-notifications" element={<ClientNotifications />} />
            <Route path="/client-profile" element={<ClientProfile />} />
            <Route path="/client-reservations" element={<ClientReservations />} />
            <Route path="/client-transactions" element={<ClientTransactions />} />
            <Route path="/client-offers" element={<ClientSpecialOffers />} />
          <Route path="/client-reviews" element={<ClientReviews />} />
          <Route path="/client-support" element={<ClientSupport />} />
          <Route path="/client-account" element={<ClientAccount />} />
          <Route path="/client-location" element={<ClientLocation />} />
            
            {/* Institutional Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
