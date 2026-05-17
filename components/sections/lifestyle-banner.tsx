import Image from "next/image";

export default function LifestyleBanner() {
  return (
    <section className="relative h-[850px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/lifestyle.png"
        alt="Aurox Lifestyle"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="
        relative z-10 mx-auto flex h-full max-w-[1500px]
        items-center px-6 md:px-24
      ">

        <div className="max-w-[700px]">

          {/* Label */}
          <div className="mb-6 flex items-center gap-4">

            <div className="h-[1px] w-16 bg-white/20" />

            <p className="text-sm tracking-[0.45em] text-gray-400">
              AUROX LIFESTYLE
            </p>

          </div>

          {/* Title */}
          <h2 className="
            mb-8
            text-6xl
            font-semibold
            leading-none
            tracking-[0.08em]
            md:text-[8rem]
          ">
            OWN <br />
            YOUR <br />
            PRESENCE
          </h2>

          {/* Description */}
          <p className="
            mb-10
            max-w-[540px]
            text-lg
            leading-[2rem]
            text-gray-300
          ">
            More than fragrance.
            Aurox represents confidence, ambition,
            and modern masculine elegance in every detail.
          </p>

          {/* Button */}
          <button className="border border-white bg-white px-10 py-4 text-sm tracking-[0.3em] text-black transition-all duration-300 hover:bg-transparent hover:text-white">
            EXPLORE LIFESTYLE
          </button>

        </div>

      </div>

    </section>
  );
}