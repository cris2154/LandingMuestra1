import { useState, useMemo, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Plato {
  nombre: string;
  descripcion: string;
  precio: string;
  categoria: string;
}

const DATA: Plato[] = [
  { nombre: "Lomo Saltado", descripcion: "Clásico salteado peruano", precio: "32.00", categoria: "Platos de Fondo" },
  { nombre: "Pollo a la Brasa", descripcion: "Servido con papas y ensalada", precio: "28.00", categoria: "Platos de Fondo" },
  { nombre: "Ensalada Mediterránea", descripcion: "Fresca con vegetales y mix verde", precio: "22.00", categoria: "Entradas" },
  { nombre: "Tequeños", descripcion: "Rellenos de queso acompañados de guacamole", precio: "18.00", categoria: "Entradas" },
  { nombre: "Suspiro Limeño", descripcion: "Dulce peruano tradicional", precio: "15.00", categoria: "Postres" },
  { nombre: "Cheesecake", descripcion: "Cremoso estilo americano", precio: "17.00", categoria: "Postres" },
];

export default function Carta() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const imgs = gsap.utils.toArray<HTMLElement>(".carta-image");

    const ctx = gsap.context(() => {
      // Entrada de UI y tarjetas
      gsap.from([".carta-panel", ".carta-card"], {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      });

      // Entrada inicial de decorativos
      gsap.set(imgs, { opacity: 1 });
      gsap.from(imgs, {
        x: (i) => (i % 2 === 0 ? -120 : 120),
        y: (i) => (i % 2 === 0 ? 80 : -80),
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.12,
      });

      // Scroll control: salen y regresan, con reset al recargar lejos
      gsap.to(imgs, {
        x: (i) => (i % 2 === 0 ? -260 : 260),
        y: (i) => (i % 2 === 0 ? 160 : -160),
        opacity: 0,
        ease: "power2.inOut",
        duration: 1.4,
        stagger: 0.12,
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
          onRefresh: (self) => {
            if (!self.isActive) {
              gsap.set(imgs, { x: 0, y: 0, opacity: 1 });
            }
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const CATEGORIAS = ["Todos", "Entradas", "Platos de Fondo", "Postres"];

  const filtrados = useMemo(() => {
    return DATA.filter((plato) => {
      const coincideTexto =
        plato.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        plato.descripcion.toLowerCase().includes(busqueda.toLowerCase());

      const coincideCategoria =
        categoria === "Todos" || plato.categoria === categoria;

      return coincideTexto && coincideCategoria;
    });
  }, [busqueda, categoria]);

  return (
    <section
      id="carta"
      className="min-h-screen w-full flex items-start justify-center relative bg-[#0e0e0e] text-white py-20 px-6 md:px-20"
      ref={sectionRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">

        {/* Columna izquierda */}
        <div className="md:col-span-1 space-y-8 carta-panel">

          {/* Buscador */}
          <div>
            <label className="block mb-2 text-gray-300">Buscar plato</label>
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Ej: Lomo, postre..."
              className="w-full px-4 py-3 rounded-lg bg-[#111] border border-white/10 text-white focus:outline-none focus:ring-2"
              style={{ caretColor: "#70E000" }}
            />
          </div>

          {/* Categorías */}
          <div>
            <p className="text-gray-300 mb-3">Categorías</p>
            <div className="flex flex-col gap-3">
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`text-left px-4 py-2 rounded-lg transition border ${
                    categoria === cat
                      ? "border-[#70E000] text-[#70E000]"
                      : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="md:col-span-2 space-y-6">
          {filtrados.length === 0 && (
            <p className="text-center text-gray-400">No se encontraron resultados.</p>
          )}

          {filtrados.map((plato, i) => (
            <div
              key={i}
              className="p-5 bg-[#111] border border-white/10 rounded-xl flex justify-between items-start carta-card"
            >
              <div>
                <h3 className="text-xl font-semibold">{plato.nombre}</h3>
                <p className="text-gray-400 text-sm mt-1">{plato.descripcion}</p>
              </div>

              <span className="text-[#70E000] font-bold text-lg">
                S/. {plato.precio}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Decorativos estilo Hero/Nosotros */}
      <img
        src="/7.png"
        alt="Decoración de parrilla"
        loading="lazy"
        className="absolute left-3 bottom-10 w-36 md:w-48 opacity-90 select-none pointer-events-none carta-image"
      />
      <img
        src="/8.png"
        alt="Decoración de ingredientes"
        loading="lazy"
        className="absolute right-2 bottom-0 w-48 md:w-64 opacity-90 select-none pointer-events-none carta-image"
      />
    </section>
  );
}
