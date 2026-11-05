import { lazy, Suspense } from "react";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Planes from "./pages/Planes";
import Plataforma from "./pages/Plataforma";
import Modulos from "./pages/Modulos";
import Consultoria from "./pages/Consultoria";
import Contacto from "./pages/Contacto";
import ModuloDetalle, { Integraciones } from "./pages/ModuloDetalle";

// Páginas extensas y menos visitadas: se descargan solo cuando se abren.
const BlogArticle1 = lazy(() => import("./pages/BlogArticle1"));
const BlogArticle2 = lazy(() => import("./pages/BlogArticle2"));
const BlogArticle3 = lazy(() => import("./pages/BlogArticle3"));
const BlogArticle4 = lazy(() => import("./pages/BlogArticle4"));
const BlogArticle5 = lazy(() => import("./pages/BlogArticle5"));
const BlogArticle6 = lazy(() => import("./pages/BlogArticle6"));
const BlogArticle7 = lazy(() => import("./pages/BlogArticle7"));
const BlogArticle8 = lazy(() => import("./pages/BlogArticle8"));
const BlogArticle9 = lazy(() => import("./pages/BlogArticle9"));
const BlogArticle10 = lazy(() => import("./pages/BlogArticle10"));
const BlogArticle11 = lazy(() => import("./pages/BlogArticle11"));
const Alcaldias = lazy(() => import("./pages/Alcaldias"));
const AlcaldiaArticle1 = lazy(() => import("./pages/AlcaldiaArticle1"));
const AlcaldiaArticle2 = lazy(() => import("./pages/AlcaldiaArticle2"));
const AlcaldiaArticle3 = lazy(() => import("./pages/AlcaldiaArticle3"));
const AlcaldiaArticle4 = lazy(() => import("./pages/AlcaldiaArticle4"));
const AlcaldiaArticle5 = lazy(() => import("./pages/AlcaldiaArticle5"));
const PoliticaDePrivacidad = lazy(() => import("./pages/PoliticaDePrivacidad"));
const BlogPost = lazy(() => import("./pages/BlogPost"));


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
      <Route path={"/blog/:slug"} component={BlogPost} />
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
      <Route path={"/contacto"} component={Contacto} />
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
        <ThemeProvider defaultTheme="light">
          <WouterRouter ssrPath={ssrPath}>
            <Suspense fallback={null}>
              <Routes />
            </Suspense>
          </WouterRouter>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
