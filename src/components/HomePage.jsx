"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const cards = [
  {
    title: "Çekilişe Katıl",
    description: "Ürün sayfamızı ziyaret et, çekilişe adını yazdır",
    icon: "/gift.png",
    path: "/products/giveaway",
  },
  {
    title: "Anında %25 İndirim",
    description: "Sadece fuar süresince geçerli kodu al",
    icon: "/sale.png",
    discount: 25,
  },
  {
    title: "Anında %10 İndirim",
    description: "Fuar sonrası 1 Ay boyunca geçerli kodu al",
    icon: "/sale.png",
    discount: 10,
  },
];

export default function HomePage() {
  const router = useRouter();

  const handleDiscountClick = (discount) => {
    router.push(`/products/code?discount=${discount}`);
  };

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 gap-8 pt-24">
      <img src="/icon.png" className="w-24" alt="Icon" />

      <div className="flex flex-col items-center justify-between text-center gap-8 p-8 sm:p-12 rounded-2xl shadow-lg w-full max-w-5xl bg-white">
        <h1 className="font-semibold text-[#1D1D1B] text-xl md:text-2xl">
          Hoşgeldiniz! Aşağıdaki seçeneklerden birini seçiniz.
        </h1>

        <section className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full">
          {cards.map((card, index) =>
            card.discount ? (
              <button
                key={index}
                onClick={() => handleDiscountClick(card.discount)}
                className="flex-1 w-full group cursor-pointer"
              >
                <div
                  className="rounded-xl bg-[#FFFEFB] p-4 flex flex-col items-center gap-4
                   shadow-md hover:bg-[#E3963E] hover:scale-105 transition-transform duration-300 h-full"
                >
                  <div className="bg-[#F8E1C4] rounded-full w-16 h-16 flex items-center justify-center">
                    <img src={card.icon} alt={card.title} className="w-8 h-8" />
                  </div>

                  <h3 className="text-[#1D1D1B] font-semibold text-lg text-center group-hover:text-white">
                    {card.title}
                  </h3>

                  <p className="text-gray-500 text-sm text-center group-hover:text-white">
                    {card.description}
                  </p>
                </div>
              </button>
            ) : (
              <Link
                key={index}
                href={card.path}
                className="flex-1 w-full group"
              >
                <div
                  className="rounded-xl bg-[#FFFEFB] p-4 flex flex-col items-center gap-4
                   shadow-md hover:bg-[#E3963E] hover:scale-105 transition-transform duration-300 h-full"
                >
                  <div className="bg-[#F8E1C4] rounded-full w-16 h-16 flex items-center justify-center">
                    <img src={card.icon} alt={card.title} className="w-8 h-8" />
                  </div>

                  <h3 className="text-[#1D1D1B] font-semibold text-lg text-center group-hover:text-white">
                    {card.title}
                  </h3>

                  <p className="text-gray-500 text-sm text-center group-hover:text-white">
                    {card.description}
                  </p>
                </div>
              </Link>
            )
          )}
        </section>
      </div>
    </div>
  );
}
