import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, ChevronRight, Share2, MessageCircle, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function AlcaldiaArticle2() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = language === 'es' 
      ? 'Consulta de Deudas por WhatsApp en Segundos - Moderniza tu atención financiera'
      : 'Debt Inquiry via WhatsApp in Seconds - Modernize your financial service';
    
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <a
                href="/alcaldias"
                className="inline-flex items-center gap-2 text-[#1B4F72] hover:text-[#0F2F45] font-medium mb-8 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {language === 'es' ? 'Volver a Alcaldías' : 'Back to Municipalities'}
              </a>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === 'es' ? 'Servicios Financieros' : 'Financial Services'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {language === 'es' ? 'Consulta de Deudas por WhatsApp en Segundos' : 'Debt Inquiry via WhatsApp in Seconds'}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '14 de Abril de 2026' : 'April 14, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 {language === 'es' ? 'min de lectura' : 'min read'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{language === 'es' ? 'Autor: Alex Murillo + Equipo de Soporte' : 'Author: Alex Murillo + Support Team'}</span>
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
                  {language === 'es' ? 'Consulta de Deudas por WhatsApp en Segundos' : 'Debt Inquiry via WhatsApp in Seconds'}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Permite que tus usuarios accedan a su información financiera de forma rápida, clara y sin fricciones' : 'Allow your users to access their financial information quickly, clearly, and without friction'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'El problema que estás enfrentando' : 'The problem you\'re facing'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Tus usuarios sí quieren información... pero no quieren llamar.' : 'Your users do want information... but they don\'t want to call.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Hoy seguramente tienes:' : 'Today you surely have:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Líneas saturadas de atención',
                    'Usuarios preguntando lo mismo una y otra vez',
                    'Tiempos de respuesta largos',
                    'Equipos colapsados atendiendo consultas básicas'
                  ].map((issue, index) => (
                    <li key={index}>{issue}</li>
                  )) : [
                    'Saturated attention lines',
                    'Users asking the same thing over and over',
                    'Long response times',
                    'Teams collapsed handling basic queries'
                  ].map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Y mientras tanto:' : 'And meanwhile:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'el usuario se frustra',
                    'la información no llega a tiempo',
                    'tu operación se vuelve ineficiente'
                  ].map((issue, index) => (
                    <li key={index}>{'\ud83d\udc49'} {issue}</li>
                  )) : [
                    'the user gets frustrated',
                    'information doesn\'t arrive on time',
                    'your operation becomes inefficient'
                  ].map((issue, index) => (
                    <li key={index}>{'\ud83d\udc49'} {issue}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'La solución: IA de Consulta de Deudas en WhatsApp' : 'The solution: AI Debt Inquiry on WhatsApp'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Permite que cualquier usuario consulte su estado de cuenta en segundos, sin necesidad de hablar con un asesor.' : 'Allow any user to check their account status in seconds, without needing to speak with an advisor.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Solo escribe:' : 'Just write:'}
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-blue-800 font-semibold">
                    {language === 'es' ? '"Consultar deuda"' : '"Check debt"'}
                  </p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Y obtiene de inmediato:' : 'And immediately gets:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Valor pendiente',
                    'Detalle de la obligación',
                    'Fechas importantes',
                    'Estado de su cuenta'
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : [
                    'Pending amount',
                    'Obligation details',
                    'Important dates',
                    'Account status'
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? 'Sin llamadas. Sin esperas. Sin complicaciones.' : 'No calls. No waits. No complications.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Cómo funciona?' : 'How does it work?'}
                </h3>

                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'El usuario escribe por WhatsApp',
                    'Ingresa su dato (cédula, contrato, etc.)',
                    'La IA consulta la base de datos',
                    'Responde en tiempo real con la información'
                  ].map((step, index) => (
                    <li key={index}>{step}</li>
                  )) : [
                    'The user writes via WhatsApp',
                    'Enters their data (ID, contract, etc.)',
                    'The AI queries the database',
                    'Responds in real time with information'
                  ].map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? 'Todo automatizado.' : 'Everything automated.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Qué tipo de consultas puede responder?' : 'What type of queries can it answer?'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Estado de deuda actual',
                    'Historial básico',
                    'Fechas de pago',
                    'Concepto de la deuda',
                    'Estado de cuenta general'
                  ].map((query, index) => (
                    <li key={index}>{query}</li>
                  )) : [
                    'Current debt status',
                    'Basic history',
                    'Payment dates',
                    'Debt concept',
                    'General account status'
                  ].map((query, index) => (
                    <li key={index}>{query}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Beneficios para tu organización' : 'Benefits for your organization'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\u23f1\ufe0f'} {language === 'es' ? 'Menos carga operativa' : 'Less operational load'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Tu equipo deja de responder consultas repetitivas.' : 'Your team stops answering repetitive queries.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcf1'} {language === 'es' ? 'Atención inmediata' : 'Immediate attention'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'El usuario obtiene respuestas en segundos.' : 'The user gets answers in seconds.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83e\udd1d'} {language === 'es' ? 'Mejor experiencia' : 'Better experience'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Proceso rápido, claro y sin fricción.' : 'Fast, clear, and frictionless process.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcc9'} {language === 'es' ? 'Menos saturación' : 'Less saturation'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Reduces llamadas y tickets de soporte.' : 'You reduce calls and support tickets.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcca'} {language === 'es' ? 'Mayor organización' : 'Better organization'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Centralizas la información en un solo canal.' : 'You centralize information in one channel.'}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Casos de uso' : 'Use cases'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfe2'} {language === 'es' ? 'Empresas de servicios' : 'Service companies'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfeb'} {language === 'es' ? 'Instituciones educativas' : 'Educational institutions'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfdb\ufe0f'} {language === 'es' ? 'Administraciones' : 'Administrations'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfe6'} {language === 'es' ? 'Financieras' : 'Financial institutions'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcf1'} {language === 'es' ? 'Telecomunicaciones' : 'Telecommunications'}</h5>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Por qué WhatsApp?' : 'Why WhatsApp?'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Es el canal más usado por los usuarios',
                    'No requiere aprendizaje',
                    'Alta tasa de apertura',
                    'Comunicación directa y efectiva'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  )) : [
                    'It\'s the most used channel by users',
                    'No learning required',
                    'High open rate',
                    'Direct and effective communication'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Estás llevando la información donde el usuario ya está.' : '\ud83d\udc49 You\'re taking information where the user already is.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Seguridad y control' : 'Security and control'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Validación de identidad del usuario',
                    'Acceso seguro a la información',
                    'Protección de datos',
                    'Integración con sistemas internos'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'User identity validation',
                    'Secure access to information',
                    'Data protection',
                    'Integration with internal systems'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Escalable y eficiente' : 'Scalable and efficient'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Atiende cientos o miles de usuarios al mismo tiempo',
                    'Disponible 24/7',
                    'Se integra fácilmente',
                    'Reduce costos operativos'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Serve hundreds or thousands of users simultaneously',
                    'Available 24/7',
                    'Integrates easily',
                    'Reduces operational costs'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Diferencial clave' : 'Key differential'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No es un chatbot básico.' : 'It\'s not a basic chatbot.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Es una IA que:' : 'It\'s an AI that:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Entiende la consulta del usuario',
                    'Responde con precisión',
                    'Entrega información útil en segundos',
                    'Mejora la experiencia sin intervención humana'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  )) : [
                    'Understands the user\'s query',
                    'Responds with precision',
                    'Delivers useful information in seconds',
                    'Improves experience without human intervention'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Moderniza tu atención hoy' : 'Modernize your service today'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Deja de saturar tus canales con consultas repetitivas.' : 'Stop saturating your channels with repetitive queries.'}
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <ul className="space-y-2">
                    {language === 'es' ? [
                      '\ud83d\udc49 Solicita una demo gratuita',
                      '\ud83d\udc49 Implementa tu IA de consulta',
                      '\ud83d\udc49 Optimiza tu atención desde hoy'
                    ].map((item, index) => (
                      <li key={index} className="text-blue-800 font-semibold">{item}</li>
                    )) : [
                      '\ud83d\udc49 Request a free demo',
                      '\ud83d\udc49 Implement your query AI',
                      '\ud83d\udc49 Optimize your service starting today'
                    ].map((item, index) => (
                      <li key={index} className="text-blue-800 font-semibold">{item}</li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
                  <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                    {language === 'es' ? '¿Te interesa saber más?' : 'Interested in learning more?'}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                    {language === 'es' ? 'Implementa WhatsApp Business API y comienza a automatizar la atención al cliente' : 'Implement WhatsApp Business API and start automating customer service'}
                  </p>
                  
                  <a
                    href="https://wa.me/+573105317126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {language === 'es' ? 'Escríbenos por WhatsApp' : 'Write to us on WhatsApp'}
                  </a>
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {language === 'es' ? 'Compartir artículo' : 'Share article'}
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      {language === 'es' ? 'Facebook' : 'Facebook'}
                    </button>
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {language === 'es' ? 'WhatsApp' : 'WhatsApp'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-sm text-gray-500 mb-1">
                    {language === 'es' ? 'Volver a' : 'Back to'}
                  </p>
                  <a
                    href="/alcaldias"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {language === 'es' ? 'Soluciones para Alcaldías' : 'Solutions for Municipalities'}
                  </a>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">
                    {language === 'es' ? 'Próximo artículo' : 'Next article'}
                  </p>
                  <a
                    href="/alcaldias/plataforma-educativa-whatsapp"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    {language === 'es' ? 'Convierte WhatsApp en una Plataforma Educativa Interactiva' : 'Turn WhatsApp into an Interactive Educational Platform'}
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

export default AlcaldiaArticle2;
