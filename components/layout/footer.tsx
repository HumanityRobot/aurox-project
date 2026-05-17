import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] text-white">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 md:px-24">

        {/* Top Grid */}
        <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">

          {/* Brand */}
          <div>

            {/* Logo */}
            <div className="mb-8">

              <Image
                src="/images/logo.png"
                alt="AUROX"
                width={110}
                height={110}
                className="object-contain"
              />

            </div>

            {/* Description */}
            <p className="
              max-w-[320px]
              text-[15px]
              leading-[1.9rem]
              text-gray-400
            ">
              AUROX represents modern masculine luxury —
              built for men who move with confidence,
              discipline, and timeless presence.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <p className="mb-6 text-sm tracking-[0.35em] text-gray-500">
              NAVIGATION
            </p>

            <div className="space-y-4">

              {[
                "Home",
                "Collection",
                "Best Seller",
                "About",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-[15px] text-gray-300 transition hover:text-white"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Social */}
          <div>

            <p className="mb-6 text-sm tracking-[0.35em] text-gray-500">
              SOCIALS
            </p>

            <div className="space-y-4">

              {[
                "Instagram",
                "TikTok",
                "Pinterest",
                "YouTube",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-[15px] text-gray-300 transition hover:text-white"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <p className="mb-6 text-sm tracking-[0.35em] text-gray-500">
              STAY CONNECTED
            </p>

            <p className="
              mb-6
              text-[15px]
              leading-[1.9rem]
              text-gray-400
            ">
              Receive updates, exclusive drops,
              and curated lifestyle inspiration.
            </p>

            {/* Input */}
            <div className="flex overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">

              <input
                type="email"
                placeholder="Your email"
                className="
                  w-full bg-transparent px-5 py-4
                  text-sm text-white
                  placeholder:text-gray-500
                  outline-none
                "
              />

              <button className="
                border-l border-white/[0.08]
                px-6
                text-sm tracking-[0.2em]
                transition
                hover:bg-white
                hover:text-black
              ">
                JOIN
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="
          mt-20
          flex flex-col items-center justify-between gap-6
          border-t border-white/[0.06]
          pt-8
          text-sm text-gray-500
          md:flex-row
        ">

          <p>
            © 2026 AUROX. All rights reserved.
          </p>

          <div className="flex items-center gap-8">

            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}