import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  ChevronLeft,
  Share2,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogArticle3() {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: "facebook" | "whatsapp") => {
    const url = window.location.href;
    const title = t("articles.article3.title");
    const text = t("articles.article3.shareText");

    let shareUrl = "";

    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
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
                {t("common.backToBlog")}
              </a>

              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                  {language === "es" ? "Implementación" : "Implementation"}
                </span>
              </div>

              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                {t("articles.article3.title")}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {language === "es"
                      ? "21 de Marzo de 2026"
                      : "March 21, 2026"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 {t("common.readTime")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    {t("common.author")}:{" "}
                    {language === "es"
                      ? "Alex Murillo + Equipo de Soporte"
                      : "Alex Murillo + Support Team"}
                  </span>
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
                  {t("articles.article3.title")}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Migrar a WhatsApp Business API puede parecer complejo, pero si sigues estos pasos ordenadamente, el proceso será fluido y sin complicaciones."
                    : "Migrating to WhatsApp Business API may seem complex, but if you follow these steps in order, the process will be smooth and without complications."}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "Paso 1: evalúa tu situación actual"
                    : "Step 1: evaluate your current situation"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Antes de migrar, es importante que entiendas dónde estás ahora:"
                    : "Before migrating, it's important to understand where you are now:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "¿Estás usando WhatsApp Business o WhatsApp personal?"
                      : "Are you using WhatsApp Business or personal WhatsApp?"}
                  </li>
                  <li>
                    {language === "es"
                      ? "¿Cuántos números de WhatsApp tienes?"
                      : "How many WhatsApp numbers do you have?"}
                  </li>
                  <li>
                    {language === "es"
                      ? "¿Cuál es tu volumen de mensajes mensuales?"
                      : "What is your monthly message volume?"}
                  </li>
                  <li>
                    {language === "es"
                      ? "¿Qué procesos necesitas automatizar?"
                      : "What processes do you need to automate?"}
                  </li>
                  <li>
                    {language === "es"
                      ? "¿Qué sistemas actuales necesitan integrarse?"
                      : "What current systems need integration?"}
                  </li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Esta evaluación te ayudará a determinar qué tipo de solución necesitas y qué plataforma es la más adecuada."
                    : "This evaluation will help you determine what type of solution you need and which platform is most suitable."}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "Paso 2: elige una plataforma de gestión"
                    : "Step 2: choose a management platform"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "No puedes usar WhatsApp Business API directamente. Necesitas una plataforma que actúe como intermediaria. Algunas opciones populares incluyen:"
                    : "You cannot use WhatsApp Business API directly. You need a platform that acts as an intermediary. Some popular options include:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Crear.chat: Plataforma especializada en automatización de WhatsApp"
                      : "Crear.chat: Platform specialized in WhatsApp automation"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Twilio: Solución empresarial completa"
                      : "Twilio: Complete enterprise solution"}
                  </li>
                  <li>
                    {language === "es"
                      ? "MessageBird: Plataforma de comunicaciones omnicanal"
                      : "MessageBird: Omnichannel communications platform"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Infobip: proveedor global de comunicaciones"
                      : "Infobip: global communications provider"}
                  </li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Elige una plataforma que se alinee con tus necesidades y presupuesto."
                    : "Choose a platform that aligns with your needs and budget."}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "Paso 3: prepara tu número de WhatsApp"
                    : "Step 3: prepare your WhatsApp number"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Para usar WhatsApp Business API, necesitas un número de teléfono dedicado:"
                    : "To use WhatsApp Business API, you need a dedicated phone number:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Obtén un número de teléfono nuevo (preferiblemente una línea comercial)"
                      : "Get a new phone number (preferably a business line)"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Verifica que el número sea válido y esté activo"
                      : "Verify that the number is valid and active"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Asegúrate de que el número no tenga restricciones de WhatsApp"
                      : "Ensure the number has no WhatsApp restrictions"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Ten a mano documentación de tu negocio (RUT, certificado de constitución, etc.)"
                      : "Have your business documentation ready (tax ID, incorporation certificate, etc.)"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "Paso 4: solicita acceso a WhatsApp Business API"
                    : "Step 4: request access to WhatsApp Business API"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "A través de tu plataforma elegida, solicita acceso a WhatsApp Business API:"
                    : "Through your chosen platform, request access to WhatsApp Business API:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Completa el formulario de solicitud"
                      : "Complete the application form"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Proporciona información de tu negocio"
                      : "Provide your business information"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Verifica tu identidad"
                      : "Verify your identity"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Espera la aprobación de WhatsApp (generalmente 1-3 días)"
                      : "Wait for WhatsApp approval (usually 1-3 days)"}
                  </li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Durante este proceso, WhatsApp verificará que tu negocio sea legítimo y que cumplas con sus políticas."
                    : "During this process, WhatsApp will verify that your business is legitimate and that you comply with their policies."}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "Paso 5: configura tu perfil de negocio"
                    : "Step 5: configure your business profile"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Una vez aprobado, configura tu perfil:"
                    : "Once approved, configure your profile:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es" ? "Nombre de negocio" : "Business name"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Categoría de negocio"
                      : "Business category"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Sitio web (si aplica)"
                      : "Website (if applicable)"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Horarios de atención"
                      : "Business hours"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Información de contacto"
                      : "Contact information"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "Paso 6: integra tus sistemas"
                    : "Step 6: integrate your systems"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Conecta WhatsApp Business API con tus sistemas existentes:"
                    : "Connect WhatsApp Business API with your existing systems:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>{language === "es" ? "CRM" : "CRM"}</li>
                  <li>
                    {language === "es"
                      ? "Sistema de reservas"
                      : "Booking system"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Sistema de facturación"
                      : "Billing system"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Base de datos de clientes"
                      : "Customer database"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Otras aplicaciones relevantes"
                      : "Other relevant applications"}
                  </li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Esto puede requerir soporte técnico, pero es crucial para aprovechar el potencial de la API."
                    : "This may require technical support, but it's crucial to take advantage of the API's potential."}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "Paso 7: crea tus plantillas de mensajes"
                    : "Step 7: create your message templates"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "WhatsApp requiere que apruebes plantillas de mensajes antes de usarlas:"
                    : "WhatsApp requires you to approve message templates before using them:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Crea plantillas para confirmaciones de reserva"
                      : "Create templates for booking confirmations"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Plantillas para recordatorios"
                      : "Templates for reminders"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Plantillas para promociones"
                      : "Templates for promotions"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Plantillas para actualizaciones de estado"
                      : "Templates for status updates"}
                  </li>
                </ul>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Cada plantilla debe ser clara y no invasiva."
                    : "Each template should be clear and non-intrusive."}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es"
                    ? "Paso 8: prueba exhaustivamente"
                    : "Step 8: test thoroughly"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Antes de lanzar a producción:"
                    : "Before launching to production:"}
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    {language === "es"
                      ? "Empieza con un volumen bajo de mensajes"
                      : "Start with a low message volume"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Monitorea tus métricas constantemente"
                      : "Monitor your metrics constantly"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Mantén tu perfil de negocio actualizado"
                      : "Keep your business profile updated"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Responde rápidamente a los mensajes"
                      : "Respond to messages quickly"}
                  </li>
                  <li>
                    {language === "es"
                      ? "Sigue las políticas de WhatsApp estrictamente"
                      : "Follow WhatsApp policies strictly"}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {language === "es" ? "Conclusión" : "Conclusion"}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Migrar a WhatsApp Business API requiere planificación y paciencia, pero los beneficios a largo plazo valen el esfuerzo. Con la guía correcta y la plataforma adecuada, tu negocio puede transformar su comunicación con los clientes."
                    : "Migrating to WhatsApp Business API requires planning and patience, but the long-term benefits are worth the effort. With the right guidance and platform, your business can transform its customer communication."}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "es"
                    ? "Recuerda que la migración es un proceso continuo. A medida que tu negocio crece, necesitarás ajustar tus estrategias y optimizar tus flujos de comunicación."
                    : "Remember that migration is an ongoing process. As your business grows, you will need to adjust your strategies and optimize your communication flows."}
                </p>
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === "es" ? "Compartir:" : "Share:"}
                </h4>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    {language === "es" ? "Facebook" : "Facebook"}
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {language === "es" ? "WhatsApp" : "WhatsApp"}
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">
                      {language === "es"
                        ? "Artículo anterior"
                        : "Previous article"}
                    </p>
                    <a
                      href="/blog/casos-uso-whatsapp-business-api"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === "es"
                        ? "¿Para que me sirve WhatsApp Business API para mi negocio?"
                        : "What is WhatsApp Business API useful for in my business?"}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">
                      {language === "es"
                        ? "Siguiente artículo"
                        : "Next article"}
                    </p>
                    <a
                      href="/blog/beneficios-whatsapp-business-api-ia"
                      className="text-[#1B4F72] hover:text-[#0F2F45] font-semibold transition-colors"
                    >
                      {language === "es"
                        ? "¿Qué beneficios tengo usando WhatsApp Business API + IA?"
                        : "What benefits do I get using WhatsApp Business API + AI?"}
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
                  {language === "es"
                    ? "¿Listo para implementar WhatsApp Business API?"
                    : "Ready to implement WhatsApp Business API?"}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {language === "es"
                    ? "Contáctame para una consulta personalizada sobre cómo automatizar tu negocio con WhatsApp Business API."
                    : "Contact me for a personalized consultation on how to automate your business with WhatsApp Business API."}
                </p>

                <a
                  href="https://wa.me/+573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  {language === "es"
                    ? "Escríbeme por WhatsApp"
                    : "Write me on WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-8">
                {language === "es" ? "Otros artículos" : "Other articles"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === "es"
                        ? "Conceptos Básicos"
                        : "Basic Concepts"}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === "es"
                        ? "¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?"
                        : "What is the difference between WhatsApp Business and WhatsApp Business API?"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === "es"
                        ? "Descubre las diferencias clave entre WhatsApp Business y WhatsApp Business API, y entiende cuál es la mejor opción para tu negocio."
                        : "Discover the key differences between WhatsApp Business and WhatsApp Business API, and understand which is the best option for your business."}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>5 min</span>
                      <a
                        href="/blog/diferencia-whatsapp-business-api"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-medium"
                      >
                        {language === "es" ? "Leer más" : "Read more"}
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === "es" ? "Casos de Uso" : "Use Cases"}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === "es"
                        ? "¿Para que me sirve WhatsApp Business API para mi negocio?"
                        : "What is WhatsApp Business API useful for in my business?"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === "es"
                        ? "Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros."
                        : "Explore real use cases of WhatsApp Business API in restaurants, hotels, cafes, lawyers and collection offices."}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>8 min</span>
                      <a
                        href="/blog/casos-uso-whatsapp-business-api"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-medium"
                      >
                        {language === "es" ? "Leer más" : "Read more"}
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F72] text-xs font-semibold rounded-full mb-4">
                      {language === "es" ? "Tendencias" : "Trends"}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {language === "es"
                        ? "¿Qué beneficios tengo usando WhatsApp Business API + IA?"
                        : "What benefits do I get using WhatsApp Business API + AI?"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === "es"
                        ? "Descubre cómo la combinación de WhatsApp Business API e IA revoluciona la atención al cliente."
                        : "Discover how the combination of WhatsApp Business API and AI revolutionizes customer service."}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>6 min</span>
                      <a
                        href="/blog/beneficios-whatsapp-business-api-ia"
                        className="text-[#1B4F72] hover:text-[#0F2F45] font-medium"
                      >
                        {language === "es" ? "Leer más" : "Read more"}
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
