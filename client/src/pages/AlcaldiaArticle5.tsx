import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, ChevronRight, MessageCircle, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AlcaldiaArticle5() {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <a href="/alcaldias" className="inline-flex items-center gap-2 text-[#1B4F72] hover:text-[#0F2F45] font-medium mb-8 transition-colors">
                <ChevronLeft className="w-4 h-4" />
                {language === 'es' ? 'Volver a Alcaldías' : 'Back to Municipalities'}
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === 'es' ? 'Gestión operativa' : 'Operational management'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {language === 'es' ? '🚓 CONSULTA DE TURNOS DE AGENTES DE TRÁNSITO POR WHATSAPP' : '🚓 TRAFFIC AGENT SHIFT INQUIRY VIA WHATSAPP'}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '13 de abril de 2026' : 'April 13, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 {language === 'es' ? 'min de lectura' : 'min read'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Acceso inmediato a la programación, menos carga operativa y mejor coordinación en campo' : 'Immediate access to scheduling, less operational load and better field coordination'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '⚠️ El problema en la operación diaria' : '⚠️ The problem in daily operations'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La información sobre turnos muchas veces no está disponible de forma rápida ni clara.' : 'Information about shifts is often not available quickly or clearly.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Esto genera:' : 'This generates:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Agentes que no tienen certeza de su horario</li>,
                    <li key="2">Llamadas y mensajes constantes al área administrativa</li>,
                    <li key="3">Errores en la asistencia o cobertura</li>,
                    <li key="4">Dificultad para consultar cambios de último momento</li>
                  ] : [
                    <li key="1">Agents unsure of their schedule</li>,
                    <li key="2">Constant calls and messages to the administrative area</li>,
                    <li key="3">Errors in attendance or coverage</li>,
                    <li key="4">Difficulty consulting last-minute changes</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 Resultado: desorganización, pérdida de tiempo y fallas en la operación.' : '👉 Result: disorganization, wasted time and operational failures.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '🤖 La solución: IA para consulta de turnos en WhatsApp' : '🤖 The solution: AI for shift inquiry via WhatsApp'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Permite que cada agente consulte su turno en segundos, directamente desde WhatsApp, sin depender de terceros.' : 'Allows each agent to consult their shift in seconds, directly from WhatsApp, without depending on third parties.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Solo debe escribir algo como:' : 'They just need to write something like:'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 "Consultar turno"' : '👉 "Consult shift"'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Y la IA responde automáticamente con su información actualizada.' : 'And the AI responds automatically with their updated information.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📲 ¿Qué puede consultar el agente?' : '📲 What can the agent consult?'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'En una sola interacción puede obtener:' : 'In a single interaction they can obtain:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Turno asignado (día y hora)</li>,
                    <li key="2">Zona o punto de operación</li>,
                    <li key="3">Tipo de servicio (control, evento, apoyo, etc.)</li>,
                    <li key="4">Cambios recientes en la programación</li>,
                    <li key="5">Historial básico de turnos</li>
                  ] : [
                    <li key="1">Assigned shift (day and time)</li>,
                    <li key="2">Zone or operation point</li>,
                    <li key="3">Service type (control, event, support, etc.)</li>,
                    <li key="4">Recent changes in scheduling</li>,
                    <li key="5">Basic shift history</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 Toda la información clara, organizada y en tiempo real.' : '👉 All information clear, organized and in real time.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '⚙️ ¿Cómo funciona?' : '⚙️ How does it work?'}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">El agente escribe por WhatsApp</li>,
                    <li key="2">Se identifica (cédula, código o número autorizado)</li>,
                    <li key="3">La IA consulta la base de datos</li>,
                    <li key="4">Responde en segundos con el turno correspondiente</li>
                  ] : [
                    <li key="1">The agent writes via WhatsApp</li>,
                    <li key="2">They identify themselves (ID, code or authorized number)</li>,
                    <li key="3">The AI queries the database</li>,
                    <li key="4">Responds in seconds with the corresponding shift</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? 'Sin llamadas. Sin intermediarios. Sin demoras.' : 'No calls. No intermediaries. No delays.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🚀 Beneficios clave' : '🚀 Key benefits'}
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed font-semibold">
                  {language === 'es' ? '⏱ Ahorro de tiempo' : '⏱ Time savings'}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Elimina consultas manuales al área administrativa.' : 'Eliminates manual inquiries to the administrative area.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed font-semibold">
                  {language === 'es' ? '📲 Acceso inmediato' : '📲 Immediate access'}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Información disponible 24/7 desde el celular.' : 'Information available 24/7 from the cell phone.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed font-semibold">
                  {language === 'es' ? '📉 Menos errores operativos' : '📉 Fewer operational errors'}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Cada agente tiene claridad sobre su turno.' : 'Each agent has clarity about their shift.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed font-semibold">
                  {language === 'es' ? '🤝 Mejor comunicación interna' : '🤝 Better internal communication'}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Reduce confusión y dependencias.' : 'Reduces confusion and dependencies.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '📊 Mayor organización' : '📊 Greater organization'}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Centralizas la información en un solo canal.' : 'You centralize information in a single channel.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🏙️ Casos de uso' : '🏙️ Use cases'}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Consulta diaria de turnos</li>,
                    <li key="2">Verificación antes de iniciar jornada</li>,
                    <li key="3">Confirmación de cambios de último momento</li>,
                    <li key="4">Revisión de asignaciones por eventos</li>,
                    <li key="5">Control operativo en campo</li>
                  ] : [
                    <li key="1">Daily shift inquiry</li>,
                    <li key="2">Verification before starting the workday</li>,
                    <li key="3">Confirmation of last-minute changes</li>,
                    <li key="4">Review of event assignments</li>,
                    <li key="5">Field operational control</li>
                  ]}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🔄 Información siempre actualizada' : '🔄 Always updated information'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Cualquier cambio en el sistema se refleja inmediatamente en la consulta del agente.' : 'Any change in the system is immediately reflected in the agent\'s inquiry.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 Esto permite reaccionar rápidamente ante ajustes operativos.' : '👉 This allows quick reaction to operational adjustments.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📊 Datos para mejorar la gestión' : '📊 Data to improve management'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El sistema también permite:' : 'The system also allows:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Identificar patrones de consulta</li>,
                    <li key="2">Detectar confusiones frecuentes</li>,
                    <li key="3">Mejorar la comunicación interna</li>,
                    <li key="4">Optimizar la planificación de turnos</li>
                  ] : [
                    <li key="1">Identify inquiry patterns</li>,
                    <li key="2">Detect frequent confusions</li>,
                    <li key="3">Improve internal communication</li>,
                    <li key="4">Optimize shift planning</li>
                  ]}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📲 ¿Por qué WhatsApp?' : '📲 Why WhatsApp?'}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Es el canal más usado por los agentes</li>,
                    <li key="2">No requiere capacitación</li>,
                    <li key="3">Funciona en cualquier celular</li>,
                    <li key="4">Permite consultas rápidas en cualquier momento</li>
                  ] : [
                    <li key="1">It\'s the most used channel by agents</li>,
                    <li key="2">No training required</li>,
                    <li key="3">Works on any cell phone</li>,
                    <li key="4">Allows quick inquiries at any time</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 La información llega donde realmente se necesita: en campo.' : '👉 Information reaches where it\'s really needed: in the field.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🔒 Seguridad y control' : '🔒 Security and control'}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Acceso restringido por usuario</li>,
                    <li key="2">Validación de identidad</li>,
                    <li key="3">Protección de datos</li>,
                    <li key="4">Integración con sistemas internos</li>
                  ] : [
                    <li key="1">Restricted access by user</li>,
                    <li key="2">Identity validation</li>,
                    <li key="3">Data protection</li>,
                    <li key="4">Integration with internal systems</li>
                  ]}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🎯 Diferencial clave' : '🎯 Key differential'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No es solo un canal de consulta.' : 'It\'s not just an inquiry channel.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Es una IA que:' : 'It\'s an AI that:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Responde automáticamente</li>,
                    <li key="2">Entrega información precisa</li>,
                    <li key="3">Reduce carga administrativa</li>,
                    <li key="4">Mejora la coordinación operativa</li>
                  ] : [
                    <li key="1">Responds automatically</li>,
                    <li key="2">Delivers precise information</li>,
                    <li key="3">Reduces administrative load</li>,
                    <li key="4">Improves operational coordination</li>
                  ]}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📲 Moderniza la consulta de turnos' : '📲 Modernize shift inquiry'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Facilita el acceso a la información y mejora la eficiencia de tu equipo.' : 'Facilitates access to information and improves your team\'s efficiency.'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">👉 Solicita una demo</li>,
                    <li key="2">👉 Implementa consulta inteligente de turnos</li>,
                    <li key="3">👉 Optimiza tu operación desde hoy 🚀</li>
                  ] : [
                    <li key="1">👉 Request a demo</li>,
                    <li key="2">👉 Implement intelligent shift inquiry</li>,
                    <li key="3">👉 Optimize your operation starting today 🚀</li>
                  ]}
                </ul>
              </article>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
                  <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                    {language === 'es' ? '¿Te interesa saber más?' : 'Interested in learning more?'}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                    {language === 'es' ? 'Implementa WhatsApp Business API y comienza a automatizar la gestión de turnos' : 'Implement WhatsApp Business API and start automating shift management'}
                  </p>
                  <a href="https://wa.me/+573105317126" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {language === 'es' ? 'Escríbenos por WhatsApp' : 'Write to us on WhatsApp'}
                  </a>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">{language === 'es' ? 'Compartir artículo' : 'Share article'}</h3>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      <Facebook className="w-4 h-4" /> Facebook
                    </button>
                    <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-sm text-gray-500 mb-1">
                    {language === 'es' ? 'Volver a' : 'Back to'}
                  </p>
                  <a href="/alcaldias" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                    {language === 'es' ? 'Soluciones para Alcaldías' : 'Solutions for Municipalities'}
                  </a>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">
                    {language === 'es' ? 'Próximo artículo' : 'Next article'}
                  </p>
                  <a href="/alcaldias" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    {language === 'es' ? 'Ver más artículos' : 'View more articles'}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
