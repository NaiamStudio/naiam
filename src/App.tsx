import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageSelection } from "./components/LanguageSelection";
import { WhatsAppButton } from "./components/WhatsAppButton";
import Index from "./pages/Index";
import { ServicePage } from "./pages/ServicePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LanguageSelection />} />
          <Route path="/en" element={<Index lang="en" />} />
          <Route path="/es" element={<Index lang="es" />} />
          <Route path="/en/design" element={<ServicePage service="design" lang="en" />} />
          <Route path="/en/development" element={<ServicePage service="development" lang="en" />} />
          <Route path="/en/marketing" element={<ServicePage service="marketing" lang="en" />} />
          <Route path="/en/legal" element={<ServicePage service="legal" lang="en" />} />
          <Route path="/es/design" element={<ServicePage service="design" lang="es" />} />
          <Route path="/es/development" element={<ServicePage service="development" lang="es" />} />
          <Route path="/es/marketing" element={<ServicePage service="marketing" lang="es" />} />
          <Route path="/es/legal" element={<ServicePage service="legal" lang="es" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;