"use client";

import React from "react";
import Image from "next/image"; // Next.js Image bileşeni
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * Ürün Detay Modal Bileşeni (Lüks Tasarım)
 * @param {object} props
 * @param {boolean} props.isOpen - Modal'ın açık olup olmadığını belirler.
 * @param {function} props.onClose - Modal'ı kapatmak için çağrılan fonksiyon.
 * @param {object} props.product - Gösterilecek ürünün detayları (name, description ve details içermeli).
 */
export default function ProductDetailsModal({ isOpen, onClose, product }) {
  // Modal açık değilse erken çıkış yap
  if (!isOpen || !product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* 🚀 DEĞİŞİKLİK 1: Modal'ı genişlettik ve p-0 ile kenar boşluklarını kaldırdık */}
      <DialogContent className="max-w-xs sm:max-w-2xl md:max-w-3xl p-0">
        {/* 🚀 DEĞİŞİKLİK 2: İki Sütunlu (Grid) Yapı */}
        {/* Mobilde görsel üstte, detay altta (grid-cols-1), büyük ekranda yan yana (md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* SOL SÜTUN: VURGULU GÖRSEL */}
          <div className="relative h-64 md:h-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <Image
              src="/package.jpg"
              alt={product.name}
              width={600}
              height={400}
              // Görselin sol sütunu tam doldurmasını sağlıyoruz
              className="object-cover w-full h-full transition duration-500 transform hover:scale-105"
            />
          </div>

          {/* SAĞ SÜTUN: DETAYLI İÇERİK VE TYPOGRAPHY */}
          {/* p-6: İç boşluk. flex-grow: Dikeyde kalan alanı doldurur. */}
          <div className="flex flex-col p-6 sm:p-8">
            {/* BAŞLIK VE ÖZET */}
            <DialogHeader className="mb-4 pb-4 border-b border-gray-100">
              {/* 🚀 BAŞLIK: Daha büyük ve dikkat çekici */}
              <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                {product.name}
              </DialogTitle>
              {/* ÖZET AÇIKLAMA */}
              <DialogDescription className="text-base text-gray-500 mt-1 italic">
                {product.description || "Ürün açıklaması bulunmamaktadır."}
              </DialogDescription>
            </DialogHeader>

            {/* ANA DETAYLAR */}
            <div className="flex flex-col gap-4">
              {/* ALT BAŞLIK */}
              <h3 className="text-lg font-bold text-[#E3963E] uppercase border-b-2 border-[#E3963E] inline-block pb-1">
                Kullanım Alanları ve Önemli Özellikler
              </h3>

              {/* DETAY METNİ */}
              <div className="text-sm text-gray-700 leading-relaxed max-h-48 overflow-y-auto">
                <p className="whitespace-pre-line">
                  {/* Detayları daha anlaşılır bölümlerle biçimlendirdik */}
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

            {/* Alt tarafta boşluk bırakmak için flex-grow (Opsiyonel) */}
            <div className="flex-grow"></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
