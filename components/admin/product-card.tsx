import Image from "next/image";

interface Props {
  image: string;
  name: string;
  category: string;
  price: string;
}

export default function ProductCard({
  image,
  name,
  category,
  price,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-[30px] border border-white/[0.06] bg-[#111111]/70 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/10">

      {/* IMAGE */}
      <div className="relative h-[320px] overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

      </div>

      {/* CONTENT */}
      <div className="p-6">

        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
          {category}
        </p>

        <div className="mb-4 flex items-center justify-between">

          <h2 className="text-3xl font-semibold">
            {name}
          </h2>

          <span className="text-lg text-white">
            IDR {price}
          </span>

        </div>

        <button className="w-full rounded-2xl border border-white/[0.06] bg-white/[0.03] py-4 text-sm tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-black">

          VIEW PRODUCT

        </button>

      </div>

    </div>
  );
}