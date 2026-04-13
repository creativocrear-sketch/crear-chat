import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFooter from '@/components/ContactFooter';
import { Search, Calendar, Clock, ArrowRight, MapPin, Users, TrendingUp, Shield } from 'lucide-react';

const Alcaldias: React.FC = () => {
  const { language, t } = useLanguage();

  const articles = [
    {
      id: 1,
      title: t('alcaldias.article1.title'),
      subtitle: t('alcaldias.article1.subtitle'),
      excerpt: t('alcaldias.article1.intro'),
      readTime: '8 min',
      category: 'Turismo Inteligente',
      image: '/api/placeholder/400/250',
      path: '/alcaldias/guia-turistica-whatsapp',
      date: language === 'es' ? '13 de abril, 2026' : 'April 13, 2026',
      featured: true
    }
  ];

  const stats = [
    {
      icon: <MapPin className="w-6 h-6" />,
      value: t('alcaldias.stats.articles'),
      label: t('alcaldias.stats.focus')
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '24/7',
      label: language === 'es' ? 'Atención continua' : 'Continuous service'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '10K+',
      label: language === 'es' ? 'Usuarios atendidos' : 'Users served'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: '100%',
      label: language === 'es' ? 'Seguridad garantizada' : 'Security guaranteed'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">{t('alcaldias.hero.title')}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('alcaldias.title')}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                {t('alcaldias.subtitle')}
              </p>
              <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
                {t('alcaldias.description')}
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full blur-lg"></div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === 'es' ? 'Artículos Especializados' : 'Specialized Articles'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'es' 
                  ? 'Soluciones prácticas y casos de éxito para gobiernos locales'
                  : 'Practical solutions and success stories for local governments'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article 
                  key={article.id} 
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                    article.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-green-500 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="w-16 h-16 text-white/50" />
                    </div>
                    {article.featured && (
                      <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {language === 'es' ? 'Destacado' : 'Featured'}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <a 
                      href={article.path}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group-hover:gap-3"
                    >
                      {language === 'es' ? 'Leer artículo completo' : 'Read full article'}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ContactFooter />
      </main>
      <Footer />
    </div>
  );
};

export default Alcaldias;
