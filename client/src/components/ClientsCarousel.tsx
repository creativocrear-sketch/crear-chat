import { Check } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean pricing section with professional card design
 * - Clear pricing information and features
 * - Consistent with brand colors and typography
 */

const plans = [
  {
    name: "Plan 1",
    price: "$8",
    period: "Mes",
    description:
      "Herramientas profesionales para que las pequeñas empresas comercialicen, vendan y den soporte en múltiples canales",
    features: [
      "2 usuarios incluidos (asientos).",
      "500 contactos activos mensuales.",
      "Todas las funciones básicas.",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="nuestros-planes" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
          Nuestros Planes
        </h2>
        <p className="text-center text-gray-600 font-medium mb-12 animate-fade-in-up">
          Soluciones de precios flexibles para empresas de todos los tamaños
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                Escribenos
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
