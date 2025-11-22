import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      return;
    }

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

      // Timeline para todas las imágenes
      gsap.set(images, { opacity: 1 }); // asegurar visibilidad inicial (ej. pizza)

      const imagesTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      imagesTl.from(images, {
        x: (index) => (index % 2 === 0 ? 120 : -120),
        y: (index) => (index % 2 === 0 ? -80 : 80),
        opacity: 0,
        duration: 1.6,
        stagger: 0.12,
        delay: 0.1,
      });

      // Control con scroll: salen y regresan según la barra de desplazamiento
      const scrollTl = gsap
        .timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            onLeave: () => {
              gsap.set(images, { x: 0, y: 0, opacity: 1, clearProps: "all" });
              scrollTl.pause();
            },
            onEnter: () => {
              scrollTl.resume();
            },
          },
        })
        .to(images, {
          x: (index) => (index % 2 === 0 ? 260 : -260),
          y: (index) => (index % 2 === 0 ? -160 : 160),
          opacity: 0,
          duration: 1.4,
          stagger: 0.12,
          immediateRender: false,
          overwrite: "auto",
        }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#0e0e0e] text-white px-5 pt-28 pb-16 md:pt-32"
      ref={containerRef}
    >
      <div className="text-center max-w-2xl z-20 space-y-4">
        <p className="hero-subtitle text-sm md:text-base text-gray-300 hero-text">
          Bienvenido a nuestro restaurante
        </p>

        <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight hero-text">
          Comida deliciosa a un paso de tu mesa.
        </h1>

        <p className="text-gray-400 md:text-lg hero-text">
          Sabores únicos, ingredientes frescos y ambiente acogedor.
        </p>

        <a
          href="#carta"
          className="hero-button inline-flex px-10 py-3 rounded-full text-black font-bold text-lg hero-text"
          style={{ backgroundColor: "#70E000" }}
        >
          Ver carta
        </a>
      </div>
      <img
        src="/pizza.png"
        alt="Pizza principal"
        loading="lazy"
        className="hero-pizza absolute right-2 top-28 w-36 sm:w-52 md:w-[360px] opacity-90 select-none pointer-events-none hero-image z-10"
      />

      <img
        src="/2.png"
        alt="Decoración 1"
        loading="lazy"
        className="hero-img2 absolute left-2 top-20 w-20 sm:w-28 md:w-40 opacity-70 select-none pointer-events-none hero-image z-10"
      />

      <img
        src="/3.png"
        alt="Decoración 2"
        loading="lazy"
        className="hero-img3 absolute left-4 bottom-12 w-20 sm:w-28 md:w-[200px] opacity-70 select-none pointer-events-none hero-image z-10"
      />

      <img
        src="/4.png"
        alt="Decoración 3"
        loading="lazy"
        className="hero-img4 absolute right-1 bottom-2 w-24 sm:w-36 md:w-[280px] opacity-70 select-none pointer-events-none hero-image z-10"
      />
    </section>
  );
}
