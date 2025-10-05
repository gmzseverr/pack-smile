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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({ product, onOpenDetails }) {
  return (
    <Card className="cursor-pointer flex flex-col transition-all duration-300 relative overflow-hidden border border-gray-100 hover:shadow-md bg-[#F9F9F9]">
      {/* Görsel */}
      <div className="w-full relative flex items-center justify-center h-36 md:h-40 lg:h-44">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover transition hover:opacity-80"
        />
      </div>

      {/* Metin */}
      <div className="flex flex-col flex-grow p-3">
        <CardHeader className="flex flex-row items-start justify-between p-0 pb-1">
          <CardTitle className="text-sm md:text-base font-semibold text-[#1D1D1B]">
            {product.title}
          </CardTitle>

          {/* Detay / Büyüteç */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => onOpenDetails(product, e)}
            className="text-[#1D1D1B] hover:text-[#E3963E] rounded-full hover:bg-gray-100 p-1"
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="h-3 w-3 md:h-4 md:w-4"
            />
          </Button>
        </CardHeader>

        <CardContent className="flex-grow p-0 pt-1">
          <CardDescription className="text-xs md:text-sm text-gray-500">
            {product.description}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
}
