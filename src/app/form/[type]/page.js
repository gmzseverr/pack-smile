"use client";
import FormPage from "@/components/FormPage";
import { useParams } from "next/navigation";

export default function FormContainer() {
  const params = useParams();
  const type = params.type;

  return (
    <div className="pt-4 md:pt-12">
      <FormPage type={type} />
    </div>
  );
}
