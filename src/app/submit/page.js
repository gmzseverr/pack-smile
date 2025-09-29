"use client";
export const dynamic = "force-dynamic"; // Sayfayı client-side render yapmaya zorluyor

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";
import CodeReady from "@/components/CodeReady";
import DrawReady from "@/components/DrawReady";
import NoEmail from "@/components/NoEmail";

export default function SubmitPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const email = searchParams.get("email") || "";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  if (type === "cekilis") return <DrawReady />;

  if (type === "indirim-20" || type === "indirim-15") {
    if (!email) return <NoEmail type={type} />;
    return <CodeReady type={type} />;
  }

  // Varsayılan boş durum
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <p>Geçersiz sayfa.</p>
    </div>
  );
}
