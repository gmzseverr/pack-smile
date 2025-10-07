// components/NoEmail.jsx (Güncellenmiş Versiyon)

"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NoEmail({ type }) {
  const router = useRouter();

  // 🚀 GÜNCELLEME: İndirim tiplerine göre geçerlilik metni ayarlandı
  let validity = "";
  if (type === "indirim-25") {
    validity = "Kodunuz 25.12.2025 tarihine kadar geçerlidir.";
  } else if (type === "indirim-10") {
    validity = "Kodunuz 24 saat geçerlidir."; // Aynı geçerlilik süresini kullandık
  }
  // Diğer tipler (örneğin cekilis) için bu sayfaya gelinmesi mantıksız olduğu için boş bırakılabilir.

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center gap-6">
      {/* <img> yerine Next.js Image kullanmanızı tavsiye ederim */}
      <img src="/true.png" alt="Onay İkonu" />
      <h1 className="text-xl md:text-3xl font-bold text-[#212121]">
        Kodu Stand Görevlisinden Alın
      </h1>

      <p className="text-gray-600 ">
        E-posta girmediğiniz için indirim kodunuz stand görevlimiz tarafından
        verilecektir.
      </p>

      <div className="flex flex-col gap-4 w-full pt-12 max-w-md">
        <button
          onClick={() => router.push("/")}
          className="bg-black text-white p-2 font-semibold rounded hover:scale-105 transition transform"
        >
          ANASAYFAYA DÖN
        </button>
      </div>

      {/* Ekstra bilgi olarak geçerliliği gösterebiliriz */}
      {validity && (
        <p className="text-gray-500 text-sm max-w-md mt-4">{validity}</p>
      )}
    </div>
  );
}
