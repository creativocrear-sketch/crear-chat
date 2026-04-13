import React, { createContext, useState, useContext, ReactNode } from 'react';

// Traducciones
const translations = {
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      plans: 'Planes',
      blog: 'Blog',
      contact: 'Contacto',
      integrations: 'Integraciones'
    },
    // Home
    home: {
      title: 'Automatiza tu WhatsApp Business',
      subtitle: 'Potencia tu comunicación con clientes usando WhatsApp Business API',
      cta: 'Comenzar ahora',
      features: {
        title: 'Características principales',
        automation: 'Automatización inteligente',
        automationDesc: 'Respuestas automáticas y chatbots 24/7',
        integration: 'Integraciones',
        integrationDesc: 'Conecta con tus herramientas favoritas',
        analytics: 'Análisis y reportes',
        analyticsDesc: 'Métricas detalladas de tu comunicación'
      },
      services: {
        consulting: 'Consultoría especializada',
        consultingDesc: 'Asesoramos a empresas en la implementación y optimización de WhatsApp Business API para automatizar la comunicación, mejorar la atención al cliente y potenciar la gestión comercial.',
        marketing: 'Estrategias de automatización y marketing digital',
        marketingDesc: 'Diseñamos estrategias de automatización y marketing digital basadas en datos para atraer clientes, optimizar procesos y aumentar la conversión mediante comunicación inteligente y campañas automatizadas.',
        customerService: 'Automatización de canales de atención al cliente',
        customerServiceDesc: 'Automatizamos los canales de atención al cliente mediante soluciones tecnológicas que optimizan la comunicación, mejoran la experiencia del usuario y aumentan la eficiencia operativa.',
        sales: 'Automatización de ventas y optimización de conversiones',
        salesDesc: 'Automatizamos procesos de ventas y optimizamos la conversión de clientes mediante tecnología, datos y estrategias digitales que mejoran la eficiencia comercial y aumentan los resultados.',
        platform: 'Plataforma integrada para administración de chats',
        platformDesc: 'Centralizamos la gestión de conversaciones en WhatsApp e Instagram en una sola plataforma para optimizar la atención, automatizar respuestas y mejorar la comunicación con clientes.',
        database: 'Gestión inteligente de bases de datos de contactos',
        databaseDesc: 'Gestionamos y optimizamos bases de datos de contactos para garantizar información actualizada, segmentación precisa y mejor rendimiento en estrategias comerciales y de marketing digital.'
      },
      platforms: {
        sales: 'Gestión de ventas',
        salesDesc: 'Centraliza y gestiona tus oportunidades de venta desde WhatsApp en un solo lugar. Haz seguimiento a cada cliente, controla el proceso comercial y mejora el cierre de ventas con mayor orden y visibilidad.',
        orders: 'Gestión de pedidos',
        ordersDesc: 'Recibe y organiza todos tus pedidos directamente por WhatsApp en un solo lugar. Será un seguimiento para inventario, producción, entrega y facturación.',
        shifts: 'Gestión de turnos de trabajo',
        shiftsDesc: 'Organiza los turnos de tu equipo de manera automática y eficiente evitando confusiones. Olvídate de agendas dispersas y mantén a todos informados al instante a través de WhatsApp.',
        appointments: 'Gestión de citas médicas',
        appointmentsDesc: 'Permite que tus pacientes agenden, modifiquen o cancelen citas en segundos, mientras reciben recordatorios automáticos que reducen ausencias. Todo el control está en WhatsApp, de manera sencilla y confiable.',
        balances: 'Consultas de saldos y deudas',
        balancesDesc: 'Permite que tus clientes consulten sus saldos y deudas al instante, directamente desde WhatsApp. Mantén la información siempre accesible y actualizada, mejorando la comunicación y la transparencia.',
        loyalty: 'Fidelización de clientes',
        loyaltyDesc: 'Permite que tus clientes acumulen puntos dependiendo de las compras que hayan hecho. Gestiona premios, descuentos y bonificaciones para impulsar la recompra y nuevas ventas.'
      },
      integrations: {
        whatsapp: 'WhatsApp Business API',
        whatsappDesc: 'Integramos tu empresa con WhatsApp Business API para automatizar mensajes, gestionar conversaciones y escalar la atención a clientes desde un solo sistema.',
        instagram: 'Instagram',
        instagramDesc: 'Centraliza los mensajes directos de Instagram y gestiona las conversaciones desde una plataforma unificada.',
        sheets: 'Google Sheets',
        sheetsDesc: 'Sincroniza automáticamente la información de contactos, conversaciones o pedidos con Google Sheets para análisis y gestión de datos.',
        crm: 'CRM (HubSpot y otros)',
        crmDesc: 'Integramos tu sistema con CRM como HubSpot para organizar contactos, registrar interacciones y mejorar el seguimiento comercial.',
        zapier: 'Automatizaciones (Zapier)',
        zapierDesc: 'Conecta crear.chat con cientos de aplicaciones para automatizar procesos y flujos de trabajo entre diferentes plataformas.',
        sms: 'SMS',
        smsDesc: 'Envía mensajes SMS automatizados para notificaciones, recordatorios o comunicaciones importantes con tus clientes.',
        email: 'Correo electrónico',
        emailDesc: 'Integra el envío de correos electrónicos automatizados para comunicaciones programadas y seguimiento de clientes.'
      }
    },
    // Footer
    footer: {
      description: 'Agencia especializada en automatización de WhatsApp Business API',
      quickLinks: 'Enlaces rápidos',
      services: 'Servicios',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados'
    },
    // Blog
    blog: {
      title: 'Blog',
      subtitle: 'Artículos sobre WhatsApp Business API',
      readMore: 'Leer más',
      readTime: 'min de lectura',
      share: 'Compartir',
      relatedArticles: 'Artículos relacionados',
      previousArticle: 'Artículo anterior',
      nextArticle: 'Siguiente artículo'
    },
    // Plans
    plans: {
      title: 'Planes',
      subtitle: 'Elige el plan perfecto para tu negocio',
      monthly: 'Mensual',
      yearly: 'Anual',
      save: 'Ahorra 20%',
      choosePlan: 'Elegir plan',
      customPlan: 'Plan personalizado',
      customPlanDesc: '¿Necesitas una solución a medida? Contáctanos y crearemos un plan personalizado para ti.',
      contactUs: 'Contáctanos',
      plans: {
        plan1: {
          name: 'Plan 1',
          period: 'Año',
          description: 'Herramientas profesionales para que las pequeñas empresas comercialicen, vendan y den soporte en múltiples canales',
          features: [
            '2 usuarios incluidos (asientos).',
            '500 contactos activos mensuales.',
            'Todas las funciones básicas.'
          ]
        },
        plan2: {
          name: 'Plan 2',
          period: 'Año',
          description: 'Herramientas profesionales para que las pequeñas empresas comercialicen, vendan y den soporte en múltiples canales',
          features: [
            '5 usuarios incluidos (asientos).',
            '2,000 contactos activos mensuales.',
            'Todas las funciones básicas.'
          ]
        },
        plan3: {
          name: 'Plan 3',
          period: 'Año',
          description: 'Herramientas profesionales para que las pequeñas empresas comercialicen, vendan y den soporte en múltiples canales',
          features: [
            'Usuarios ilimitados',
            '5,000 contactos activos mensuales.',
            'Todas las funciones básicas.'
          ]
        },
        plan4: {
          name: 'Plan 4',
          period: 'Año',
          description: 'Herramientas profesionales para que las pequeñas empresas comercialicen, vendan y den soporte en múltiples canales',
          features: [
            '7 usuarios incluidos (asientos).',
            '10,000 contactos activos mensuales.',
            'Todas las funciones básicas.'
          ]
        },
        plan5: {
          name: 'Plan 5',
          period: 'Año',
          description: 'Flujos de trabajo multiequipo, informes avanzados e integraciones flexibles para medianas empresas.',
          features: [
            '10 usuarios incluidos (asientos).',
            '15,000 contactos activos mensuales.',
            'Informes avanzados.'
          ]
        },
        plan6: {
          name: 'Plan 6',
          period: 'Año',
          description: 'Flujos de trabajo multiequipo, informes avanzados e integraciones flexibles para medianas empresas.',
          features: [
            '15 usuarios incluidos (asientos).',
            '20,000 contactos activos mensuales.',
            'Todas las funciones básicas.'
          ]
        }
      }
    },
    // Blog Articles
    articles: {
      article1: {
        title: '¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?',
        subtitle: 'Descubre las diferencias clave y elige la mejor opción para tu negocio',
        intro: 'En el mundo empresarial actual, la comunicación efectiva con los clientes es fundamental. WhatsApp se ha convertido en una herramienta esencial, pero existe confusión sobre cuál versión usar: WhatsApp Business estándar o WhatsApp Business API.',
        conclusion: 'La elección entre WhatsApp Business y WhatsApp Business API depende del tamaño de tu negocio, volumen de mensajes y necesidades de automatización.',
        shareText: 'Descubre las diferencias clave entre WhatsApp Business y WhatsApp Business API, y entiende cuál es la mejor opción para tu negocio.',
        content: {
          intro: 'En el mundo empresarial actual, WhatsApp se ha convertido en una herramienta fundamental para la comunicación con clientes. Sin embargo, muchas empresas se confunden entre WhatsApp Business y WhatsApp Business API. Aunque ambas son soluciones de WhatsApp, tienen diferencias significativas que es importante entender.',
          basicTitle: 'WhatsApp Business: La Solución Básica',
          basicDesc: 'WhatsApp Business es una aplicación móvil gratuita diseñada para pequeños negocios. Es la versión simplificada de WhatsApp que permite a los empresarios crear un perfil de negocio con información como horarios de atención, ubicación y descripción del negocio.',
          basicFeatures: 'Características principales de WhatsApp Business:',
          basicFeaturesList: [
            'Perfil de negocio con información empresarial',
            'Etiquetas para organizar conversaciones',
            'Mensajes automáticos de bienvenida y ausencia',
            'Estadísticas básicas de mensajes',
            'Disponible solo en dispositivos móviles',
            'Gratuito',
            'Limitado a un solo dispositivo por número'
          ],
          basicConclusion: 'Esta solución es ideal para pequeños negocios que necesitan una presencia básica en WhatsApp sin requerimientos complejos de automatización.',
          apiTitle: 'WhatsApp Business API: La Solución Empresarial',
          apiDesc: 'WhatsApp Business API es una solución robusta y escalable diseñada para empresas medianas y grandes. A diferencia de WhatsApp Business, la API permite la integración con sistemas empresariales, automatización de procesos y gestión masiva de conversaciones.',
          apiFeatures: 'Características principales de WhatsApp Business API:',
          apiFeaturesList: [
            'Integración con sistemas empresariales (CRM, ERP, etc.)',
            'Automatización de mensajes y flujos de conversación',
            'Gestión de múltiples agentes desde una plataforma centralizada',
            'Plantillas de mensajes preaprobadas',
            'Webhooks para integración con aplicaciones externas',
            'Acceso a través de API REST',
            'Soporte para números de negocio dedicados',
            'Análisis avanzados y reportes detallados',
            'Escalabilidad para miles de conversaciones simultáneas'
          ],
          comparisonTitle: 'Comparativa Directa',
          comparisonTable: {
            feature: 'Característica',
            basic: 'WhatsApp Business',
            api: 'WhatsApp Business API',
            cost: 'Costo',
            costBasic: 'Gratuito',
            costApi: 'Pago por mensajes',
            devices: 'Dispositivos',
            devicesBasic: 'Solo móvil',
            devicesApi: 'Basado en la nube',
            automation: 'Automatización',
            automationBasic: 'Limitada',
            automationApi: 'Completa',
            integration: 'Integración',
            integrationBasic: 'No',
            integrationApi: 'Sí',
            scalability: 'Escalabilidad',
            scalabilityBasic: 'Baja',
            scalabilityApi: 'Alta',
            businessSupport: 'Soporte empresarial',
            businessSupportBasic: 'No',
            businessSupportApi: 'Sí',
            messageTemplates: 'Plantillas de mensajes',
            messageTemplatesBasic: 'No',
            messageTemplatesApi: 'Sí',
            analytics: 'Análisis',
            analyticsBasic: 'Básicos',
            analyticsApi: 'Avanzados',
            numberOfUsers: 'Número de usuarios',
            numberOfUsersBasic: '1',
            numberOfUsersApi: 'Múltiples'
          }
        }
      },
      article2: {
        title: '¿Para qué me sirve WhatsApp Business API para mi negocio?',
        subtitle: 'Explora casos de uso reales en diferentes industrias',
        intro: 'WhatsApp Business API abre un mundo de posibilidades para businesses que buscan escalar su comunicación.',
        conclusion: 'WhatsApp Business API es versátil y se adapta a múltiples industrias y casos de uso.',
        shareText: 'Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros.',
        content: {
          intro: 'WhatsApp Business API es una herramienta transformadora que puede revolucionar la forma en que tu negocio se comunica con los clientes. Veamos cómo diferentes industrias pueden beneficiarse de esta poderosa plataforma.',
          restaurantTitle: 'Restaurantes: Optimiza tu Servicio al Cliente',
          restaurantUseCase: 'Caso de uso: Reservas y confirmaciones automáticas',
          restaurantDesc: 'Un restaurante puede usar WhatsApp Business API para:',
          restaurantFeatures: [
            'Enviar confirmaciones automáticas de reservas',
            'Recordar a los clientes su reserva 24 horas antes',
            'Permitir que los clientes cambien o cancelen reservas directamente por WhatsApp',
            'Informar sobre cambios en el menú o promociones especiales',
            'Recibir pedidos para llevar y delivery'
          ],
          restaurantExample: 'Ejemplo práctico:',
          restaurantExampleText: 'El restaurante "La Buena Mesa" implementó WhatsApp Business API y redujo el número de no-shows (clientes que no llegan) en un 40%. Ahora, cuando un cliente hace una reserva, recibe automáticamente un mensaje de confirmación y un recordatorio el día anterior. Si el cliente no confirma, el restaurante puede liberar la mesa para otros clientes.',
          restaurantWithAI: 'Con IA integrada:',
          restaurantWithAIText: 'Un chatbot de IA puede responder preguntas sobre el menú, disponibilidad de mesas, horarios y restricciones dietéticas sin intervención humana, mejorando la experiencia del cliente y reduciendo carga de trabajo.'
        }
      },
      article3: {
        title: '¿Cuáles son los primeros pasos para migrar WhatsApp Business API?',
        subtitle: 'Guía paso a paso para tu transición',
        intro: 'Migrar a WhatsApp Business API puede parecer complejo, pero con la guía adecuada es un proceso manejable.',
        conclusion: 'La migración requiere planificación pero los beneficios a largo plazo valen el esfuerzo.',
        shareText: 'Guía paso a paso para migrar tu negocio a WhatsApp Business API sin complicaciones.'
      },
      article4: {
        title: '¿Qué beneficios tengo usando WhatsApp Business API + IA?',
        subtitle: 'La combinación perfecta para atención al cliente',
        intro: 'La inteligencia artificial transformada la manera en que las empresas interactúan con sus clientes.',
        conclusion: 'La combinación de WhatsApp Business API e IA es el futuro de la comunicación empresarial.',
        shareText: 'Descubre cómo la combinación de WhatsApp Business API e IA revoluciona la atención al cliente.'
      },
      article5: {
        title: '¿Qué plataformas me ayudan a integrar WhatsApp Business API?',
        subtitle: 'Descubre las mejores herramientas del mercado',
        intro: 'Elegir la plataforma adecuada es crucial para maximizar los beneficios de WhatsApp Business API.',
        conclusion: 'La plataforma ideal depende de tus necesidades específicas y presupuesto.',
        shareText: 'Descubre las mejores plataformas para integrar WhatsApp Business API con tus sistemas existentes.'
      },
      article6: {
        title: '¿Por qué necesito una plataforma para administrar chats de WhatsApp?',
        subtitle: 'La importancia de la gestión profesional',
        intro: 'A medida que tu negocio crece, gestionar WhatsApp manualmente se vuelve insostenible.',
        conclusion: 'Invertir en una plataforma de gestión es esencial para escalar eficientemente.',
        shareText: 'Descubre por qué necesitas una plataforma profesional para gestionar WhatsApp Business API eficientemente.'
      },
      article7: {
        title: '¿Cuáles son las diferencias entre plataformas que administran chats de WhatsApp?',
        subtitle: 'Análisis comparativo completo',
        intro: 'El mercado ofrece múltiples opciones para gestionar WhatsApp Business API.',
        conclusion: 'Cada plataforma tiene fortalezas únicas para diferentes tipos de negocios.',
        shareText: 'Análisis comparativo completo de plataformas para administrar WhatsApp Business API.'
      },
      article8: {
        title: '¿Cómo es el cobro que hacen las plataformas de chats de WhatsApp?',
        subtitle: 'Entiende los modelos de precios',
        intro: 'Los costos de WhatsApp Business API pueden ser confusos al principio.',
        conclusion: 'Entender la estructura de costos te ayudará a tomar decisiones informadas.',
        shareText: 'Guía completa sobre cómo funcionan los modelos de precios en las plataformas de WhatsApp Business API.'
      },
      article9: {
        title: '¿Qué tener en cuenta para seleccionar un proveedor de WhatsApp y la plataforma?',
        subtitle: 'Guía para la mejor elección',
        intro: 'Seleccionar el proveedor adecuado es una decisión crítica para tu negocio.',
        conclusion: 'Tómate el tiempo necesario para evaluar todas las opciones disponibles.',
        shareText: 'Guía completa para seleccionar el mejor proveedor de WhatsApp y plataforma para tu negocio.'
      },
      article10: {
        title: '¿Cuáles son las principales políticas de WhatsApp Business API?',
        subtitle: 'Normas que debes conocer',
        intro: 'WhatsApp tiene políticas estrictas que debes cumplir para usar su API.',
        conclusion: 'El cumplimiento de políticas es fundamental para el éxito a largo plazo.',
        shareText: 'Conoce las políticas y normativas clave de WhatsApp Business API para evitar restricciones.'
      },
      article11: {
        title: '¿Por qué pueden restringir el número de WhatsApp?',
        subtitle: 'Causas comunes y cómo evitarlas',
        intro: 'Las restricciones de número pueden afectar gravemente tu operación.',
        conclusion: 'La prevención es la mejor estrategia contra las restricciones.',
        shareText: 'Conoce las razones por las que WhatsApp puede restringir tu número y cómo evitarlo.'
      }
    },
    // Common
    common: {
      loading: 'Cargando...',
      error: 'Error',
      retry: 'Reintentar',
      close: 'Cerrar',
      menu: 'Menú',
      search: 'Buscar',
      language: 'Idioma',
      readTime: 'min de lectura',
      share: 'Compartir',
      relatedArticles: 'Artículos relacionados',
      previousArticle: 'Artículo anterior',
      nextArticle: 'Siguiente artículo',
      backToBlog: 'Volver al blog',
      publishedOn: 'Publicado el',
      author: 'Autor'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      plans: 'Plans',
      blog: 'Blog',
      contact: 'Contact',
      integrations: 'Integrations'
    },
    // Home
    home: {
      title: 'Automate your WhatsApp Business',
      subtitle: 'Power up your customer communication using WhatsApp Business API',
      cta: 'Get started now',
      features: {
        title: 'Main features',
        automation: 'Smart automation',
        automationDesc: 'Automatic responses and 24/7 chatbots',
        integration: 'Integrations',
        integrationDesc: 'Connect with your favorite tools',
        analytics: 'Analytics and reports',
        analyticsDesc: 'Detailed metrics of your communication'
      },
      services: {
        consulting: 'Specialized Consulting',
        consultingDesc: 'We advise companies on implementing and optimizing WhatsApp Business API to automate communication, improve customer service, and boost commercial management.',
        marketing: 'Automation and Digital Marketing Strategies',
        marketingDesc: 'We design data-driven automation and digital marketing strategies to attract customers, optimize processes, and increase conversion through intelligent communication and automated campaigns.',
        customerService: 'Customer Service Channel Automation',
        customerServiceDesc: 'We automate customer service channels through technological solutions that optimize communication, improve user experience, and increase operational efficiency.',
        sales: 'Sales Automation and Conversion Optimization',
        salesDesc: 'We automate sales processes and optimize customer conversion through technology, data, and digital strategies that improve commercial efficiency and increase results.',
        platform: 'Integrated Chat Management Platform',
        platformDesc: 'We centralize WhatsApp and Instagram conversation management in one platform to optimize service, automate responses, and improve customer communication.',
        database: 'Intelligent Contact Database Management',
        databaseDesc: 'We manage and optimize contact databases to ensure updated information, precise segmentation, and better performance in commercial and digital marketing strategies.'
      },
      platforms: {
        sales: 'Sales Management',
        salesDesc: 'Centralize and manage your sales opportunities from WhatsApp in one place. Follow up with each customer, control the commercial process and improve sales closure with better order and visibility.',
        orders: 'Order Management',
        ordersDesc: 'Receive and organize all your orders directly through WhatsApp in one place. Track inventory, production, delivery and invoicing.',
        shifts: 'Work Shift Management',
        shiftsDesc: 'Organize your team shifts automatically and efficiently avoiding confusion. Forget scattered schedules and keep everyone informed instantly through WhatsApp.',
        appointments: 'Medical Appointment Management',
        appointmentsDesc: 'Allow your patients to schedule, modify or cancel appointments in seconds, while receiving automatic reminders that reduce no-shows. All control is in WhatsApp, simple and reliable.',
        balances: 'Balance and Debt Inquiries',
        balancesDesc: 'Allow your customers to check their balances and debts instantly, directly from WhatsApp. Keep information always accessible and updated, improving communication and transparency.',
        loyalty: 'Customer Loyalty',
        loyaltyDesc: 'Allow your customers to accumulate points depending on their purchases. Manage rewards, discounts and bonuses to drive repurchases and new sales.'
      },
      integrations: {
        whatsapp: 'WhatsApp Business API',
        whatsappDesc: 'We integrate your business with WhatsApp Business API to automate messages, manage conversations and scale customer service from a single system.',
        instagram: 'Instagram',
        instagramDesc: 'Centralize Instagram direct messages and manage conversations from a unified platform.',
        sheets: 'Google Sheets',
        sheetsDesc: 'Automatically sync contact, conversation or order information with Google Sheets for analysis and data management.',
        crm: 'CRM (HubSpot and others)',
        crmDesc: 'We integrate your system with CRM like HubSpot to organize contacts, register interactions and improve commercial follow-up.',
        zapier: 'Automations (Zapier)',
        zapierDesc: 'Connect crear.chat with hundreds of applications to automate processes and workflows between different platforms.',
        sms: 'SMS',
        smsDesc: 'Send automated SMS messages for notifications, reminders or important communications with your customers.',
        email: 'Email',
        emailDesc: 'Integrate automated email sending for scheduled communications and customer follow-up.'
      }
    },
    // Footer
    footer: {
      description: 'Agency specialized in WhatsApp Business API automation',
      quickLinks: 'Quick links',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved'
    },
    // Blog
    blog: {
      title: 'Blog',
      subtitle: 'Articles about WhatsApp Business API',
      readMore: 'Read more',
      readTime: 'min read',
      share: 'Share',
      relatedArticles: 'Related articles',
      previousArticle: 'Previous article',
      nextArticle: 'Next article'
    },
    // Plans
    plans: {
      title: 'Plans',
      subtitle: 'Choose the perfect plan for your business',
      monthly: 'Monthly',
      yearly: 'Yearly',
      save: 'Save 20%',
      choosePlan: 'Choose plan',
      customPlan: 'Custom plan',
      customPlanDesc: 'Need a custom solution? Contact us and we will create a personalized plan for you.',
      contactUs: 'Contact us',
      plans: {
        plan1: {
          name: 'Plan 1',
          period: 'Year',
          description: 'Professional tools for small businesses to market, sell and support across multiple channels',
          features: [
            '2 users included (seats).',
            '500 active monthly contacts.',
            'All basic features.'
          ]
        },
        plan2: {
          name: 'Plan 2',
          period: 'Year',
          description: 'Professional tools for small businesses to market, sell and support across multiple channels',
          features: [
            '5 users included (seats).',
            '2,000 active monthly contacts.',
            'All basic features.'
          ]
        },
        plan3: {
          name: 'Plan 3',
          period: 'Year',
          description: 'Professional tools for small businesses to market, sell and support across multiple channels',
          features: [
            'Unlimited users',
            '5,000 active monthly contacts.',
            'All basic features.'
          ]
        },
        plan4: {
          name: 'Plan 4',
          period: 'Year',
          description: 'Professional tools for small businesses to market, sell and support across multiple channels',
          features: [
            '7 users included (seats).',
            '10,000 active monthly contacts.',
            'All basic features.'
          ]
        },
        plan5: {
          name: 'Plan 5',
          period: 'Year',
          description: 'Multi-team workflows, advanced reports and flexible integrations for medium businesses.',
          features: [
            '10 users included (seats).',
            '15,000 active monthly contacts.',
            'Advanced reports.'
          ]
        },
        plan6: {
          name: 'Plan 6',
          period: 'Year',
          description: 'Multi-team workflows, advanced reports and flexible integrations for medium businesses.',
          features: [
            '15 users included (seats).',
            '20,000 active monthly contacts.',
            'All basic features.'
          ]
        }
      }
    },
    // Alcaldías
    alcaldias: {
      title: 'Soluciones para Alcaldías',
      subtitle: 'Transforma tu ciudad con tecnología',
      description: 'Soluciones inteligentes de WhatsApp para modernizar los servicios ciudadanos y potenciar el turismo local.',
      hero: {
        title: 'Innovación para Gobiernos Locales',
        subtitle: 'Convierte WhatsApp en tu mejor herramienta de gestión ciudadana'
      },
      cta: {
        title: '¿Listo para transformar tu alcaldía?',
        subtitle: 'Implementa soluciones inteligentes y mejora la vida de tus ciudadanos',
        button: 'Solicitar Demo'
      },
      stats: {
        articles: 'Artículos especializados',
        updated: 'Actualizado regularmente',
        focus: 'Enfoque gubernamental'
      },
      article1: {
        title: 'Convierte WhatsApp en tu Mejor Guía Turística 24/7',
        subtitle: 'Automatiza la atención, mejora la experiencia y aumenta el consumo turístico en tu ciudad o negocio',
        intro: 'El problema que tienes (incluso si no te das cuenta)',
        problem: {
          title: 'El turista de hoy es inmediato. No espera.',
          description: 'Si alguien pregunta: "¿Qué hacer hoy?", "¿Dónde está este lugar?", "¿Qué hay cerca?" y no recibe respuesta en segundos... simplemente va a otra opción.',
          issues: [
            'Consultas sin respuesta',
            'Información dispersa',
            'Personal abrumado',
            'Oportunidades de venta perdidas'
          ],
          conclusion: 'Cada mensaje sin respuesta es dinero que estás dejando en la mesa.'
        },
        solution: {
          title: 'La solución: Turismo IA en WhatsApp',
          description: 'Ahora puedes tener un asistente inteligente que responde automáticamente a cada turista, a cualquier hora del día. Sin apps. Sin descargas. Sin fricción. Directamente desde WhatsApp.',
          features: [
            'Recomendaciones de lugares turísticos',
            'Restaurantes por presupuesto',
            'Actividades y planes diarios',
            'Eventos cercanos',
            'Hoteles disponibles',
            'Direcciones con mapas',
            'Rutas personalizadas'
          ],
          adaptation: 'Incluso puede adaptarse a lo que busca el usuario: Turismo económico, Planes familiares, Experiencias premium'
        },
        benefits: {
          title: 'Beneficios para tu ciudad',
          intro: 'Más que solo responder preguntas, estás transformando la experiencia turística completa.',
          keyBenefits: [
            'Aumento del 40% en tiempo de permanencia',
            'Reducción del 60% en consultas repetitivas',
            'Mejora del 85% en satisfacción del visitante',
            'Incremento del 25% en consumo local'
          ]
        },
        useCases: {
          title: 'Casos de uso perfectos',
          intro: 'Ideal para cualquier negocio que atienda turistas',
          applications: [
            'Oficinas de turismo',
            'Hoteles y alojamientos',
            'Restaurantes y bares',
            'Atracciones turísticas',
            'Tiendas locales',
            'Servicios de transporte'
          ]
        },
        whyWhatsApp: {
          title: '¿Por qué WhatsApp?',
          intro: 'La plataforma perfecta para atención turística',
          advantages: [
            '2,000 millones de usuarios activos',
            '97% de los turistas ya lo usan',
            'Comunicación instantánea',
            'Sin necesidad de instalar apps',
            'Soporte multimedia nativo',
            'Funciona con conexiones lentas'
          ],
          conclusion: 'Donde ya están tus clientes, ahí debe estar tu servicio.'
        },
        conclusion: 'Comienza hoy mismo a transformar la atención turística de tu ciudad. No dejes que otro mensaje sin respuesta se convierta en otra oportunidad perdida.',
        shareText: 'Descubre cómo convertir WhatsApp en el mejor guía turístico 24/7 para tu ciudad o negocio.'
      }
    },
    // Blog Articles
    articles: {
      article1: {
        title: 'What is the difference between WhatsApp Business and WhatsApp Business API?',
        subtitle: 'Discover key differences and choose the best option for your business',
        intro: 'In today\'s business world, effective customer communication is essential. WhatsApp has become an essential tool, but there\'s confusion about which version to use: standard WhatsApp Business or WhatsApp Business API.',
        conclusion: 'The choice between WhatsApp Business and WhatsApp Business API depends on your business size, message volume, and automation needs.',
        shareText: 'Discover the key differences between WhatsApp Business and WhatsApp Business API, and understand which is the best option for your business.',
        content: {
          intro: 'In today\'s business world, WhatsApp has become a fundamental tool for customer communication. However, many businesses are confused between WhatsApp Business and WhatsApp Business API. Although both are WhatsApp solutions, they have significant differences that are important to understand.',
          basicTitle: 'WhatsApp Business: The Basic Solution',
          basicDesc: 'WhatsApp Business is a free mobile application designed for small businesses. It\'s the simplified version of WhatsApp that allows business owners to create a business profile with information such as business hours, location, and business description.',
          basicFeatures: 'Main features of WhatsApp Business:',
          basicFeaturesList: [
            'Business profile with business information',
            'Labels to organize conversations',
            'Automatic welcome and away messages',
            'Basic message statistics',
            'Available only on mobile devices',
            'Free',
            'Limited to one device per number'
          ],
          basicConclusion: 'This solution is ideal for small businesses that need a basic presence on WhatsApp without complex automation requirements.',
          apiTitle: 'WhatsApp Business API: The Enterprise Solution',
          apiDesc: 'WhatsApp Business API is a robust and scalable solution designed for medium and large businesses. Unlike WhatsApp Business, the API allows integration with business systems, process automation, and massive conversation management.',
          apiFeatures: 'Main features of WhatsApp Business API:',
          apiFeaturesList: [
            'Integration with business systems (CRM, ERP, etc.)',
            'Message automation and conversation flows',
            'Multiple agent management from centralized platform',
            'Pre-approved message templates',
            'Webhooks for integration with external applications',
            'Access through REST API',
            'Support for dedicated business numbers',
            'Advanced analytics and detailed reports',
            'Scalability for thousands of simultaneous conversations'
          ],
          comparisonTitle: 'Direct Comparison',
          comparisonTable: {
            feature: 'Feature',
            basic: 'WhatsApp Business',
            api: 'WhatsApp Business API',
            cost: 'Cost',
            costBasic: 'Free',
            costApi: 'Pay per message',
            devices: 'Devices',
            devicesBasic: 'Mobile only',
            devicesApi: 'Cloud-based',
            automation: 'Automation',
            automationBasic: 'Limited',
            automationApi: 'Complete',
            integration: 'Integration',
            integrationBasic: 'No',
            integrationApi: 'Yes',
            scalability: 'Scalability',
            scalabilityBasic: 'Low',
            scalabilityApi: 'High',
            businessSupport: 'Business Support',
            businessSupportBasic: 'No',
            businessSupportApi: 'Yes',
            messageTemplates: 'Message Templates',
            messageTemplatesBasic: 'No',
            messageTemplatesApi: 'Yes',
            analytics: 'Analytics',
            analyticsBasic: 'Basic',
            analyticsApi: 'Advanced',
            numberOfUsers: 'Number of Users',
            numberOfUsersBasic: '1',
            numberOfUsersApi: 'Multiple'
          }
        }
      },
      article2: {
        title: 'What is WhatsApp Business API useful for in my business?',
        subtitle: 'Explore real use cases in different industries',
        intro: 'WhatsApp Business API opens a world of possibilities for businesses looking to scale their communication.',
        conclusion: 'WhatsApp Business API is versatile and adapts to multiple industries and use cases.',
        shareText: 'Explore real use cases of WhatsApp Business API in restaurants, hotels, cafes, lawyers, and collection offices.',
        content: {
          intro: 'WhatsApp Business API is a transformative tool that can revolutionize how your business communicates with customers. Let\'s see how different industries can benefit from this powerful platform.',
          restaurantTitle: 'Restaurants: Optimize Your Customer Service',
          restaurantUseCase: 'Use Case: Automatic reservations and confirmations',
          restaurantDesc: 'A restaurant can use WhatsApp Business API to:',
          restaurantFeatures: [
            'Send automatic reservation confirmations',
            'Remind customers of their reservation 24 hours in advance',
            'Allow customers to change or cancel reservations directly via WhatsApp',
            'Inform about menu changes or special promotions',
            'Receive takeout and delivery orders'
          ],
          restaurantExample: 'Practical Example:',
          restaurantExampleText: 'The restaurant "La Buena Mesa" implemented WhatsApp Business API and reduced no-shows (customers who don\'t arrive) by 40%. Now, when a customer makes a reservation, they automatically receive a confirmation message and a reminder the day before. If the customer doesn\'t confirm, the restaurant can release the table for other customers.',
          restaurantWithAI: 'With integrated AI:',
          restaurantWithAIText: 'An AI chatbot can answer questions about the menu, table availability, hours, and dietary restrictions without human intervention, improving customer experience and reducing workload.'
        }
      },
      article3: {
        title: 'What are the first steps to migrate to WhatsApp Business API?',
        subtitle: 'Step-by-step guide for your transition',
        intro: 'Migrating to WhatsApp Business API may seem complex, but with proper guidance it\'s a manageable process.',
        conclusion: 'Migration requires planning but the long-term benefits are worth the effort.',
        shareText: 'Step-by-step guide to migrate your business to WhatsApp Business API without complications.'
      },
      article4: {
        title: 'What benefits do I get using WhatsApp Business API + AI?',
        subtitle: 'The perfect combination for customer service',
        intro: 'Artificial intelligence is transforming how businesses interact with their customers.',
        conclusion: 'The combination of WhatsApp Business API and AI is the future of business communication.',
        shareText: 'Discover how the combination of WhatsApp Business API and AI revolutionizes customer service.'
      },
      article5: {
        title: 'What platforms help me integrate WhatsApp Business API?',
        subtitle: 'Discover the best market tools',
        intro: 'Choosing the right platform is crucial to maximize the benefits of WhatsApp Business API.',
        conclusion: 'The ideal platform depends on your specific needs and budget.',
        shareText: 'Discover the best platforms to integrate WhatsApp Business API with your existing systems.'
      },
      article6: {
        title: 'Why do I need a platform to manage WhatsApp chats?',
        subtitle: 'The importance of professional management',
        intro: 'As your business grows, managing WhatsApp manually becomes unsustainable.',
        conclusion: 'Investing in a management platform is essential to scale efficiently.',
        shareText: 'Discover why you need a professional platform to efficiently manage WhatsApp Business API.'
      },
      article7: {
        title: 'What are the differences between platforms that manage WhatsApp chats?',
        subtitle: 'Complete comparative analysis',
        intro: 'The market offers multiple options for managing WhatsApp Business API.',
        conclusion: 'Each platform has unique strengths for different types of businesses.',
        shareText: 'Complete comparative analysis of platforms for managing WhatsApp Business API.'
      },
      article8: {
        title: 'How do WhatsApp chat platforms charge?',
        subtitle: 'Understand pricing models',
        intro: 'WhatsApp Business API costs can be confusing at first.',
        conclusion: 'Understanding the cost structure will help you make informed decisions.',
        shareText: 'Complete guide on how pricing models work in WhatsApp Business API platforms.'
      },
      article9: {
        title: 'What to consider when selecting a WhatsApp provider and platform?',
        subtitle: 'Guide for the best choice',
        intro: 'Selecting the right provider is a critical decision for your business.',
        conclusion: 'Take the necessary time to evaluate all available options.',
        shareText: 'Complete guide to select the best WhatsApp provider and platform for your business.'
      },
      article10: {
        title: 'What are the main policies of WhatsApp Business API?',
        subtitle: 'Rules you must know',
        intro: 'WhatsApp has strict policies that you must comply with to use their API.',
        conclusion: 'Policy compliance is fundamental for long-term success.',
        shareText: 'Learn the key policies and regulations of WhatsApp Business API to avoid restrictions.'
      },
      article11: {
        title: 'Why can WhatsApp restrict your number?',
        subtitle: 'Common causes and how to avoid them',
        intro: 'Number restrictions can seriously affect your operation.',
        conclusion: 'Prevention is the best strategy against restrictions.',
        shareText: 'Learn the reasons why WhatsApp can restrict your number and how to avoid it.'
      }
    },
    // Alcaldías
    alcaldias: {
      title: 'Solutions for Municipalities',
      subtitle: 'Transform your city with technology',
      description: 'Smart WhatsApp solutions to modernize citizen services and boost local tourism.',
      hero: {
        title: 'Innovation for Local Governments',
        subtitle: 'Turn WhatsApp into your best citizen management tool'
      },
      cta: {
        title: 'Ready to transform your city?',
        subtitle: 'Implement smart solutions and improve your citizens\' lives',
        button: 'Request Demo'
      },
      stats: {
        articles: 'Specialized articles',
        updated: 'Regularly updated',
        focus: 'Government focus'
      },
      article1: {
        title: 'Turn WhatsApp into Your Best 24/7 Tourist Guide',
        subtitle: 'Automate attention, improve experience, and increase tourism consumption in your city or business',
        intro: 'The problem you\'re having (even if you don\'t notice it)',
        problem: {
          title: 'Today\'s tourist is immediate. They don\'t wait.',
          description: 'If someone asks: "What to do today?", "Where is this place?", "What\'s nearby?" and doesn\'t receive a response in seconds... they simply go to another option.',
          issues: [
            'Unanswered inquiries',
            'Scattered information',
            'Overwhelmed staff',
            'Lost sales opportunities'
          ],
          conclusion: 'Every unanswered message is money you\'re leaving behind.'
        },
        solution: {
          title: 'The solution: Tourism AI on WhatsApp',
          description: 'Now you can have an intelligent assistant that automatically responds to every tourist, at any time of day. No apps. No downloads. No friction. Directly from WhatsApp.',
          features: [
            'Tourist place recommendations',
            'Restaurants by budget',
            'Activities and daily plans',
            'Nearby events',
            'Available hotels',
            'Directions with maps',
            'Custom routes'
          ],
          adaptation: 'It can even adapt to what the user is looking for: Budget tourism, Family plans, Premium experiences'
        },
        howItWorks: {
          title: 'How does it work?',
          steps: [
            'User writes on WhatsApp',
            'AI interprets their intention',
            'Consults your database (places, businesses, routes)',
            'Responds naturally and usefully in seconds'
          ],
          conclusion: 'All this without human intervention.'
        },
        benefits: {
          title: 'Benefits that directly impact your results',
          intro: 'Implementing this AI is not just innovation... it\'s growth:',
          items: [
            {
              title: 'More revenue',
              description: 'Recommend businesses, activities, and services in real time.'
            },
            {
              title: 'Immediate attention',
              description: 'Never leave a message unanswered again.'
            },
            {
              title: 'More local consumption',
              description: 'Boost restaurants, tours, hotels, and businesses.'
            },
            {
              title: 'Better tourist experience',
              description: 'Clear, fast, and personalized information.'
            },
            {
              title: 'Innovative positioning',
              description: 'Stand out as a technological city or business.'
            }
          ]
        },
        useCases: {
          title: 'Real use cases',
          intro: 'This solution is ideal for:',
          items: [
            'Municipalities that want to boost tourism',
            'Smart cities',
            'Hotels that want to improve service',
            'Travel agencies',
            'Tour operators'
          ]
        },
        scalable: {
          title: 'Scalable and unlimited',
          features: [
            'Serve 10 or 10,000 users simultaneously',
            'Works 24/7 without rest',
            'Adapts to new routes and places',
            'Grows with you without increasing staff'
          ]
        },
        whyWhatsApp: {
          title: 'Why WhatsApp?',
          intro: 'Because that\'s where your users are:',
          reasons: [
            'More than 90% of people use it daily',
            'No learning required',
            'High response rate',
            'Most direct and effective channel'
          ],
          conclusion: 'You\'re taking tourism to the right place.'
        },
        differential: {
          title: 'Key differential',
          intro: 'It\'s not a basic chatbot. It\'s an AI that:',
          features: [
            'Understands natural language',
            'Responds contextually',
            'Learns and improves',
            'Offers useful, not generic, responses'
          ]
        },
        conclusion: 'Turn every message into a business opportunity.',
        shareText: 'Discover how to turn WhatsApp into the best 24/7 tourist guide for your city'
      }
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      retry: 'Retry',
      close: 'Close',
      menu: 'Menu',
      search: 'Search',
      language: 'Language',
      readTime: 'min read',
      share: 'Share',
      relatedArticles: 'Related articles',
      previousArticle: 'Previous article',
      nextArticle: 'Next article',
      backToBlog: 'Back to blog',
      publishedOn: 'Published on',
      author: 'Author'
    }
  }
};

type Language = 'es' | 'en';
type TranslationKey = keyof typeof translations.es;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Obtener idioma guardado en localStorage o usar español como defecto
  const getSavedLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'es' || saved === 'en') {
        return saved;
      }
    }
    return 'es';
  };

  const [language, setLanguage] = useState<Language>(getSavedLanguage);

  // Función para cambiar idioma y guardarlo en localStorage
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
