"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product, onOpenDetails }) {
  return (
    <Card className="cursor-pointer flex flex-col transition-all duration-300 overflow-hidden border border-gray-100 rounded-2xl bg-[#F9F9F9] hover:shadow-lg hover:-translate-y-1">
      {/* Görsel */}
      <div className="relative w-full h-40 md:h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Metin */}
      <div className="flex flex-col flex-grow px-4 py-3">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-base font-semibold text-[#1D1D1B] line-clamp-1">
            {product.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow p-0">
          <CardDescription className="text-sm text-gray-600 line-clamp-2 mb-4">
            {product.description}
          </CardDescription>

          {/* Ürün Detay Butonu */}
          <Button
            onClick={(e) => onOpenDetails(product, e)}
            className="w-full cursor-pointer bg-[#1D1D1B] text-white text-sm font-medium rounded-md py-2 
                       hover:bg-[#E3963E] hover:shadow-md transition-all duration-300"
          >
            Ürün Detay
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
