import { CreditCard, FileSpreadsheet, Globe, MessageCircle, Package, Boxes } from "lucide-react";
import type { ModulePageData } from "./types";

export const catalogoInventario: ModulePageData = {
  path: "/modulos/catalogo-inventario",
  name: "Catálogo e inventario",
  seo: {
    title: "Catálogo digital para vender por WhatsApp | crear.chat",
    description:
      "Publica un catálogo digital con página pública, gestiona productos e inventario y cobra por WhatsApp. Desde 1.000 productos en el plan Crecimiento de crear.chat.",
  },
  eyebrow: "Módulo · Productos y comercio",
  h1: "Catálogo digital e inventario para vender por WhatsApp",
  intro: [
    "Con el módulo de catálogo e inventario de crear.chat organizas tus productos y los publicas en una página pública que puedes compartir con tus clientes durante la conversación.",
    "Está disponible desde el plan Crecimiento, y la capacidad de productos crece con cada plan.",
  ],
  availability: [{ label: "Catálogo e inventario", values: [false, "1.000 productos", "10.000 productos", "Ilimitado"] }],
  availabilityNote: "Cobros por WhatsApp se agrega como adicional al armar tu plan.",
  problem: {
    title: "Vender por WhatsApp enviando fotos una por una",
    paragraphs: [
      "Muchas empresas venden por WhatsApp reenviando fotos, precios y descripciones a cada cliente. Toma tiempo, la información se desactualiza y es fácil ofrecer algo que ya no está disponible.",
      "Un catálogo digital reúne tus productos en un solo lugar para que el cliente los vea completos y tu equipo responda con información al día.",
    ],
    pains: [
      "Fotos y precios reenviados a mano en cada conversación",
      "Precios distintos según el asesor que responda",
      "Productos ofrecidos que ya no hay en inventario",
      "El cliente no ve todo lo que vendes",
    ],
  },
  howItWorks: {
    title: "De tu lista de productos a un catálogo que vende",
    steps: [
      { title: "Cargas tus productos", description: "Los registras en crear.chat; también puedes cargarlos desde un archivo de Excel." },
      { title: "Organizas el inventario", description: "Mantienes la información de cada producto actualizada." },
      { title: "Publicas tu catálogo", description: "Tus productos quedan en una página pública." },
      { title: "Lo compartes", description: "Envías el catálogo o sus productos durante la conversación." },
      { title: "Cobras", description: "Con el adicional de cobros, envías un link de pago sin salir del chat." },
    ],
  },
  features: [
    {
      icon: Globe,
      title: "Página pública de catálogo",
      description: "Tus productos publicados en una página que el cliente puede abrir desde la conversación.",
      badge: "Desde Crecimiento",
    },
    {
      icon: Package,
      title: "Gestión de productos",
      description: "Administra la información de tus productos desde la misma plataforma donde atiendes.",
      badge: "Desde Crecimiento",
    },
    {
      icon: Boxes,
      title: "Inventario",
      description: "Lleva el control de tus productos para responder sobre disponibilidad con información actualizada.",
      badge: "Desde Crecimiento",
    },
    {
      icon: FileSpreadsheet,
      title: "Carga desde Excel",
      description: "Sube tus productos desde un archivo de Excel en lugar de crearlos uno por uno.",
    },
    {
      icon: MessageCircle,
      title: "Catálogo en la conversación",
      description: "Comparte productos por WhatsApp, Instagram o Messenger mientras atiendes.",
    },
    {
      icon: CreditCard,
      title: "Cobros por WhatsApp",
      description: "Envía links de pago en la conversación para cerrar la venta en el mismo chat.",
      badge: "Adicional",
    },
  ],
  benefits: [
    "Tus clientes ven todo lo que vendes en un solo enlace",
    "Menos tiempo reenviando fotos y precios",
    "Información de productos igual para todo el equipo",
    "Respuestas sobre disponibilidad con datos actualizados",
    "Puedes cerrar la venta y cobrar en la misma conversación",
    "Capacidad que crece con tu negocio: de 1.000 productos a ilimitados",
  ],
  examples: [
    {
      sector: "Tienda de ropa o calzado",
      title: "Colección nueva en un enlace",
      description:
        "La tienda carga su colección desde Excel y comparte el catálogo con los clientes que preguntan. El cliente elige y el asesor confirma tallas y disponibilidad.",
    },
    {
      sector: "Distribuidora",
      title: "Pedidos de clientes frecuentes",
      description:
        "Los clientes de una distribuidora revisan el catálogo actualizado antes de hacer su pedido por WhatsApp, sin esperar a que un vendedor les envíe la lista de precios.",
    },
    {
      sector: "Restaurante",
      title: "Menú siempre al día",
      description:
        "El restaurante publica sus platos en el catálogo y lo comparte en cada pedido. Si se agota un plato, se actualiza en un solo lugar.",
    },
  ],
  integration: {
    title: "Catálogo, conversación e inteligencia artificial en el mismo lugar",
    paragraphs: [
      "El catálogo se comparte en las conversaciones de WhatsApp Business API, Instagram y Messenger, y puedes incluir su enlace en tus respuestas rápidas o flujos de chatbot para no escribir de nuevo la información de tus productos.",
      "Con el adicional de Cobros por WhatsApp completas el ciclo de venta: el cliente ve el producto, lo pide y paga desde el mismo chat.",
    ],
  },
  consulting: {
    title: "Te ayudamos a montar tu catálogo y tu proceso de venta",
    paragraphs: [
      "Te orientamos para organizar tus productos, preparar el archivo de carga y definir cómo deben compartirse en la conversación.",
      "Además diseñamos contigo el recorrido de compra por WhatsApp, desde la consulta hasta el pago, y capacitamos a tu equipo comercial.",
    ],
  },
  faqs: [
    {
      question: "¿crear.chat tiene catálogo de productos?",
      answer:
        "Sí. El módulo de catálogo e inventario está disponible desde el plan Crecimiento y publica tus productos en una página pública que puedes compartir con tus clientes.",
    },
    {
      question: "¿Cuántos productos puedo cargar?",
      answer: "Hasta 1.000 productos en el plan Crecimiento, 10.000 en PRO e ilimitados en Elite. El plan Inicio no incluye catálogo.",
    },
    {
      question: "¿Puedo cargar los productos desde Excel?",
      answer: "Sí. Puedes cargar tus productos desde un archivo de Excel, sin crearlos uno por uno.",
    },
    {
      question: "¿Puedo cobrar por WhatsApp?",
      answer:
        "Sí, con el adicional Cobros por WhatsApp, que permite enviar links de pago dentro de la conversación. Se agrega al armar tu plan a la medida.",
    },
    {
      question: "¿Qué es un catálogo digital para WhatsApp?",
      answer:
        "Es una página con tus productos, sus fotos y su información, que compartes con un enlace en la conversación. Evita reenviar fotos y precios a cada cliente.",
    },
  ],
  cta: {
    title: "Muestra tus productos y vende por WhatsApp de forma ordenada",
    text: "Te mostramos cómo se vería tu catálogo en crear.chat y cómo compartirlo con tus clientes.",
  },
  related: [
    { label: "WhatsApp Business API", href: "/modulos/whatsapp-business-api" },
    { label: "Automatización y chatbots", href: "/modulos/automatizacion-chatbot" },
    { label: "Planes y precios", href: "/planes" },
    { label: "Blog: casos de uso de WhatsApp Business API", href: "/blog/casos-uso-whatsapp-business-api" },
  ],
};
