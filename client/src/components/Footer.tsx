import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean footer with minimal content
 * - Brand consistency with header
 * - Only logo, company name, and copyright
 */

export default function Footer() {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <img 
              alt="Crear Chat Logo" 
              className="h-16 md:h-20 w-auto" 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/dSwJK3W4FW3am7RcRumTG2/Diseñosintítulo(19)_2a52744b.png"
            />
          </div>
          <p className="text-gray-400 mt-4 md:mt-0">
            © 2026 crear.chat. {t('footer.rights')} | <a href="/Politica-De-Privacidad" className="text-gray-400 hover:text-white transition-colors">{language === 'es' ? 'Política de privacidad' : 'Privacy Policy'}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
