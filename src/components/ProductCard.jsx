// components/ProductCard.jsx
"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Varsayımsal ikon bileşenleri (Heart ve Star)
const Heart = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none" // SVG'yi sadece stroke ile kullanmak için fill'i none yaptık
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.23 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .55-4.5 2C10.5 3.55 9.24 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.27 1.51 4.04 3 5.5l7 7Z" />
  </svg>
);
const Star = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeToggle = () => setIsLiked(!isLiked);

  const rating = 4;
  const totalReviews = 2;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilled = i < rating;
      stars.push(
        <Star
          key={i}
          className={
            isFilled ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }
        />
      );
    }
    return <div className="flex space-x-0.5">{stars}</div>;
  };

  return (
    <Card
      className="bg-[#F7F5F7] p-4 shadow-none border-none group flex flex-col justify-between"
      style={{
        // Kartın sınır rengi arka plan rengiyle aynı tutularak yumuşak bir görünüm sağlar
        border: "1.54px solid #F7F5F7",
      }}
    >
      {/* 1. Görsel Alanı ve Fav Butonu */}
      <div className="mb-4 relative h-60">
        {/* Görsel Alanı */}
        <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Hover efekti eklendi
          />
          {!product.imageUrl && (
            <span className="text-sm text-gray-600">Ürün Görseli</span>
          )}
        </div>

        {/* Favlama Butonu (Dinamik Stil) */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute cursor-pointer top-2 right-2 rounded-full w-8 h-8 bg-white/80 hover:bg-white z-10 p-0 shadow-sm"
          onClick={handleLikeToggle}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isLiked
                ? "text-red-500 fill-red-500"
                : "text-gray-700 hover:text-red-500 fill-transparent" // Hover rengi eklendi
            }`}
          />
        </Button>
      </div>

      {/* 2. Başlık, Adet, Fiyat ve Yıldızlar */}
      <CardContent className="p-0 flex-grow">
        {/* Başlık (Ambalaj) ve Adet (2 kutu) */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="font-bold text-lg text-gray-700 leading-tight">
              {product.title.split(" ")[0]}
            </span>
            <p className="text-xs text-gray-500 mt-0.5">{product.stock} kutu</p>
          </div>
          {/* Fiyat sağa yaslı */}
          {/* ✅ HATA DÜZELTİLDİ: "black" string olarak kullanıldı */}
          <p className="font-extrabold text-xl" style={{ color: "black" }}>
            {product.price} TL
          </p>
        </div>

        {/* Yıldız Sistemi ve Yorum Sayısı */}
        <div className="flex cursor-pointer items-center space-x-1 mb-4">
          {renderStars()}
          <span className="text-xs text-gray-500 ml-1">({totalReviews})</span>
        </div>
      </CardContent>

      {/* 3. Sepete Ekle ve Favorilere Ekle Butonları */}
      <CardFooter
        className="p-0 flex flex-col sm:flex-row justify-between mt-2" // Mobil uyum için flex-col eklendi
        style={{ gap: "8px" }}
      >
        {/* Sepete Ekle Butonu */}
        <Button
          className="cursor-pointer flex-1 text-base hover:opacity-90 transition-opacity w-full sm:w-auto"
          style={{
            background: "#3A4980",
            height: "36px",
            borderRadius: "50px",
            border: "1px solid transparent",
            padding: "8px 14px",
          }}
        >
          Sepete ekle
        </Button>

        {/* Favorilere Ekle Butonu */}
        <Button
          variant="outline"
          className="cursor-pointer flex-1 text-base hover:bg-gray-100 transition-colors w-full sm:w-auto"
          style={{
            borderColor: "black",
            color: "black",
            backgroundColor: "white",
            height: "36px",
            borderRadius: "50px",
            borderWidth: "1px",
            padding: "8px 14px",
          }}
        >
          Favorilere ekle
        </Button>
      </CardFooter>
    </Card>
  );
}
