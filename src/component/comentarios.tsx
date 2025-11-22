import { useMemo } from "react";

export default function Comentarios() {
  const COMENTARIOS = [
    {
      nombre: "María López",
      fecha: "Hace 2 días",
      texto: "La experiencia fue excelente. La comida llegó rápido, caliente y llena de sabor."
    },
    {
      nombre: "Javier Ramos",
      fecha: "Hace 1 semana",
      texto: "Ambiente acogedor y platos que sorprenden. El lomo saltado fue simplemente espectacular."
    },
    {
      nombre: "Patricia Sánchez",
      fecha: "Hace 4 días",
      texto: "Reservar por WhatsApp fue súper fácil. Al llegar ya estaba todo listo."
    },
    {
      nombre: "Diego Quispe",
      fecha: "Hace 3 semanas",
      texto: "Un lugar perfecto para desconectar. Atención personalizada y buena música."
    },
    {
      nombre: "Claudia Miranda",
      fecha: "Hace 1 día",
      texto: "Los postres son maravillosos. El cheesecake es mi favorito."
    },
    {
      nombre: "Ricardo Fernández",
      fecha: "Hace 2 semanas",
      texto: "Cada visita es mejor que la anterior. Excelentes sabores y servicio."
    },
    {
      nombre: "Lorena Castillo",
      fecha: "Hace 5 días",
      texto: "Platos abundantes, sabrosos y precios justos. Totalmente recomendado."
    },
    {
      nombre: "Antonio Medina",
      fecha: "Hace 3 días",
      texto: "La atención del personal fue increíble, muy amables y atentos."
    },
    {
      nombre: "Fernanda Ruiz",
      fecha: "Hace 2 semanas",
      texto: "El mejor restaurante rústico que he visitado. Sabor casero incomparable."
    },
  ];

  const columnas = useMemo(() => {
    const cols: typeof COMENTARIOS[] = [[], [], []];
    COMENTARIOS.forEach((item, i) => {
      cols[i % 3].push(item);
    });
    // Duplicar contenido múltiples veces para loop infinito real
    return cols.map((col) => [...col, ...col, ...col, ...col]);
  }, []);

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-25%); opacity: 1; }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-25%); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .scroll-up { animation: scrollUp 8s linear infinite; }
        .scroll-down { animation: scrollDown 8s linear infinite; }
      `}</style>

      <section
        id="comentarios"
        className="min-h-screen flex items-center justify-center relative bg-[#0e0e0e] text-white py-20 px-6 md:px-20"
      >
        <div className="w-full max-w-7xl">

          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comentarios</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Opiniones reales de comensales que han disfrutado nuestra cocina.
            </p>
          </div>

          {/* Carrusel infinito por columnas, manteniendo estilos de los comentarios */}
          <div className="relative overflow-hidden max-h-[700px]">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent pointer-events-none z-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {columnas.map((columna, colIdx) => (
                <div key={colIdx} className="overflow-hidden">
                  <div className={colIdx === 1 ? "scroll-down" : "scroll-up"}>
                    <div className="space-y-6">
                      {columna.map((item, index) => (
                        <div key={index} className="space-y-1">

                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#70E000] flex items-center justify-center text-black text-sm font-bold">
                              {item.nombre.charAt(0)}
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold">{item.nombre}</h3>
                              <p className="text-xs text-gray-500">{item.fecha}</p>
                            </div>
                          </div>

                          {/* Texto */}
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.texto}
                          </p>

                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
