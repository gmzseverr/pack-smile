"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import { Button } from "@/components/ui/button";

const PRODUCTS = [
  {
    id: 1,
    title: "Ambalaj A",
    description: "Baskı kalitesi yüksek, çevre dostu ambalaj çözümü.",
    details: "Ambalaj A...",
    imageUrl: "/package.jpg",
    imageDetail: "/detay1.png",
  },
  {
    id: 2,
    title: "Ambalaj B",
    description:
      "Kilitli kapaklı, dayanıklı ve tekrar kullanılabilir. Bu açıklama, kart üzerinde daha fazla yer kaplayacaktır.",
    details: "Ambalaj B...",
    imageUrl: "/package.jpg",
    imageDetail: "/detay2.png",
  },
  {
    id: 3,
    title: "Ambalaj C",
    description:
      "Minimalist tasarım, özel günler için ideal. Bu ürün, diğerlerinden daha az açıklamaya sahiptir.",
    details: "Ambalaj C...",
    imageUrl: "/package.jpg",
    imageDetail: "/detay3.png",
  },
  {
    id: 4,
    title: "Ambalaj D",
    description:
      "Minimalist tasarım, özel günler için ideal. Bu ürün, diğerlerinden daha az açıklamaya sahiptir.",
    details: "Ambalaj D...",
    imageUrl: "/package.jpg",
    imageDetail: "/detay1.png",
  },
  {
    id: 5,
    title: "Ambalaj A",
    description: "Baskı kalitesi yüksek, çevre dostu ambalaj çözümü.",
    details: "Ambalaj A...",
    imageUrl: "/package.jpg",
    imageDetail: "/detay2.png",
  },
  {
    id: 6,
    title: "Ambalaj B",
    description:
      "Kilitli kapaklı, dayanıklı ve tekrar kullanılabilir. Bu açıklama, kart üzerinde daha fazla yer kaplayacaktır.",
    details: "Ambalaj B...",
    imageUrl: "/package.jpg",
    imageDetail: "/detay1.png",
  },
  {
    id: 7,
    title: "Ambalaj C",
    description:
      "Minimalist tasarım, özel günler için ideal. Bu ürün, diğerlerinden daha az açıklamaya sahiptir.",
    details: "Ambalaj C...",
    imageUrl: "/package.jpg",
    imageDetail: "/detay3.png",
  },
  {
    id: 8,
    title: "Ambalaj D",
    description:
      "Minimalist tasarım, özel günler için ideal. Bu ürün, diğerlerinden daha az açıklamaya sahiptir.",
    details: "Ambalaj D...",
    imageUrl: "/package.jpg",
    imageDetail: "/detay1.png",
  },
];

export default function ProductList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const discount = searchParams?.get("discount") || 0;

  const [modalProduct, setModalProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDetailsModal = (product, e) => {
    e.stopPropagation();
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const handleGetCoupon = () => {
    router.push(`/form/indirim-${discount}`);
  };

  return (
    <div className="container mx-auto py-20 px-4">
      {/* Banner */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-tr from-[#FCEFDD] via-[#FFFDFB]   to-[#fffaf4] rounded-2xl px-6 lg:px-12 py-8 mb-10">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center space-y-4 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-semibold text-[#1D1D1B]">
            Küçük ve Büyüyen İşletmeler için sürdürülebilir ambalaj çözümleri.
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            %{discount} İndirim Kuponu Alabileceğiniz Özel Ambalaj Ürünleri
          </p>
          <Button className="px-8 py-3 cursor-pointer text-base font-semibold bg-[#1D1D1B] hover:scale-110 ">
            Alışverişe Başla
          </Button>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
          <img
            src="/shop-page.png"
            alt="Shop"
            className="max-h-60 object-contain"
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenDetails={openDetailsModal}
          />
        ))}
      </div>

      {/* Coupon Button */}
      <div className="flex justify-center mt-6">
        <Button
          onClick={handleGetCoupon}
          className="px-8 py-3 text-base font-semibold bg-[#1D1D1B] hover:bg-[#E3963E] cursor-pointer"
        >
          İNDİRİM KAZANMAK İÇİN KOD AL
        </Button>
      </div>

      {/* Detail Modal */}
      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        product={modalProduct}
      />
    </div>
  );
}
