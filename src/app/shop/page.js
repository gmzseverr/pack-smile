"use client";

import ProductList from "@/components/ProductList";
import { useParams } from "next/navigation";

export default function ShopPage() {
  const params = useParams();
  const type = params.type;

  return (
    <div className="pt-4 md:pt-12">
      <ProductList />
    </div>
  );
}
