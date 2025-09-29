"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DrawReady() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center gap-6">
      {/* Görsel daire içinde */}
      <div className="w-18 h-18 rounded-full bg-[#FDE5C8] flex items-center justify-center relative">
        <div className="w-12 h-12 relative">
          <Image
            src="/submit-gift.png"
            alt="Çekiliş Görseli"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Başlık ve açıklama */}
      <h1 className="text-3xl font-bold text-[#433E0E]">
        Çekilişe Katıldınız!
      </h1>
      <p className="text-gray-600 max-w-md">
        Katılımınız kaydedildi. <br />
        Sonuçlar yakında açıklanacaktır.
      </p>

      {/* Butonlar */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        <button
          onClick={() => router.push("/")}
          className="bg-darkBlue text-white p-2 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
        >
          ANASAYFAYA DÖN
        </button>
        <button
          onClick={() => router.push("/products")}
          className="bg-[#E3963E] text-white p-2 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
        >
          ÜRÜNLERİ İNCELE
        </button>
      </div>
    </div>
  );
}
