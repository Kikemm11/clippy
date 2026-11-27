import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import clippyLogo from '../assets/icon.svg';

const faqData = [
  {
    id: '1',
    question: '¿Qué es Clippy?',
    answer: 'Clippy es una aplicación multiplataforma diseñada para sincronizar tu portapapeles y transferir archivos de forma instantánea entre tu dispositivos móviles y dispositivos de escritorio (Windows o Linux) de manera local.',
  },
  {
    id: '2',
    question: '¿Cómo funciona Clippy?',
    answer: 'Funciona estableciendo una conexión directa punto a punto (P2P) mediante un protocolo TCP de red en tu red local Wi-Fi, permitiendo enviar texto, enlaces y archivos de un dispositivo a otro al instante.',
  },
  {
    id: '3',
    question: '¿La transferencia de información es segura?',
    answer: 'Claro que sí: los archivos y el texto que compartes viajan exclusivamente por tu red Wi-Fi local, de dispositivo a dispositivo, sin pasar por servidores externos ni almacenarse en la nube. Los únicos datos que se guardan en la nube son los de tu cuenta (nombre, correo y plan), necesarios para el inicio de sesión y la sincronización de beneficios.',
  },
  {
    id: '4',
    question: '¿Clippy funciona sin conexión a internet?',
    answer: 'Sí para compartir: las transferencias se hacen de forma local por Wi-Fi, sin depender de internet ni de datos móviles. Solo necesitas conexión para crear tu cuenta, verificar el correo, iniciar sesión y sincronizar los beneficios de tu plan entre dispositivos.',
  },
  {
    id: '5',
    question: '¿Cómo sincronizo mi dispositivo con otro?',
    answer: 'Asegúrate de tener Clippy abierto en ambos dispositivos y conectados a la misma red Wi-Fi. La app detectará automáticamente los equipos disponibles o podrás actualizar el radar desde la pantalla principal con el ícono dispuesto bajo DISPOSITIVOS ACTUALES.',
  },
  {
    id: '6',
    question: '¿Sólo funciona con dispositivos que tengan Clippy?',
    answer: 'Sí, para lograr una sincronización fluida en tiempo real y transmisiones P2P eficientes, es necesario que ambos extremos tengan Clippy instalado.',
  },
  {
    id: '7',
    question: '¿Cuál es el límite de información que puedo compartir?',
    answer: 'El límite depende de tu plan: 10 MB por transferencia en el Plan Free, 50 MB en Bronze, 250 MB en Silver y 500 MB en Gold. No hay límite en la cantidad de elementos que puedes compartir, solo en el tamaño de cada documento. Puedes ampliarlo con un pago único desde Google Play.',
  },
  {
    id: '8',
    question: '¿Ambos dispositivos deben estar conectados al mismo WiFi?',
    answer: 'Para que los dispositivos puedan descubrirse y comunicarse de manera directa mediante la red local, es indispensable que estén en la misma red Wi-Fi o en sub redes de la misma.',
  },
  {
    id: '9',
    question: '¿Por qué la app necesita permisos de almacenamiento?',
    answer: 'Los permisos son necesarios para que la aplicación pueda leer los archivos locales que deseas transmitir y almacenar correctamente los archivos recibidos en tu dispositivo.',
  },
  {
    id: '10',
    question: '¿Por qué la app necesita permisos de ubicación?',
    answer: 'En Android, los permisos de ubicación o de redes cercanas son un requisito obligatorio del sistema operativo para poder escanear y descubrir dispositivos compatibles en la red Wi-Fi local.',
  },
  {
    id: '11',
    question: '¿Dónde puedo obtener Clippy para dispositivos de escritorio?',
    answer: 'Puedes descargar la aplicación para Windows y Linux y ver más información sobre nosotros haciendo click en el siguiente link: ',
    linkText: 'Clippy.',
    linkUrl: 'https://kikemm11.github.io/clippy',
  },
  {
    id: '12',
    question: '¿Necesito crear una cuenta para usar Clippy?',
    answer: 'No. Puedes seguir usándolo como invitado con el Plan Free (10 MB y anuncios); la cuenta sirve para llevar tu plan a todos tus dispositivos.',
  },
  {
    id: '13',
    question: '¿Cómo creo una cuenta de Clippy?',
    answer: 'Desde la pantalla de acceso, “¿No tienes cuenta? ¡Crea una ya!”, con nombre, correo y contraseña de al menos 6 caracteres.',
  },
  {
    id: '14',
    question: '¿Por qué debo verificar mi correo electrónico?',
    answer: 'Para confirmar que te pertenece. La app envía un enlace y detecta la confirmación automáticamente, sin necesidad de volver a pulsar nada.',
  },
  {
    id: '15',
    question: '¿Qué hago si no recibo el correo de verificación?',
    answer: 'Revisa la carpeta de spam y usa “Reenviar correo” (habilitado cada 60 s). Al volver a iniciar sesión se envía uno nuevo.',
  },
  {
    id: '16',
    question: '¿Puedo entrar a la app sin verificar mi correo?',
    answer: 'No. Mientras no se confirme, la app mantiene abierto el diálogo de verificación.',
  },
  {
    id: '17',
    question: '¿Tengo que iniciar sesión cada vez que abro la app?',
    answer: 'No. La sesión se guarda de forma segura y se renueva sola al abrir la app.',
  },
  {
    id: '18',
    question: '¿Puedo usar la misma cuenta en el móvil y en la computadora?',
    answer: 'Sí. Ambos usan el mismo inicio de sesión y tu plan se sincroniza en todos tus dispositivos.',
  },
  {
    id: '19',
    question: '¿Qué datos guarda Clippy de mi cuenta?',
    answer: 'Nombre, correo y los datos del plan (plan, límite de tamaño y si incluye anuncios). Tus archivos no se guardan en ningún servidor.',
  },
  {
    id: '20',
    question: '¿Puedo cambiar mi nombre o mi contraseña?',
    answer: 'Sí, desde el perfil. Para cambiar la contraseña puede solicitarse la actual como verificación.',
  },
  {
    id: '21',
    question: '¿Puedo cambiar el correo asociado a mi cuenta?',
    answer: 'Actualmente no: el correo es el identificador de la cuenta. Si necesitas otro, crea una cuenta nueva.',
  },
  {
    id: '22',
    question: '¿Son suscripciones mensuales?',
    answer: 'No. Es un pago único para siempre: sin cuotas recurrentes ni renovaciones.',
  },
  {
    id: '23',
    question: '¿El plan comprado en el móvil funciona en la app de escritorio?',
    answer: 'Sí, al iniciar sesión con la misma cuenta en ambos dispositivos.',
  },
  {
    id: '24',
    question: '¿Qué pasa si cambio de dispositivo?',
    answer: 'Los beneficios viajan contigo: inicia sesión y tu plan se sincroniza automáticamente.',
  },
  {
    id: '25',
    question: '¿Puedo bajar de plan o cancelar mi plan?',
    answer: 'No hay una suscripción que cancelar. La app permite mejorar de plan; para un cambio a uno inferior, consulta la sección Contacto de la web.',
  },
  {
    id: '26',
    question: '¿El plan cambia la velocidad o la forma de transferir?',
    answer: 'No. Solo cambia el tamaño máximo por transferencia y la presencia de anuncios; la conexión sigue siendo local P2P.',
  },
  {
    id: '27',
    question: '¿Qué pasa con mi plan si elimino la cuenta?',
    answer: 'Pierdes de forma definitiva los beneficios vitalicios del plan, sin reembolso, y se borra el acceso en todos tus dispositivos.',
  },
  {
    id: '28',
    question: '¿Dónde puedo consultar los planes y beneficios?',
    answer: 'En la sección “Suscripciones” de la web, o en la app pulsando el indicador del plan en el encabezado / “Planes y beneficios”.',
  },
];

const normalizeText = (text) => text
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

const navLinks = [
  { label: 'Descargar', to: '/#descarga' },
  { label: 'Suscripciones', to: '/#subscripciones' },
  { label: 'Nosotros', to: '/#nosotros' },
  { label: 'Contacto', to: '/#contacto' },
  { label: 'FAQs', to: '/faqs' },
];

export default function Faqs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [pinnedId, setPinnedId] = useState(null);

  const filteredFaqs = useMemo(() => {
    const term = normalizeText(query.trim());
    if (!term) return faqData;

    return faqData.filter((faq) =>
      normalizeText(`${faq.question} ${faq.answer} ${faq.linkText || ''}`).includes(term)
    );
  }, [query]);

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
                aria-current={link.label === 'FAQs' ? 'page' : undefined}
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
                aria-current={link.label === 'FAQs' ? 'page' : undefined}
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
              Ayuda
            </span>
          </div>

          {/* Title & Introduction */}
          <div className="text-left mb-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black italic tracking-tight text-[#1d1c15] mb-4">
              Preguntas frecuentes
            </h1>
            <p className="text-base md:text-lg text-[#1d1c15]/80 leading-relaxed">
              Aquí encontrarás las respuestas a las dudas más comunes sobre Clippy, tus dispositivos y tu cuenta.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4 max-w-2xl">
            <svg 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#594138] pointer-events-none" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca una pregunta o respuesta..."
              aria-label="Buscar en las preguntas frecuentes"
              className="w-full bg-white border border-[#1d1c15]/10 rounded-2xl py-4 pl-12 pr-12 text-base text-[#1d1c15] placeholder:text-[#594138]/60 focus:outline-none focus:ring-2 focus:ring-[#D95C1E]/40 shadow-sm"
            />
            {query && (
              <button 
                type="button" 
                onClick={() => setQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#594138] hover:text-[#D95C1E] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <p className="text-sm text-[#1d1c15]/60 mb-6">
            {filteredFaqs.length} {filteredFaqs.length === 1 ? 'resultado' : 'resultados'}
          </p>

          {/* FAQ Accordion / Empty State */}
          {filteredFaqs.length === 0 ? (
            <div className="bg-[#faf8f5] border border-[#1d1c15]/10 rounded-3xl p-10 text-center max-w-4xl">
              <p className="font-semibold text-[#1d1c15] mb-2">No encontramos resultados</p>
              <p className="text-sm text-[#594138]">
                Prueba con otras palabras o consulta la sección Contacto para hacernos tu pregunta.
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-w-4xl">
              {filteredFaqs.map((faq) => {
                const isPinned = pinnedId === faq.id;

                return (
                  <div 
                    key={faq.id} 
                    className="bg-[#faf8f5] border border-[#1d1c15]/10 rounded-2xl overflow-hidden shadow-sm"
                  >
                    <button 
                      type="button"
                      aria-expanded={isPinned}
                      aria-controls={`faq-answer-${faq.id}`}
                      onClick={() => setPinnedId(isPinned ? null : faq.id)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5"
                    >
                      <span className="font-semibold text-base md:text-lg text-[#1d1c15]">
                        {faq.question}
                      </span>
                      <svg 
                        className={`w-5 h-5 text-[#D95C1E] flex-shrink-0 transition-transform duration-300 ${isPinned ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      id={`faq-answer-${faq.id}`}
                      className={`grid transition-all duration-300 ease-in-out ${isPinned ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 md:px-6 pb-5 text-sm md:text-base text-[#594138] leading-relaxed">
                          {faq.answer}
                          {faq.linkText && (
                            <> <a 
                              href={faq.linkUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-semibold text-[#D95C1E] hover:underline underline-offset-4"
                            >
                              {faq.linkText}
                            </a></>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

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
