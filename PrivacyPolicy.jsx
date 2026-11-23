import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fef9ee] text-[#1d1c15] p-4 md:p-8">
      
      {/* Title */}
      <div className="text-center mt-12 md:mt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-[#ff6d24]">
          Política de Privacidad
        </h1>
        <p className="text-sm md:text-base italic mt-3 text-[#594138]">
          Última actualización: 27/10/2026
        </p>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col justify-center items-center mt-12 mb-16 px-2">
        <div className="bg-[#faf8f5] border border-[#4e413b]/15 p-6 md:p-10 rounded-2xl shadow-sm w-full max-w-4xl flex flex-col text-left">

          <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
            1. Información general
          </h2>
          <p className="text-base md:text-lg text-[#594138] mb-6 leading-relaxed">
            Esta aplicación, <strong>Clippy</strong>, ha sido desarrollada por LogiCatStudio. La privacidad y la seguridad de tus datos son pilares fundamentales en nuestro diseño. Esta política detalla el funcionamiento de la aplicación respecto al manejo de la información compartida entre dispositivos.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
            2. Datos procesados y almacenamiento local
          </h2>
          <p className="text-base md:text-lg text-[#594138] mb-6 leading-relaxed">
            Clippy no recopila, rastrea ni almacena ningún tipo de información personal identificable en servidores externos. Todos los fragmentos de texto, imágenes y documentos que transfieres o recibes se procesan exclusivamente en la memoria de tu dispositivo y se guardan de forma local utilizando una base de datos SQLite interna.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
            3. Red local y arquitectura P2P
          </h2>
          <p className="text-base md:text-lg text-[#594138] mb-6 leading-relaxed">
            Todas las conexiones y transferencias de archivos se realizan punto a punto (Peer-to-Peer) a través de tu red Wi-Fi local mediante sockets TCP y descubrimiento UDP. Ningún dato, archivo o fragmento de portapapeles sale de tu red local ni pasa por la nube o servidores de terceros.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
            4. Permisos del dispositivo
          </h2>
          <p className="text-base md:text-lg text-[#594138] mb-6 leading-relaxed">
            La aplicación solicita acceso al almacenamiento local y a la red únicamente con el propósito de guardar archivos recibidos directamente en la memoria de tu dispositivo y permitir el descubrimiento de dispositivos cercanos en la red Wi-Fi local.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#1d1c15]">
            5. Contacto
          </h2>
          <p className="text-base md:text-lg text-[#594138] leading-relaxed">
            Si tienes dudas o consultas relacionadas con esta política de privacidad o con el funcionamiento técnico de Clippy, puedes contactarnos a través de: <span className="font-semibold text-[#ff6d24]">logicatstudio@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto text-center md:text-right text-[#857671] text-base italic pb-8">
        <p>“La privacidad no es una opción, es un derecho.”</p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;