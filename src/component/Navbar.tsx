import { useEffect, useState, type MouseEvent } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-5 md:px-10 py-4 md:py-5 transition-colors ${
        isScrolled ? "bg-black/70 backdrop-blur border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="text-white text-2xl font-bold">M</div>

      <ul className="hidden md:flex items-center space-x-10 text-white">
        <li><a href="#home" onClick={(e) => handleScroll(e, "#home")}>Home</a></li>
        <li><a href="#nosotros" onClick={(e) => handleScroll(e, "#nosotros")}>Nosotros</a></li>
        <li><a href="#carta" onClick={(e) => handleScroll(e, "#carta")}>Carta</a></li>
      </ul>

      <div className="hidden md:block">
        <a
          href="#reservacion"
          onClick={(e) => handleScroll(e, "#reservacion")}
          className="px-5 py-2 rounded-full text-black font-semibold"
          style={{ backgroundColor: "#70E000" }}
        >
          Reservar
        </a>
      </div>

      {/* Botón hamburguesa para móviles */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Abrir menú"
      >
        <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menú móvil */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full px-5 pb-6 bg-black/95 backdrop-blur border-b border-white/10 transition-all duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <ul className="flex flex-col gap-4 text-white text-base">
          <li><a href="#home" onClick={(e) => handleScroll(e, "#home")}>Home</a></li>
          <li><a href="#nosotros" onClick={(e) => handleScroll(e, "#nosotros")}>Nosotros</a></li>
          <li><a href="#carta" onClick={(e) => handleScroll(e, "#carta")}>Carta</a></li>
        </ul>
        <a
          href="#reservacion"
          onClick={(e) => handleScroll(e, "#reservacion")}
          className="mt-4 inline-flex w-full justify-center px-5 py-3 rounded-full text-black font-semibold"
          style={{ backgroundColor: "#70E000" }}
        >
          Reservar
        </a>
      </div>
    </nav>
  );
}
