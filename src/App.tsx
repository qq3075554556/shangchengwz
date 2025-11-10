import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { MainLayout } from "@/layouts/MainLayout";
import Home from "./pages/Home";
import SourceCenter from "./pages/SourceCenter";
import CustomCenter from "./pages/CustomCenter";
import WhitelabelCenter from "./pages/WhitelabelCenter";
import NodeCenter from "./pages/NodeCenter";
import PaymentCenter from "./pages/PaymentCenter";
import ListingCenter from "./pages/ListingCenter";
import OperationsCenter from "./pages/OperationsCenter";
import DeveloperCenter from "./pages/DeveloperCenter";
import TemplatesCenter from "./pages/TemplatesCenter";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/source" element={<SourceCenter />} />
              <Route path="/custom" element={<CustomCenter />} />
              <Route path="/whitelabel" element={<WhitelabelCenter />} />
              <Route path="/nodes" element={<NodeCenter />} />
              <Route path="/payment" element={<PaymentCenter />} />
              <Route path="/listing" element={<ListingCenter />} />
              <Route path="/operations" element={<OperationsCenter />} />
              <Route path="/developer" element={<DeveloperCenter />} />
              <Route path="/templates" element={<TemplatesCenter />} />
              <Route path="/about" element={<AboutUs />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
