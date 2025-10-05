"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// shadcn/ui bileşenleri
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Font Awesome ikonlarını import ediyoruz
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ProductDetailModal from "./ProductDetailModal";

// Ürün verisi (Örnek)
const products = [
  {
    id: 1,
    name: "Ambalaj A",
    description: "Baskı kalitesi yüksek, çevre dostu ambalaj çözümü.",
    details:
      "Ambalaj A, geri dönüştürülmüş kağıttan üretilmiştir ve gıda temasına uygundur. Kapasite: 500ml. Bu detaylar modal içinde uzun bir metin olarak görünecektir.",
  },
  {
    id: 2,
    name: "Ambalaj B",
    description:
      "Kilitli kapaklı, dayanıklı ve tekrar kullanılabilir. Bu açıklama, kart üzerinde daha fazla yer kaplayacaktır.",
    details:
      "Ambalaj B, biyoplastik malzemeden yapılmıştır, mikrodalga fırına dayanıklıdır. Kapasite: 750ml.",
  },
  {
    id: 3,
    name: "Ambalaj C",
    description:
      "Minimalist tasarım, özel günler için ideal. Bu ürün, diğerlerinden daha az açıklamaya sahiptir.",
    details:
      "Ambalaj C, özel parlak kaplama ile kaplanmıştır ve şık bir görünüm sunar. Kapasite: 250ml.",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {products.map((product) => (
          <Card
            key={product.id}
            onClick={() => handleSelect(product)}
            className={`cursor-pointer flex flex-col transition-all duration-300 relative overflow-hidden ${
              selectedProduct?.id === product.id
                ? "border-3 border-[#E3963E] shadow-2xl scale-[1.05]"
                : "border-1 border-gray-50 hover:shadow-lg"
            }`}
          >
            {/* Görsel Alanı */}
            <div className="w-full relative flex items-center justify-center">
              <Image
                src="/package.jpg"
                alt={product.name}
                width={600}
                height={400}
                className="transition duration-500 hover:opacity-80 w-full h-auto"
              />
            </div>

            {/* Metin İçeriği */}
            <div className="flex flex-col flex-grow p-4">
              <CardHeader className="flex flex-row items-start justify-between p-0 pb-2">
                <CardTitle className="text-lg font-semibold">
                  {product.name}
                </CardTitle>

                {/* Detay Arama İkonu */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => openDetailsModal(product, e)}
                  className="text-[#1D1D1B] cursor-pointer hover:text-[#1D1D1B] rounded-full hover:bg-gray-100"
                  aria-label={`${product.name} detaylarını gör`}
                >
                  <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
                </Button>
              </CardHeader>

              {/* Açıklama kısmı */}
              <CardContent className="flex-grow p-0 pt-2">
                <CardDescription className="text-xs text-gray-500">
                  {product.description}
                </CardDescription>
              </CardContent>
            </div>

            {/* Seçili İkonu */}
            {selectedProduct?.id === product.id && (
              <div className="absolute top-2 left-2 bg-[#E3963E] text-white text-xs px-2 py-1 font-bold">
                SEÇİLİ
              </div>
            )}
          </Card>
        ))}
      </div>

      <Button
        onClick={handleParticipate}
        disabled={!selectedProduct}
        className={`mt-8 px-8 py-3 font-semibold text-base transition duration-300 ${
          selectedProduct
            ? "bg-[#1D1D1B] text-white cursor-pointer hover:opacity-90"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {selectedProduct
          ? `"${selectedProduct.name}" Çekilişine Katıl`
          : "Lütfen Bir Ürün Seçin"}
      </Button>

      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        product={modalProduct}
      />
    </div>
  );
}
