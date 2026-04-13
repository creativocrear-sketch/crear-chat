import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean header with logo and CTA button
 * - Generous spacing and subtle shadow
 * - Petrol blue accent for brand consistency
 * - Mobile responsive with hamburger menu
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            alt="Crear Chat Logo" 
            className="h-12 w-auto md:h-14" 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/dSwJK3W4FW3am7RcRumTG2/Diseñosintítulo(19)_2a52744b.png"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium transition-all duration-300 rounded-md"
          >
            {t('nav.home')}
          </a>
          <a
            href="/#nuestros-servicios"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium transition-all duration-300 rounded-md"
          >
            {t('nav.services')}
          </a>
          <a
            href="/#integraciones"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium transition-all duration-300 rounded-md"
          >
            {t('nav.integrations')}
          </a>
          <a
            href="/planes"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium transition-all duration-300 rounded-md"
          >
            {t('nav.plans')}
          </a>
          <a
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium transition-all duration-300 rounded-md"
          >
            {t('nav.blog')}
          </a>
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium transition-all duration-300 rounded-md"
            title={t('common.language')}
          >
            <Globe className="w-4 h-4 mr-1" />
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <a
            href="https://wa.me/+573105317126"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md rounded-md"
          >
            {language === 'es' ? 'Escríbenos' : 'Contact us'}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container py-4 space-y-2">
            <a
              href="/"
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {t('nav.home')}
            </a>
            <a
              href="/#nuestros-servicios"
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {t('nav.services')}
            </a>
            <a
              href="/#integraciones"
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {t('nav.integrations')}
            </a>
            <a
              href="/planes"
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {t('nav.plans')}
            </a>
            <a
              href="/blog"
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {t('nav.blog')}
            </a>
            <button
              onClick={() => {
                setLanguage(language === 'es' ? 'en' : 'es');
                closeMenu();
              }}
              className="block px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium text-left"
            >
              <Globe className="w-4 h-4 inline mr-2" />
              {t('common.language')}: {language === 'es' ? 'EN' : 'ES'}
            </button>
            <a
              href="https://wa.me/+573105317126"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block px-4 py-3 bg-[#1B4F72] hover:bg-[#0F2F45] text-white rounded-lg transition-colors font-medium text-center"
            >
              {language === 'es' ? 'Escríbenos' : 'Contact us'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
