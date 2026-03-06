import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Flame",
    title: "Пожар в доме",
    desc: "Научись эвакуироваться и звонить в экстренные службы",
  },
  {
    icon: "MapPin",
    title: "Потеря в городе",
    desc: "Узнай, как найти помощь, если заблудился",
  },
  {
    icon: "UserX",
    title: "Незнакомцы",
    desc: "Правила безопасного общения с незнакомыми людьми",
  },
];

export default function Featured() {
  return (
    <div id="features" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Дети-герои спасатели"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Обучение через приключение</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Три уровня сложности — для малышей, школьников и подростков. Каждая миссия учит принимать правильные решения в критических ситуациях.
        </p>

        <div className="flex flex-col gap-4 mb-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <div className="bg-black text-white p-2 shrink-0">
                <Icon name={f.icon} fallback="Shield" size={18} />
              </div>
              <div>
                <div className="font-bold text-neutral-900 text-sm uppercase tracking-wide">{f.title}</div>
                <div className="text-neutral-600 text-sm">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#download"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Начать играть
        </a>
      </div>
    </div>
  );
}