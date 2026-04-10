import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean pricing section with professional card design
 * - Clear pricing information and features
 * - Consistent with brand colors and typography
 */

const plans = [
  {
    name: "Plan 1",
    price: "$96",
    period: "Año",
    description: "Herramientas profesionales para que las pequeñas empresas comercialicen, vendan y den soporte en múltiples canales",
    features: [
      "2 usuarios incluidos (asientos).",
      "500 contactos activos mensuales.",
      "Todas las funciones básicas.",
    ],
  },
  {
    name: "Plan 2",
    price: "$216",
    period: "Año",
    description: "Herramientas profesionales para que las pequeñas empresas comercialicen, vendan y den soporte en múltiples canales",
    features: [
      "5 usuarios incluidos (asientos).",
      "2,000 contactos activos mensuales.",
      "Todas las funciones básicas.",
    ],
  },
  {
    name: "Plan 3",
    price: "$460,80",
    period: "Año",
    description: "Herramientas profesionales para que las pequeñas empresas comercialicen, vendan y den soporte en múltiples canales",
    features: [
      "Usuarios ilimitados",
      "5,000 contactos activos mensuales.",
      "Todas las funciones básicas.",
    ],
  },
  {
    name: "Plan 4",
    price: "$710,40",
    period: "Año",
    description: "Herramientas profesionales para que las pequeñas empresas comercialicen, vendan y den soporte en múltiples canales",
    features: [
      "7 usuarios incluidos (asientos).",
      "10,000 contactos activos mensuales.",
      "Todas las funciones básicas.",
    ],
  },
  {
    name: "Plan 5",
    price: "$950,40",
    period: "Año",
    description: "Flujos de trabajo multiequipo, informes avanzados e integraciones flexibles para medianas empresas.",
    features: [
      "10 usuarios incluidos (asientos).",
      "15,000 contactos activos mensuales.",
      "Informes avanzados.",
      "Paso de Google Sheets.",
      "Paso de solicitud HTTP.",
      "Canal personalizado.",
    ],
  },
  {
    name: "Plan 6",
    price: "Personalizado",
    period: "Año",
    description: "Diseño de soluciones a medida y apoyo a la implantación para medianas y grandes empresas.",
    features: [
      "Todo en los negocios, además:",
      "Límites personalizados.",
      "Programa de incorporación de 30 días.",
      "Exportación de datos.",
      "Informes avanzados.",
      "Paso de Google Sheets.",
      "Paso de solicitud HTTP.",
      "Canal personalizado.",
    ],
  },
];

export default function PricingSection() {
  const { t, language } = useLanguage();
  
  return (
    <section id="nuestros-planes" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
          {t('plans.title')}
        </h2>
        <p className="text-center text-gray-600 font-medium mb-4 animate-fade-in-up">
          {language === 'es' 
            ? 'Soluciones de precios flexibles para empresas de todos los tamaños. Elige el plan que mejor se adapte a tus necesidades.'
            : 'Flexible pricing solutions for businesses of all sizes. Choose the plan that best fits your needs.'
          }
        </p>
        <p className="text-center text-gray-500 text-sm mb-12 animate-fade-in-up">
          {language === 'es' 
            ? 'Precios en dólares americanos pagando anualmente'
            : 'Prices in US dollars paying annually'
          }
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-[#1B4F72]">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#1B4F72] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://wa.me/+573105317126"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#1B4F72] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0F2F45] transition-colors duration-300 text-center"
              >
                {t('plans.choosePlan')}
              </a>
            </div>
          ))}
        </div>

        {/* Custom Plan Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas un plan personalizado?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Si tus necesidades son específicas o requieres características adicionales, contáctanos para crear un plan personalizado que se adapte perfectamente a tu negocio.
            </p>
            <a
              href="https://wa.me/+573105317126"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
