import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Flame",
    emoji: "🔥",
    title: "Пожар в доме",
    desc: "Научись эвакуироваться и звонить в экстренные службы",
    color: "bg-orange-100 border-orange-300",
    iconColor: "bg-orange-500",
  },
  {
    icon: "MapPin",
    emoji: "📍",
    title: "Потеря в городе",
    desc: "Узнай, как найти помощь, если заблудился",
    color: "bg-blue-100 border-blue-300",
    iconColor: "bg-blue-500",
  },
  {
    icon: "UserX",
    emoji: "🚨",
    title: "Незнакомцы",
    desc: "Правила безопасного общения с незнакомыми людьми",
    color: "bg-purple-100 border-purple-300",
    iconColor: "bg-purple-500",
  },
];

export default function Featured() {
  return (
    <div id="features" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-gradient-to-br from-sky-50 to-yellow-50">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Дети-герои спасатели"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <div className="inline-block bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
          🎯 Обучение через приключение
        </div>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-800 leading-tight font-black">
          Три уровня сложности — для малышей, школьников и подростков!
        </p>

        <div className="flex flex-col gap-4 mb-8">
          {features.map((f) => (
            <div key={f.title} className={`flex items-start gap-4 p-4 rounded-2xl border-2 ${f.color}`}>
              <div className={`${f.iconColor} text-white p-3 rounded-xl shrink-0`}>
                <Icon name={f.icon} fallback="Shield" size={20} />
              </div>
              <div>
                <div className="font-black text-neutral-900 text-base">{f.emoji} {f.title}</div>
                <div className="text-neutral-600 text-sm mt-1 font-semibold">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#download"
          className="inline-block bg-orange-500 text-white px-8 py-4 text-base font-black rounded-full hover:bg-orange-400 transition-all duration-300 shadow-lg hover:scale-105 w-fit"
        >
          🎮 Начать играть!
        </a>
      </div>
    </div>
  );
}
