"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CodeReady({ type }) {
  const router = useRouter();
  const kod = type === "indirim-20" ? "INDIRIM20" : "INDIRIM15";

  // Geçerlilik tarihini type’a göre ayarlıyoruz
  const validity =
    type === "indirim-20"
      ? "Kodunuz 25.12.2025 tarihine kadar geçerlidir."
      : "Kodunuz 24 saat geçerlidir.";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center gap-6">
      <h1 className="text-3xl font-bold text-[#212121]">Kodunuz Hazır!</h1>
      <p className="text-black text-xs md:text-md max-w-lg">
        Kişisel indirim kodunuzu e-posta adresinize gönderdik.
        <br />
        Bu kodu, ödeme sayfasında ilgili alana girerek kullanabilirsiniz.
      </p>

      <div className="w-48 h-48 py-6 relative">
        <Image
          src="/image.png"
          alt="İndirim Görseli"
          fill
          className="object-contain"
        />
      </div>

      {/* Butonlar */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        <button
          onClick={() => router.push("/")}
          className="bg-black text-white p-2 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
        >
          ANASAYFAYA DÖN
        </button>
        <button
          onClick={() => router.push("/shop")}
          className="bg-[#E3963E] text-white p-2 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
        >
          ÜRÜNLERİ İNCELE
        </button>
      </div>

      <p className="text-gray-500 text-sm max-w-md">{validity}</p>
    </div>
  );
}
