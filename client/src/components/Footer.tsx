/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clean footer with minimal content
 * - Brand consistency with header
 * - Only logo, company name, and copyright
 */

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Brand and Copyright */}
          <div className="flex items-center gap-2 font-bold text-lg text-white">
            crear.chat
          </div>

          {/* Copyright */}
          <p className="text-gray-400 mt-4 md:mt-0">
            &copy; 2026 crear.chat. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
