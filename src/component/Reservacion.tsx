export default function Reservacion() {
  return (
    <section
      id="reservacion"
      className="min-h-[60vh] flex items-center justify-center relative bg-[#0e0e0e] text-white py-14 px-6 md:px-16"
    >
      <div className="max-w-4xl w-full text-center">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserva con Nosotros</h2>

        {/* Párrafo descriptivo */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Reservar tu mesa es la mejor manera de asegurar una experiencia sin esperas
          y con la atención que mereces. Nuestro proceso es sencillo y directo:
          solo usamos WhatsApp para coordinar fechas, horarios y cualquier detalle especial
          que quieras añadir. ¡Así mantenemos todo rápido, cercano y humano!
          Escríbenos y nuestro equipo te atenderá encantado.
        </p>

        {/* Botón horizontal */}
        <div className="flex justify-center">
          <button
            className="px-8 py-3 rounded-full text-black font-bold text-base md:text-lg w-full max-w-md"
            style={{ backgroundColor: "#70E000" }}
          >
            Abrir chat de reserva (WhatsApp)
          </button>
        </div>

      </div>
    </section>
  );
}
