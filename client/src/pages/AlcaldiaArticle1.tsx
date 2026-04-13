import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link2,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Bot,
  Globe,
  Hotel,
  Utensils,
  Calendar,
  Search,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const AlcaldiaArticle1: React.FC = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = t('alcaldias.article1.shareText');
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'link':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Turismo Inteligente</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t('alcaldias.article1.title')}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('alcaldias.article1.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>8 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{language === 'es' ? '13 de abril, 2026' : 'April 13, 2026'}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-2xl"></div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('alcaldias.article1.intro')}
          </h2>
        </div>

        {/* Problem Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('alcaldias.article1.problem.title')}
            </h3>
          </div>
          
          <p className="text-lg text-gray-600 mb-6">
            {t('alcaldias.article1.problem.description')}
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <p className="text-red-800 font-medium mb-4">
              {language === 'es' ? 'Mientras tanto, tú tienes:' : 'Meanwhile, you have:'}
            </p>
            <ul className="space-y-3">
              {t('alcaldias.article1.problem.issues').split(',').map((issue, index) => (
                <li key={index} className="flex items-center gap-3 text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>{issue.trim()}</span>
                </li>
              ))}
            </ul>
            <p className="text-red-900 font-bold mt-4">
              {t('alcaldias.article1.problem.conclusion')}
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('alcaldias.article1.solution.title')}
            </h3>
          </div>
          
          <p className="text-lg text-gray-600 mb-6">
            {t('alcaldias.article1.solution.description')}
          </p>

          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-green-900 mb-4">
              {language === 'es' ? '¿Qué puede hacer esta IA?' : 'What can this AI do?'}
            </h4>
            <p className="text-green-700 mb-4">
              {language === 'es' ? 'Tu asistente turístico puede responder en tiempo real:' : 'Your tourist assistant can respond in real time:'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t('alcaldias.article1.solution.features').split(',').map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-800">{feature.trim()}</span>
                </div>
              ))}
            </div>
            <p className="text-green-900 font-medium mt-4">
              {t('alcaldias.article1.solution.adaptation')}
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('alcaldias.article1.howItWorks.title')}
            </h3>
          </div>
          
          <p className="text-gray-600 mb-6">
            {language === 'es' ? 'El proceso es simple pero potente:' : 'The process is simple but powerful:'}
          </p>

          <div className="space-y-4">
            {t('alcaldias.article1.howItWorks.steps').map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <p className="text-blue-900 font-medium">
              {t('alcaldias.article1.howItWorks.conclusion')}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('alcaldias.article1.benefits.title')}
            </h3>
          </div>
          
          <p className="text-lg text-gray-600 mb-6">
            {t('alcaldias.article1.benefits.intro')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t('alcaldias.article1.benefits.items').map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Hotel className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('alcaldias.article1.useCases.title')}
            </h3>
          </div>
          
          <p className="text-gray-600 mb-6">
            {t('alcaldias.article1.useCases.intro')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t('alcaldias.article1.useCases.items').split(',').map((useCase, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-900 font-medium">{useCase.trim()}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scalable */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('alcaldias.article1.scalable.title')}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t('alcaldias.article1.scalable.features').map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-indigo-50 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-indigo-900">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why WhatsApp */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('alcaldias.article1.whyWhatsApp.title')}
            </h3>
          </div>
          
          <p className="text-gray-600 mb-6">
            {t('alcaldias.article1.whyWhatsApp.intro')}
          </p>

          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <ul className="space-y-3">
              {t('alcaldias.article1.whyWhatsApp.reasons').map((reason, index) => (
                <li key={index} className="flex items-center gap-3 text-green-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <p className="text-green-900 font-bold mt-4">
              {t('alcaldias.article1.whyWhatsApp.conclusion')}
            </p>
          </div>
        </section>

        {/* Differential */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('alcaldias.article1.differential.title')}
            </h3>
          </div>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <p className="text-orange-900 font-medium mb-4">
              {t('alcaldias.article1.differential.intro')}
            </p>
            <ul className="space-y-3">
              {t('alcaldias.article1.differential.features').map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-orange-800">
                  <ChevronRight className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'es' ? 'Empieza hoy' : 'Start today'}
          </h3>
          <p className="text-lg text-blue-100 mb-6">
            {t('alcaldias.article1.conclusion')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/planes"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {language === 'es' ? 'Solicitar Demo' : 'Request Demo'}
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {language === 'es' ? 'Contactar experto' : 'Contact expert'}
            </a>
          </div>
        </section>

        {/* Share Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            {language === 'es' ? 'Compartir artículo' : 'Share article'}
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </button>
            <button
              onClick={() => handleShare('link')}
              className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  {language === 'es' ? '¡Copiado!' : 'Copied!'}
                </>
              ) : (
                <>
                  <Link2 className="w-5 h-5" />
                  {language === 'es' ? 'Copiar enlace' : 'Copy link'}
                </>
              )}
            </button>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="text-sm text-gray-500 mb-1">
                {language === 'es' ? 'Volver a' : 'Back to'}
              </p>
              <a
                href="/alcaldias"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                {language === 'es' ? 'Soluciones para Alcaldías' : 'Solutions for Municipalities'}
              </a>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">
                {language === 'es' ? 'Próximo artículo' : 'Next article'}
              </p>
              <span className="text-gray-400 font-medium">
                {language === 'es' ? 'Próximamente...' : 'Coming soon...'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlcaldiaArticle1;
