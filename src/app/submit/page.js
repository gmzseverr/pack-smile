"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import CodeReady from "@/components/CodeReady";

export default function SubmitPage() {
  const [loading, setLoading] = useState(true);

  // Şimdilik sadece loading bitince basit bir mesaj
  return (
    <div className="pt-4 md:pt-12">
      <CodeReady />
    </div>
  );
}
