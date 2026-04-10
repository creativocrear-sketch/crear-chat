import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";

export default function BlogArticle10() {
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
                  Regulaciones
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                ¿Cuáles son las principales políticas de WhatsApp Business API?
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>21 de Marzo de 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 min de lectura</span>
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
                  ¿Cuáles son las principales políticas de WhatsApp Business API?
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  WhatsApp tiene políticas estrictas para mantener la integridad de su plataforma. Es crucial entenderlas para evitar problemas.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  1. Calidad de Mensajes
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Tasa de Rechazo
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>WhatsApp monitorea si tus mensajes son bloqueados/reportados</li>
                  <li>Si tu tasa de rechazo es muy alta, tu cuenta puede ser suspendida</li>
                  <li>Mantén una tasa de rechazo &lt; 5%</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Contenido Apropiado
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>No envíes spam</li>
                  <li>No envíes contenido ilegal</li>
                  <li>No envíes phishing o estafas</li>
                  <li>No envíes malware</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Frecuencia
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>No envíes demasiados mensajes a un mismo contacto</li>
                  <li>Respeta los horarios de los usuarios</li>
                  <li>No envíes mensajes no solicitados masivamente</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  2. Consentimiento
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Consentimiento Previo
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Debes tener consentimiento explícito antes de enviar mensajes</li>
                  <li>El usuario debe haber optado por recibir mensajes</li>
                  <li>Documentar el consentimiento es importante</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Opt-Out
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Debes permitir que los usuarios se den de baja</li>
                  <li>Respeta las solicitudes de "STOP" o "DEJAR DE ENVIAR"</li>
                  <li>Procesa opt-outs inmediatamente</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  3. Privacidad y Datos
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Protección de Datos
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Cumple con GDPR, CCPA y regulaciones locales</li>
                  <li>Protege información personal de usuarios</li>
                  <li>No compartas datos con terceros sin consentimiento</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Transparencia
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Informa a usuarios cómo usarás sus datos</li>
                  <li>Sé claro sobre quién está enviando mensajes</li>
                  <li>Proporciona política de privacidad clara</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  4. Plantillas de Mensajes
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Aprobación Requerida
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Todas las plantillas deben ser aprobadas por WhatsApp</li>
                  <li>No puedes enviar mensajes que no sean de plantillas aprobadas</li>
                  <li>La aprobación puede tomar 24-48 horas</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Contenido de Plantillas
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>No pueden contener contenido engañoso</li>
                  <li>Deben ser claras y profesionales</li>
                  <li>No pueden contener spam o phishing</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Variables en Plantillas
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Puedes usar variables para personalizar</li>
                  <li>Las variables deben ser claras</li>
                  <li>No puedes usar variables para ocultar contenido</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  5. Números de Teléfono
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Verificación
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Tu número debe ser verificado</li>
                  <li>Debes proporcionar documentación de negocio</li>
                  <li>WhatsApp puede solicitar verificación adicional</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Cambios de Número
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Si cambias de número, debes verificar el nuevo</li>
                  <li>Hay período de espera entre cambios</li>
                  <li>Múltiples cambios pueden resultar en restricciones</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Números Compartidos
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>No puedes compartir un número entre múltiples negocios</li>
                  <li>Cada negocio necesita su propio número</li>
                  <li>Violaciones pueden resultar en suspensión</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  6. Automatización y Bots
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Transparencia de Bot
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Debes informar si un bot está respondiendo</li>
                  <li>No puedes engañar a usuarios haciéndoles creer que es humano</li>
                  <li>Debes permitir escalación a agente humano</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Respuestas Automáticas
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Las respuestas automáticas deben ser relevantes</li>
                  <li>No pueden ser spam</li>
                  <li>Deben respetar preferencias del usuario</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  7. Comercio y Transacciones
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Información Clara
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Precios y términos deben ser claros</li>
                  <li>No puede haber sorpresas</li>
                  <li>Debes cumplir con leyes de protección al consumidor</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Reembolsos y Garantías
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Debes tener política clara de reembolsos</li>
                  <li>Debes cumplir con leyes de retorno</li>
                  <li>Debes ser justo en disputas</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  8. Seguridad
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Protección de Cuenta
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Usa autenticación fuerte</li>
                  <li>Protege credenciales de acceso</li>
                  <li>Monitorea actividad sospechosa</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Cumplimiento de Leyes
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Cumple con leyes de ciberseguridad</li>
                  <li>Reporta brechas de seguridad</li>
                  <li>Protege contra fraude</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  9. Prohibiciones Explícitas
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Contenido Prohibido
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Violencia, amenazas, acoso</li>
                  <li>Contenido sexual o explotación</li>
                  <li>Discriminación o hate speech</li>
                  <li>Drogas ilegales</li>
                  <li>Armas</li>
                  <li>Falsificación</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Actividades Prohibidas
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Spam</li>
                  <li>Phishing</li>
                  <li>Estafas</li>
                  <li>Fraude</li>
                  <li>Lavado de dinero</li>
                  <li>Terrorismo</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Violaciones de Derechos
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Violación de derechos de autor</li>
                  <li>Violación de marcas registradas</li>
                  <li>Suplantación de identidad</li>
                  <li>Difamación</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  10. Monitoreo y Cumplimiento
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Monitoreo de WhatsApp
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>WhatsApp monitorea patrones de mensajes</li>
                  <li>Analiza contenido de mensajes</li>
                  <li>Detecta spam y abuso</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Acciones por Incumplimiento
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Advertencia:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Primer incumplimiento</li>
                  <li>Oportunidad de corregir</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Restricción Temporal:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Limitación de envío de mensajes</li>
                  <li>Período de 24-72 horas típicamente</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Suspensión:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Incapacidad de enviar mensajes</li>
                  <li>Puede ser permanente</li>
                  <li>Difícil de revertir</li>
                </ul>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Terminación:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Cierre permanente de cuenta</li>
                  <li>Pérdida de número</li>
                  <li>Prohibición de crear nueva cuenta</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  11. Regulaciones por País
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Diferentes Regulaciones
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Algunos países tienen regulaciones específicas</li>
                  <li>GDPR en Europa</li>
                  <li>CCPA en California</li>
                  <li>Leyes locales en otros países</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Cumplimiento Local
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Debes cumplir con leyes locales</li>
                  <li>Algunos países restringen ciertos tipos de mensajes</li>
                  <li>Algunos requieren consentimiento explícito por escrito</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  12. Mejores Prácticas
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  Para Evitar Problemas
                </h4>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li><strong>Obtén Consentimiento Claro</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Documenta cómo obtuviste el número</li>
                      <li>Mantén registro de consentimiento</li>
                    </ul>
                  </li>
                  <li><strong>Sé Transparente</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Identifícate claramente</li>
                      <li>Explica por qué envías mensajes</li>
                      <li>Proporciona opción de darse de baja</li>
                    </ul>
                  </li>
                  <li><strong>Mantén Calidad Alta</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Responde rápidamente</li>
                      <li>Sé profesional</li>
                      <li>Resuelve problemas rápidamente</li>
                    </ul>
                  </li>
                  <li><strong>Monitorea tu Desempeño</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Revisa tasa de rechazo</li>
                      <li>Monitorea quejas</li>
                      <li>Ajusta según sea necesario</li>
                    </ul>
                  </li>
                  <li><strong>Mantente Actualizado</strong>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Las políticas cambian</li>
                      <li>Suscríbete a actualizaciones de WhatsApp</li>
                      <li>Revisa regularmente</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  Conclusión
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Las políticas de WhatsApp Business API existen para proteger a los usuarios y mantener la integridad de la plataforma. Si las cumples, no tendrás problemas.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Regla de oro:</strong> Trata a los usuarios como te gustaría ser tratado. Si tu comunicación es respetuosa, relevante y transparente, estarás en el lado correcto de las políticas de WhatsApp.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Recuerda: es mucho más fácil cumplir las políticas desde el inicio que intentar recuperarse de una suspensión de cuenta.
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
                      href="/blog/articulo-9"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Qué debo tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Siguiente artículo</p>
                    <a
                      href="/blog/articulo-11"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      ¿Por que me pueden restringir el número de WhatsApp?
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
