import { ArrowRight } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Hero background with subtle gradient and geometric elements
 * - Large, bold typography hierarchy
 * - Clear CTA with arrow icon
 * - Generous whitespace and breathing room
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 pt-20 pb-32">
      {/* Background image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/AiGxUhsrxVPa8Wv2JBkCoC/sandbox/TviKmQHMv8bz2LfN9kyibv-img-1_1771421110000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQWlHeFVoc3J4VlBhOFd2MkpCa0NvQy9zYW5kYm94L1R2aUttUUhNdjhiejJMZk45a3lpYnYtaW1nLTFfMTc3MTQyMTExMDAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=E3en99Yq2NH-WZkKPuldHiQniLK7EoIa-ueG8JqSXgZ71QQRfBovTC5MvhVw3w5cOzL7tvY744jnaexQgj-lQ2gvhrwR~gelQHLuA2npqmxPD0VrNSvy06IZjFWnSC7HyAOffUmcnivv6QJmBAdSY9DmZAn5GJRMeRTGc6jR08QZOMbm3~cNESJ1eRPj0byr6vmO1SVukqJ-cpFNNaZ5DBPkmA43uTCuS1R6m514pbA8PYrtUMheyDHERZbWqMeLw7x6sEmxfrsZOKZJ57vsQAfK7Z-aTCuGmJbUt~4idNkQR3xBc1yJ3mYZnVCtsQ12Ok0baFhA3Vdl2-OV3M1nUg__"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-bold text-5xl md:text-6xl text-gray-900 mb-6 leading-tight animate-fade-in-up">
            Automatiza tu presencia en <span className="text-[#1B4F72]">WhatsApp Business</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Consultoría especializada en automatización de WhatsApp Business API. Crea, gestiona y escala tu comunicación con clientes de forma inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="https://wa.me/+573105317126"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-lg group"
            >
              Escribenos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
