import React, { useState } from 'react'; // Importa useState
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal'; // Importa el modal
import './index.css';

// Podrías obtener esta lista desde Services.jsx o una fuente común
const serviceOptions = [
  "Corte Clásico", "Arreglo de Barba", "Afeitado Tradicional",
  "Corte y Barba", "Corte Infantil", "Tratamientos Capilares",
];

function App() {
  // Estado para la aplicación

  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans">
      {/* Pasa la función para abrir el modal al Header */}
      <Header onReserveClick={openModal} />
      <main>
        <Hero onReserveClick={openModal} /> {/* También puedes añadirlo al botón del Hero */}
        <Services />
        <Contact />
      </main>
      <Footer />

      {/* Renderiza el modal y pasa el estado y las funciones */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        services={serviceOptions} // Pasa la lista de servicios
      />
    </div>
  );
}

export default App;