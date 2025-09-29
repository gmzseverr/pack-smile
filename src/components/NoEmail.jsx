"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NoEmail({ type }) {
  const router = useRouter();

  // Geçerlilik mesajını type’a göre ayarlıyoruz
  const validity =
    type === "indirim-20"
      ? "Kodunuz 25.12.2025 tarihine kadar geçerlidir."
      : "Kodunuz 24 saat geçerlidir.";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center gap-6">
      <img src="/true.png" alt="" />
      <h1 className="text-xl md:text-3xl font-bold text-[#212121]">
        Kodu Stand Görevlisinden Alın
      </h1>

      <p className="text-gray-600 ">
        E-posta girmediğiniz için indirim kodunuz stant görevlimiz tararından
        verilecektir.
      </p>

      <div className="flex flex-col gap-4 w-full pt-12 max-w-md">
        <button
          onClick={() => router.push("/")}
          className="bg-darkBlue text-white p-2 font-semibold rounded hover:scale-105 transition transform"
        >
          ANASAYFAYA DÖN
        </button>
      </div>
    </div>
  );
}
