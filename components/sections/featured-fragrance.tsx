import Image from "next/image";

export default function FeaturedFragrance() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">

      {/* Background Glow */}
      <div className="absolute right-[-10%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      {/* Container */}
      <div className="
        relative z-10 mx-auto flex max-w-[1500px]
        flex-col items-center gap-20
        px-6
        md:flex-row md:justify-between md:px-24
      ">

        {/* LEFT CONTENT */}
        <div className="max-w-[560px]">

          {/* Label */}
          <div className="mb-6 flex items-center gap-4">

            <div className="h-[1px] w-14 bg-white/20" />

            <p className="text-sm tracking-[0.45em] text-gray-500">
              FEATURED FRAGRANCE
            </p>

          </div>

          {/* Product Name */}
          <h2 className="
            mb-8
            text-5xl
            font-semibold
            leading-none
            tracking-[0.1em]
            md:text-7xl
          ">
            ASCENT
          </h2>

          {/* Description */}
          <p className="
            mb-10
            text-lg
            leading-[2rem]
            text-gray-400
          ">
            Crafted for men who lead with confidence.
            A bold composition of smoky woods,
            warm amber, and refined spices —
            creating a scent that feels powerful,
            elegant, and unforgettable.
          </p>

          {/* Notes */}
          <div className="mb-12 grid grid-cols-3 gap-6">

            <div>

              <p className="mb-2 text-xs tracking-[0.3em] text-gray-500">
                TOP
              </p>

              <h3 className="text-lg font-medium">
                Bergamot
              </h3>

            </div>

            <div>

              <p className="mb-2 text-xs tracking-[0.3em] text-gray-500">
                HEART
              </p>

              <h3 className="text-lg font-medium">
                Black Pepper
              </h3>

            </div>

            <div>

              <p className="mb-2 text-xs tracking-[0.3em] text-gray-500">
                BASE
              </p>

              <h3 className="text-lg font-medium">
                Amber Wood
              </h3>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">

            <button className="border border-white bg-white px-10 py-4 text-sm tracking-[0.3em] text-black transition-all duration-300 hover:bg-transparent hover:text-white">
              BUY NOW
            </button>

            <button className="border border-white/10 bg-white/[0.03] px-10 py-4 text-sm tracking-[0.3em] text-gray-300 backdrop-blur-md transition-all duration-300 hover:border-white hover:text-white">
              VIEW DETAILS
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[700px] w-[520px]">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-white/[0.03] blur-3xl" />

          <Image
            src="/images/parfum3.png"
            alt="ASCENT Fragrance"
            fill
            className="object-contain drop-shadow-[0_0_120px_rgba(255,255,255,0.08)]"
          />

        </div>

      </div>

    </section>
  );
}