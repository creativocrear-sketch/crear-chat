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
                  {language === 'es' ? 'La solución: IA educativa en WhatsApp basada en juegos interactivos' : 'The solution: Educational AI on WhatsApp based on interactive games'}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Transforma el aprendizaje en una experiencia dinámica utilizando juegos educativos directamente en WhatsApp.' : 'Transform learning into a dynamic experience using educational games directly on WhatsApp.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? 'Sin apps. Sin plataformas complicadas. Solo interacción simple, directa y efectiva.' : 'No apps. No complicated platforms. Just simple, direct and effective interaction.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Cómo funcionan los juegos en WhatsApp?' : 'How do games work on WhatsApp?'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Todo se basa en lo que realmente permite WhatsApp:' : 'Everything is based on what WhatsApp really allows:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Mensajes de texto',
                    'Botones (máx. 3)',
                    'Listas (hasta 10 opciones)',
                    'Respuestas del usuario'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Text messages',
                    'Buttons (max. 3)',
                    'Lists (up to 10 options)',
                    'User responses'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Con esto se construyen experiencias completas de aprendizaje tipo juego.' : '\ud83d\udc49 With this, complete game-type learning experiences are built.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Tipos de juegos que puedes implementar' : 'Types of games you can implement'}
                </h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '1. Quiz de opción múltiple (el más potente)' : '1. Multiple choice quiz (the most powerful)'}
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'El estudiante recibe una pregunta con opciones:' : 'The student receives a question with options:'}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700 mb-2">{language === 'es' ? '¿Cuál es la capital de Colombia?' : 'What is the capital of Colombia?'}</p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 border rounded">A) {language === 'es' ? 'Medellín' : 'Medellín'}</div>
                    <div className="bg-white p-2 border rounded">B) {language === 'es' ? 'Bogotá' : 'Bogotá'}</div>
                    <div className="bg-white p-2 border rounded">C) {language === 'es' ? 'Cali' : 'Cali'}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Responde tocando un botón y la IA: evalúa automáticamente, da feedback inmediato, suma puntos' : 'Respond by touching a button and the AI: evaluates automatically, gives immediate feedback, adds points'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '2. Verdadero o falso' : '2. True or false'}
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Interacción simple y rápida:' : 'Simple and fast interaction:'}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex gap-4">
                    <div className="bg-white p-2 border rounded flex-1 text-center">{language === 'es' ? 'Verdadero' : 'True'}</div>
                    <div className="bg-white p-2 border rounded flex-1 text-center">{language === 'es' ? 'Falso' : 'False'}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Ideal para alto volumen de participación.' : '\ud83d\udc49 Ideal for high volume participation.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '3. Completar la frase' : '3. Complete the sentence'}
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'El estudiante escribe la respuesta:' : 'The student writes the answer:'}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">{language === 'es' ? 'La capital de Colombia es:' : 'The capital of Colombia is:'}</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La IA valida incluso con errores (ej: "bogota", "Bogotá").' : 'The AI validates even with errors (eg: "bogota", "Bogotá").'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '4. Juegos de decisiones (tipo historia)' : '4. Decision games (story type)'}
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Uno de los formatos más atractivos:' : 'One of the most attractive formats:'}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700 mb-2">{language === 'es' ? 'Un cliente está molesto.' : 'A customer is upset.'}</p>
                  <p className="text-gray-700 mb-2">{language === 'es' ? '¿Qué haces?' : 'What do you do?'}</p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 border rounded">{language === 'es' ? 'Ignorarlo' : 'Ignore it'}</div>
                    <div className="bg-white p-2 border rounded">{language === 'es' ? 'Escucharlo' : 'Listen to them'}</div>
                    <div className="bg-white p-2 border rounded">{language === 'es' ? 'Ofrecer solución' : 'Offer solution'}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Cada respuesta cambia la historia. Esto crea una experiencia tipo simulador.' : '\ud83d\udc49 Each answer changes the story. This creates a simulator-type experience.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '5. Juegos de memoria' : '5. Memory games'}
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Primero muestras información:' : 'First you show information:'}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">1. {language === 'es' ? 'Producto A' : 'Product A'}</p>
                  <p className="text-gray-700">2. {language === 'es' ? 'Producto B' : 'Product B'}</p>
                  <p className="text-gray-700">3. {language === 'es' ? 'Producto C' : 'Product C'}</p>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Luego preguntas:' : 'Then you ask:'}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">{language === 'es' ? '\ud83d\udc49 "¿Cuál era el segundo producto?"' : '\ud83d\udc49 "What was the second product?"'}</p>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '6. Adivinanzas' : '6. Riddles'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Preguntas tipo reto que el estudiante debe resolver.' : 'Challenge-type questions that the student must solve.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '7. Ordenar pasos (simulado)' : '7. Order steps (simulated)'}
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'El estudiante responde algo como:' : 'The student answers something like:'}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">{language === 'es' ? '\ud83d\udc49 "B, A, C"' : '\ud83d\udc49 "B, A, C"'}</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'La IA valida el orden correcto.' : 'The AI validates the correct order.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '8. Encuentra el error' : '8. Find the error'}
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Tipo:' : 'Type:'}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">{language === 'es' ? '\ud83d\udc49 "¿Qué está mal aquí?"' : '\ud83d\udc49 "What\'s wrong here?"'}</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Funciona como quiz disfrazado, muy efectivo.' : 'Works like a disguised quiz, very effective.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '9. Elige tu reto' : '9. Choose your challenge'}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'El estudiante escoge una opción y recibe un desafío distinto.' : 'The student chooses an option and receives a different challenge.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Ideal para mantener interés constante.' : '\ud83d\udc49 Ideal for maintaining constant interest.'}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '10. Sistema de puntos y niveles (clave del éxito)' : '10. Points and levels system (key to success)'}
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'es' ? 'Cada interacción suma puntos:' : 'Each interaction adds points:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  {language === 'es' ? [
                    'Respuesta correcta = +10 puntos',
                    'Progreso por niveles',
                    'Rankings entre estudiantes'
                  ].map((point, index) => (
                    <li key={index}>{point}</li>
                  )) : [
                    'Correct answer = +10 points',
                    'Progress by levels',
                    'Rankings among students'
                  ].map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700 mb-2">{language === 'es' ? 'Ejemplo:' : 'Example:'}</p>
                  <p className="text-gray-700">{language === 'es' ? '\ud83d\udd25 Llevas 80 puntos' : '\ud83d\udd25 You have 80 points'}</p>
                  <p className="text-gray-700">{language === 'es' ? 'Nivel: Avanzado' : 'Level: Advanced'}</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Esto convierte el aprendizaje en una experiencia competitiva y motivadora.' : '\ud83d\udc49 This turns learning into a competitive and motivating experience.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Cómo funciona por dentro?' : 'How does it work inside?'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Detrás de la experiencia hay una lógica simple pero poderosa:' : 'Behind the experience there is simple but powerful logic:'}
                </p>

                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'El estudiante responde',
                    'La IA recibe la respuesta',
                    'Evalúa según el contexto',
                    'Envía el siguiente mensaje',
                    'Guarda progreso (puntos, nivel, estado)'
                  ].map((step, index) => (
                    <li key={index}>{step}</li>
                  )) : [
                    'The student responds',
                    'The AI receives the response',
                    'Evaluates according to context',
                    'Sends the next message',
                    'Saves progress (points, level, state)'
                  ].map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Todo funciona como un flujo conversacional inteligente.' : '\ud83d\udc49 Everything works as an intelligent conversational flow.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Beneficios reales' : 'Real benefits'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83c\udfaf'} {language === 'es' ? 'Mayor participación' : 'Greater participation'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Responder con botones o opciones es rápido y fácil.' : 'Responding with buttons or options is fast and easy.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcc8'} {language === 'es' ? 'Mejor aprendizaje' : 'Better learning'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Feedback inmediato mejora la retención.' : 'Immediate feedback improves retention.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83e\udde0'} {language === 'es' ? 'Aprendizaje activo' : 'Active learning'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'El estudiante no solo lee... interactúa.' : 'The student doesn\'t just read... interacts.'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udd04'} {language === 'es' ? 'Constancia' : 'Consistency'}</h5>
                    <p className="text-sm text-gray-600">{language === 'es' ? 'Micro-retos diarios generan hábito.' : 'Daily micro-challenges generate habits.'}</p>
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
                    <h5 className="font-semibold text-gray-900 mb-2">{'\ud83d\udcbc'} {language === 'es' ? 'Capacitación empresarial' : 'Corporate training'}</h5>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Por qué este modelo funciona?' : 'Why does this model work?'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Porque combina:' : 'Because it combines:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Simplicidad',
                    'Interacción inmediata',
                    'Gamificación',
                    'Recompensas'
                  ].map((element, index) => (
                    <li key={index}>{element}</li>
                  )) : [
                    'Simplicity',
                    'Immediate interaction',
                    'Gamification',
                    'Rewards'
                  ].map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                  {language === 'es' ? '\ud83d\udc49 Es aprendizaje adaptado a la forma en que hoy consumen contenido.' : '\ud83d\udc49 It\'s learning adapted to how content is consumed today.'}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '¿Por qué WhatsApp?' : 'Why WhatsApp?'}
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Es la app más usada',
                    'No requiere instalación',
                    'Alta tasa de respuesta',
                    'Comunicación directa'
                  ].map((reason, index) => (
                    <li key={index}>{reason}</li>
                  )) : [
                    'It\'s the most used app',
                    'No installation required',
                    'High response rate',
                    'Direct communication'
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
                    'Se adapta a cualquier tema',
                    'Permite cargar bancos de preguntas',
                    'Crece sin aumentar carga operativa'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) : [
                    'Works with hundreds or thousands of students',
                    'Adapts to any topic',
                    'Allows loading question banks',
                    'Grows without increasing operational load'
                  ].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Diferencial clave' : 'Key differential'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'No es un curso tradicional.' : 'It\'s not a traditional course.'}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Es una IA que:' : 'It\'s an AI that:'}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  {language === 'es' ? [
                    'Convierte contenido en juegos',
                    'Evalúa automáticamente',
                    'Motiva con recompensas',
                    'Genera hábitos de aprendizaje'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  )) : [
                    'Converts content into games',
                    'Evaluates automatically',
                    'Motivates with rewards',
                    'Generates learning habits'
                  ].map((capability, index) => (
                    <li key={index}>{capability}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? 'Lleva tu educación al siguiente nivel' : 'Take your education to the next level'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'es' ? 'Convierte WhatsApp en una plataforma educativa real, interactiva y escalable.' : 'Convert WhatsApp into a real, interactive and scalable educational platform.'}
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <ul className="space-y-2">
                    {language === 'es' ? [
                      '\ud83d\udc49 Solicita una demo educativa',
                      '\ud83d\udc49 Implementa tu sistema de aprendizaje gamificado',
                      '\ud83d\udc49 Motiva a tus estudiantes desde hoy \ud83d\ude80'
                    ].map((item, index) => (
                      <li key={index} className="text-blue-800 font-semibold">{item}</li>
                    )) : [
                      '\ud83d\udc49 Request an educational demo',
                      '\ud83d\udc49 Implement your gamified learning system',
                      '\ud83d\udc49 Motivate your students starting today \ud83d\ude80'
                    ].map((item, index) => (
                      <li key={index} className="text-blue-800 font-semibold">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
                  <p className="text-orange-800 font-semibold mb-2">
                    {language === 'es' ? '\ud83d\udd25 Esto ya está nivel venta + técnico' : '\ud83d\udd25 This is already sales + technical level'}
                  </p>
                  <p className="text-orange-700 text-sm">
                    {language === 'es' ? 'Con esto puedes: venderlo a colegios o empresas, explicar cómo funciona (sin sonar humo), diferenciarte de "chatbots básicos"' : 'With this you can: sell it to schools or companies, explain how it works (without sounding like smoke), differentiate from "basic chatbots"'}
                  </p>
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
