import Image from "next/image";
import Navbar from "@/components/layout/navbar";

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      <Navbar />

      <section className="relative mx-auto flex max-w-7xl flex-col gap-20 px-10 pb-32 pt-40 md:flex-row md:px-20">

        {/* LEFT IMAGE */}
        <div className="relative flex-1">

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative h-[700px]">

            <Image
              src="/images/parfum1.png"
              alt="ASCENT"
              fill
              priority
              className="object-contain drop-shadow-[0_0_120px_rgba(255,255,255,0.08)]"
            />

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex max-w-xl flex-1 flex-col justify-center">

          <p className="mb-4 text-sm tracking-[0.4em] text-gray-500">
            SIGNATURE COLLECTION
          </p>

          <h1 className="mb-6 text-6xl font-semibold tracking-[0.12em]">
            ASCENT
          </h1>

          <p className="mb-10 text-lg leading-[2rem] text-gray-400">
            Wewangian premium dengan karakter dark,
            woody, dan sophisticated untuk pria modern
            yang percaya diri dan berkarisma.
          </p>

          {/* Notes */}
          <div className="mb-12 grid grid-cols-3 gap-6">

            <div>
              <p className="mb-2 text-xs tracking-[0.3em] text-gray-500">
                TOP NOTES
              </p>

              <p className="text-sm text-gray-300">
                Bergamot
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs tracking-[0.3em] text-gray-500">
                MIDDLE
              </p>

              <p className="text-sm text-gray-300">
                Cedarwood
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs tracking-[0.3em] text-gray-500">
                BASE
              </p>

              <p className="text-sm text-gray-300">
                Musk
              </p>
            </div>

          </div>

          {/* Price */}
          <div className="mb-10 text-3xl tracking-[0.08em]">
            IDR 349.000
          </div>

          {/* Buttons */}
          <div className="flex gap-5">

            <button className="border border-white bg-white px-10 py-4 text-sm tracking-[0.3em] text-black transition-all duration-300 hover:bg-transparent hover:text-white">
              ADD TO CART
            </button>

            <button className="border border-white/10 px-10 py-4 text-sm tracking-[0.3em] text-gray-300 transition-all duration-300 hover:border-white hover:text-white">
              BUY NOW
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}