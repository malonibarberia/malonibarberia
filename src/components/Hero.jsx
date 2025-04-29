import logo from "../assets/images/barber-hero.webp"
import bgLogo from "../assets/images/barber-hero-bg.webp"

function Hero({ onReserveClick }) {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bgLogo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-90"></div>

      <div className="relative z-10 px-4 sm:px-6 py-12 flex flex-col items-center justify-center select-none w-full">
        <img
          src={logo}
          alt="logo"
          className="w-full max-w-[500px] mb-6"
        />
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 font-light text-gray-300 animate-fade-in-up delay-300">
          Estilo clásico, cortes modernos. Tu mejor look empieza aquí.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-500">
          <button
            onClick={onReserveClick}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded transition duration-300 text-base md:text-lg w-full sm:w-auto"
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
