import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogArticle1 from "./pages/BlogArticle1";
import BlogArticle2 from "./pages/BlogArticle2";
import BlogArticle3 from "./pages/BlogArticle3";
import BlogArticle4 from "./pages/BlogArticle4";
import BlogArticle5 from "./pages/BlogArticle5";
import BlogArticle6 from "./pages/BlogArticle6";
import BlogArticle7 from "./pages/BlogArticle7";
import BlogArticle8 from "./pages/BlogArticle8";
import BlogArticle9 from "./pages/BlogArticle9";
import BlogArticle10 from "./pages/BlogArticle10";
import BlogArticle11 from "./pages/BlogArticle11";
import Alcaldias from "./pages/Alcaldias";
import AlcaldiaArticle1 from "./pages/AlcaldiaArticle1";
import AlcaldiaArticle2 from "./pages/AlcaldiaArticle2";
import AlcaldiaArticle3 from "./pages/AlcaldiaArticle3";
import AlcaldiaArticle4 from "./pages/AlcaldiaArticle4";
import AlcaldiaArticle5 from "./pages/AlcaldiaArticle5";
import Planes from "./pages/Planes";
import Plataforma from "./pages/Plataforma";
import Modulos from "./pages/Modulos";
import Consultoria from "./pages/Consultoria";
import ModuloDetalle, { Integraciones } from "./pages/ModuloDetalle";
import PoliticaDePrivacidad from "./pages/PoliticaDePrivacidad";


function Routes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/diferencia-whatsapp-business-api"} component={BlogArticle1} />
      <Route path={"/blog/casos-uso-whatsapp-business-api"} component={BlogArticle2} />
      <Route path={"/blog/primeros-pasos-migrar-whatsapp-api"} component={BlogArticle3} />
      <Route path={"/blog/beneficios-whatsapp-business-api-ia"} component={BlogArticle4} />
      <Route path={"/blog/plataformas-integracion-whatsapp-api"} component={BlogArticle5} />
      <Route path={"/blog/por-que-necesito-plataforma-whatsapp"} component={BlogArticle6} />
      <Route path={"/blog/diferencias-plataformas-whatsapp"} component={BlogArticle7} />
      <Route path={"/blog/cobro-plataformas-whatsapp"} component={BlogArticle8} />
      <Route path={"/blog/como-seleccionar-proveedor-whatsapp"} component={BlogArticle9} />
      <Route path={"/blog/politicas-whatsapp-business-api"} component={BlogArticle10} />
      <Route path={"/blog/por-que-restringen-whatsapp"} component={BlogArticle11} />
      {/* Las URL antiguas (/blog/articulo-N, páginas de servicios) se redirigen con 301 en vercel.json */}
      <Route path={"/alcaldias"} component={Alcaldias} />
      <Route path={"/alcaldias/guia-turistica-whatsapp"} component={AlcaldiaArticle1} />
      <Route path={"/alcaldias/consulta-deudas-whatsapp"} component={AlcaldiaArticle2} />
      <Route path={"/alcaldias/plataforma-educativa-whatsapp"} component={AlcaldiaArticle3} />
      <Route path={"/alcaldias/consulta-sisben-subsidios"} component={AlcaldiaArticle4} />
      <Route path={"/alcaldias/consulta-turnos-agentes-transito"} component={AlcaldiaArticle5} />
      <Route path={"/planes"} component={Planes} />
      <Route path={"/plataforma"} component={Plataforma} />
      <Route path={"/modulos"} component={Modulos} />
      <Route path={"/modulos/:slug"} component={ModuloDetalle} />
      <Route path={"/integraciones"} component={Integraciones} />
      <Route path={"/consultoria"} component={Consultoria} />
      <Route path={"/Politica-De-Privacidad"} component={PoliticaDePrivacidad} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

type AppProps = {
  /** Ruta a renderizar cuando la página se genera en el servidor (pre-renderizado). */
  ssrPath?: string;
};

function App({ ssrPath }: AppProps) {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <LanguageProvider>
          <ThemeProvider defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              <WouterRouter ssrPath={ssrPath}>
                <Routes />
              </WouterRouter>
            </TooltipProvider>
          </ThemeProvider>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
