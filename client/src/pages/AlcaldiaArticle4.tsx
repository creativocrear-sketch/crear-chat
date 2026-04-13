import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Share2, MessageCircle, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function AlcaldiaArticle4() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = language === 'es' 
      ? 'Consulta SISBÉN y subsidios en segundos por WhatsApp - Moderniza la atención ciudadana'
      : 'SISBÉN and subsidy inquiry in seconds via WhatsApp - Modernize citizen service';
    
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
                  {language === 'es' ? 'Servicios ciudadanos' : 'Citizen services'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {language === 'es' ? 'Consulta SISBÉN y subsidios en segundos por WhatsApp' : 'SISBÉN and subsidy inquiry in seconds via WhatsApp'}
              </h1>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === 'es' ? 'Facilita el acceso a la información y moderniza la atención ciudadana' : 'Facilitate access to information and modernize citizen service'}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '16 de abril de 2026' : 'April 16, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 {language === 'es' ? 'min de lectura' : 'min read'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{language === 'es' ? 'Autor: Alex Murillo + equipo de soporte' : 'Author: Alex Murillo + support team'}</span>
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
                  {language === 'es' ? 'El problema en la atención al ciudadano' : 'The problem in citizen service'}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Miles de personas necesitan información sobre subsidios... pero el acceso sigue siendo complicado.' : 'Thousands of people need information about subsidies... but access remains complicated.'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Filas largas',
                    'Procesos lentos',
                    'Información poco clara',
                    'Saturación en oficinas',
                    'Baja cobertura digital'
                  ].map((issue, index) => (
                    <li key={index}>{issue}</li>
                  )) : [
                    'Long lines',
                    'Slow processes',
                    'Unclear information',
                    'Office saturation',
                    'Low digital coverage'
                  ].map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Resultado: ciudadanos frustrados y desinformados.' : '\ud83d\udc49 Result: frustrated and uninformed citizens.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'La solución: IA de Consulta de Subsidios por WhatsApp' : 'The solution: Subsidy Inquiry AI via WhatsApp'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Permite que cualquier persona consulte su información en segundos, desde su celular.' : 'Allows anyone to consult their information in seconds, from their cell phone.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? 'Solo debe escribir:' : 'Just write:'}
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <p className="text-blue-800 font-semibold text-lg">
                    {language === 'es' ? '\ud83d\udc49 "Consultar Sisbén"' : '\ud83d\udc49 "Consult Sisbén"'}
                  </p>
                  <p className="text-blue-700 mt-2">
                    {language === 'es' ? 'Y listo.' : 'And that\'s it.'}
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Qué puede consultar el usuario?' : 'What can the user consult?'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Grupo del Sisbén',
                    'Estado como beneficiario',
                    'Subsidios disponibles',
                    'Programas sociales activos',
                    'Requisitos para aplicar'
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : [
                    'Sisbén group',
                    'Beneficiary status',
                    'Available subsidies',
                    'Active social programs',
                    'Application requirements'
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Cómo funciona?' : 'How does it work?'}
                </h3>

                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'El usuario envía su número de cédula',
                    'La IA valida la información en la base de datos',
                    'Responde en tiempo real con datos claros y organizados'
                  ].map((step, index) => (
                    <li key={index}>{step}</li>
                  )) : [
                    'The user sends their ID number',
                    'The AI validates the information in the database',
                    'Responds in real time with clear and organized data'
                  ].map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Beneficios que transforman la atención' : 'Benefits that transform service'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\u23f1\ufe0f'} {language === 'es' ? 'Ahorro de tiempo' : 'Time savings'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Consultas sin filas ni desplazamientos.' : 'Consultations without lines or travel.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcc9'} {language === 'es' ? 'Descongestión de oficinas' : 'Office decongestion'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Menos carga para el personal.' : 'Less load for staff.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udd0d'} {language === 'es' ? 'Mayor transparencia' : 'Greater transparency'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Información clara y accesible.' : 'Clear and accessible information.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcf1'} {language === 'es' ? 'Inclusión digital' : 'Digital inclusion'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Acceso desde cualquier celular.' : 'Access from any cell phone.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83e\udd1d'} {language === 'es' ? 'Mejor servicio al ciudadano' : 'Better citizen service'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Atención rápida y eficiente.' : 'Fast and efficient service.'}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Casos de uso' : 'Use cases'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfdb\ufe0f'} {language === 'es' ? 'Alcaldías' : 'Municipalities'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udff0'} {language === 'es' ? 'Gobernaciones' : 'Governorates'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfdb\ufe0f'} {language === 'es' ? 'Entidades del Estado' : 'State entities'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2"> {'\ud83e\udd1d'} {language === 'es' ? 'Programas sociales' : 'Social programs'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83e\udd1d'} {language === 'es' ? 'ONG' : 'NGOs'}</h5>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Seguridad y confianza' : 'Security and trust'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La solución puede incluir:' : 'The solution can include:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Validación de identidad',
                    'Protección de datos personales',
                    'Cumplimiento normativo',
                    'Acceso seguro a la información'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Identity validation',
                    'Personal data protection',
                    'Regulatory compliance',
                    'Secure access to information'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Por qué WhatsApp?' : 'Why WhatsApp?'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Es el canal más usado por la población',
                    'No requiere conocimientos técnicos',
                    'Permite atención masiva',
                    'Reduce barreras de acceso'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  )) : [
                    'It\'s the most used channel by the population',
                    'No technical knowledge required',
                    'Allows massive attention',
                    'Reduces access barriers'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Escalable y eficiente' : 'Scalable and efficient'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Atiende miles de consultas simultáneamente',
                    'Funciona 24/7',
                    'Se integra con sistemas existentes',
                    'Reduce costos operativos'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Attends thousands of simultaneous consultations',
                    'Works 24/7',
                    'Integrates with existing systems',
                    'Reduces operational costs'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Diferencial clave' : 'Key differential'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No es solo automatización.' : 'It\'s not just automation.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Es una IA que:' : 'It\'s an AI that:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Entiende la consulta del ciudadano',
                    'Responde con claridad',
                    'Facilita el acceso a derechos',
                    'Mejora la experiencia del servicio público'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  )) : [
                    'Understands the citizen\'s inquiry',
                    'Responds with clarity',
                    'Facilitates access to rights',
                    'Improves the public service experience'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Moderniza tu atención hoy' : 'Modernize your service today'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Lleva los servicios públicos al canal más usado por la ciudadanía.' : 'Take public services to the most used channel by citizens.'}
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <ul className="space-y-2">
                    {language === 'es' ? [
                      '\ud83d\udc49 Solicita una demo',
                      '\ud83d\udc49 Implementa atención inteligente',
                      '\ud83d\udc49 Transforma la experiencia del ciudadano'
                    ].map((item, index) => (
                      <li key={index} className="text-blue-800 font-semibold">{item}</li>
                    )) : [
                      '\ud83d\udc49 Request a demo',
                      '\ud83d\udc49 Implement intelligent service',
                      '\ud83d\udc49 Transform the citizen experience'
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
                  <p className="text-gray-400 text-sm">
                    {language === 'es' ? 'Próximamente más artículos' : 'More articles coming soon'}
                  </p>
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

export default AlcaldiaArticle4;
