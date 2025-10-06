"use client";

import React, { Suspense } from "react";
import ProductList from "@/components/ProductList";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <ProductList />
    </Suspense>
  );
}
