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

      <h1 className="text-3xl font-bold text-[#1D1D1B]">
        Tebrikler, Çekilişe Katıldınız!
      </h1>
      <p className="text-[#1D1D1B] text-sm md:text-md max-w-lg">
        Size özel çekiliş kodunuzu ve tüm detayları e-posta adresinize
        gönderdik. <br /> Gelen kutunuzu veya spam klasörünü kontrol etmeyi
        unutmayın.
      </p>

      {/* Butonlar */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        <button
          onClick={() => router.push("/")}
          className="bg-[#1D1D1B] cursor-pointer text-white p-2 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
        >
          ANASAYFAYA DÖN
        </button>
      </div>
    </div>
  );
}
