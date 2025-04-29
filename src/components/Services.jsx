import React from 'react';
import { FaCut, FaShower, FaPaintBrush } from 'react-icons/fa';
import { GiBeard, GiRazor, GiHairStrands, GiComb } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";

const servicesList = [
  {
    name: "Corte Clásico & Moderno",
    description: "Combinamos técnicas tradicionales con estilo contemporáneo para un look impecable.",
    icon: <FaCut size={48} className="text-yellow-500 mb-4" />
  },
  {
    name: "Afeitado & Barba",
    description: "Una experiencia de afeitado con navaja, cuidando cada detalle para realzar tu estilo con distinción.",
    icon: <GiRazor size={48} className="text-yellow-500 mb-4" />
  },
  {
    name: "Corte + Barba",
    description: "Un combo perfecto para renovarte con estilo y definición.",
    icon: (
      <div className="flex space-x-2 mb-4">
        <FaCut size={28} className="text-yellow-500" />
        <GiBeard size={28} className="text-yellow-500" />
      </div>
    )
  },
  {
    name: "Queratina",
    description: "Alisado profundo, brillo y control del frizz. Cuida y transforma tu cabello.",
    icon: <GiHairStrands size={48} className="text-yellow-500 mb-4" />
  },
  {
    name: "Mechas & Color",
    description: "Explora nuevas tonalidades con técnicas modernas y acabados profesionales.",
    icon: <FaPaintBrush size={48} className="text-yellow-500 mb-4" />
  },
  {
    name: "Estilo Personalizado",
    description: "Asesoría profesional para crear el look que más se adapte a ti.",
    icon: <MdFaceRetouchingNatural size={48} className="text-yellow-500 mb-4" />
  },
];

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:ring-2 hover:ring-yellow-500"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
