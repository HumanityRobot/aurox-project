import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32 text-white">

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      {/* Background Text */}
      <div className="absolute right-[-5%] top-20 select-none">

        <h1 className="
          text-[6rem]
          font-bold
          tracking-[0.25em]
          text-white/[0.03]
          md:text-[12rem]
        ">
          AUROX
        </h1>

      </div>

      {/* Container */}
      <div className="
        relative z-10 mx-auto flex max-w-[1400px]
        flex-col items-center gap-20
        px-6
        md:flex-row md:justify-between md:px-24
      ">

        {/* LEFT IMAGE */}
        <div className="relative h-[500px] w-full max-w-[480px]">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-white/[0.03] blur-3xl" />

          <Image
            src="/images/parfum2.png"
            alt="Aurox Brand"
            fill
            className="object-contain drop-shadow-[0_0_120px_rgba(255,255,255,0.08)]"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[560px]">

          {/* Label */}
          <div className="mb-6 flex items-center gap-4">

            <div className="h-[1px] w-14 bg-white/20" />

            <p className="text-sm tracking-[0.45em] text-gray-500">
              BRAND PHILOSOPHY
            </p>

          </div>

          {/* Title */}
          <h2 className="
            mb-8
            text-5xl
            font-semibold
            leading-tight
            tracking-[0.08em]
            md:text-7xl
          ">
            DISCIPLINE. <br />
            STYLE. <br />
            PRESENCE.
          </h2>

          {/* Description */}
          <p className="
            mb-10
            text-lg
            leading-[2rem]
            text-gray-400
          ">
            Aurox was built for men who move with confidence.
            Minimal yet powerful. Modern yet timeless.
            Every product is designed to elevate presence,
            sharpen identity, and embody masculine elegance.
          </p>

          {/* Small Points */}
          <div className="space-y-5">

            <div className="flex items-center gap-4">

              <div className="h-2 w-2 rounded-full bg-white" />

              <p className="tracking-[0.2em] text-gray-300">
                PREMIUM CRAFTMANSHIP
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="h-2 w-2 rounded-full bg-white" />

              <p className="tracking-[0.2em] text-gray-300">
                MODERN LUXURY ESSENTIALS
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="h-2 w-2 rounded-full bg-white" />

              <p className="tracking-[0.2em] text-gray-300">
                BUILT FOR CONFIDENT MEN
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}