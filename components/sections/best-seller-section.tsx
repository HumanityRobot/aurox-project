import Image from "next/image";
import Link from "next/link";

const products = [
    {
        name: "ASCENT",
        category: "Extrait De Parfum",
        price: "IDR 349.000",
        image: "/images/parfum1.png",
    },
    {
        name: "NOIR",
        category: "Luxury Fragrance",
        price: "IDR 329.000",
        image: "/images/parfum2.png",
    },
    {
        name: "VANTAGE",
        category: "Signature Collection",
        price: "IDR 389.000",
        image: "/images/parfum3.png",
    },
];

export default function BestSellerSection() {
    return (
        <section className="relative overflow-hidden bg-black px-10 pb-32 pt-44 md:px-24">

            {/* Top Header */}
            <div className="mb-20 flex items-end justify-between">

                <div>

                    <p className="mb-5 text-sm tracking-[0.45em] text-gray-500">
                        BEST SELLER
                    </p>

                    <h2 className="text-5xl font-semibold tracking-[0.14em]">
                        MOST WANTED
                    </h2>

                </div>

                <button className="hidden border border-white/10 px-6 py-3 text-sm tracking-[0.25em] text-gray-300 transition-all duration-300 hover:border-white hover:text-white md:block">
                    VIEW ALL
                </button>

            </div>

            {/* Product Grid */}
            <div className="grid gap-8 md:grid-cols-3">

                {products.map((product) => (
                    <Link
                        key={product.name}
                        href={`/product/${product.name.toLowerCase()}`}
                    >

                        {/* Glow */}
                        <div className="absolute inset-0 bg-white/[0.02] opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

                        {/* Product Image */}
                        <div className="relative h-[420px] overflow-hidden">

                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                            />

                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8">

                            <p className="mb-3 text-xs tracking-[0.35em] text-gray-500">
                                {product.category}
                            </p>

                            <h3 className="mb-4 text-3xl font-semibold tracking-[0.12em]">
                                {product.name}
                            </h3>

                            <div className="flex items-center justify-between">

                                <p className="text-lg text-gray-300">
                                    {product.price}
                                </p>

                                <button className="border border-white/10 px-5 py-2 text-xs tracking-[0.25em] transition-all duration-300 hover:border-white hover:bg-white hover:text-black">
                                    ADD
                                </button>

                            </div>

                        </div>

                    </Link>
                ))}

            </div>

        </section>
    );
}