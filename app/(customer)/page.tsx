import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import CategorySection from "@/components/sections/category-section";
import BestSellerSection from "@/components/sections/best-seller-section";
import BrandSection from "@/components/sections/brand-section";
import FeaturedFragrance from "@/components/sections/featured-fragrance";
import LifestyleBanner from "@/components/sections/lifestyle-banner";
import GallerySection from "@/components/sections/gallery-section";
// import TestimonialSection from "@/components/sections/testimonial-section";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <main className="overflow-hidden bg-black text-white">

        <Navbar />

        {/* HERO SECTION */}
        {/* HERO SECTION */}
        <section className="relative flex min-h-screen items-center overflow-hidden">

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-[#0a0a0a]" />

          {/* Huge Background Text */}
          <div className="absolute left-0 top-1/2 z-0 -translate-y-1/2 select-none">

            <h1 className="
      text-[5rem]
      font-bold
      tracking-[0.15em]
      text-white/[0.03]
      md:text-[13rem]
      md:tracking-[0.25em]
    ">
              AUROX
            </h1>

          </div>

          {/* Glow */}
          <div className="absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl md:h-[750px] md:w-[750px]" />

          {/* Main Container */}
          <div className="
    relative z-10 mx-auto flex w-full max-w-[1500px]
    flex-col-reverse items-center gap-12
    px-6 pt-32
    md:flex-row md:justify-between md:px-24
  ">

            {/* LEFT CONTENT */}
            <div className="max-w-[620px]">

              {/* Top Label */}
              <div className="mb-6 flex items-center gap-4">

                <div className="h-[1px] w-10 bg-white/20 md:w-16" />

                <p className="text-[11px] tracking-[0.4em] text-gray-500 md:text-sm md:tracking-[0.5em]">
                  MODERN MASCULINITY
                </p>

              </div>

              {/* Main Title */}
              <h1 className="
        mb-6
        text-5xl
        font-semibold
        leading-none
        tracking-[0.08em]
        md:mb-8
        md:text-[8rem]
        md:tracking-[0.18em]
      ">
                BUILT <br />
                FROM <br />
                INSTINCT
              </h1>

              {/* Description */}
              <p className="
        mb-10
        max-w-[540px]
        text-base
        leading-[1.9rem]
        text-gray-400
        md:text-[18px]
        md:leading-[2rem]
      ">
                Premium lifestyle brand untuk pria modern
                yang mengutamakan style, discipline,
                dan confidence dalam setiap langkah.
              </p>

              {/* Buttons */}
              <div className="
        flex flex-col gap-4
        sm:flex-row
      ">

                <button className="border border-white bg-white px-8 py-4 text-xs tracking-[0.28em] text-black transition-all duration-300 hover:bg-transparent hover:text-white md:px-10 md:text-sm">
                  EXPLORE NOW
                </button>

                <button className="border border-white/10 bg-white/[0.03] px-8 py-4 text-xs tracking-[0.28em] text-gray-300 backdrop-blur-md transition-all duration-300 hover:border-white hover:text-white md:px-10 md:text-sm">
                  VIEW COLLECTION
                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-[420px] w-[300px] md:h-[760px] md:w-[560px]">

              {/* Floating Glow */}
              <div className="absolute inset-0 rounded-full bg-white/[0.03] blur-3xl" />

              <Image
                src="/images/parfum1.png"
                alt="Aurox Perfume"
                fill
                priority
                className="object-contain drop-shadow-[0_0_120px_rgba(255,255,255,0.08)]"
              />

            </div>

          </div>

        </section>

        {/* CATEGORY SECTION */}
        <CategorySection />

        <div className="h-32" />

        {/* BEST SELLER SECTION */}
        <BestSellerSection />

        <div className="h-32" />

        {/* BRAND PHILOSOPHY */}
        <BrandSection />

        <div className="h-32" />

        <FeaturedFragrance />

        <div className="h-32" />

        <LifestyleBanner />

        <div className="h-32" />

        <GallerySection />

        <div className="h-32" />

        <div className="h-32" />

      </main>

      <Footer />
    </>
  );
}