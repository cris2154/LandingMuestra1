export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white py-14 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo y descripción */}
        <div>
          <h3 className="text-2xl font-bold mb-3">M</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Restaurante rústico, cálido y acogedor.  
            Cocinamos con pasión, tradición y el mejor sabor casero.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-white">Inicio</a></li>
            <li><a href="#carta" className="hover:text-white">Carta</a></li>
            <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
            <li><a href="#reservacion" className="hover:text-white">Reservación</a></li>
          </ul>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Horarios</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Lunes a Viernes: 12:00 pm – 10:00 pm</li>
            <li>Sábados: 12:00 pm – 11:00 pm</li>
            <li>Domingos: 12:00 pm – 9:00 pm</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>📍 Av. Principal 123, Lima</li>
            <li>📞 +51 987 654 321</li>
            <li>📧 reservas@restaurante.com</li>

            <div className="flex gap-4 pt-2">
              <a href="#" className="text-white hover:text-[#70E000] transition">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#70E000] transition">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.843l-4.462-5.833-5.11 5.833H2.777l7.73-8.815L1.5 2.25h6.984l4.034 5.326 5.726-5.326Zm-1.161 17.52h1.833L7.084 4.356H5.117l11.966 15.414Z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#70E000] transition">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3Zm5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5Zm4.4-3.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z" />
                </svg>
              </a>
            </div>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-white/10">
        © {new Date().getFullYear()} Restaurante M — Todos los derechos reservados.
      </div>
    </footer>
  );
}
