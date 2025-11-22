import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLElement>(".hero-image");

      // Entrada de texto al cargar
      gsap.from(".hero-text", {
        y: 30,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.08,
      });

      // Entrada inicial de imágenes al cargar
      gsap.set(images, { opacity: 1 }); // asegurar visibilidad inicial (ej. pizza)
      gsap.from(images, {
        x: (index) => (index % 2 === 0 ? 120 : -120),
        y: (index) => (index % 2 === 0 ? -80 : 80),
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.1,
      });

      // Control con scroll: salen y regresan según la barra de desplazamiento
      gsap.to(images, {
        x: (index) => (index % 2 === 0 ? 260 : -260),
        y: (index) => (index % 2 === 0 ? -160 : 160),
        opacity: 0,
        ease: "power2.inOut",
        duration: 1.4,
        stagger: 0.12,
        immediateRender: false,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#0e0e0e] text-white"
      ref={containerRef}
    >
      <div className="text-center max-w-2xl z-20">
        <p className="hero-subtitle mb-3 text-gray-300 hero-text">
          Bienvenido a nuestro restaurante
        </p>

        <h1 className="hero-title text-5xl md:text-6xl font-bold leading-tight hero-text">
          Comida deliciosa a un paso de tu mesa.
        </h1>

        <p className="text-gray-400 mt-4 mb-8 hero-text">
          Sabores únicos, ingredientes frescos y ambiente acogedor.
        </p>

        <a
          href="#carta"
          className="hero-button px-10 py-3 rounded-full text-black font-bold text-lg hero-text"
          style={{ backgroundColor: "#70E000" }}
        >
          Ver carta
        </a>
      </div>
      <img
        src="/pizza.png"
        alt="Pizza principal"
        loading="lazy"
        className="hero-pizza absolute right-8 top-20 w-[360px] select-none pointer-events-none hero-image"
      />

      <img
        src="/2.png"
        alt="Decoración 1"
        loading="lazy"
        className="hero-img2 absolute left-6 top-28 w-40 opacity-90 select-none pointer-events-none hero-image"
      />

      <img
        src="/3.png"
        alt="Decoración 2"
        loading="lazy"
        className="hero-img3 absolute left-40 bottom-20 w-[200px] opacity-90 select-none pointer-events-none hero-image"
      />

      <img
        src="/4.png"
        alt="Decoración 3"
        loading="lazy"
        className="hero-img4 absolute right-0 bottom-0 w-[280px] opacity-90 select-none pointer-events-none hero-image"
      />
    </section>
  );
}
