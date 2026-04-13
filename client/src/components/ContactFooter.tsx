import { Mail, MapPin, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Two-column layout: social media on left, contact info on right
 * - Clean design with minimal styling
 * - Contact information with icons
 */

export default function ContactFooter() {
  const { language } = useLanguage();
  
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/crearcomunicaciones",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/crear.chat",
      color: "text-pink-600 hover:text-pink-700"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/+573105317126",
      color: "text-green-600 hover:text-green-700"
    }
  ];

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Media */}
          <div className="animate-fade-in-up">
            <h2 className="font-bold text-4xl text-gray-900 mb-2">
              {language === 'es' ? 'Síguenos en redes sociales' : 'Follow us on social media'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'es' 
                ? 'Mantente actualizado con nuestras últimas noticias, tips y casos de éxito.'
                : 'Stay updated with our latest news, tips and success stories.'
              }
            </p>

            <div className="grid grid-cols-2 gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center group"
                  >
                    <Icon className={`w-12 h-12 mb-4 transition-colors duration-300 ${social.color}`} />
                    <span className="font-semibold text-gray-900 text-center group-hover:text-[#1B4F72] transition-colors">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-bold text-2xl text-gray-900 mb-8">
              {language === 'es' ? 'Nuestras oficinas' : 'Our Offices'}
            </h3>

            <div className="space-y-8">
              {/* Office 1 */}
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1B4F72]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {language === 'es' ? 'Oficina Principal' : 'Main Office'}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Cra. 4 #9 - 73 oficina 306<br />
                      Cartago, Valle del Cauca
                    </p>
                  </div>
                </div>
              </div>

              {/* Office 2 */}
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1B4F72]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {language === 'es' ? 'Teléfono' : 'Phone'}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      +57 310 5317126<br />
                      Lunes - Viernes, 9am - 6pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1B4F72]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {language === 'es' ? 'Email' : 'Email'}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      contacto@crearcomunicaciones.net<br />
                      {language === 'es' ? 'Respuesta en 24 horas' : 'Response within 24 hours'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
