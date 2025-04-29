import { FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center gap-3">
        <p className="text-sm md:text-base">
          © {currentYear} Maloni Barbería. Todos los derechos reservados.
        </p>
        <a
          href="https://instagram.com/maloni_style"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition"
        >
          <FaInstagram size={20} />
          <span className="text-sm md:text-base">@maloni_style</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
