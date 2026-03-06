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
        <div className="text-6xl mb-4 drop-shadow-lg">🛡️</div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 drop-shadow-2xl" style={{textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>
          МИССИЯ<br/>СПАСЕНИЯ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95 mb-10 drop-shadow-lg font-bold">
          Образовательная игра, где дети становятся героями-спасателями и учатся правильно действовать в опасных ситуациях
        </p>
        <a
          href="#download"
          className="inline-block bg-orange-500 text-white px-10 py-4 text-lg font-black rounded-full hover:bg-orange-400 transition-all duration-300 shadow-2xl hover:scale-105 hover:shadow-orange-500/50"
        >
          🎮 Начать игру!
        </a>
      </div>
    </div>
  );
}