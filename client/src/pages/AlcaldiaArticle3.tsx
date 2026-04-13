import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, ChevronRight, Share2, MessageCircle, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function AlcaldiaArticle3() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = language === 'es' 
      ? 'Convierte WhatsApp en una plataforma educativa interactiva - Revoluciona la educación'
      : 'Turn WhatsApp into an interactive educational platform - Revolutionize education';
    
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
                  {language === 'es' ? 'Educación interactiva' : 'Interactive education'}
                </span>
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {language === 'es' ? 'Convierte WhatsApp en una plataforma educativa interactiva' : 'Turn WhatsApp into an interactive educational platform'}
              </h1>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === 'es' ? 'Motiva, evalúa y premia a tus estudiantes con preguntas de selección múltiple desde el canal que ya usan todos los días' : 'Motivate, evaluate and reward your students with multiple choice questions from the channel they already use every day'}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? '15 de abril de 2026' : 'April 15, 2026'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 {language === 'es' ? 'min de lectura' : 'min read'}</span>
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
                  {language === 'es' ? 'El problema en la educación actual' : 'The problem in current education'}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El acceso a la información ya no es el problema... el problema es la falta de interés.' : 'Access to information is no longer the problem... the problem is lack of interest.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Hoy te enfrentas a:' : 'Today you face:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Estudiantes desmotivados',
                    'Baja participación',
                    'Poco compromiso con el aprendizaje',
                    'Métodos tradicionales que ya no conectan'
                  ].map((issue, index) => (
                    <li key={index}>{issue}</li>
                  )) : [
                    'Unmotivated students',
                    'Low participation',
                    'Little commitment to learning',
                    'Traditional methods that no longer connect'
                  ].map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Resultado: bajo rendimiento y pérdida de atención.' : '\ud83d\udc49 Result: low performance and loss of attention.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'La solución: IA educativa en WhatsApp con preguntas y respuestas correctas' : 'The Solution: Educational AI on WhatsApp with Questions and Correct Answers'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Transforma el aprendizaje en una experiencia interactiva basada en preguntas de selección múltiple, directamente desde WhatsApp.' : 'Transform learning into an interactive experience based on multiple choice questions, directly from WhatsApp.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? 'Sin apps. Sin plataformas complicadas. Solo interacción simple, rápida y efectiva.' : 'No apps. No complicated platforms. Just simple, fast and effective interaction.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Cómo funciona?' : 'How Does It Work?'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El sistema convierte el aprendizaje en una dinámica tipo juego basada en preguntas con opciones:' : 'The system turns learning into a game-like dynamic based on questions with options:'}
                </p>

                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'El estudiante recibe una pregunta',
                    'La IA muestra varias opciones de respuesta (A, B, C, D)',
                    'El estudiante selecciona la respuesta correcta',
                    'La IA evalúa automáticamente',
                    'Recibe retroalimentación inmediata',
                    'Gana puntos, premios o reconocimiento'
                  ].map((step, index) => (
                    <li key={index}>{step}</li>
                  )) : [
                    'The student receives a question',
                    'The AI shows several answer options (A, B, C, D)',
                    'The student selects the correct answer',
                    'The AI evaluates automatically',
                    'Receives immediate feedback',
                    'Earns points, prizes or recognition'
                  ].map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Aprender se vuelve dinámico, claro y entretenido.' : '\ud83d\udc49 Learning becomes dynamic, clear and entertaining.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Qué puede hacer esta IA?' : 'What Can This AI Do?'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Enviar preguntas con opciones de respuesta (tipo test)',
                    'Validar automáticamente la respuesta correcta',
                    'Explicar por qué es correcta o incorrecta',
                    'Adaptar la dificultad según el rendimiento',
                    'Reforzar temas donde el estudiante falla',
                    'Generar rankings y competencias',
                    'Otorgar incentivos o premios'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  )) : [
                    'Send questions with answer options (test type)',
                    'Automatically validate the correct answer',
                    'Explain why it\'s correct or incorrect',
                    'Adapt difficulty according to performance',
                    'Reinforce topics where the student fails',
                    'Generate rankings and competitions',
                    'Grant incentives or prizes'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Beneficios reales' : 'Real benefits'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfaf'} {language === 'es' ? 'Mayor participación' : 'Greater participation'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Responder opciones es fácil, rápido y atractivo.' : 'Answering options is easy, fast and attractive.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcc8'} {language === 'es' ? 'Mejor aprendizaje' : 'Better learning'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'La validación inmediata refuerza el conocimiento.' : 'Immediate validation reinforces knowledge.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83e\udde0'} {language === 'es' ? 'Claridad en respuestas' : 'Clarity in answers'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'El estudiante aprende exactamente qué está bien y por qué.' : 'The student learns exactly what\'s right and why.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udd04'} {language === 'es' ? 'Constancia' : 'Consistency'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Interacción continua con micro-retos diarios.' : 'Continuous interaction with daily micro-challenges.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcf1'} {language === 'es' ? 'Acceso total' : 'Full access'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Solo necesitan WhatsApp.' : 'They only need WhatsApp.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udc68\u200d\ud83c\udfeb'} {language === 'es' ? 'Apoyo a docentes' : 'Teacher support'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Evaluación automática sin carga adicional.' : 'Automatic evaluation without additional load.'}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Casos de uso' : 'Use cases'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfeb'} {language === 'es' ? 'Colegios' : 'Schools'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udf93'} {language === 'es' ? 'Universidades' : 'Universities'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcda'} {language === 'es' ? 'Academias' : 'Academies'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udccb'} {language === 'es' ? 'Programas de formación' : 'Training programs'}</h5>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfdb\ufe0f'} {language === 'es' ? 'Proyectos educativos gubernamentales' : 'Government educational projects'}</h5>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Gamificación que realmente engancha' : 'Gamification that really engages'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El sistema puede incluir:' : 'The system can include:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Preguntas diarias tipo quiz',
                    'Puntos por respuestas correctas',
                    'Rankings por grupo o curso',
                    'Retos semanales',
                    'Premios o incentivos',
                    'Niveles de progreso'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Daily quiz-type questions',
                    'Points for correct answers',
                    'Rankings by group or course',
                    'Weekly challenges',
                    'Prizes or incentives',
                    'Progress levels'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Aprender deja de ser pasivo y se convierte en un reto constante.' : '\ud83d\udc49 Learning stops being passive and becomes a constant challenge.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Por qué este formato funciona?' : 'Why does this format work?'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Porque simplifica el aprendizaje:' : 'Because it simplifies learning:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'No hay respuestas complejas que escribir',
                    'Reduce la frustración',
                    'Aumenta la velocidad de participación',
                    'Permite evaluar de forma clara y objetiva'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  )) : [
                    'No complex answers to write',
                    'Reduces frustration',
                    'Increases participation speed',
                    'Allows clear and objective evaluation'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Más respuestas, más interacción, más aprendizaje.' : '\ud83d\udc49 More answers, more interaction, more learning.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Por qué WhatsApp?' : 'Why WhatsApp?'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Es la app más usada por estudiantes',
                    'No requiere capacitación',
                    'Alta tasa de interacción',
                    'Permite comunicación directa y constante'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  )) : [
                    'It\'s the most used app by students',
                    'No training required',
                    'High interaction rate',
                    'Allows direct and constant communication'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Escalable y adaptable' : 'Scalable and adaptable'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Funciona con cientos o miles de estudiantes',
                    'Se adapta a cualquier materia',
                    'Permite cargar bancos de preguntas',
                    'Crece sin aumentar carga docente'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Works with hundreds or thousands of students',
                    'Adapts to any subject',
                    'Allows loading question banks',
                    'Grows without increasing teacher load'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Diferencial clave' : 'Key differential'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No es un chatbot básico ni un formulario.' : 'It\'s not a basic chatbot or a form.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Es una IA que:' : 'It\'s an AI that:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Presenta preguntas estructuradas',
                    'Evalúa automáticamente respuestas correctas',
                    'Explica y refuerza el aprendizaje',
                    'Motiva mediante juego y recompensa'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  )) : [
                    'Presents structured questions',
                    'Automatically evaluates correct answers',
                    'Explains and reinforces learning',
                    'Motivates through play and reward'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Lleva tu educación al siguiente nivel' : 'Take your education to the next level'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Convierte el aprendizaje en algo simple, interactivo y efectivo.' : 'Turn learning into something simple, interactive and effective.'}
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <ul className="space-y-2">
                    {language === 'es' ? [
                      '\ud83d\udc49 Solicita una demo educativa',
                      '\ud83d\udc49 Implementa tu IA con preguntas inteligentes',
                      '\ud83d\udc49 Motiva a tus estudiantes desde hoy \ud83d\ude80'
                    ].map((item, index) => (
                      <li key={index} className="text-blue-800 font-semibold">{item}</li>
                    )) : [
                      '\ud83d\udc49 Request an educational demo',
                      '\ud83d\udc49 Implement your AI with smart questions',
                      '\ud83d\udc49 Motivate your students starting today \ud83d\ude80'
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
                    href="/alcaldias/consulta-sisben-subsidios"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    {language === 'es' ? 'Consulta SISBÉN y Subsidios en Segundos por WhatsApp' : 'SISBÉN and Subsidy Inquiry in Seconds via WhatsApp'}
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

export default AlcaldiaArticle3;
