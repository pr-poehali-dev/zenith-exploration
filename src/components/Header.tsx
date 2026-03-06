interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`} style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)'}}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-bold">🛡️ Миссия спасения</div>
        <nav className="flex gap-8">
          <a
            href="#features"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            О игре
          </a>
          <a
            href="#missions"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Миссии
          </a>
          <a
            href="#download"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Скачать
          </a>
        </nav>
      </div>
    </header>
  );
}