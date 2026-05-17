import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32 text-white">

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-24">

        {/* Header */}
        <div className="mb-20 text-center">

          <p className="mb-5 text-sm tracking-[0.45em] text-gray-500">
            VISUAL JOURNAL
          </p>

          <h2 className="
            mb-6
            text-5xl
            font-semibold
            tracking-[0.08em]
            md:text-7xl
          ">
            THE AUROX <br />
            AESTHETIC
          </h2>

          <p className="
            mx-auto
            max-w-[700px]
            text-lg
            leading-[2rem]
            text-gray-400
          ">
            Inspired by confidence, discipline,
            and modern masculine elegance.
            Every detail reflects the essence of AUROX.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">

          {/* BIG LEFT */}
          <div className="group relative overflow-hidden rounded-[32px] md:col-span-7 md:h-[720px]">

            <Image
              src="/images/gallery1.png"
              alt="Gallery"
              width={1200}
              height={1400}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          </div>

          {/* RIGHT GRID */}
          <div className="grid gap-6 md:col-span-5">

            {/* TOP */}
            <div className="group relative overflow-hidden rounded-[32px] md:h-[348px]">

              <Image
                src="/images/gallery2.png"
                alt="Gallery"
                width={1000}
                height={1000}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            </div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-2 gap-6">

              <div className="group relative overflow-hidden rounded-[32px] md:h-[348px]">

                <Image
                  src="/images/gallery3.png"
                  alt="Gallery"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

              <div className="group relative overflow-hidden rounded-[32px] md:h-[348px]">

                <Image
                  src="/images/gallery4.png"
                  alt="Gallery"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Wide Image */}
        <div className="group relative mt-6 overflow-hidden rounded-[32px] md:h-[450px]">

          <Image
            src="/images/gallery5.png"
            alt="Gallery"
            width={1800}
            height={900}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          {/* Text Overlay */}
          <div className="absolute bottom-10 left-10">

            <p className="mb-3 text-sm tracking-[0.4em] text-gray-300">
              MODERN MASCULINITY
            </p>

            <h3 className="text-4xl font-semibold tracking-[0.08em]">
              BUILT FOR PRESENCE
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}