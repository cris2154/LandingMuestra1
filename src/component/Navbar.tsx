export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-5 bg-transparent">
      <div className="text-white text-2xl font-bold">M</div>

      <ul className="flex items-center space-x-10 text-white">
        <li><a href="#home">Home</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#carta">Carta</a></li>
      </ul>

      <a
        href="#reservacion"
        className="px-5 py-2 rounded-full text-black font-semibold"
        style={{ backgroundColor: "#70E000" }}
      >
        Reservar
      </a>
    </nav>
  );
}
