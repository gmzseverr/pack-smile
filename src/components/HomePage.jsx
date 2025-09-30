"use client";
import React from "react";
import Link from "next/link";

const cards = [
  {
    title: "Çekilişe Katıl",
    description: "Ürün sayfamızı ziyaret et, çekilişe adını yazdır",
    icon: "/gift.png",
    path: "/form/cekilis", // Yönlendirilecek yol
  },
  {
    title: "Anında %20 İndirim",
    description: "Sadece fuar süresince geçerli kodu al",
    icon: "/sale.png",
    path: "/form/indirim-20",
  },
  {
    title: "Anında %15 İndirim",
    description: "Fuar sonrası 1 Ay boyunca geçerli kodu al",
    icon: "/sale.png",
    path: "/form/indirim-15",
  },
];

export default function HomePage() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 gap-8 pt-24">
      {/* Logo */}
      <img src="/icon.png" className="w-24" alt="Icon" />

      <div className="flex flex-col items-center justify-between text-center gap-8 p-8 sm:p-12 rounded-2xl shadow-lg w-full max-w-5xl bg-white">
        <h1 className="font-semibold text-darkBlue text-xl md:text-2xl">
          Hoşgeldiniz! Aşağıdaki seçeneklerden birini seçiniz.
        </h1>

        <section className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full">
          {cards.map((card, index) => (
            <Link key={index} href={card.path} className="flex-1 w-full">
              <div
                className="rounded-xl bg-[#FBFEFF] p-4 flex flex-col items-center gap-4
                 shadow-md hover:bg-darkBlue hover:scale-105 transition-transform duration-300 h-full
                 active:ring-2 active:ring-darkBlue active:ring-offset-2" // Yeni eklenen sınıflar
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                  <img src={card.icon} alt={card.title} className="w-8 h-8" />
                </div>

                <h3 className="text-darkBlue font-semibold text-lg text-center group-hover:text-white">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-sm text-center group-hover:text-white">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
