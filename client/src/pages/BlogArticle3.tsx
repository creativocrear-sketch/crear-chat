import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";

export default function BlogArticle3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                ¿Cuáles son los primeros pasos para migrar WhatsApp Business API?
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
                  ¿Cuáles son los primeros pasos para migrar WhatsApp Business API?
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Migrar a WhatsApp Business API puede parecer complejo, pero si sigues estos pasos ordenadamente, el proceso será fluido y sin complicaciones.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Paso 1: Evalúa tu Situación Actual
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Antes de migrar, es importante que entiendas dónde estás ahora:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>¿Estás usando WhatsApp Business o WhatsApp personal?</li>
                  <li>¿Cuántos números de WhatsApp tienes?</li>
                  <li>¿Cuál es tu volumen de mensajes mensuales?</li>
                  <li>¿Qué procesos necesitas automatizar?</li>
                  <li>¿Qué sistemas actuales necesitan integrarse?</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Esta evaluación te ayudará a determinar qué tipo de solución necesitas y qué plataforma es la más adecuada.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Paso 2: Elige una Plataforma de Gestión
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  No puedes usar WhatsApp Business API directamente. Necesitas una plataforma que actúe como intermediaria. Algunas opciones populares incluyen:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Crear.chat: Plataforma especializada en automatización de WhatsApp</li>
                  <li>Twilio: Solución empresarial completa</li>
                  <li>MessageBird: Plataforma de comunicaciones omnicanal</li>
                  <li>Infobip: Proveedor global de comunicaciones</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Elige una plataforma que se alinee con tus necesidades y presupuesto.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Paso 3: Prepara tu Número de WhatsApp
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para usar WhatsApp Business API, necesitas un número de teléfono dedicado:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Obtén un número de teléfono nuevo (preferiblemente una línea comercial)</li>
                  <li>Verifica que el número sea válido y esté activo</li>
                  <li>Asegúrate de que el número no tenga restricciones de WhatsApp</li>
                  <li>Ten a mano documentación de tu negocio (RUT, certificado de constitución, etc.)</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Paso 4: Solicita Acceso a WhatsApp Business API
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A través de tu plataforma elegida, solicita acceso a WhatsApp Business API:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Completa el formulario de solicitud</li>
                  <li>Proporciona información de tu negocio</li>
                  <li>Verifica tu identidad</li>
                  <li>Espera la aprobación de WhatsApp (generalmente 1-3 días)</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Durante este proceso, WhatsApp verificará que tu negocio sea legítimo y que cumplas con sus políticas.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Paso 5: Configura tu Perfil de Negocio
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Una vez aprobado, configura tu perfil:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Nombre de negocio</li>
                  <li>Descripción</li>
                  <li>Categoría de negocio</li>
                  <li>Sitio web (si aplica)</li>
                  <li>Horarios de atención</li>
                  <li>Información de contacto</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Paso 6: Integra tus Sistemas
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Conecta WhatsApp Business API con tus sistemas existentes:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>CRM</li>
                  <li>Sistema de reservas</li>
                  <li>Sistema de facturación</li>
                  <li>Base de datos de clientes</li>
                  <li>Otras aplicaciones relevantes</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Esto puede requerir soporte técnico, pero es crucial para aprovechar el potencial de la API.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Paso 7: Crea tus Plantillas de Mensajes
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  WhatsApp requiere que apruebes plantillas de mensajes antes de usarlas:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Crea plantillas para confirmaciones de reserva</li>
                  <li>Plantillas para recordatorios</li>
                  <li>Plantillas para promociones</li>
                  <li>Plantillas para actualizaciones de estado</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cada plantilla debe ser clara y no invasiva.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Paso 8: Prueba Exhaustivamente
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Antes de lanzar a producción:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Prueba todas tus integraciones</li>
                  <li>Verifica que los mensajes se envíen correctamente</li>
                  <li>Prueba diferentes escenarios de automatización</li>
                  <li>Asegúrate de que los datos se sincronicen correctamente</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Paso 9: Capacita a tu Equipo
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Asegúrate de que tu equipo entienda cómo usar la nueva plataforma:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Capacitación en el uso de la plataforma</li>
                  <li>Procedimientos para responder mensajes</li>
                  <li>Escalamiento de consultas</li>
                  <li>Manejo de problemas comunes</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Paso 10: Lanza y Monitorea
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Una vez todo esté listo:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Comunica a tus clientes que ahora puedes contactarlos por WhatsApp</li>
                  <li>Monitorea las primeras semanas de operación</li>
                  <li>Recopila feedback de tu equipo y clientes</li>
                  <li>Realiza ajustes según sea necesario</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Consejos Importantes
                </h3>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>No migres todos tus números a la vez: Comienza con uno o dos números para aprender</li>
                  <li>Mantén el número anterior activo: Mientras tus clientes se adaptan</li>
                  <li>Documenta todo: Crea manuales de procedimientos</li>
                  <li>Busca soporte: No dudes en contactar a tu proveedor si tienes dudas</li>
                  <li>Planifica para el crecimiento: Elige una solución que pueda escalar con tu negocio</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Conclusión
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  La migración a WhatsApp Business API es un proceso manejable si lo haces paso a paso. Aunque requiere inversión inicial en tiempo y recursos, los beneficios a largo plazo en eficiencia y satisfacción del cliente lo hacen completamente justificable.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Recuerda que no estás solo en este proceso. Tu proveedor de plataforma y el equipo de soporte de WhatsApp están ahí para ayudarte en cada paso del camino.
                </p>
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Compartir:</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">Artículo anterior</p>
                    <a
                      href="/blog/articulo-2"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Para que me sirve WhatsApp Business API para mi negocio?
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Siguiente artículo</p>
                    <a
                      href="/blog/articulo-4"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Qué beneficios tengo usando WhatsApp Business API + IA?
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
                      Tendencias
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      ¿Qué beneficios tengo usando WhatsApp Business API + IA?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Descubre cómo la combinación de WhatsApp Business API e IA revoluciona la atención al cliente.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>6 min</span>
                      <a href="/blog/articulo-4" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
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
