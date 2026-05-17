export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

      {/* container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 md:px-12">

        {/* HEADER */}
        <div className="mb-24 text-center">

          <p className="mb-4 text-[11px] tracking-[0.45em] text-gray-500">
            TESTIMONIALS
          </p>

          <h2
            className="
              text-4xl
              font-light
              tracking-tight
              text-white/90
              md:text-6xl
            "
          >
            Trusted By Our Clients
          </h2>

        </div>

        {/* testimonial wrapper */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            className="
              absolute left-[-24px] top-1/2 z-20
              hidden h-14 w-14 -translate-y-1/2
              items-center justify-center rounded-full
              border border-white/10
              bg-[#111111]
              text-3xl text-white/70
              backdrop-blur-xl
              transition-all duration-300
              hover:border-white/20
              hover:bg-[#181818]
              xl:flex
            "
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            className="
              absolute right-[-24px] top-1/2 z-20
              hidden h-14 w-14 -translate-y-1/2
              items-center justify-center rounded-full
              border border-white/10
              bg-[#111111]
              text-3xl text-white/70
              backdrop-blur-xl
              transition-all duration-300
              hover:border-white/20
              hover:bg-[#181818]
              xl:flex
            "
          >
            ›
          </button>

          {/* CARDS */}
          <div className="grid gap-7 md:grid-cols-3">

            {[
              {
                name: "Richard Sanchez",
                date: "Apr 10, 2027",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
              },
              {
                name: "Lars Peeters",
                date: "June 10, 2027",
                image:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
              },
              {
                name: "Rufus Stewart",
                date: "Dec 30, 2027",
                image:
                  "https://images.unsplash.com/photo-1504593811423-6dd665756598",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="
                  group relative
                  rounded-[30px]
                  border border-white/[0.06]
                  bg-[#111111]
                  px-7 pb-7 pt-14
                  transition-all duration-500
                  hover:border-white/10
                  hover:bg-[#151515]
                "
              >

                {/* subtle glow */}
                <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_70%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* avatar */}
                <div
                  className="
                    absolute left-1/2 top-0
                    h-16 w-16
                    -translate-x-1/2 -translate-y-1/2
                    overflow-hidden rounded-full
                    border-[3px] border-[#111111]
                    shadow-[0_0_30px_rgba(0,0,0,0.45)]
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* rating */}
                <div className="mb-6 flex justify-start">

                  <div
                    className="
                      rounded-xl bg-white
                      px-3 py-[6px]
                      text-sm font-semibold
                      text-black
                    "
                  >
                    ★ 4.9
                  </div>

                </div>

                {/* quote */}
                <p
                  className="
                    mb-8
                    text-[15px]
                    leading-8
                    text-gray-300
                  "
                >
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>

                {/* user */}
                <div>

                  <h3 className="text-xl font-medium text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {item.date}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* SLIDER */}
        <div className="mt-14 flex justify-center">

          <div
            className="
              relative h-[4px] w-[180px]
              rounded-full bg-white/10
            "
          >

            <div
              className="
                absolute left-1/2 top-1/2
                h-[4px] w-[70px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full bg-white
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}