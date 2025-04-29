import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function Header({ onReserveClick }) {
  return (
    <header className="bg-stone-950 text-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between md:justify-start relative">

        {/* Nombre visible solo en escritorio */}
        <h1 className="hidden md:block text-xl md:text-2xl font-bold text-yellow-500 font-serif md:mr-auto">
          Barbería Maloni
        </h1>

        {/* Instagram centrado solo en escritorio */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-2 text-yellow-500 hover:text-yellow-400 transition">
          <FaInstagram size={20} />
          <a
            href="https://instagram.com/maloni_style"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base"
          >
            @maloni_style
          </a>
        </div>

        {/* Instagram visible solo en móvil */}
        <a
          href="https://instagram.com/maloni_style"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition"
        >
          <FaInstagram size={20} />maloni_style
        </a>

        {/* Botón reservar */}
        <button
          onClick={onReserveClick}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-1 px-3 md:py-2 md:px-4 rounded transition duration-300 text-sm md:text-base ml-4"
        >
          Reservar Cita
        </button>
      </nav>
    </header>
  );
}

export default Header;
