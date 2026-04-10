import { BookOpen, Lightbulb, Zap, Users, MessageSquare, Upload, Code } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean documentation section with topic cards
 * - Icons from lucide-react matching services section style
 * - Professional layout with consistent spacing
 * - Buttons styled consistently with the rest of the site
 */

const docTopics = [
  {
    title: "¿Qué es crear.chat?",
    description:
      "Crear.chat convierte tu WhatsApp en un sistema inteligente para atender clientes, automatizar respuestas y gestionar conversaciones de forma eficiente.",
    icon: BookOpen,
  },
  {
    title: "Glosario de términos",
    description:
      "Para ayudar a los usuarios a comprender mejor la plataforma, aquí está la definición de los términos que se usan comúnmente en la plataforma. Cesionario:",
    icon: Lightbulb,
  },
  {
    title: "Inicio rápido",
    description:
      "Aquí hay una guía rápida sobre cómo empezar a utilizar la plataforma crear.chat Registrar una cuenta Paso 1: Solicita el registro de tu cuenta",
    icon: Zap,
  },
  {
    title: "Contactos",
    description:
      "Esto es una guía para administrar los contactos de en los espacios de trabajo de la plataforma crear.chat Modulo de Contactos Interfaz del modulo",
    icon: Users,
  },
  {
    title: "Apoyo conversacional",
    description:
      "La plataforma cuenta con un modulo de mensajes donde se pueden ver todas las conversaciones con los contactos e interactuar con ellos cuando sea necesario.",
    icon: MessageSquare,
  },
  {
    title: "Importación Masiva",
    description:
      "Para la importación de un gran numero de contactos es conveniente usar la herramienta de importación masiva. Desde el Módulo de configuración",
    icon: Upload,
  },
  {
    title: "API de desarrollador",
    description:
      "Las APIs de desarrolladores empoderan a los desarrolladores o equipos para construir soluciones e integraciones personalizadas.",
    icon: Code,
  },
];

export default function DocumentationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#1B4F72]">
              Documentación
            </span>
          </div>

          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Documentación de crear.chat
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aquí puede encontrar algunas guías útiles para usar la plataforma.
          </p>
        </div>

        {/* Documentation Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docTopics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-blue-50 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-[#1B4F72]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 text-center line-clamp-3">
                  {topic.description}
                </p>

                {/* View Content Button */}
                <a
                  href="#"
                  className="block w-full bg-[#1B4F72] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0F2F45] transition-colors duration-300 text-center text-sm"
                >
                  Ver contenido
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
