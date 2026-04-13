import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle9() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('articles.article9.title');
    const text = t('articles.article9.shareText');
    
    let shareUrl = '';
    
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-[#1B4F72] hover:text-[#0F2F45] font-medium mb-8 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Volver al blog
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  Implementación
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                ¿Qué debo tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>21 de Marzo de 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 min de lectura</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Redacción: Alex Murillo + Equipo de Soporte</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  ¿Qué debo tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Elegir el proveedor correcto es una decisión crítica que afectará tu negocio durante años. Aquí está la guía completa.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  1. Necesidades Empresariales
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Volumen de Mensajes
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cuántos mensajes enviarás/recibirás mensualmente?</li>
                  <li>¿Cuál es tu proyección de crecimiento?</li>
                  <li>¿Tienes picos estacionales?</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Impacto:</strong> Determina si necesitas escalabilidad
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Número de Agentes
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cuántas personas responderán mensajes?</li>
                  <li>¿Necesitas gestión de equipos?</li>
                  <li>¿Requieres reportes de rendimiento?</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Impacto:</strong> Afecta el costo y la complejidad
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Automatización Requerida
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Necesitas chatbots?</li>
                  <li>¿Qué procesos automatizar?</li>
                  <li>¿Requiere IA?</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Impacto:</strong> Determina qué plataforma elegir
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Integraciones Necesarias
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Qué sistemas necesitas conectar?</li>
                  <li>¿Cuán complejas son las integraciones?</li>
                  <li>¿Necesitas APIs personalizadas?</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Impacto:</strong> Algunos proveedores son mejores para integraciones complejas
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  2. Capacidades Técnicas
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Nivel de Experiencia Técnica
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Tu equipo es técnico o no técnico?</li>
                  <li>¿Necesitas soporte en configuración?</li>
                  <li>¿Puedes escribir código personalizado?</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Recomendación:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>No técnico &rarr; Plataforma visual, fácil de usar</li>
                  <li>Técnico &rarr; Más flexibilidad, APIs disponibles</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Infraestructura Existente
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Qué sistemas ya tienes?</li>
                  <li>¿Qué tan integrados están?</li>
                  <li>¿Hay limitaciones técnicas?</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Impacto:</strong> Afecta compatibilidad y facilidad de integración
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  3. Presupuesto
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Presupuesto Inicial
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cuánto puedes invertir inicialmente?</li>
                  <li>¿Incluye implementación y capacitación?</li>
                  <li>¿Hay costos ocultos?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Presupuesto Mensual
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cuál es tu presupuesto recurrente?</li>
                  <li>¿Puede crecer con el negocio?</li>
                  <li>¿Hay límites de presupuesto?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  ROI Esperado
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cuál es tu retorno esperado?</li>
                  <li>¿En cuánto tiempo?</li>
                  <li>¿Cómo lo medirás?</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Consejo:</strong> Elige la plataforma que mejor ROI ofrece, no la más barata
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  4. Reputación y Confiabilidad
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Historial de la Empresa
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cuánto tiempo lleva en el mercado?</li>
                  <li>¿Ha tenido problemas de seguridad?</li>
                  <li>¿Tiene referencias de clientes?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Uptime y Confiabilidad
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Qué uptime garantizan? (99.9%, 99.99%?)</li>
                  <li>¿Tienen SLA (Acuerdo de Nivel de Servicio)?</li>
                  <li>¿Qué sucede si hay caída?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Seguridad
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cumplen GDPR, CCPA, etc.?</li>
                  <li>¿Encriptan datos?</li>
                  <li>¿Tienen certificaciones de seguridad?</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Importante:</strong> La seguridad no es negociable
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  5. Soporte y Servicio
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Disponibilidad de Soporte
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Soporte 24/7?</li>
                  <li>¿En tu idioma?</li>
                  <li>¿Múltiples canales (email, chat, teléfono)?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Calidad del Soporte
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cuál es el tiempo de respuesta?</li>
                  <li>¿Qué tan competente es el equipo?</li>
                  <li>¿Hay gestor dedicado?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Documentación y Recursos
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Hay documentación completa?</li>
                  <li>¿Hay tutoriales en video?</li>
                  <li>¿Hay comunidad activa?</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Consejo:</strong> Prueba el soporte antes de comprometerte
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  6. Escalabilidad
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Crecimiento Horizontal
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Puedes agregar más agentes?</li>
                  <li>¿Puedes agregar más números?</li>
                  <li>¿Hay límites?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Crecimiento Vertical
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Puedes aumentar volumen de mensajes?</li>
                  <li>¿Hay límites técnicos?</li>
                  <li>¿Cómo escala el precio?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Flexibilidad
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Puedes cambiar de plan fácilmente?</li>
                  <li>¿Hay penalizaciones?</li>
                  <li>¿Puedes downgrade?</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  7. Características Específicas
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Automatización
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Soporte para chatbots?</li>
                  <li>¿Automatización visual o código?</li>
                  <li>¿Integración con IA?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Análisis y Reportes
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Qué métricas puedes medir?</li>
                  <li>¿Reportes en tiempo real?</li>
                  <li>¿Exportación de datos?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Cumplimiento Normativo
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cumple con regulaciones locales?</li>
                  <li>¿Soporte para archivos/auditoría?</li>
                  <li>¿Privacidad de datos?</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  8. Experiencia del Usuario
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Interfaz
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Es intuitiva?</li>
                  <li>¿Fácil de aprender?</li>
                  <li>¿Requiere capacitación?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Flujo de Trabajo
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cómo se ven los chats?</li>
                  <li>¿Fácil de responder?</li>
                  <li>¿Organización de conversaciones?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Personalización
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Puedes personalizar la interfaz?</li>
                  <li>¿Puedes agregar tu branding?</li>
                  <li>¿Flexibilidad de configuración?</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  9. Términos y Condiciones
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Contrato
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Cuál es el período mínimo?</li>
                  <li>¿Hay penalizaciones por cancelación?</li>
                  <li>¿Puedes salir fácilmente?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Datos
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Quién es dueño de tus datos?</li>
                  <li>¿Pueden usar tus datos?</li>
                  <li>¿Qué sucede si cancelas?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Cambios de Precio
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Pueden aumentar precios?</li>
                  <li>¿Con cuánta anticipación?</li>
                  <li>¿Tienes opción de salir?</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  10. Pruebas Antes de Comprometerse
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Prueba Gratuita
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Ofrecen prueba gratuita?</li>
                  <li>¿Cuánto tiempo dura?</li>
                  <li>¿Requiere tarjeta de crédito?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Demo
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Pueden hacer una demo?</li>
                  <li>¿Puedes hablar con un especialista?</li>
                  <li>¿Responden preguntas específicas?</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Referencias
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Puedes hablar con clientes actuales?</li>
                  <li>¿Qué dicen sobre el servicio?</li>
                  <li>¿Recomendarían la plataforma?</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Matriz de Decisión
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Crea una matriz con tus criterios:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Criterio</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Peso</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Proveedor A</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Proveedor B</th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Proveedor C</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Precio</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">20%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">6/10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Soporte</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">20%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Características</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9/10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Escalabilidad</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">15%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9/10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Seguridad</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">15%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8/10</td>
                      </tr>
                      <tr className="bg-gray-50 font-semibold">
                        <td className="border border-gray-300 px-4 py-2">TOTAL</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">100%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">7.7/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8.1/10</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">8.2/10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Conclusión
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Elegir el proveedor correcto requiere:
                </p>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Entender tus necesidades</li>
                  <li>Investigar opciones</li>
                  <li>Comparar sistemáticamente</li>
                  <li>Probar antes de comprometerte</li>
                  <li>Considerar el futuro, no solo el presente</li>
                </ol>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  No existe la plataforma "perfecta", pero existe la plataforma "correcta para ti". Tómate tiempo en esta decisión; es una de las más importantes para tu transformación digital.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Recomendación final:</strong> Comienza con una prueba gratuita de 2-3 plataformas. Usa cada una durante una semana. Tu intuición sobre cuál es más fácil de usar es tan importante como los números.
                </p>
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Compartir:</h4>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">Artículo anterior</p>
                    <a
                      href="/blog/articulo-8"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Cómo es el cobro que hacen las plataformas de chats de WhatsApp?
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Siguiente artículo</p>
                    <a
                      href="/blog/articulo-10"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Cuáles son las principales políticas de WhatsApp Business API?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100">
                <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                  ¿Listo para implementar WhatsApp Business API?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Contáctame para una consulta personalizada sobre cómo automatizar tu negocio con WhatsApp Business API.
                </p>
                
                <a
                  href="https://wa.me/+573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg"
                >
                  Escribeme por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-8">Otros artículos</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      Conceptos Básicos
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      ¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Descubre las diferencias clave entre WhatsApp Business y WhatsApp Business API, y entiende cuál es la mejor opción para tu negocio.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>5 min</span>
                      <a href="/blog/articulo-1" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        Leer más
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      Casos de Uso
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      ¿Para que me sirve WhatsApp Business API para mi negocio?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>8 min</span>
                      <a href="/blog/articulo-2" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        Leer más
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      Implementación
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      ¿Cuáles son los primeros pasos para migrar WhatsApp Business API?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Guía paso a paso para migrar tu negocio a WhatsApp Business API sin complicaciones.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>7 min</span>
                      <a href="/blog/articulo-3" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        Leer más
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
