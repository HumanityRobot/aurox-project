import Image from "next/image";

const categories = [
  {
    title: "PARFUM",
    description: "Wewangian premium untuk pria modern.",
    image: "/images/component-parfum.png",
  },
  {
    title: "FASHION",
    description: "Style minimalis dengan karakter kuat.",
    image: "/images/component-fashion.png",
  },
  {
    title: "GROOMING",
    description: "Rawat diri. Tingkatkan confidence.",
    image: "/images/component-grooming.png",
  },
];

export default function CategorySection() {
  return (
    <section className="px-10 pb-40 pt-24 md:px-24">

      <div className="mb-16">
        <p className="mb-4 text-sm tracking-[0.4em] text-gray-500">
          COLLECTION
        </p>

        <h2 className="text-4xl font-semibold tracking-[0.12em] md:text-5xl">
          EXPLORE OUR WORLD
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">

        {categories.map((category) => (
          <div
            key={category.title}
            className="group relative h-[500px] overflow-hidden border border-white/10 bg-black"
          >

            {/* Image */}
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 z-10 p-8">

              <h3 className="mb-4 text-3xl font-semibold tracking-[0.15em]">
                {category.title}
              </h3>

              <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-300">
                {category.description}
              </p>

              <button className="text-sm tracking-[0.3em] text-white transition hover:text-gray-400">
                EXPLORE →
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}