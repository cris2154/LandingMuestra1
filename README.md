# Landing gastronómica express 🍕

Una tarde más me llegó otro PDF de restaurante sin fotos, sin buscador y sin ganas de leer 📄. Decidí probar cuánto se puede mejorar la experiencia en **2 horas ⚡** y armé esta landing: animada, navegable y con carta filtrable para encontrar un plato en segundos ✨.

## Qué incluye
- Hero con animaciones GSAP y botones de salto para recorrer la página sin perderse 🚀.
- Carta filtrable: buscador por texto + categorías (entradas, fondos, postres) en vez de un PDF estático 🔍.
- Sección de locales con links directos a Google Maps para llevar tráfico físico 📍.
- CTA de reserva via WhatsApp, manteniendo el flujo cercano y rápido 💬.
- Barra social flotante y CTA fija de reserva para no perder conversiones en scroll 📌.

## Stack y decisiones rápidas
- React + TypeScript + Vite para iterar veloz ⚛️.
- Tailwind para maquetar sin pelearme con estilos 🎨.
- GSAP con ScrollTrigger para transiciones suaves entre secciones e imágenes decorativas 🎬.
- Todo en una sola página, con navegación por anclas y scroll suave 🧭.

## Cómo correrlo
```bash
npm install
npm run dev
```
Abre el enlace que indica Vite (por defecto http://localhost:5173) ▶️.

## Qué haría si tuviera más tiempo
- Conectar el botón de WhatsApp con número/parametría real y medir clics ☎️.
- Cargar la carta desde un CMS ligero o Google Sheets para no redeployar ante cambios 🗂️.
- Añadir tracking básico (events en CTA y filtros) y pruebas en móvil de gama baja 📊.
