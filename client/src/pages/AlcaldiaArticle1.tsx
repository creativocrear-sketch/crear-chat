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
                  {language === 'es' ? 'Mientras tanto, tú tienes:' : 'Meanwhile, you have:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Consultas sin responder</li>,
                    <li key="2">Información dispersa</li>,
                    <li key="3">Personal saturado</li>,
                    <li key="4">Oportunidades de venta perdidas</li>
                  ] : [
                    <li key="1">Unanswered queries</li>,
                    <li key="2">Scattered information</li>,
                    <li key="3">Saturated staff</li>,
                    <li key="4">Lost sales opportunities</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 Cada mensaje no respondido es dinero que estás dejando pasar.' : '👉 Every unanswered message is money you\'re leaving on the table.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '🤖 La solución: IA de Turismo en WhatsApp' : '🤖 The solution: Tourism AI on WhatsApp'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Ahora puedes tener un asistente inteligente que responde automáticamente a cada turista, en cualquier momento del día.' : 'Now you can have an intelligent assistant that automatically responds to each tourist, at any time of day.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? 'Sin apps. Sin descargas. Sin fricción. Directo desde WhatsApp.' : 'No apps. No downloads. No friction. Direct from WhatsApp.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📲 Todo lo que el turista necesita… en una sola consulta' : '📲 Everything that tourist needs… in a single query'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Esta IA no solo responde preguntas básicas. Se convierte en un centro completo de información turística y comercial del municipio.' : 'This AI not only answers basic questions. It becomes a complete center of tourist and commercial information of the municipality.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El usuario puede encontrar en segundos:' : 'The user can find in seconds:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Opciones de alojamiento</li>,
                    <li key="2">Restaurantes según presupuesto</li>,
                    <li key="3">Actividades y planes del día</li>,
                    <li key="4">Eventos y experiencias</li>,
                    <li key="5">Direcciones con mapas</li>,
                    <li key="6">Rutas personalizadas</li>
                  ] : [
                    <li key="1">Accommodation options</li>,
                    <li key="2">Restaurants by budget</li>,
                    <li key="3">Activities and daily plans</li>,
                    <li key="4">Events and experiences</li>,
                    <li key="5">Addresses with maps</li>,
                    <li key="6">Personalized routes</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Y además:' : 'And additionally:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Lavado de vehículos</li>,
                    <li key="2">Centros comerciales</li>,
                    <li key="3">Cines</li>,
                    <li key="4">Servicios médicos</li>,
                    <li key="5">Atención veterinaria</li>,
                    <li key="6">Iglesias con horarios de apertura y misas</li>
                  ] : [
                    <li key="1">Vehicle washing</li>,
                    <li key="2">Commercial centers</li>,
                    <li key="3">Cinemas</li>,
                    <li key="4">Medical services</li>,
                    <li key="5">Veterinary care</li>,
                    <li key="6">Churches with opening hours and masses</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 Todo desde una sola conversación.' : '👉 Everything from a single conversation.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '⚙️ ¿Cómo funciona?' : '⚙️ How does it work?'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El proceso es simple pero potente:' : 'The process is simple but powerful:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">El usuario escribe por WhatsApp</li>,
                    <li key="2">La IA interpreta lo que necesita</li>,
                    <li key="3">Consulta una base de datos organizada del municipio</li>,
                    <li key="4">Responde en segundos con información clara, útil y personalizada</li>
                  ] : [
                    <li key="1">The user writes via WhatsApp</li>,
                    <li key="2">The AI interprets what they need</li>,
                    <li key="3">Queries an organized database of the municipality</li>,
                    <li key="4">Responds in seconds with clear, useful and personalized information</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? 'Todo esto sin intervención humana.' : 'All this without human intervention.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🚀 Beneficios que impactan directamente en tus resultados' : '🚀 Benefits that directly impact your results'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Implementar esta IA no es solo innovación… es crecimiento:' : 'Implementing this AI is not just innovation… it\'s growth:'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed font-semibold">
                  {language === 'es' ? '💰 Más ingresos' : '💰 More income'}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Conecta turistas con comercios locales en tiempo real.' : 'Connects tourists with local businesses in real time.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed font-semibold">
                  {language === 'es' ? '⏱ Atención inmediata' : '⏱ Immediate attention'}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Nunca más dejas un mensaje sin responder.' : 'Never leave a message unanswered.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed font-semibold">
                  {language === 'es' ? '📈 Más consumo local' : '📈 More local consumption'}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Impulsa hoteles, restaurantes, servicios y negocios.' : 'Boosts hotels, restaurants, services and businesses.'}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed font-semibold">
                  {language === 'es' ? '🤝 Mejor experiencia del turista' : '🤝 Better tourist experience'}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Información clara, rápida y centralizada.' : 'Clear, fast and centralized information.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '🧠 Posicionamiento innovador' : '🧠 Innovative positioning'}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Te destacas como ciudad o negocio inteligente.' : 'You stand out as a smart city or business.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📊 Crecimiento basado en datos e inteligencia turística' : '📊 Growth based on data and tourism intelligence'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La plataforma no solo atiende… también aprende.' : 'The platform not only serves… it also learns.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Permite recopilar y analizar información clave de los turistas de forma automatizada a través de WhatsApp.' : 'It allows collecting and analyzing key information from tourists in an automated way through WhatsApp.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Puedes obtener datos como:' : 'You can obtain data such as:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Ciudad de origen del visitante</li>,
                    <li key="2">Destinos más consultados dentro del municipio</li>,
                    <li key="3">Número de acompañantes</li>,
                    <li key="4">Intereses y hábitos de consumo</li>
                  ] : [
                    <li key="1">Visitor\'s city of origin</li>,
                    <li key="2">Most consulted destinations within the municipality</li>,
                    <li key="3">Number of companions</li>,
                    <li key="4">Interests and consumption habits</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 Todo se recoge de manera natural durante la conversación.' : '👉 Everything is collected naturally during the conversation.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🧠 ¿Qué puedes hacer con estos datos?' : '🧠 What can you do with this data?'}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Entender el comportamiento del turista</li>,
                    <li key="2">Identificar tendencias de visita</li>,
                    <li key="3">Tomar decisiones estratégicas</li>,
                    <li key="4">Optimizar la oferta turística</li>,
                    <li key="5">Planificar mejor eventos y campañas</li>
                  ] : [
                    <li key="1">Understand tourist behavior</li>,
                    <li key="2">Identify visit trends</li>,
                    <li key="3">Make strategic decisions</li>,
                    <li key="4">Optimize tourism offer</li>,
                    <li key="5">Plan better events and campaigns</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 Pasas de suposiciones a decisiones basadas en datos reales.' : '👉 You go from assumptions to decisions based on real data.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📢 Promoción turística inteligente y segmentada' : '📢 Intelligent and segmented tourism promotion'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Una vez tienes organizada la información, puedes activar campañas directamente por WhatsApp.' : 'Once you have the information organized, you can activate campaigns directly via WhatsApp.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Y no campañas masivas sin sentido… 👉 sino comunicación segmentada y efectiva.' : 'And not massive campaigns without meaning… 👉 but segmented and effective communication.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Puedes enviar:' : 'You can send:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Fechas conmemorativas del municipio</li>,
                    <li key="2">Eventos y festividades</li>,
                    <li key="3">Promociones en hoteles</li>,
                    <li key="4">Descuentos en restaurantes y comercios</li>,
                    <li key="5">Actividades y experiencias disponibles</li>
                  ] : [
                    <li key="1">Commemorative dates of the municipality</li>,
                    <li key="2">Events and festivities</li>,
                    <li key="3">Promotions in hotels</li>,
                    <li key="4">Discounts in restaurants and shops</li>,
                    <li key="5">Available activities and experiences</li>
                  ]}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🎯 ¿Por qué esto es más efectivo?' : '🎯 Why is this more effective?'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Porque le hablas a personas que:' : 'Because you speak to people who:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Ya interactuaron contigo</li>,
                    <li key="2">Ya mostraron interés</li>,
                    <li key="3">Ya conocen el destino</li>
                  ] : [
                    <li key="1">Already interacted with you</li>,
                    <li key="2">Already showed interest</li>,
                    <li key="3">Already know the destination</li>
                  ]}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '👉 Esto aumenta significativamente la tasa de respuesta y conversión.' : '👉 This significantly increases response and conversion rates.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🏙️ Casos de uso reales' : '🏙️ Real use cases'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Esta solución es ideal para:' : 'This solution is ideal for:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Alcaldías y gobernaciones</li>,
                    <li key="2">Ciudades inteligentes</li>,
                    <li key="3">Cámaras de comercio</li>,
                    <li key="4">Hoteles y operadores turísticos</li>,
                    <li key="5">Agencias de viajes</li>
                  ] : [
                    <li key="1">Municipalities and governments</li>,
                    <li key="2">Smart cities</li>,
                    <li key="3">Chambers of commerce</li>,
                    <li key="4">Hotels and tourism operators</li>,
                    <li key="5">Travel agencies</li>
                  ]}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🔒 Escalable y sin límites' : '🔒 Scalable and without limits'}
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Atiende 10 o 10,000 usuarios al mismo tiempo</li>,
                    <li key="2">Funciona 24/7 sin descanso</li>,
                    <li key="3">Se adapta a nuevos negocios y servicios</li>,
                    <li key="4">Crece sin necesidad de aumentar personal</li>
                  ] : [
                    <li key="1">Attends 10 or 10,000 users at the same time</li>,
                    <li key="2">Works 24/7 without rest</li>,
                    <li key="3">Adapts to new businesses and services</li>,
                    <li key="4">Grows without needing to increase staff</li>
                  ]}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📊 ¿Por qué WhatsApp?' : '📊 Why WhatsApp?'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Porque es donde están tus usuarios:' : 'Because that\'s where your users are:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Más del 90% de las personas lo usan diariamente</li>,
                    <li key="2">No requiere aprendizaje</li>,
                    <li key="3">Tiene alta tasa de apertura</li>,
                    <li key="4">Es el canal más directo y efectivo</li>
                  ] : [
                    <li key="1">More than 90% of people use it daily</li>,
                    <li key="2">No learning required</li>,
                    <li key="3">Has high opening rate</li>,
                    <li key="4">It\'s the most direct and effective channel</li>
                  ]}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '👉 Estás llevando el turismo al canal correcto.' : '👉 You\'re taking tourism to the right channel.'}
                </h4>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '🎯 Diferencial clave' : '🎯 Key differential'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No es un chatbot básico.' : 'It\'s not a basic chatbot.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Es una IA que:' : 'It\'s an AI that:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">Entiende lenguaje natural</li>,
                    <li key="2">Responde de forma contextual</li>,
                    <li key="3">Integra información turística y comercial</li>,
                    <li key="4">Aprende del comportamiento del usuario</li>,
                    <li key="5">Genera datos estratégicos</li>
                  ] : [
                    <li key="1">Understands natural language</li>,
                    <li key="2">Responds contextually</li>,
                    <li key="3">Integrates tourist and commercial information</li>,
                    <li key="4">Learns from user behavior</li>,
                    <li key="5">Generates strategic data</li>
                  ]}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '📲 Empieza hoy' : '📲 Start today'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Convierte cada conversación en una oportunidad de crecimiento para tu ciudad o negocio.' : 'Convert every conversation into a growth opportunity for your city or business.'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    <li key="1">👉 Solicita una demo gratuita</li>,
                    <li key="2">👉 Descubre cómo implementar tu IA turística</li>,
                    <li key="3">👉 Lleva tu destino al siguiente nivel 🚀</li>
                  ] : [
                    <li key="1">👉 Request a free demo</li>,
                    <li key="2">👉 Discover how to implement your tourism AI</li>,
                    <li key="3">👉 Take your destination to the next level 🚀</li>
                  ]}
                </ul>
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
                  <a href="/alcaldias/consulta-deudas-whatsapp" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    {language === 'es' ? 'Consulta de Deudas por WhatsApp en Segundos' : 'Debt Inquiry via WhatsApp in Seconds'}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}