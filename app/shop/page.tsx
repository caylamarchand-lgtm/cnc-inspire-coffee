export default function ShopPage() {
  const coffees = [
    {
      name: "True North",
      desc: "Base Camp Blend • bold • steady",
      link: "#",
    },
    {
      name: "Still I Rise",
      desc: "Colombian • rich • smooth",
      link: "#",
    },
    {
      name: "After Dark",
      desc: "Dark roast • bold • deep",
      link: "#",
    },
    {
      name: "Anchor",
      desc: "Organic Guatemala • balanced • smooth",
      link: "#",
    },
    {
      name: "La Buena Hora",
      desc: "Mexican Nayarit • smooth • comforting",
      link: "#",
    },
    {
      name: "Higher Ground",
      desc: "Organic Peru • clean • elevated",
      link: "#",
    },
    {
      name: "Obsidian King",
      desc: "Bold • dark • premium",
      link: "#",
    },
    {
      name: "Golden Hour Crème",
      desc: "Flavored • warm • sweet",
      link: "#",
    },
    {
      name: "Desert Ember",
      desc: "Flavored • cozy • rich",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Shop Coffee</h1>
        <p className="mt-2 text-white/70">
          Browse all available coffees below.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coffees.map((coffee) => (
            <div
              key={coffee.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h2 className="text-xl font-semibold">{coffee.name}</h2>
              <p className="mt-2 text-white/70">{coffee.desc}</p>

              <a
                href={coffee.link}
                className="mt-4 inline-block rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black"
              >
                Buy {coffee.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}