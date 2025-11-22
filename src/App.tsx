import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Carta from "./component/Carta";
import Reservacion from "./component/Reservacion";
import Nosotros from "./component/Nosotros";
import Footer from "./component/Footer";
import Comentarios from "./component/comentarios";
import SocialBar from "./component/SocialBar";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* Barra de navegación */}
      <Navbar />
      {/* Barra social lateral */}
      <SocialBar />
      {/* Sección HOME */}
      <Hero />
      {/* Sección NOSOTROS */}
      <Nosotros />
      {/* Sección CARTA */}
      <Carta />
      {/* Sección COMENTARIOS */}
      <Comentarios />
      {/* Sección RESERVACIÓN */}
      <Reservacion />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
