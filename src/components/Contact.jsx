import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-800">
          Visítanos o Contáctanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Información de contacto */}
          <div className="space-y-6 text-gray-700 text-base md:text-lg">
            {/* Dirección */}
            <div className="flex items-start">
              <FaMapMarkerAlt size={24} className="text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                <p>Carrer de s'Horta de la Vila, 3, 07500 Manacor, Illes Balears</p>
                <a
                  href="https://maps.app.goo.gl/FfyztdK3XRRHDuoU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 transition duration-300 block mt-1"
                >
                  Ver en Google Maps
                </a>

              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start">
              <FaPhone size={22} className="text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Telefono / WhatsApp</h3>
                <p>+34 697 32 10 37</p>
                <a
                  href="https://wa.me/34697321037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 transition duration-300 block mt-1"
                >
                  Contactanos por WhatsApp
                </a>
              </div>
            </div>


            {/* Horario */}
            <div className="flex items-start">
              <FaClock size={22} className="text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Horario</h3>
                <p>Lunes a Viernes: 09:00 - 14:00 y 16:00 - 20:00</p>
                <p>Sábado: 09:00 - 14:00</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.7055825946627!2d3.210238375824039!3d39.56624567158892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1296490755ffc629%3A0x12710f517c219131!2sCarrer%20de%20s&#39;Hort%20de%20la%20Vila%2C%203%2C%2007500%20Manacor%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1745353006939!5m2!1ses!2ses"
              className="w-full h-64 md:h-80"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
