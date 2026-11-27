import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import clippyLogo from '../assets/icon.svg';

export default function DeleteAccount() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Descargar', to: '/#descarga' },
    { label: 'Suscripciones', to: '/#subscripciones' },
    { label: 'Nosotros', to: '/#nosotros' },
    { label: 'Contacto', to: '/#contacto' },
    { label: 'FAQs', to: '/faqs' },
  ];

  return (
    <div className="min-h-screen text-[#1d1c15] font-sans antialiased flex flex-col relative bg-white">

      {/* Fixed Overlay Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-md px-6 py-5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Left Side: Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img 
              src={clippyLogo}
              alt="Clippy Logo" 
              className="w-9 h-9 object-contain drop-shadow-md group-hover:scale-105 transition-transform" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23D95C1E"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.49-.93 2.77-2.25 3.28V15h-2.5v-2.22c-1.32-.51-2.25-1.79-2.25-3.28C8.5 7.57 10.07 6 12 6z"/></svg>';
              }}
            />
            <span className="font-bold text-xl tracking-tight text-white drop-shadow-md">
              Clippy
            </span>
          </Link>

          {/* Right Side: Desktop Nav Links (Hidden on small screens) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-base font-medium text-white/90">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                to={link.to}
                className="relative py-1 group cursor-pointer hover:text-white transition-colors drop-shadow-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D95C1E] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl flex flex-col gap-5 text-lg font-medium text-white transition-all">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#D95C1E] transition-colors py-2 border-b border-white/5 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full pt-32 md:pt-40 pb-12">
        <section className="px-6 max-w-6xl mx-auto w-full">

          {/* Section Indicator */}
          <div className="text-left mb-2">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#D95C1E] uppercase">
              Tu cuenta
            </span>
          </div>

          {/* Title & Introduction */}
          <div className="text-left mb-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black italic tracking-tight text-[#1d1c15] mb-4">
              Cómo eliminar tu cuenta
            </h1>
            <p className="text-base md:text-lg text-[#1d1c15]/80 leading-relaxed">
              Puedes borrar tu cuenta y los datos guardados en ella cuando quieras. Es una decisión totalmente tuya y puedes hacerlo desde la propia aplicación, sin necesidad de escribirnos.
            </p>
            <p className="text-sm md:text-base italic mt-3 text-[#1d1c15]/60">
              Última actualización: 26/11/2026
            </p>
          </div>

          {/* Steps Card */}
          <div className="bg-[#faf8f5] border border-[#1d1c15]/10 p-6 md:p-10 rounded-3xl shadow-sm w-full max-w-4xl mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#1d1c15]">
              Pasos para borrar tu cuenta
            </h2>
            <ol className="space-y-5">
              {[
                'Abre Clippy en tu teléfono (la app de Google Play) o en tu computadora (la app de escritorio).',
                'Abre el menú de arriba a la izquierda, el botón de las tres rayas.',
                'Elige la opción «Eliminar cuenta».',
                'La app te pedirá unas comprobaciones de seguridad y te mostrará un aviso con lo que va a ocurrir. Léelo con calma.',
                'Escribe tu contraseña para confirmar que eres tú.',
                'Al confirmar, tu cuenta y todos los datos guardados en ella se borran para siempre.',
              ].map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D95C1E]/10 text-[#D95C1E] font-bold text-sm flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-base md:text-lg text-[#594138] leading-relaxed pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Important Warning */}
          <div className="bg-[#1d1c15] text-white p-6 md:p-10 rounded-3xl shadow-sm w-full max-w-4xl mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-5 text-white">
              Antes de borrar tu cuenta, ten en cuenta
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#D95C1E] font-bold">•</span>
                <span className="text-sm md:text-base text-white/80 leading-relaxed">
                  Perderás tu plan y todos sus beneficios.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D95C1E] font-bold">•</span>
                <span className="text-sm md:text-base text-white/80 leading-relaxed">
                  No podrás recuperar tu cuenta ni los datos que se hayan borrado.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D95C1E] font-bold">•</span>
                <span className="text-sm md:text-base font-semibold text-white leading-relaxed">
                  Al borrar tu cuenta, Logicat Studio deja de tener acceso a tu información.
                </span>
              </li>
            </ul>
          </div>

          {/* Help Card */}
          <div className="bg-[#faf8f5] border border-[#1d1c15]/10 p-6 md:p-10 rounded-3xl shadow-sm w-full max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
              ¿Tienes algún problema o duda?
            </h2>
            <p className="text-base md:text-lg text-[#594138] leading-relaxed mb-4">
              Si no logras borrar tu cuenta o tienes alguna duda sobre este proceso, escríbenos y te ayudaremos encantados.
            </p>
            <a 
              href="mailto:logicatstudio@gmail.com" 
              className="font-semibold text-[#D95C1E] hover:underline underline-offset-4"
            >
              logicatstudio@gmail.com
            </a>
          </div>

          <p className="text-sm text-[#1d1c15]/60 mt-6 max-w-4xl leading-relaxed">
            Si no tienes una cuenta, no hay nada que borrar: puedes seguir usando Clippy para compartir archivos en tu red local sin registrarte.
          </p>

        </section>
      </main>

      {/* Subtle Horizontal Section Separator */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D95C1E]/30 to-transparent" />
      </div>

      {/* Black Footer Section */}
      <footer className="w-full bg-[#1d1c15] text-white py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">

          {/* Left Part: Icon & Brand Title */}
          <Link 
            to="/" 
            className="flex items-center gap-3 cursor-pointer group sm:flex-1"
          >
            <img 
              src={clippyLogo}
              alt="Clippy Logo" 
              className="w-8 h-8 object-contain group-hover:scale-105 transition-transform" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23D95C1E"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.49-.93 2.77-2.25 3.28V15h-2.5v-2.22c-1.32-.51-2.25-1.79-2.25-3.28C8.5 7.57 10.07 6 12 6z"/></svg>';
              }}
            />
            <span className="font-bold text-lg tracking-tight text-white">
              Clippy
            </span>
          </Link>

          <div className="flex flex-col items-center gap-1">
            <Link 
              to="/privacy-policy" 
              className="text-xs text-gray-400 hover:text-[#D95C1E] transition-colors underline decoration-[#D95C1E]/40 underline-offset-4"
            >
              Política de Privacidad
            </Link>
            <Link 
              to="/delete-account" 
              aria-current="page"
              className="text-xs text-gray-400 hover:text-[#D95C1E] transition-colors underline decoration-[#D95C1E]/40 underline-offset-4"
            >
              Cómo eliminar tu cuenta
            </Link>
          </div>

          {/* Right Side: Copyright */}
          <div className="text-xs text-gray-400 sm:flex-1 sm:text-right">
            © {new Date().getFullYear()} Logicat Studio. Todos los derechos reservados.
          </div>

        </div>
      </footer>

    </div>
  );
}
