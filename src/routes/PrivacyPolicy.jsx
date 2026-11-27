import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import clippyLogo from '../assets/icon.svg';

export default function PrivacyPolicy() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Descargar', to: '/#descarga' },
    { label: 'Suscripciones', to: '/#subscripciones' },
    { label: 'Nosotros', to: '/#nosotros' },
    { label: 'Contacto', to: '/#contacto' },
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
          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-white/90">
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
              Legal
            </span>
          </div>

          {/* Title */}
          <div className="text-left mb-10 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black italic tracking-tight text-[#1d1c15]">
              Política de Privacidad
            </h1>
            <p className="text-sm md:text-base italic mt-3 text-[#1d1c15]/60">
              Última actualización: 23/11/2026
            </p>
          </div>

          {/* Main Content Container */}
          <div className="flex flex-col justify-center items-center mb-12 px-2">
            <div className="bg-[#faf8f5] border border-[#1d1c15]/10 p-6 md:p-10 rounded-3xl shadow-sm w-full max-w-4xl flex flex-col text-left">

              <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
                <span className="text-[#D95C1E]">1.</span> Información general
              </h2>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                Esta aplicación, <strong className="font-semibold text-[#1d1c15]">Clippy</strong>, ha sido desarrollada por LogicatStudio. La privacidad y la seguridad de tus datos son pilares fundamentales en nuestro diseño. Esta política detalla el manejo de la información compartida entre dispositivos y, cuando decides usarlas, el tratamiento de los datos de cuenta y de compra asociados a las membresías. Usar Clippy no requiere una cuenta: las transferencias locales funcionan de forma anónima.
              </p>

              <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
                <span className="text-[#D95C1E]">2.</span> Datos procesados y almacenamiento local
              </h2>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                Los fragmentos de texto, imágenes y documentos que transfieres o recibes no se recopilan, rastrean ni almacenan en servidores externos: se procesan exclusivamente en la memoria de tu dispositivo y se guardan de forma local utilizando una base de datos SQLite interna. Esta información nunca se mezcla con los datos de tu cuenta, que se tratan por separado según se describe más adelante.
              </p>

              <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
                <span className="text-[#D95C1E]">3.</span> Red local y arquitectura P2P
              </h2>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                Todas las conexiones y transferencias de archivos se realizan punto a punto (Peer-to-Peer) a través de tu red Wi-Fi local mediante sockets TCP y descubrimiento UDP. Ningún dato, archivo o fragmento de portapapeles sale de tu red local ni pasa por la nube o servidores de terceros.
              </p>

              <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
                <span className="text-[#D95C1E]">4.</span> Permisos del dispositivo
              </h2>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                La aplicación solicita acceso al almacenamiento local y a la red únicamente con el propósito de guardar archivos recibidos directamente en la memoria de tu dispositivo y permitir el descubrimiento de dispositivos cercanos en la red Wi-Fi local.
              </p>

              <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
                <span className="text-[#D95C1E]">5.</span> Cuentas de usuario y autenticación
              </h2>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                Crear una cuenta es opcional y su único propósito es permitirte identificarte para mantener tu membresía disponible en todos tus dispositivos. Si prefieres no registrarte, puedes seguir usando todas las funciones de transferencia local de Clippy sin proporcionar ningún dato personal.
              </p>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                Solo te pedimos <strong className="font-semibold text-[#1d1c15]">nombre</strong>, <strong className="font-semibold text-[#1d1c15]">correo electrónico</strong> y <strong className="font-semibold text-[#1d1c15]">contraseña</strong>. No solicitamos teléfono, ubicación, fecha de nacimiento ni ningún otro dato personal. La autenticación se gestiona mediante Firebase (Google): tu contraseña se almacena de forma cifrada (hash) en los servidores de Firebase, y Clippy nunca la recibe ni la conserva en texto plano, ni en tu dispositivo ni en nuestros sistemas.
              </p>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                El correo electrónico se usa únicamente para identificar tu cuenta, permitir el inicio de sesión y recuperar el acceso. No lo utilizamos para enviar publicidad ni lo compartimos con terceros con fines de marketing. Puedes eliminar tu cuenta y todos los datos asociados en cualquier momento, directamente desde la aplicación, sin necesidad de contactarnos: en la sección de tu cuenta encontrarás la opción para borrar tu perfil y la información vinculada a tu membresía de forma permanente. Si encuentras algún problema con este proceso, puedes escribirnos a <span className="font-semibold text-[#D95C1E]">logicatstudio@gmail.com</span>.
              </p>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                Si quieres ver los pasos uno por uno, consulta <Link to="/delete-account" className="font-semibold text-[#D95C1E] hover:underline underline-offset-4">Cómo eliminar tu cuenta</Link>.
              </p>

              <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
                <span className="text-[#D95C1E]">6.</span> Compras dentro de la aplicación y membresías
              </h2>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                Clippy puede ofrecer compras dentro de la aplicación (IAP) para mejorar tu plan. Se trata de pagos únicos: no hay suscripciones mensuales ni renovaciones automáticas. El pago se procesa íntegramente en Google Play: Clippy no solicita ni almacena números de tarjeta, datos bancarios ni información de facturación.
              </p>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                Tanto la aplicación móvil como la aplicación de escritorio utilizan la autenticación de tu cuenta de Clippy para sincronizar tu plan entre dispositivos. Para reconocer y restaurar tu compra vinculamos a tu cuenta el identificador del producto y, cuando la tienda lo facilita, un identificador de transacción o token de compra. Estos datos se usan exclusivamente para validar tu acceso de por vida, nunca con fines publicitarios ni se venden a terceros.
              </p>
              <p className="text-base md:text-lg text-[#1d1c15]/80 mb-6 leading-relaxed">
                Las compras realizadas sin iniciar sesión no se pueden asociar a una cuenta y, por lo tanto, no se pueden restaurar en otros dispositivos. Los reembolsos se gestionan desde Google Play, según sus políticas. Puedes seguir usando Clippy de forma gratuita sin realizar ninguna compra.
              </p>

              <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
                <span className="text-[#D95C1E]">7.</span> Contacto
              </h2>
              <p className="text-base md:text-lg text-[#1d1c15]/80 leading-relaxed">
                Si tienes dudas o consultas relacionadas con esta política de privacidad o con el funcionamiento técnico de Clippy, puedes contactarnos a través de: <span className="font-semibold text-[#D95C1E]">logicatstudio@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Closing Quote */}
          <div className="text-center pb-4">
            <p className="text-sm md:text-base italic text-[#1d1c15]/60">
              “La privacidad no es una opción, es un derecho.”
            </p>
          </div>

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
              aria-current="page"
              className="text-xs text-gray-400 hover:text-[#D95C1E] transition-colors underline decoration-[#D95C1E]/40 underline-offset-4"
            >
              Política de Privacidad
            </Link>
            <Link 
              to="/delete-account" 
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
