import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PoliticaDePrivacidad() {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                {language === 'es' ? 'Política de privacidad' : 'Privacy Policy'}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === 'es' ? 'Última actualización: 17-04-2026' : 'Last updated: 04-17-2026'}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es' 
                    ? 'Crear.chat se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando utiliza nuestros servicios. Por favor, lea esta política de privacidad cuidadosamente. Si no está de acuerdo con los términos de esta política de privacidad, no acceda a la aplicación.'
                    : 'Crear.chat is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, do not access the application.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '1. Información que recopilamos' : '1. Information we collect'}
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '1.1. Información personal' : '1.1. Personal information'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Podemos recopilar información que lo identifique personalmente, como su nombre, dirección de correo electrónico, número de teléfono y otra información de contacto, cuando se registra en nuestra aplicación, crea un perfil o se comunica con nosotros.'
                    : 'We may collect information that personally identifies you, such as your name, email address, phone number, and other contact information, when you register in our application, create a profile, or communicate with us.'}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '1.2. Información de uso' : '1.2. Usage information'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Podemos recopilar información sobre su actividad en la aplicación, como el tipo de dispositivo que utiliza, su dirección IP, la versión del sistema operativo, los tiempos de acceso y la duración de la actividad, las páginas que visita, los clics, entre otros.'
                    : 'We may collect information about your activity in the application, such as the type of device you use, your IP address, operating system version, access times and duration of activity, pages you visit, clicks, among others.'}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '1.3. Información de ubicación' : '1.3. Location information'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Podemos recopilar y procesar información sobre su ubicación para proporcionar servicios personalizados si usted ha dado su consentimiento.'
                    : 'We may collect and process information about your location to provide personalized services if you have given your consent.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '2. Cómo usamos su información' : '2. How we use your information'}
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '2.1. Para proporcionar y mejorar el servicio' : '2.1. To provide and improve the service'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Usamos la información que recopilamos para operar, mantener y mejorar nuestra aplicación, así como para desarrollar nuevos productos y servicios.'
                    : 'We use the information we collect to operate, maintain, and improve our application, as well as to develop new products and services.'}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '2.2. Comunicaciones' : '2.2. Communications'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Podemos usar su información de contacto para enviarle notificaciones, actualizaciones, boletines informativos y otras comunicaciones relevantes.'
                    : 'We may use your contact information to send you notifications, updates, newsletters, and other relevant communications.'}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '2.3. Personalización' : '2.3. Personalization'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Podemos usar la información recopilada para personalizar su experiencia en la aplicación, mostrar contenido y anuncios personalizados.'
                    : 'We may use the collected information to personalize your experience in the application, show personalized content and ads.'}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '2.4. Seguridad' : '2.4. Security'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Podemos usar su información para proteger la seguridad de la aplicación y de nuestros usuarios.'
                    : 'We may use your information to protect the security of the application and our users.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '3. Divulgación de su información' : '3. Disclosure of your information'}
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '3.1. Uso y tratamiento de la información' : '3.1. Use and processing of information'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'La información proporcionada por los usuarios es tratada únicamente a través de las herramientas propias de Crear Comunicaciones y mediante plataformas de mensajería de Meta Platforms, Inc. (incluyendo WhatsApp, Messenger e Instagram), utilizadas para la gestión de las comunicaciones.'
                    : 'The information provided by users is processed exclusively through Crear Comunicaciones\' own tools and via Meta Platforms, Inc. messaging platforms (including WhatsApp, Messenger, and Instagram), used for communication management.'}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Crear comunicaciones gestiona la información en calidad de negocio de ser un negocio aprobado como proveedor tecnológico de Meta, mientras que las plataformas de Meta procesan los datos conforme a sus propias políticas de privacidad y condiciones de uso.'
                    : 'Crear Comunications manages information as a business approved as a Meta technology provider, while Meta platforms process data according to their own privacy policies and terms of use.'}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '3.2. Requisitos legales' : '3.2. Legal requirements'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Podemos divulgar su información si así lo exige la ley o si creemos de buena fe que dicha acción es necesaria para cumplir con las leyes aplicables, responder a órdenes judiciales o proteger nuestros derechos y propiedad.'
                    : 'We may disclose your information if required by law or if we believe in good faith that such action is necessary to comply with applicable laws, respond to court orders, or protect our rights and property.'}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '3.3. Transferencias de negocios' : '3.3. Business transfers'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'En el caso de una fusión, adquisición, o venta de la totalidad o una parte de nuestros activos, su información puede ser transferida como parte de la transacción.'
                    : 'In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '4. Seguridad de la información' : '4. Information security'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Nos comprometemos a proteger su información personal y tomamos medidas razonables para protegerla del acceso no autorizado, uso o divulgación. Sin embargo, ningún sistema de seguridad es impenetrable y no podemos garantizar la seguridad de nuestros sistemas al 100%.'
                    : 'We are committed to protecting your personal information and take reasonable measures to protect it from unauthorized access, use, or disclosure. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '5. Sus derechos y opciones' : '5. Your rights and options'}
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '5.1. Acceso y actualización de información' : '5.1. Access and update of information'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Puede acceder y actualizar su información personal en cualquier momento a través de la configuración de su cuenta en la aplicación.'
                    : 'You can access and update your personal information at any time through your account settings in the application.'}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '5.2. Opciones de comunicaciones' : '5.2. Communication options'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Puede optar por no recibir comunicaciones promocionales siguiendo las instrucciones de cancelación de suscripción en dichos mensajes.'
                    : 'You can opt out of receiving promotional communications by following the unsubscribe instructions in such messages.'}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {language === 'es' ? '5.3. Eliminación de información' : '5.3. Deletion of information'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Puede solicitar la eliminación de su información personal, aunque algunos datos pueden conservarse según lo requerido por la ley o para fines comerciales legítimos.'
                    : 'You may request the deletion of your personal information, although some data may be retained as required by law or for legitimate business purposes.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '6. Cambios a esta Política de privacidad' : '6. Changes to this Privacy Policy'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva Política de Privacidad en esta página. Le recomendamos revisar esta política periódicamente para estar al tanto de cualquier cambio.'
                    : 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We recommend reviewing this policy periodically to stay informed of any changes.'}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {language === 'es' ? '7. Contáctenos' : '7. Contact us'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Si tiene preguntas o inquietudes sobre esta Política de Privacidad, puede contactarnos a través de contacto@crearcomunicaciones.net o WhatsApp +57 310 5317126.'
                    : 'If you have questions or concerns about this Privacy Policy, you can contact us at contacto@crearcomunicaciones.net or WhatsApp +57 310 5317126.'}
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
