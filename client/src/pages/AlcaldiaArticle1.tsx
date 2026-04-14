import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, ChevronRight, MessageCircle, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AlcaldiaArticle1() {
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
                  {language === 'es' ? 'Turismo inteligente' : 'Smart tourism'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {language === 'es' ? '🧭 CONVIERTE WHATSAPP EN TU MEJOR GUÍA TURÍSTICO 24/7' : '🧭 TURN WHATSAPP INTO YOUR BEST 24/7 TOURIST GUIDE'}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '13 de abril de 2026' : 'April 13, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 {language === 'es' ? 'min de lectura' : 'min read'}</span>
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
                  {language === 'es' ? 'Automatiza la atención, impulsa el comercio local y aumenta el consumo turístico en tu ciudad o negocio' : 'Automate attention, boost local commerce and increase tourism consumption in your city or business'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '🌍 El problema que estás teniendo (aunque no lo notes)' : '🌍 The problem you\'re having (even if you don\'t notice it)'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Hoy el turista es inmediato. No espera.' : 'Today\'s tourist is immediate. They don\'t wait.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Si alguien pregunta: "¿Qué hacer hoy?", "¿Dónde queda este sitio?", "¿Qué hay cerca?" y no recibe respuesta en segundos… 👉 simplemente se va a otra opción.' : 'If someone asks: "What to do today?", "Where is this site?", "What\'s nearby?" and doesn\'t receive a response in seconds… 👉 they simply go to another option.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Mientras tanto, tú tienes: Consultas sin responder, Información dispersa, Personal saturado, Oportunidades de venta perdidas' : 'Meanwhile, you have: Unanswered queries, Scattered information, Saturated staff, Lost sales opportunities'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 Cada mensaje no respondido es dinero que estás dejando pasar.' : '👉 Every unanswered message is money you\'re leaving on the table.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '🤖 La solución: IA de Turismo en WhatsApp' : '🤖 The solution: Tourism AI on WhatsApp'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Ahora puedes tener un asistente inteligente que responde automáticamente a cada turista, en cualquier momento del día. Sin apps. Sin descargas. Sin fricción. Directo desde WhatsApp.' : 'Now you can have an intelligent assistant that automatically responds to each tourist, at any time of day. No apps. No downloads. No friction. Direct from WhatsApp.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📲 Todo lo que el turista necesita… en una sola consulta' : '📲 Everything that tourist needs… in a single query'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Esta IA no solo responde preguntas básicas. Se convierte en un centro completo de información turística y comercial del municipio. El usuario puede encontrar en segundos: Opciones de alojamiento, Restaurantes según presupuesto, Actividades y planes del día, Eventos y experiencias, Direcciones con mapas, Rutas personalizadas. Y además: Lavado de vehículos, Centros comerciales, Cines, Servicios médicos, Atención veterinaria, Iglesias con horarios de apertura y misas. 👉 Todo desde una sola conversación.' : 'This AI not only answers basic questions. It becomes a complete center of tourist and commercial information of the municipality. The user can find in seconds: Accommodation options, Restaurants by budget, Activities and daily plans, Events and experiences, Addresses with maps, Personalized routes. And additionally: Vehicle washing, Commercial centers, Cinemas, Medical services, Veterinary care, Churches with opening hours and masses. 👉 Everything from a single conversation.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '⚙️ ¿Cómo funciona?' : '⚙️ How does it work?'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El proceso es simple pero potente: El usuario escribe por WhatsApp, La IA interpreta lo que necesita, Consulta una base de datos organizada del municipio, Responde en segundos con información clara, útil y personalizada. Todo esto sin intervención humana.' : 'The process is simple but powerful: The user writes via WhatsApp, The AI interprets what they need, Queries an organized database of the municipality, Responds in seconds with clear, useful and personalized information. All this without human intervention.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🚀 Beneficios que impactan directamente en tus resultados' : '🚀 Benefits that directly impact your results'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? '💰 Más ingresos - Conecta turistas con comercios locales en tiempo real. ⏱️ Atención inmediata - Nunca más dejas un mensaje sin responder. 📈 Más consumo local - Impulsa hoteles, restaurantes, servicios y negocios. 🤝 Mejor experiencia del turista - Información clara, rápida y centralizada. 🧠 Posicionamiento innovador - Te destacas como ciudad o negocio inteligente.' : '💰 More income - Connects tourists with local businesses in real time. ⏱️ Immediate attention - Never leave a message unanswered. 📈 More local consumption - Boosts hotels, restaurants, services and businesses. 🤝 Better tourist experience - Clear, fast and centralized information. 🧠 Innovative positioning - You stand out as a smart city or business.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📊 Crecimiento basado en datos e inteligencia turística' : '📊 Growth based on data and tourism intelligence'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La plataforma no solo atiende… también aprende. Permite recopilar y analizar información clave de los turistas de forma automatizada a través de WhatsApp. Puedes obtener datos como: Ciudad de origen del visitante, Destinos más consultados dentro del municipio, Número de acompañantes, Intereses y hábitos de consumo. 👉 Todo se recoge de manera natural durante la conversación.' : 'The platform not only serves… it also learns. It allows collecting and analyzing key information from tourists in an automated way through WhatsApp. You can obtain data such as: Visitor\'s city of origin, Most consulted destinations within the municipality, Number of companions, Interests and consumption habits. 👉 Everything is collected naturally during the conversation.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🧠 ¿Qué puedes hacer con estos datos?' : '🧠 What can you do with this data?'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Entender el comportamiento del turista, Identificar tendencias de visita, Tomar decisiones estratégicas, Optimizar la oferta turística, Planificar mejor eventos y campañas. 👉 Pasas de suposiciones a decisiones basadas en datos reales.' : 'Understand tourist behavior, Identify visit trends, Make strategic decisions, Optimize tourism offer, Plan better events and campaigns. 👉 You go from assumptions to decisions based on real data.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📢 Promoción turística inteligente y segmentada' : '📢 Intelligent and segmented tourism promotion'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Una vez tienes organizada la información, puedes activar campañas directamente por WhatsApp. Y no campañas masivas sin sentido… 👉 sino comunicación segmentada y efectiva. Puedes enviar: Fechas conmemorativas del municipio, Eventos y festividades, Promociones en hoteles, Descuentos en restaurantes y comercios, Actividades y experiencias disponibles.' : 'Once you have the information organized, you can activate campaigns directly via WhatsApp. And not massive campaigns without meaning… 👉 but segmented and effective communication. You can send: Commemorative dates of the municipality, Events and festivities, Promotions in hotels, Discounts in restaurants and shops, Available activities and experiences.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🎯 ¿Por qué esto es más efectivo?' : '🎯 Why is this more effective?'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Porque le hablas a personas que: Ya interactuaron contigo, Ya mostraron interés, Ya conocen el destino. 👉 Esto aumenta significativamente la tasa de respuesta y conversión.' : 'Because you speak to people who: Already interacted with you, Already showed interest, Already know the destination. 👉 This significantly increases response and conversion rates.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🏙️ Casos de uso reales' : '🏙️ Real use cases'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Esta solución es ideal para: Alcaldías y gobernaciones, Ciudades inteligentes, Cámaras de comercio, Hoteles y operadores turísticos, Agencias de viajes.' : 'This solution is ideal for: Municipalities and governments, Smart cities, Chambers of commerce, Hotels and tourism operators, Travel agencies.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🔒 Escalable y sin límites' : '🔒 Scalable and without limits'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Atiende 10 o 10,000 usuarios al mismo tiempo. Funciona 24/7 sin descanso. Se adapta a nuevos negocios y servicios. Crece sin necesidad de aumentar personal.' : 'Attends 10 or 10,000 users at the same time. Works 24/7 without rest. Adapts to new businesses and services. Grows without needing to increase staff.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📊 ¿Por qué WhatsApp?' : '📊 Why WhatsApp?'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Porque es donde están tus usuarios: Más del 90% de las personas lo usan diariamente, No requiere aprendizaje, Tiene alta tasa de apertura, Es el canal más directo y efectivo.' : 'Because that\'s where your users are: More than 90% of people use it daily, No learning required, Has high opening rate, It\'s the most direct and effective channel.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '👉 Estás llevando el turismo al canal correcto.' : '👉 You\'re taking tourism to the right channel.'}
                </h4>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🎯 Diferencial clave' : '🎯 Key differential'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No es un chatbot básico. Es una IA que: Entiende lenguaje natural, Responde de forma contextual, Integra información turística y comercial, Aprende del comportamiento del usuario, Genera datos estratégicos.' : 'It\'s not a basic chatbot. It\'s an AI that: Understands natural language, Responds contextually, Integrates tourist and commercial information, Learns from user behavior, Generates strategic data.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📲 Empieza hoy' : '📲 Start today'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Convierte cada conversación en una oportunidad de crecimiento para tu ciudad o negocio. 👉 Solicita una demo gratuita. 👉 Descubre cómo implementar tu IA turística. 👉 Lleva tu destino al siguiente nivel 🚀' : 'Convert every conversation into a growth opportunity for your city or business. 👉 Request a free demo. 👉 Discover how to implement your tourism AI. 👉 Take your destination to the next level 🚀'}
                </p>
              </article>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
                  <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                    {language === 'es' ? '¿Te interesa saber más?' : 'Interested in learning more?'}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                    {language === 'es' ? 'Implementa WhatsApp Business API y comienza a automatizar la atención al cliente' : 'Implement WhatsApp Business API and start automating customer service'}
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
      </main>
      <Footer />
    </div>
  );
}
