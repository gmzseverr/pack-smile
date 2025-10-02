// components/ProductList.jsx
import React from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Akıl Oyunları Kitabı",
    price: 150.0,
    stock: 12,
    year: 2023,
    imageUrl: "/product.jpg",
  },
  {
    id: 2,
    title: "Kişisel Gelişim Defteri",
    price: 99.5,
    stock: 5,
    year: 2024,
    imageUrl: "/product.jpg",
  },
  {
    id: 3,
    title: "Programlama Başlangıç Kılavuzu",
    price: 249.9,
    stock: 0,
    year: 2022,
    imageUrl: "/product.jpg",
  },
  {
    id: 4,
    title: "Felsefi Denemeler Serisi",
    price: 185.0,
    stock: 8,
    year: 2021,
    imageUrl: "/product.jpg",
  },
];

function ProductList() {
  const products = DUMMY_PRODUCTS;

  return (
    <div className="container mx-auto py-20 px-4">
      {/* Hero Section */}
      <div
        className="flex flex-col-reverse lg:flex-row w-full items-center justify-between px-6 lg:px-12 py-8 rounded-2xl mb-10"
        style={{
          background:
            "linear-gradient(75.04deg, #E4E9F2 0%, #F1F4F9 52.07%, #E1EEFF 102.02%)",
        }}
      >
        {/* Yazı */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center space-y-4 text-center lg:text-left">
          <h1 className="text-[#3A4980] text-2xl lg:text-3xl font-semibold leading-snug">
            Küçük ve Büyüyen İşletmelere Özel <br /> Sürdürülebilir Ambalaj
            Çözümleri
          </h1>
          <Button
            className="cursor-pointer text-sm lg:text-base hover:opacity-90 transition-opacity self-center lg:self-start"
            style={{
              width: "160px",
              height: "40px",
              background: "#3A4980",
              borderRadius: "50px",
            }}
          >
            Alışverişe Başla
          </Button>
        </div>

        {/* Görsel */}
        <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
          <img
            src="/image-shop-page.png"
            alt="Shop"
            className="max-h-60 object-contain"
          />
        </div>
      </div>

      {/* Filter Section */}
      <section className="flex gap-2 mb-10 overflow-x-auto scrollbar-hide">
        {["Ambalaj Tipi", "Fiyat", "Yorum", "Renk", "Malzeme"].map(
          (filter, idx) => (
            <Select key={idx}>
              <SelectTrigger className="min-w-[130px] rounded-full bg-gray-200 text-gray-700 px-4 py-2 hover:bg-gray-300 transition whitespace-nowrap">
                <SelectValue placeholder={filter} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Seçenek 1</SelectItem>
                <SelectItem value="2">Seçenek 2</SelectItem>
                <SelectItem value="3">Seçenek 3</SelectItem>
              </SelectContent>
            </Select>
          )
        )}
      </section>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center items-center space-x-2">
        <button className="px-2 sm:px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-sm sm:text-base transition">
          Önceki
        </button>
        {[1, 2, 3].map((pageNum) => (
          <button
            key={pageNum}
            className={`px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base transition ${
              pageNum === 1
                ? "bg-[#3A4980] text-white hover:opacity-90"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {pageNum}
          </button>
        ))}
        <button className="px-2 sm:px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-sm sm:text-base transition">
          Sonraki
        </button>
      </div>
    </div>
  );
}

export default ProductList;
