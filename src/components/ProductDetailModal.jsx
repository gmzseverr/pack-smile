// components/ProductDetailModal.jsx (Güncellenmiş Versiyon)

"use client";

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// ... (Props tanımı aynı)

export default function ProductDetailModal({ isOpen, onClose, product }) {
  if (!isOpen || !product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* 🚀 DEĞİŞİKLİK 1: Modal'ın genel köşelerini buradan kontrol ediyoruz */}
      <DialogContent className="max-w-xs sm:max-w-2xl md:max-w-3xl p-0 rounded-xl overflow-hidden">
        {/* Tüm içeriği kapsayan grid yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* SOL SÜTUN: VURGULU GÖRSEL */}
          <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100 flex items-center justify-center">
            {/* 🚀 DEĞİŞİKLİK 2: Görsel kapsayıcısının köşeleri sıfırlandı, h-auto yerine h-full (dikeyde doldurması için) */}

            {/* 🚀 Görsel yüksekliğini ayarlamak için div'in yüksekliğini md:h-full yaptık */}
            <div className="w-full h-full">
              <Image
                src={product.imageDetail}
                alt={`${product.name} Detay`}
                // layout="fill" kullanmak, responsive tasarım için daha iyi kontrol sağlar
                layout="fill"
                // object-cover: İçeriği tam kaplar, object-contain: İçeriği sığdırır. Tam oturması için cover kullanıyoruz.
                className="object-cover transition duration-500 transform hover:scale-105"
              />
            </div>
          </div>

          {/* SAĞ SÜTUN: DETAYLI İÇERİK */}
          <div className="flex flex-col p-6 sm:p-8">
            {/* ... (İçerik aynı) */}
            <DialogHeader className="mb-4 pb-4 border-b border-gray-100">
              <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                {product.name}
              </DialogTitle>
              <DialogDescription className="text-base text-gray-500 mt-1 italic">
                {product.description || "Ürün açıklaması bulunmamaktadır."}
              </DialogDescription>
            </DialogHeader>

            {/* ANA DETAYLAR */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-[#E3963E] uppercase border-b-2 border-[#E3963E] inline-block pb-1">
                Kullanım Alanları ve Önemli Özellikler
              </h3>

              <div className="text-sm text-gray-700 leading-relaxed max-h-48 overflow-y-auto">
                <p className="whitespace-pre-line">
                  **Nedir ve Ne İşe Yarar:** {product.details}
                  <br />
                  <br />
                  **Uygunluk:** Gıda temasına uygun, geri dönüştürülmüş
                  malzemeler.
                  <br />
                  **Tasarım:** Modern, minimalist ve özelleştirilebilir yapı.
                </p>
              </div>
            </div>

            <div className="flex-grow"></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
