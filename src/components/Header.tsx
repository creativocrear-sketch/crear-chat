import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean header with logo and CTA button
 * - Generous spacing and subtle shadow
 * - Petrol blue accent for brand consistency
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity font-bold text-xl text-gray-900"
        >
          CC
        </a>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium transition-all duration-300 rounded-md"
          >
            Inicio
          </a>
          <a
            href="/#nuestros-servicios"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium transition-all duration-300 rounded-md"
          >
            Servicios
          </a>
          <a
            href="/#integraciones"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium transition-all duration-300 rounded-md"
          >
            Integraciones
          </a>
          <a
            href="/#nuestros-planes"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium transition-all duration-300 rounded-md"
          >
            Planes
          </a>
          <a
            href="https://wa.me/+573105317126"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 bg-[#1B4F72] hover:bg-[#0F2F45] text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md rounded-md"
          >
            Escribenos
          </a>
        </div>
      </div>
    </header>
  );
}
