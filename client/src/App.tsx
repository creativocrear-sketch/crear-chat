import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogArticle1 from "./pages/BlogArticle1";
import Planes from "./pages/Planes";
import ConsultoriaWhatsApp from "./pages/ConsultoriaWhatsApp";
import EstrategiasMarketing from "./pages/EstrategiasMarketing";
import TransformacionDigital from "./pages/TransformacionDigital";
import AutomatizacionVentas from "./pages/AutomatizacionVentas";
import PlataformaIntegrada from "./pages/PlataformaIntegrada";
import GestionContactos from "./pages/GestionContactos";
import DashboardWeb from "./pages/DashboardWeb";
import ChatbotsConversacionales from "./pages/ChatbotsConversacionales";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/articulo-1"} component={BlogArticle1} />
      <Route path={"/planes"} component={Planes} />
      <Route path={"/consultoria-whatsapp"} component={ConsultoriaWhatsApp} />
      <Route path={"/estrategias-marketing"} component={EstrategiasMarketing} />
      <Route path={"/transformacion-digital"} component={TransformacionDigital} />
      <Route path={"/automatizacion-ventas"} component={AutomatizacionVentas} />
      <Route path={"/plataforma-integrada"} component={PlataformaIntegrada} />
      <Route path={"/gestion-contactos"} component={GestionContactos} />
      <Route path={"/dashboard-web"} component={DashboardWeb} />
      <Route path={"/chatbots-conversacionales"} component={ChatbotsConversacionales} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
