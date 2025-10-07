// components/GiveawayProducts.jsx (Güncellenmiş Versiyon)

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductDetailModal from "./ProductDetailModal";

const products = [
  {
    id: 1,
    name: "Ambalaj A",
    description: "Baskı kalitesi yüksek, çevre dostu ambalaj çözümü.",
    details:
      "Ambalaj A, geri dönüştürülmüş kağıttan üretilmiştir ve gıda temasına uygundur. Kapasite: 500ml. Bu detaylar modal içinde uzun bir metin olarak görünecektir.",
    imageUrl: "/package.jpg", // Kart görseli
    imageDetail: "/detay1.png", // Modal görseli
  },
  {
    id: 2,
    name: "Ambalaj B",
    description:
      "Kilitli kapaklı, dayanıklı ve tekrar kullanılabilir. Bu açıklama, kart üzerinde daha fazla yer kaplayacaktır.",
    details:
      "Ambalaj B, biyoplastik malzemeden yapılmıştır, mikrodalga fırına dayanıklıdır. Kapasite: 750ml.",
    imageUrl: "/package.jpg",
    imageDetail: "/detay2.png",
  },
  {
    id: 3,
    name: "Ambalaj C",
    description:
      "Minimalist tasarım, özel günler için ideal. Bu ürün, diğerlerinden daha az açıklamaya sahiptir.",
    details:
      "Ambalaj C, özel parlak kaplama ile kaplanmıştır ve şık bir görünüm sunar. Kapasite: 250ml.",
    imageUrl: "/package.jpg",
    imageDetail: "/detay3.png",
  },
];

export default function GiveawayProducts() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const handleSelect = (product) => {
    setSelectedProduct(product);
  };

  const openDetailsModal = (product, e) => {
    e.stopPropagation();
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const handleParticipate = () => {
    if (selectedProduct) {
      router.push(`/form/cekilis?product=${selectedProduct.name}`);
    }
  };

  return (
    <div className="min-h-screen p-6 sm:p-12 flex flex-col items-center gap-6 justify-center">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        Çekiliş Ürünlerinden Birini Seçin
      </h1>
      <p className="text-gray-600 mb-4 text-center max-w-xl">
        Katılmak istediğiniz ürünü seçtikten sonra, formu doldurarak çekilişe
        katılabilirsiniz.
      </p>

      {/* Ürün Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {products.map((product) => (
          <Card
            key={product.id}
            onClick={() => handleSelect(product)}
            className={`cursor-pointer flex flex-col transition-all duration-300 relative overflow-hidden ${
              selectedProduct?.id === product.id
                ? "border-2 border-[#E3963E] shadow-2xl scale-[1.05]"
                : "border border-gray-100 hover:shadow-lg"
            } bg-[#F9F9F9]`}
          >
            {/* Görsel */}
            <div className="w-full relative flex items-center justify-center">
              <Image
                // 🚀 DÜZELTME: Kart görseli için product.imageUrl kullanıldı
                src={product.imageUrl}
                alt={product.name}
                width={600}
                height={400}
                className="transition duration-500 hover:opacity-80 w-full h-auto"
              />
            </div>

            {/* İçerik */}
            <div className="flex flex-col flex-grow p-4">
              <CardHeader className="flex flex-row items-start justify-between p-0 pb-2">
                <CardTitle className="text-lg font-semibold text-[#1D1D1B]">
                  {product.name}
                </CardTitle>
              </CardHeader>

              {/* Açıklama */}
              <CardContent className="flex-grow p-0 pb-2">
                <CardDescription className="text-xs text-gray-500">
                  {product.description}
                </CardDescription>
              </CardContent>
              {/* Detay butonu */}
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => openDetailsModal(product, e)}
                className="w-full cursor-pointer bg-[#1D1D1B] !text-white text-sm font-medium rounded-md py-2 
  hover:bg-[#E3963E] hover:shadow-md transition-all duration-300"
              >
                Ürün Detay
              </Button>
            </div>

            {/* Seçili etiketi */}
            {selectedProduct?.id === product.id && (
              <div className="absolute top-2 left-2 bg-[#E3963E] text-white text-xs px-2 py-1 font-bold">
                SEÇİLİ
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Katıl Butonu */}
      <Button
        onClick={handleParticipate}
        disabled={!selectedProduct}
        className={`mt-8 px-8 py-3 font-semibold text-base transition duration-300 ${
          selectedProduct
            ? "bg-[#1D1D1B] text-white cursor-pointer hover:bg-[#E3963E] "
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {selectedProduct
          ? `"${selectedProduct.name}" Çekilişine Katıl`
          : "Lütfen Bir Ürün Seçin"}
      </Button>

      {/* Modal */}
      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        product={modalProduct}
      />
    </div>
  );
}
