import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <div className="text-5xl mb-4">🛡️</div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-2xl">
          МИССИЯ<br/>СПАСЕНИЯ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8 drop-shadow-lg">
          Образовательная игра, где дети становятся героями-спасателями и учатся правильно действовать в опасных ситуациях
        </p>
        <a
          href="#download"
          className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-bold hover:bg-neutral-200 transition-colors duration-300"
        >
          Скачать игру
        </a>
      </div>
    </div>
  );
}