"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";
import CodeReady from "@/components/CodeReady";
import DrawReady from "@/components/DrawReady";
import NoEmail from "@/components/NoEmail";

function SubmitContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const email = searchParams.get("email") || "";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  if (type === "cekilis") return <DrawReady />;

  if (type === "indirim-25" || type === "indirim-10") {
    if (!email) return <NoEmail type={type} />;
    return <CodeReady type={type} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center"></div>
  );
}

// The main page component that wraps the content in a Suspense boundary
export default function SubmitPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SubmitContent />
    </Suspense>
  );
}
