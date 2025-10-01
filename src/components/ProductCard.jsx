// components/ProductCard.jsx
"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Varsayımsal ikon bileşenleri (kod burada değişmedi)
const Heart = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
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

  const darkBlueHex = "#1e3a8a";
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
    // CARD STİLİ GÜNCELLEMELERİ
    <Card
      className="bg-[#F7F5F7] p-4 shadow-none border-none group flex flex-col justify-between"
      style={{
        border: "1.54px solid #F7F5F7",
      }}
    >
      {/* 1. Görsel Alanı ve Fav Butonu */}
      {/* DEĞİŞİKLİK 1: h-48 yerine h-60 (daha büyük görsel alanı) */}
      <div className="mb-4 relative h-60">
        {/* Görsel Alanı */}
        <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          {!product.imageUrl && (
            <span className="text-sm text-gray-600">Ürün Görseli</span>
          )}
        </div>

        {/* Favlama Butonu (Dinamik Stil) */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute cursor-pointer top-2 right-2 rounded-full w-8 h-8 bg-white/80 hover:bg-white z-10 p-0"
          onClick={handleLikeToggle}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isLiked
                ? "text-red-500 fill-red-500"
                : "text-gray-700 fill-transparent"
            }`}
          />
        </Button>
      </div>

      {/* 2. Başlık, Adet, Fiyat ve Yıldızlar */}
      {/* DEĞİŞİKLİK 2: CardContent'in alt boşluğu kaldırıldı (mb-4 yerine p-0) */}
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
          <p className="font-extrabold text-xl" style={{ color: darkBlueHex }}>
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
      {/* DEĞİŞİKLİK 3: mt-auto yerine mt-2 (butonlar ile üst içerik arasındaki boşluğu kontrol eder) */}
      <CardFooter
        className="p-0 flex justify-between mt-2"
        style={{ gap: "8px" }}
      >
        {/* Butonlar */}
        <Button
          className="cursor-pointer flex-1 text-base hover:opacity-90 transition-opacity"
          style={{
            background: "#3A4980",
            width: "128px",
            height: "36px",
            borderRadius: "50px",
            border: "1px solid transparent",
            padding: "8px 14px",
          }}
        >
          Sepete ekle
        </Button>

        <Button
          variant="outline"
          className="cursor-pointer flex-1 text-base hover:bg-gray-100 transition-colors"
          style={{
            borderColor: darkBlueHex,
            color: darkBlueHex,
            backgroundColor: "white",
            width: "128px",
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
