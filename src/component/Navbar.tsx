export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-5 bg-transparent">
      <div className="text-white text-2xl font-bold">M</div>

      <ul className="flex items-center space-x-10 text-white">
        <li><a href="#home" onClick={(e) => handleScroll(e, "#home")}>Home</a></li>
        <li><a href="#nosotros" onClick={(e) => handleScroll(e, "#nosotros")}>Nosotros</a></li>
        <li><a href="#carta" onClick={(e) => handleScroll(e, "#carta")}>Carta</a></li>
      </ul>

      <a
        href="#reservacion"
        onClick={(e) => handleScroll(e, "#reservacion")}
        className="px-5 py-2 rounded-full text-black font-semibold"
        style={{ backgroundColor: "#70E000" }}
      >
        Reservar
      </a>
    </nav>
  );
}
