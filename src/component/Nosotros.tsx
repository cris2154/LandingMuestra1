import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Nosotros() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const imgs = gsap.utils.toArray<HTMLElement>(".nosotros-image");

    const ctx = gsap.context(() => {
      // Entrada de texto y tarjetas
      gsap.from([".nosotros-text", ".nosotros-local"], {
        y: 30,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.12,
      });

      // Timeline de decorativos
      const decorTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      decorTl.set(imgs, { opacity: 1 });
      decorTl.from(imgs, {
        x: (i) => (i % 2 === 0 ? -80 : 80),
        y: (i) => (i % 2 === 0 ? 60 : -60),
        opacity: 0,
        duration: 1.4,
        stagger: 0.1,
      });

      // Scroll control con reset seguro al recargar lejos
      gsap
        .timeline({
          defaults: { ease: "power2.inOut" },
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
        })
        .to(imgs, {
          x: (i) => (i % 2 === 0 ? -200 : 200),
          y: (i) => (i % 2 === 0 ? 140 : -140),
          opacity: 0,
          duration: 1.4,
          stagger: 0.1,
          immediateRender: false,
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const locales = [
    {
      nombre: "Local Miraflores",
      direccion: "Av. La Paz 345, Miraflores, Lima",
      link: "https://www.google.com/maps?q=Av.+La+Paz+345,+Miraflores,+Lima",
    },
    {
      nombre: "Local Barranco",
      direccion: "Jr. Unión 210, Barranco, Lima",
      link: "https://www.google.com/maps?q=Jr.+Unión+210,+Barranco,+Lima",
    },
    {
      nombre: "Local San Isidro",
      direccion: "Calle Los Pinos 580, San Isidro, Lima",
      link: "https://www.google.com/maps?q=Calle+Los+Pinos+580,+San+Isidro,+Lima",
    },
  ];

  return (
    <section
      id="nosotros"
      className="min-h-screen flex items-center justify-center relative bg-[#0e0e0e] text-white py-20 px-6 md:px-20"
      ref={sectionRef}
    >
      <div className="w-full max-w-5xl">

        {/* Texto principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 nosotros-text">Sobre Nosotros</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg nosotros-text">
            Somos un restaurante rústico que nació del amor por la cocina tradicional,
            los sabores ahumados y el calor de un ambiente familiar. Desde nuestros inicios,
            hemos buscado combinar recetas clásicas con un estilo contemporáneo, ofreciendo
            experiencias únicas en cada plato para todos nuestros visitantes.
          </p>
        </div>

        {/* Tarjetas de locales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {locales.map((local, i) => (
            <div
              key={i}
              className="p-6 bg-[#111] border border-white/10 rounded-xl flex flex-col justify-between nosotros-local"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{local.nombre}</h3>
                <p className="text-gray-400 text-sm">{local.direccion}</p>
              </div>

              <a
                href={local.link}
                target="_blank"
                className="mt-6 w-full px-4 py-2 text-center rounded-lg font-semibold text-black"
                style={{ backgroundColor: "#70E000" }}
              >
                Ver en Google Maps
              </a>
            </div>
          ))}
        </div>

      </div>

      {/* Decorativos */}
      <img
        src="/4.png"
        alt="Decoración lateral"
        loading="lazy"
        className="absolute left-4 bottom-8 w-28 sm:w-36 md:w-48 opacity-90 select-none pointer-events-none nosotros-image"
      />
      <img
        src="/5.png"
        alt="Decoración superior"
        loading="lazy"
        className="absolute right-4 top-10 w-32 sm:w-40 md:w-56 opacity-90 select-none pointer-events-none nosotros-image"
      />
      <img
        src="/6.png"
        alt="Decoración inferior"
        loading="lazy"
        className="absolute right-0 bottom-0 w-36 sm:w-48 md:w-64 opacity-90 select-none pointer-events-none nosotros-image"
      />
    </section>
  );
}
