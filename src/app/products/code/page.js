"use client";

import ProductList from "@/components/ProductList";
import { useParams } from "next/navigation";

import React from "react";

function ProductsPage() {
  const params = useParams();
  const type = params.type;
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default ProductsPage;
