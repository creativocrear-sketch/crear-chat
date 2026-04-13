import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle6() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = window.location.href;
    const title = t('articles.article6.title');
    const text = t('articles.article6.shareText');
    
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
                {language === 'es' ? 'Volver al blog' : 'Back to blog'}
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === 'es' ? 'Conceptos Básicos' : 'Basic Concepts'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t('articles.article6.title')}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '21 de Marzo de 2026' : 'March 21, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 {language === 'es' ? 'min de lectura' : 'min read'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{language === 'es' ? 'Redacción:' : 'By:'} Alex Murillo + {language === 'es' ? 'Equipo de Soporte' : 'Support Team'}</span>
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
                  {t('articles.article6.title')}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Muchas personas se preguntan por qué no pueden simplemente usar WhatsApp Business API directamente. La respuesta es técnica pero importante de entender.' : 'Many people wonder why they can\'t just use WhatsApp Business API directly. The answer is technical but important to understand.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'WhatsApp Business API No es una Aplicación' : 'WhatsApp Business API is Not an Application'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Esta es la clave: WhatsApp Business API es solo una API (Interfaz de Programación de Aplicaciones). No tiene interfaz gráfica, no tiene botones, no tiene pantallas. Es simplemente un conjunto de instrucciones que permite que otros sistemas se comuniquen con WhatsApp.' : 'This is the key: WhatsApp Business API is just an API (Application Programming Interface). It has no graphical interface, no buttons, no screens. It\'s simply a set of instructions that allows other systems to communicate with WhatsApp.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Imagina que WhatsApp Business API es como el motor de un automóvil. El motor es poderoso, pero sin un volante, pedales y asiento, no puedes conducir. Necesitas un automóvil completo (la plataforma) para usar el motor (la API).' : 'Imagine WhatsApp Business API is like a car engine. The engine is powerful, but without a steering wheel, pedals and seat, you can\'t drive. You need a complete car (the platform) to use the engine (the API).'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Razones por las que Necesitas una Plataforma' : 'Reasons Why You Need a Platform'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '1. Interfaz de Usuario' : '1. User Interface'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Necesitas un lugar donde:' : 'You need a place where:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Ver tus conversaciones' : 'View your conversations'}</li>
                  <li>{language === 'es' ? 'Responder mensajes' : 'Reply to messages'}</li>
                  <li>{language === 'es' ? 'Organizar chats' : 'Organize chats'}</li>
                  <li>{language === 'es' ? 'Buscar conversaciones anteriores' : 'Search previous conversations'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Sin una plataforma, tendrías que escribir código para hacer cada una de estas cosas.' : 'Without a platform, you would have to write code to do each of these things.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '2. Gestión de Múltiples Agentes' : '2. Multiple Agent Management'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Si tienes más de una persona respondiendo mensajes:' : 'If you have more than one person responding to messages:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Necesitas asignar chats a diferentes agentes' : 'You need to assign chats to different agents'}</li>
                  <li>{language === 'es' ? 'Evitar que dos personas respondan lo mismo' : 'Prevent two people from responding to the same thing'}</li>
                  <li>{language === 'es' ? 'Mantener historial de quién respondió qué' : 'Keep track of who responded to what'}</li>
                  <li>{language === 'es' ? 'Escalar conversaciones complejas' : 'Escalate complex conversations'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Una plataforma maneja todo esto automáticamente.' : 'A platform handles all of this automatically.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '3. Automatización' : '3. Automation'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Para automatizar procesos necesitas:' : 'To automate processes you need:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Crear flujos de conversación' : 'Create conversation flows'}</li>
                  <li>{language === 'es' ? 'Definir respuestas automáticas' : 'Define automatic responses'}</li>
                  <li>{language === 'es' ? 'Integrar con otros sistemas' : 'Integrate with other systems'}</li>
                  <li>{language === 'es' ? 'Programar mensajes' : 'Schedule messages'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La API sola no puede hacer esto. Necesitas una plataforma que construya estas automatizaciones.' : 'The API alone cannot do this. You need a platform that builds these automations.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '4. Seguridad' : '4. Security'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Una plataforma profesional proporciona:' : 'A professional platform provides:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Encriptación de datos' : 'Data encryption'}</li>
                  <li>{language === 'es' ? 'Autenticación de usuarios' : 'User authentication'}</li>
                  <li>{language === 'es' ? 'Control de acceso' : 'Access control'}</li>
                  <li>{language === 'es' ? 'Auditoría de acciones' : 'Action auditing'}</li>
                  <li>{language === 'es' ? 'Cumplimiento de regulaciones' : 'Regulatory compliance'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Implementar esto por tu cuenta sería extremadamente complejo y costoso.' : 'Implementing this on your own would be extremely complex and expensive.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '5. Escalabilidad' : '5. Scalability'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Cuando tu negocio crece:' : 'When your business grows:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Necesitas manejar más conversaciones' : 'You need to handle more conversations'}</li>
                  <li>{language === 'es' ? 'Más agentes' : 'More agents'}</li>
                  <li>{language === 'es' ? 'Más integraciones' : 'More integrations'}</li>
                  <li>{language === 'es' ? 'Más datos' : 'More data'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Una plataforma está diseñada para escalar. Hacerlo por tu cuenta requeriría reescribir código constantemente.' : 'A platform is designed to scale. Doing it yourself would require constantly rewriting code.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '6. Soporte Técnico' : '6. Technical Support'}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Si algo falla:' : 'If something fails:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? '¿A quién llamas?' : 'Who do you call?'}</li>
                  <li>{language === 'es' ? '¿Cómo se resuelve?' : 'How is it resolved?'}</li>
                  <li>{language === 'es' ? '¿Quién mantiene el sistema?' : 'Who maintains the system?'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Una plataforma proporciona soporte profesional. Si intentas hacerlo solo, eres responsable de todo.' : 'A platform provides professional support. If you try to do it alone, you are responsible for everything.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Analogía del Restaurante' : 'Restaurant Analogy'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Piensa en ello así:' : 'Think of it this way:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'WhatsApp Business API = Ingredientes y equipo de cocina' : 'WhatsApp Business API = Ingredients and kitchen equipment'}</li>
                  <li>{language === 'es' ? 'Plataforma de Gestión = El restaurante completo (cocina, meseros, caja registradora, etc.)' : 'Management Platform = The complete restaurant (kitchen, waiters, cash register, etc.)'}</li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Puedes tener los mejores ingredientes del mundo, pero sin un restaurante completo, no puedes servir comida a los clientes de manera eficiente.' : 'You can have the best ingredients in the world, but without a complete restaurant, you cannot efficiently serve food to customers.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Tipos de Plataformas' : 'Types of Platforms'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Existen diferentes tipos de plataformas según tus necesidades:' : 'There are different types of platforms according to your needs:'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Plataformas Especializadas en WhatsApp' : 'WhatsApp-Specialized Platforms'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Enfoque total en WhatsApp' : 'Total focus on WhatsApp'}</li>
                  <li>{language === 'es' ? 'Características avanzadas de WhatsApp' : 'Advanced WhatsApp features'}</li>
                  <li>{language === 'es' ? 'Mejor para empresas que usan principalmente WhatsApp' : 'Better for companies that mainly use WhatsApp'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Plataformas Omnicanal' : 'Omnichannel Platforms'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Integran WhatsApp con otros canales (email, SMS, redes sociales)' : 'Integrate WhatsApp with other channels (email, SMS, social media)'}</li>
                  <li>{language === 'es' ? 'Mejor para empresas que usan múltiples canales' : 'Better for companies that use multiple channels'}</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? 'Plataformas Empresariales' : 'Enterprise Platforms'}
                </h4>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Soluciones completas de comunicación' : 'Complete communication solutions'}</li>
                  <li>{language === 'es' ? 'Mejor para grandes empresas con necesidades complejas' : 'Better for large companies with complex needs'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Costos de No Usar una Plataforma' : 'Costs of Not Using a Platform'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Si intentas implementar WhatsApp Business API sin una plataforma:' : 'If you try to implement WhatsApp Business API without a platform:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Desarrollo: Meses de trabajo de programadores' : 'Development: Months of programmer work'}</li>
                  <li>{language === 'es' ? 'Mantenimiento: Equipo dedicado a mantener el sistema' : 'Maintenance: Dedicated team to maintain the system'}</li>
                  <li>{language === 'es' ? 'Seguridad: Inversión significativa en infraestructura segura' : 'Security: Significant investment in secure infrastructure'}</li>
                  <li>{language === 'es' ? 'Escalabilidad: Reescritura de código cuando creces' : 'Scalability: Code rewriting when you grow'}</li>
                  <li>{language === 'es' ? 'Oportunidad: Tiempo que podrías dedicar a tu negocio' : 'Opportunity: Time you could dedicate to your business'}</li>
                  <li>{language === 'es' ? 'Costo total: Fácilmente $50,000 - $200,000+ en el primer año' : 'Total cost: Easily $50,000 - $200,000+ in the first year'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Costo de Usar una Plataforma' : 'Cost of Using a Platform'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Usando una plataforma profesional:' : 'Using a professional platform:'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'Implementación: Días en lugar de meses' : 'Implementation: Days instead of months'}</li>
                  <li>{language === 'es' ? 'Mantenimiento: Responsabilidad del proveedor' : 'Maintenance: Provider responsibility'}</li>
                  <li>{language === 'es' ? 'Seguridad: Certificaciones profesionales' : 'Security: Professional certifications'}</li>
                  <li>{language === 'es' ? 'Escalabilidad: Automática' : 'Scalability: Automatic'}</li>
                  <li>{language === 'es' ? 'Soporte: Equipo profesional disponible' : 'Support: Professional team available'}</li>
                  <li>{language === 'es' ? 'Costo total: Típicamente $500 - $5,000 mensuales' : 'Total cost: Typically $500 - $5,000 monthly'}</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Conclusión' : 'Conclusion'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Necesitas una plataforma de gestión porque:' : 'You need a management platform because:'}
                </p>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === 'es' ? 'WhatsApp Business API es solo un motor, no un automóvil completo' : 'WhatsApp Business API is just an engine, not a complete car'}</li>
                  <li>{language === 'es' ? 'Una plataforma proporciona la interfaz, seguridad y escalabilidad que necesitas' : 'A platform provides the interface, security and scalability you need'}</li>
                  <li>{language === 'es' ? 'Intentar hacerlo solo es exponencialmente más caro' : 'Trying to do it yourself is exponentially more expensive'}</li>
                  <li>{language === 'es' ? 'Una plataforma profesional te permite enfocarte en tu negocio, no en infraestructura' : 'A professional platform allows you to focus on your business, not infrastructure'}</li>
                </ol>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La pregunta no es "¿Por qué necesito una plataforma?" sino "¿Cuál es la mejor plataforma para mi negocio?"' : 'The question is not "Why do I need a platform?" but "What is the best platform for my business?"'}
                </p>
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{language === 'es' ? 'Compartir:' : 'Share:'}</h4>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    {language === 'es' ? 'Facebook' : 'Facebook'}
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {language === 'es' ? 'WhatsApp' : 'WhatsApp'}
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Artículo anterior' : 'Previous article'}</p>
                    <a
                      href="/blog/plataformas-integracion-whatsapp-api"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿Con que plataformas puedo integrar el WhatsApp Business API?' : 'What platforms can I integrate WhatsApp Business API with?'}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">{language === 'es' ? 'Siguiente artículo' : 'Next article'}</p>
                    <a
                      href="/blog/diferencias-plataformas-whatsapp"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === 'es' ? '¿En que se diferencian las plataformas que administran los chat de WhatsApp?' : 'What are the differences between platforms that manage WhatsApp chats?'}
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
                  {language === 'es' ? '¿Listo para implementar WhatsApp Business API?' : 'Ready to implement WhatsApp Business API?'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {language === 'es' ? 'Contáctame para una consulta personalizada sobre cómo automatizar tu negocio con WhatsApp Business API.' : 'Contact me for a personalized consultation on how to automate your business with WhatsApp Business API.'}
                </p>
                
                <a
                  href="https://wa.me/+573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  {language === 'es' ? 'Escríbeme por WhatsApp' : 'Write me on WhatsApp'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-8">{language === 'es' ? 'Otros artículos' : 'Other articles'}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === 'es' ? 'Conceptos Básicos' : 'Basic Concepts'}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === 'es' ? '¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?' : 'What is the difference between WhatsApp Business and WhatsApp Business API?'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === 'es' ? 'Descubre las diferencias clave entre WhatsApp Business y WhatsApp Business API, y entiende cuál es la mejor opción para tu negocio.' : 'Discover the key differences between WhatsApp Business and WhatsApp Business API, and understand which is the best option for your business.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>5 min</span>
                      <a href="/blog/diferencia-whatsapp-business-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        {language === 'es' ? 'Leer más' : 'Read more'}
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === 'es' ? 'Casos de Uso' : 'Use Cases'}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === 'es' ? '¿Para que me sirve WhatsApp Business API para mi negocio?' : 'What is WhatsApp Business API useful for in my business?'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === 'es' ? 'Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros.' : 'Explore real use cases of WhatsApp Business API in restaurants, hotels, cafes, lawyers and collection offices.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>8 min</span>
                      <a href="/blog/casos-uso-whatsapp-business-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        {language === 'es' ? 'Leer más' : 'Read more'}
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === 'es' ? 'Implementación' : 'Implementation'}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === 'es' ? '¿Cuáles son los primeros pasos para migrar WhatsApp Business API?' : 'What are the first steps to migrate WhatsApp Business API?'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === 'es' ? 'Guía paso a paso para migrar tu negocio a WhatsApp Business API sin complicaciones.' : 'Step-by-step guide to migrate your business to WhatsApp Business API without complications.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>7 min</span>
                      <a href="/blog/primeros-pasos-migrar-whatsapp-api" className="text-[#1B4F72] hover:text-[#0F2F45] font-medium">
                        {language === 'es' ? 'Leer más' : 'Read more'}
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
