import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import clippyLogo from '../assets/icon.svg';
import clippyBanner from '../assets/clippy_banner.jpeg';
import clippyPhone from '../assets/clippy_phone.png';
import logicatLogo from '../assets/logicatstudio_logo.png';
import kikemm11 from '../assets/me.jpg';
import logicat from '../assets/logicat.png';

const subscriptionPlans = [
  {
    id: 'free',
    name: 'Plan Free',
    price: 'Gratis',
    limit: 'Hasta 10 MB por transferencia',
    ads: 'Incluye anuncios',
    badge: 'Básico',
    cta: 'Plan inicial',
    recommended: false,
  },
  {
    id: 'bronze',
    name: 'Plan Bronze',
    price: '$2 USD',
    limit: 'Hasta 50 MB por transferencia',
    ads: 'Sin anuncios',
    badge: 'Pago único',
    cta: 'Obtener en Google Play',
    recommended: false,
  },
  {
    id: 'silver',
    name: 'Plan Silver',
    price: '$5 USD',
    limit: 'Hasta 250 MB por transferencia',
    ads: 'Sin anuncios',
    badge: 'Más elegido',
    cta: 'Obtener en Google Play',
    recommended: true,
  },
  {
    id: 'gold',
    name: 'Plan Gold',
    price: '$7 USD',
    limit: 'Hasta 500 MB por transferencia',
    ads: 'Sin anuncios',
    badge: 'Máxima capacidad',
    cta: 'Obtener en Google Play',
    recommended: false,
  },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const location = useLocation();

  // Allows other routes (e.g. /privacy-policy) to link back to a specific section
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); 
  };

  // Analytics event tracking helper
  const trackEvent = (action, category, label) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    trackEvent('click_plan_cta', 'Subscriptions', plan.name);
  };

  return (
    <div className="min-h-screen text-[#1d1c15] font-sans antialiased flex flex-col relative bg-white">
      
      {/* Fixed Overlay Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-md px-6 py-5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Side: Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={clippyLogo}
              alt="Clippy Logo" 
              className="w-9 h-9 object-contain drop-shadow-md hover:scale-105 transition-transform" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23D95C1E"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.49-.93 2.77-2.25 3.28V15h-2.5v-2.22c-1.32-.51-2.25-1.79-2.25-3.28C8.5 7.57 10.07 6 12 6z"/></svg>';
              }}
            />
            <span className="font-bold text-xl tracking-tight text-white drop-shadow-md">
              Clippy
            </span>
          </div>

          {/* Right Side: Desktop Nav Links (Hidden on small screens) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-base font-medium text-white/90">
            <a 
              href="#descarga" 
              onClick={(e) => {
                scrollToSection('descarga')(e);
                trackEvent('click_nav', 'Navigation', 'Descarga Section');
              }}
              className="relative py-1 group cursor-pointer hover:text-white transition-colors drop-shadow-sm"
            >
              Descargar
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D95C1E] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
            </a>

            <a 
              href="#subscripciones" 
              onClick={(e) => {
                scrollToSection('subscripciones')(e);
                trackEvent('click_nav', 'Navigation', 'Suscripciones Section');
              }}
              className="relative py-1 group cursor-pointer hover:text-white transition-colors drop-shadow-sm"
            >
              Suscripciones
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D95C1E] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
            </a>

            <a 
              href="#nosotros" 
              onClick={(e) => {
                scrollToSection('nosotros')(e);
                trackEvent('click_nav', 'Navigation', 'Nosotros Section');
              }}
              className="relative py-1 group cursor-pointer hover:text-white transition-colors drop-shadow-sm"
            >
              Nosotros
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D95C1E] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
            </a>

            <a 
              href="#contacto" 
              onClick={(e) => {
                scrollToSection('contacto')(e);
                trackEvent('click_nav', 'Navigation', 'Contacto Section');
              }}
              className="relative py-1 group cursor-pointer hover:text-white transition-colors drop-shadow-sm"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D95C1E] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
            </a>

            <Link 
              to="/faqs" 
              onClick={() => trackEvent('click_nav', 'Navigation', 'FAQs')}
              className="relative py-1 group cursor-pointer hover:text-white transition-colors drop-shadow-sm"
            >
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D95C1E] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
            </Link>
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
            <a 
              href="#descarga" 
              onClick={(e) => {
                scrollToSection('descarga')(e);
                trackEvent('click_nav', 'Navigation', 'Descarga Section');
              }}
              className="hover:text-[#D95C1E] transition-colors py-2 border-b border-white/5"
            >
              Descargar
            </a>
            <a 
              href="#subscripciones" 
              onClick={(e) => {
                scrollToSection('subscripciones')(e);
                trackEvent('click_nav', 'Navigation', 'Suscripciones Section');
              }}
              className="hover:text-[#D95C1E] transition-colors py-2 border-b border-white/5"
            >
              Suscripciones
            </a>
            <a 
              href="#nosotros" 
              onClick={(e) => {
                scrollToSection('nosotros')(e);
                trackEvent('click_nav', 'Navigation', 'Nosotros Section');
              }}
              className="hover:text-[#D95C1E] transition-colors py-2 border-b border-white/5"
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => {
                scrollToSection('contacto')(e);
                trackEvent('click_nav', 'Navigation', 'Contacto Section');
              }}
              className="hover:text-[#D95C1E] transition-colors py-2 border-b border-white/5"
            >
              Contacto
            </a>
            <Link 
              to="/faqs" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                trackEvent('click_nav', 'Navigation', 'FAQs');
              }}
              className="hover:text-[#D95C1E] transition-colors py-2"
            >
              FAQs
            </Link>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        
        {/* Full Viewport Width Banner Section */}
        <section className="w-full relative pb-12 md:pb-0">
          {/* Banner Container */}
          <div className="w-full h-[50vh] md:h-[65vh] lg:h-[80vh] overflow-hidden bg-[#1d1c15] relative">
            <img 
              src={clippyBanner}
              alt="Clippy Banner" 
              className="w-full h-full object-fit object-center opacity-90"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'p-12', 'text-center', 'text-white');
                e.target.parentElement.innerHTML = '<div className="py-20"><h3 className="text-3xl font-bold text-[#D95C1E] mb-2">Clippy Desktop</h3><p className="text-base text-gray-300">P2P Secure Clipboard & File Transfer Application</p></div>';
              }}
            />

            {/* Google Play Store Badge - Reposicionado para no colisionar en móviles */}
            <div 
              onClick={() => {}} 
              className="absolute bottom-16 left-4 md:bottom-20 md:left-12 z-20 bg-black/90 hover:bg-black text-white px-4 py-2.5 md:px-5 md:py-3 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <svg className="w-5 h-5 md:w-7 md:h-7 flex-shrink-0 transition-transform group-hover:rotate-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.814L13.792 12 3.61 22.186A2.37 2.37 0 0 1 3 20.57V3.43c0-.623.228-1.206.609-1.616z" fill="#00D2FF"/>
                <path d="M17.256 8.536l-3.464 3.464 3.464 3.464 3.903-2.23c.896-.512.896-1.832 0-2.344l-3.903-2.354z" fill="#FFD200"/>
                <path d="M3.609 1.814L13.792 12 17.256 8.536 6.85.59C5.772-.026 4.385.394 3.609 1.814z" fill="#00F076"/>
                <path d="M3.609 22.186L13.792 12l3.464 3.464-10.406 7.946c-1.078.616-2.465.196-3.241-1.224z" fill="#FF3A44"/>
              </svg>
              
              <div className="flex flex-col text-left">
                <span className="text-[9px] md:text-xs uppercase tracking-wider text-gray-400 font-semibold leading-tight">
                  Google Play
                </span>
                <span className="text-[11px] md:text-sm font-medium text-white leading-tight">
                  Disponible próximamente
                </span>
              </div>
            </div>
          </div>

          {/* Bottom-Center Overlapping Orange Container */}
          <div className="relative md:absolute w-[90%] max-w-2xl mx-auto left-0 right-0 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 -mt-6 md:-mt-0 md:bottom-0 md:translate-y-1/2 z-30 bg-[#D95C1E] text-white px-6 py-4 md:py-5 rounded-2xl shadow-lg border border-white/20 text-center">
            <p className="text-xs md:text-base lg:text-lg font-semibold tracking-wide">
              Comparte texto, imágenes y documentos entre dispositivos
            </p>
          </div>
        </section>

        {/* Feature Section: "Clippy te ofrece" */}
        <section className="pt-20 md:pt-20 px-6 max-w-6xl mx-auto w-full">
          
          {/* Section Heading */}
          <div className="text-left mb-6 md:mb-6">
            <h2 className="text-3xl md:text-4xl font-black italic tracking-tight text-[#1d1c15]">
              Clippy te ofrece
            </h2>
          </div>

          {/* Centered Phone Image surrounded by 4 Feature Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Left Column: Top-Left & Bottom-Left Cards */}
            <div className="flex flex-col gap-6 order-2 md:order-1">
              
              {/* Card 1: P2P Wi-Fi Communication */}
              <div className="bg-[#D95C1E] text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">Conexión Local Ultra Rápida</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Comunicación directa vía TCP en tu red Wi-Fi local sin depender de internet.
                </p>
              </div>

              {/* Card 2: Maximum Privacy / No External Cloud */}
              <div className="bg-[#D95C1E] text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">Privacidad Total</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Tu información se mantiene 100% segura. Cero servidores externos y cero almacenamiento en la nube.
                </p>
              </div>

            </div>

            {/* Center Column: Phone Graphic */}
            <div className="flex justify-center items-center order-1 md:order-2 my-6 md:my-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#D95C1E]/20 rounded-full blur-2xl group-hover:bg-[#D95C1E]/30 transition-all duration-500" />
                
                <img 
                  src={clippyPhone} 
                  alt="Clippy Mobile Interface" 
                  className="relative w-56 md:w-64 lg:w-72 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div className="w-56 h-96 bg-gray-900 rounded-[3rem] border-4 border-gray-800 flex items-center justify-center text-white p-6 text-center shadow-2xl"><p className="text-xs text-gray-400">Clippy App Preview</p></div>';
                  }}
                />
              </div>
            </div>

            {/* Right Column: Top-Right & Bottom-Right Cards */}
            <div className="flex flex-col gap-6 order-3">
              
              {/* Card 3: Direct Clipboard & File Sharing */}
              <div className="bg-[#D95C1E] text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">Portapapeles e Imágenes</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Acceso directo al portapapeles. Transfiere textos, documentos e imágenes al instante.
                </p>
              </div>

              {/* Card 4: Transaction History */}
              <div className="bg-[#D95C1E] text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">Historial Organizado</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Registro completo de transacciones para consultar o volver a copiar cualquier elemento enviado.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Subtle Horizontal Section Separator */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D95C1E]/30 to-transparent" />
        </div>

        {/* Download Section: "Descarga Clippy Desktop" */}
        <section id="descarga" className="py-8 md:py-10 px-6 max-w-6xl mx-auto w-full scroll-mt-20">
          
          {/* Section Indicator */}
          <div className="text-left mb-2">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#D95C1E] uppercase">
              Versión de Escritorio
            </span>
          </div>

          {/* Section Title & Description */}
          <div className="text-left mb-12 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black italic tracking-tight text-[#1d1c15] mb-4">
              Descarga Clippy para tu Computadora
            </h2>
            <p className="text-base md:text-lg text-[#1d1c15]/80 leading-relaxed">
              Clippy cuenta con su versión de escritorio optimizada para potenciar tu productividad. Conéctala directamente con tu dispositivo móvil en la misma red local y transfiere datos en segundos. Disponible para Windows y Linux en los enlaces a continuación.
            </p>
          </div>

          {/* Centered Download Cards Container */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-3xl mx-auto">
            
            {/* Windows Download Card */}
            <a 
              href="https://github.com/Kikemm11/clippy/releases/download/2.0.0/Clippy_Setup_2.0.0_x64.exe" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent('download_file', 'Downloads', 'Windows Setup Exe')}
              className="w-full sm:w-1/2 bg-[#faf8f5] hover:bg-[#1d1c15] text-[#1d1c15] hover:text-white p-8 rounded-3xl border border-[#1d1c15]/10 hover:border-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#D95C1E]/10 group-hover:bg-[#D95C1E] flex items-center justify-center mb-5 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#D95C1E] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.95-9.6L24 0v11.4H10.95M0 12.6h9.75v9.451L0 20.699M10.95 12.6H24V24l-13.05-1.8" />
                </svg>
              </div>

              <h3 className="font-bold text-xl mb-1">Windows</h3>
              <p className="text-xs text-[#594138] group-hover:text-gray-300">
                Compatible con Windows 10 / 11 (64-bit) 
              </p>
              <p className="text-xs text-[#594138] group-hover:text-gray-300 mb-6">
                Versión 2.0.0 
              </p>

              <div className="w-full py-3 px-4 bg-[#D95C1E] text-white rounded-xl font-semibold text-sm shadow-md group-hover:bg-[#c24f17] transition-colors flex items-center justify-center gap-2">
                <span>Obtener Setup.exe</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>

            {/* Linux Download Card */}
            <a 
              href="https://github.com/Kikemm11/clippy/releases/download/2.0.0/clippy_2.0.0_amd64.deb" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent('download_file', 'Downloads', 'Linux Deb Package')}
              className="w-full sm:w-1/2 bg-[#faf8f5] hover:bg-[#1d1c15] text-[#1d1c15] hover:text-white p-8 rounded-3xl border border-[#1d1c15]/10 hover:border-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#D95C1E]/10 group-hover:bg-[#D95C1E] flex items-center justify-center mb-5 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#D95C1E] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.002 0c-3.15 0-5.467 2.222-5.467 5.176 0 .894.218 1.834.582 2.65-.262.336-.582.885-.582 1.572 0 .61.272 1.134.693 1.493-.057.447-.093.91-.093 1.385 0 3.373 2.053 6.108 4.867 6.108 2.813 0 4.867-2.735 4.867-6.108 0-.475-.036-.938-.093-1.385.421-.359.693-.883.693-1.493 0-.687-.32-1.236-.582-1.572.364-.816.582-1.756.582-2.65C17.469 2.222 15.152 0 12.002 0zM8.887 4.108c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm6.23 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-3.115 2.825c1.136 0 1.93.473 1.93 1.058 0 .586-.794 1.058-1.93 1.058-1.136 0-1.93-.472-1.93-1.058 0-.585.794-1.058 1.93-1.058zM6.3 19.8c-1.35 0-2.3.95-2.3 2.1 0 1.15.95 2.1 2.3 2.1 1.01 0 1.83-.58 2.13-1.42.36.17.84.28 1.37.28.53 0 1.01-.11 1.37-.28.3.84 1.12 1.42 2.13 1.42 1.35 0 2.3-.95 2.3-2.1 0-1.15-.95-2.1-2.3-2.1-.89 0-1.63.46-2 1.13-.25-.08-.54-.13-.85-.13-.31 0-.6.05-.85.13-.37-.67-1.11-1.13-2-1.13z"/>
                </svg>
              </div>

              <h3 className="font-bold text-xl mb-1">Linux</h3>
              <p className="text-xs text-[#594138] group-hover:text-gray-300">
                Paquete .deb para Ubuntu, Debian y derivados
              </p>
              <p className="text-xs text-[#594138] group-hover:text-gray-300 mb-6">
                Versión 2.0.0 
              </p>

              <div className="w-full py-3 px-4 bg-[#D95C1E] text-white rounded-xl font-semibold text-sm shadow-md group-hover:bg-[#c24f17] transition-colors flex items-center justify-center gap-2">
                <span>Obtener .deb</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>

          </div>

        </section>

        {/* Subtle Horizontal Section Separator */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D95C1E]/30 to-transparent" />
        </div>

        {/* Suscripciones Section */}
        <section id="subscripciones" className="py-12 md:py-16 px-6 max-w-6xl mx-auto w-full scroll-mt-20">

          {/* Section Indicator */}
          <div className="text-left mb-2">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#D95C1E] uppercase">
              Planes opcionales
            </span>
          </div>

          {/* Section Title & Description */}
          <div className="text-left mb-8 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black italic tracking-tight text-[#1d1c15] mb-4">
              Suscripciones
            </h2>
            <p className="text-base md:text-lg text-[#1d1c15]/80 leading-relaxed">
              Clippy es y seguirá siendo gratuito para compartir archivos en tu red local. Los planes son completamente opcionales: solo amplían los límites y eliminan los anuncios si decides apoyar el proyecto.
            </p>
          </div>

          {/* Value Proposition Banner */}
          <div className="bg-[#faf8f5] border border-[#1d1c15]/10 rounded-3xl shadow-sm p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1 max-w-3xl">
                <span className="inline-block bg-[#D95C1E]/10 text-[#D95C1E] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                  Pago único · Para siempre
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1d1c15] mb-2">
                  Un solo pago. Tus beneficios para siempre en todos tus dispositivos.
                </h3>
                <p className="text-sm md:text-base text-[#594138] leading-relaxed">
                  Sin suscripciones mensuales. Al mejorar tu plan, conservas tus beneficios de por vida en todos los dispositivos donde inicies sesión con tu cuenta de Clippy. La app móvil y la app de escritorio usan el mismo inicio de sesión para sincronizar tu plan.
                </p>
              </div>

              {/* Google Play Purchase Notice */}
              <div className="flex items-start gap-3 bg-white/70 border border-[#1d1c15]/10 rounded-2xl p-4 md:w-80">
                <svg className="w-5 h-5 text-[#D95C1E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="text-xs md:text-sm text-[#594138] leading-relaxed">
                  Las compras se realizan dentro de la app de Google Play vinculada a tu cuenta de Clippy. Una vez completadas, tus límites y funciones se sincronizan en tus dispositivos.
                </p>
              </div>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionPlans.map((plan) => {
              const isPaid = plan.id !== 'free';

              return (
                <div 
                  key={plan.id} 
                  className={`bg-white p-6 rounded-3xl border shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${plan.recommended ? 'border-[#D95C1E] ring-1 ring-[#D95C1E]/30' : 'border-[#1d1c15]/10'}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-lg text-[#1d1c15]">{plan.name}</h3>
                    <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wide rounded-full px-2 py-1 ${plan.recommended ? 'bg-[#D95C1E]/10 text-[#D95C1E]' : 'bg-[#faf8f5] text-[#594138]'}`}>
                      {plan.badge}
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-black tracking-tight text-[#1d1c15]">{plan.price}</span>
                    {isPaid && <span className="text-xs font-semibold text-[#594138]">pago único</span>}
                  </div>

                  <div className="w-full h-[1px] bg-[#1d1c15]/10 my-5" />

                  <ul className="space-y-3 flex-grow">
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[#D95C1E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 0l-4 4m4-4l4 4M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1" />
                      </svg>
                      <span className="text-sm text-[#594138] leading-snug">{plan.limit}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      {isPaid ? (
                        <svg className="w-4 h-4 text-[#D95C1E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-[#594138] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07" />
                        </svg>
                      )}
                      <span className="text-sm text-[#594138] leading-snug">{plan.ads}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[#594138] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-[#594138] leading-snug">
                        {isPaid ? 'Para siempre en tu cuenta' : 'Sincronización P2P local'}
                      </span>
                    </li>
                  </ul>

                  <button 
                    type="button"
                    onClick={() => handlePlanSelect(plan)}
                    className={`mt-6 w-full py-3 px-4 rounded-xl font-semibold text-sm shadow-md transition-colors flex items-center justify-center gap-2 text-white ${plan.recommended ? 'bg-[#D95C1E] hover:bg-[#c24f17]' : 'bg-[#1d1c15] hover:bg-black'}`}
                  >
                    <span>{plan.cta}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>

          {/* CTA Notice */}
          {selectedPlan && (
            <div role="status" className="mt-6 flex items-start gap-3 bg-[#1d1c15] text-white rounded-2xl px-5 py-4 shadow-lg">
              <svg className="w-5 h-5 text-[#D95C1E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm leading-relaxed flex-grow">
                {selectedPlan.id === 'free'
                  ? 'Plan Free incluido por defecto en todas las cuentas de Clippy. Puedes mejorarlo desde la app de Google Play con tu cuenta.'
                  : `Para activar ${selectedPlan.name} (${selectedPlan.price}), abre Clippy en Google Play e inicia sesión con tu cuenta de Clippy.`}
              </p>
              <button 
                type="button" 
                aria-label="Cerrar aviso" 
                onClick={() => setSelectedPlan(null)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Footer Reassurance Strip */}
          <div className="mt-8 bg-white border border-[#1d1c15]/10 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#594138]">
              <svg className="w-4 h-4 text-[#D95C1E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Activo en todos tus dispositivos con tu cuenta
            </span>
            <span className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#594138]">
              <svg className="w-4 h-4 text-[#D95C1E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Sin cuotas recurrentes ni renovaciones
            </span>
            <span className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#594138]">
              <svg className="w-4 h-4 text-[#D95C1E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Compra gestionada en la app de Google Play
            </span>
          </div>

        </section>

        {/* Subtle Horizontal Section Separator */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D95C1E]/30 to-transparent" />
        </div>

        {/* Nosotros Section */}
        <section id="nosotros" className="py-12 md:py-16 px-6 max-w-6xl mx-auto w-full scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#faf8f5] p-8 md:p-12 rounded-3xl border border-[#1d1c15]/10 shadow-sm">
            
            {/* Text Side (Left/Main Area) */}
            <div className="md:col-span-8 text-left space-y-4">
              <span className="text-xs md:text-sm font-semibold tracking-wider text-[#D95C1E] uppercase">
                Acerca de Nosotros
              </span>
              <h2 className="text-3xl md:text-4xl font-black italic tracking-tight text-[#1d1c15]">
                Logicat Studio
              </h2>
              <p className="text-base md:text-lg text-[#1d1c15]/80 leading-relaxed pt-2">
                <strong>Logicat Studio</strong> es un estudio independiente enfocado en idear, diseñar y desarrollar soluciones tecnológicas eficientes a problemas cotidianos. Creemos firmemente en el software libre de intermediarios innecesarios, combinando una arquitectura orientada a la privacidad, la velocidad de ejecución y una experiencia de usuario intuitiva y moderna.
              </p>
            </div>

            {/* Logo Side (Right Area) */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-white p-4 shadow-md border border-[#1d1c15]/5 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img 
                  src={logicatLogo} 
                  alt="LogiCat Studio Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span className="font-bold text-xl text-[#D95C1E]">LogiCat Studio</span>';
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Subtle Horizontal Section Separator */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D95C1E]/30 to-transparent" />
        </div>

        {/* Contacto Section */}
        <section id="contacto" className="py-8 md:py-10 px-6 max-w-6xl mx-auto w-full scroll-mt-20 mb-12">
          
          <div className="text-left mb-10">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#D95C1E] uppercase">
              Hablemos
            </span>
            <h2 className="text-3xl md:text-4xl font-black italic tracking-tight text-[#1d1c15] mt-1">
              Contacto
            </h2>
          </div>

          {/* Two Rectangular Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Studio Contact Card */}
            <div className="bg-[#faf8f5] p-8 rounded-3xl border border-[#1d1c15]/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
              <div className="w-28 h-28 rounded-full bg-white p-3 mb-6 border-2 border-[#1d1c15]/5 shadow-md flex items-center justify-center group-hover:border-[#D95C1E] transition-colors">
                <img 
                  src={logicat} 
                  alt="LogiCat Studio" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span className="font-bold text-[#D95C1E]">LogiCat</span>';
                  }}
                />
              </div>

              <h3 className="text-xl font-bold text-[#1d1c15]">Logicat</h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D95C1E] mt-1 mb-4">
                Estudio de Desarrollo
              </p>

              <a 
                href="mailto:logicatstudio@gmail.com" 
                className="text-sm md:text-base font-medium text-[#1d1c15]/80 hover:text-[#D95C1E] transition-colors underline decoration-[#D95C1E]/40 underline-offset-4"
              >
                logicatstudio@gmail.com
              </a>
            </div>

            {/* Developer Contact Card */}
            <div className="bg-[#faf8f5] p-8 rounded-3xl border border-[#1d1c15]/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-[#D95C1E]/20 group-hover:border-[#D95C1E] transition-colors shadow-md">
                <img 
                  src={kikemm11} 
                  alt="Iván Maldonado" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-[#1d1c15]', 'flex', 'items-center', 'justify-center', 'text-white', 'font-bold');
                    e.target.parentElement.innerHTML = 'IM';
                  }}
                />
              </div>

              <h3 className="text-xl font-bold text-[#1d1c15]">Iván Maldonado</h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D95C1E] mt-1 mb-4">
                Software Developer
              </p>

              <a 
                href="mailto:kikemaldonado11@gmail.com" 
                className="text-sm md:text-base font-medium text-[#1d1c15]/80 hover:text-[#D95C1E] transition-colors underline decoration-[#D95C1E]/40 underline-offset-4"
              >
                kikemaldonado11@gmail.com
              </a>
            </div>

          </div>

        </section>

      </main>

      {/* Black Footer Section */}
      <footer className="w-full bg-[#1d1c15] text-white py-8 px-6 border-t border-white/10">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
    
    {/* Left Part: Icon & Brand Title */}
    <div 
      className="flex items-center gap-3 cursor-pointer group sm:flex-1" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
    </div>

    <div className="flex flex-col items-center gap-1">
      <Link 
        to="/privacy-policy" 
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