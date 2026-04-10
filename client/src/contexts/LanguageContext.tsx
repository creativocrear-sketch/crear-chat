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
      contact: 'Contacto'
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
      mostPopular: 'Más popular',
      features: {
        basic: 'Hasta 500 contactos',
        pro: 'Hasta 2,000 contactos',
        enterprise: 'Contactos ilimitados',
        support: 'Soporte 24/7',
        api: 'API completa',
        analytics: 'Análisis avanzados',
        custom: 'Soluciones personalizadas'
      }
    },
    // Blog Articles
    articles: {
      article1: {
        title: '¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?',
        subtitle: 'Descubre las diferencias clave y elige la mejor opción para tu negocio',
        intro: 'En el mundo empresarial actual, la comunicación efectiva con los clientes es fundamental. WhatsApp se ha convertido en una herramienta esencial, pero existe confusión sobre cuál versión usar: WhatsApp Business estándar o WhatsApp Business API.',
        conclusion: 'La elección entre WhatsApp Business y WhatsApp Business API depende del tamaño de tu negocio, volumen de mensajes y necesidades de automatización.',
        shareText: 'Descubre las diferencias clave entre WhatsApp Business y WhatsApp Business API, y entiende cuál es la mejor opción para tu negocio.'
      },
      article2: {
        title: '¿Para qué me sirve WhatsApp Business API para mi negocio?',
        subtitle: 'Explora casos de uso reales en diferentes industrias',
        intro: 'WhatsApp Business API abre un mundo de posibilidades para businesses que buscan escalar su comunicación.',
        conclusion: 'WhatsApp Business API es versátil y se adapta a múltiples industrias y casos de uso.',
        shareText: 'Explora casos de uso reales de WhatsApp Business API en restaurantes, hoteles, cafés, abogados y oficinas de cobros.'
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
      contact: 'Contact'
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
      mostPopular: 'Most popular',
      features: {
        basic: 'Up to 500 contacts',
        pro: 'Up to 2,000 contacts',
        enterprise: 'Unlimited contacts',
        support: '24/7 support',
        api: 'Full API',
        analytics: 'Advanced analytics',
        custom: 'Custom solutions'
      }
    },
    // Blog Articles
    articles: {
      article1: {
        title: 'What is the difference between WhatsApp Business and WhatsApp Business API?',
        subtitle: 'Discover key differences and choose the best option for your business',
        intro: 'In today\'s business world, effective customer communication is essential. WhatsApp has become an essential tool, but there\'s confusion about which version to use: standard WhatsApp Business or WhatsApp Business API.',
        conclusion: 'The choice between WhatsApp Business and WhatsApp Business API depends on your business size, message volume, and automation needs.',
        shareText: 'Discover the key differences between WhatsApp Business and WhatsApp Business API, and understand which is the best option for your business.'
      },
      article2: {
        title: 'What is WhatsApp Business API useful for in my business?',
        subtitle: 'Explore real use cases in different industries',
        intro: 'WhatsApp Business API opens a world of possibilities for businesses looking to scale their communication.',
        conclusion: 'WhatsApp Business API is versatile and adapts to multiple industries and use cases.',
        shareText: 'Explore real use cases of WhatsApp Business API in restaurants, hotels, cafes, lawyers, and collection offices.'
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
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
