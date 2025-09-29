"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPage({ type }) {
  const router = useRouter();

  let title = "";
  let buttonText = "";

  switch (type) {
    case "cekilis":
      title = "Bilgileri Gir ve Çekilişe Hak Kazan";
      buttonText = "ÇEKİLİŞE KATIL";
      break;
    case "indirim-20":
      title = "Bilgileri Gir ve %20 İndirim Kazan";
      buttonText = "Kodu Al";
      break;
    case "indirim-15":
      title = "Bilgileri Gir ve %15 İndirim Kazan";
      buttonText = "Kodu Al";
      break;
    default:
      title = "Form";
      buttonText = "Gönder";
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    newsletter: false,
    kvkk: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.push(`/submit?type=${type}`);
  };

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-4 sm:p-12 gap-6 md:pt-32">
      {/* Geri ve Progress Bar */}
      <div className="w-full max-w-xl flex flex-col sm:flex-row sm:items-center justify-center mb-4">
        {/* Geri Butonu */}
        <button
          onClick={() => router.back()}
          className="text-gray-600 font-semibold hover:underline mb-2 sm:mb-0 sm:mr-4 self-start"
        >
          {"<"} Geri
        </button>

        {/* Progress Bar */}
        <div className="flex flex-col items-end justify-between w-full ">
          <p className="text-sm text-[#433E0E] mt-1 mb-1 sm:mb-2">
            Giriş Adım 1 / 2
          </p>
          <div className="bg-[#FCEFDD] h-2 rounded-full w-1/2 sm:w-1/4">
            <div className="bg-[#E3963E] h-2 rounded-full w-1/2"></div>
          </div>
        </div>
      </div>

      <h1 className="text-[#433E0E] text-xl md:text-3xl font-semibold mb-4 text-center">
        {title}
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-xl p-6 rounded-xl"
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-1 text-lg text-[#433E0E] font-semibold"
          >
            Ad ve Soyad*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ad ve Soyad"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-[#433E0E] p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-lg text-[#433E0E] font-semibold"
          >
            E-posta*
          </label>
          <input
            type="email"
            id="email"
            placeholder="E-posta Adresi"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-[#433E0E] p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="mb-1 text-lg text-[#433E0E] font-semibold"
          >
            Telefon Numarası*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefon Numarası"
            value={formData.phone}
            onChange={handleChange}
            className="border border-[#433E0E] p-2 rounded"
            required
          />
        </div>

        {/* Checkboxlar */}
        <label className="flex items-center gap-2 text-gray-500 text-sm">
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          Kampanyalardan haberdar olmak istiyorum
        </label>

        <label className="flex items-center gap-2 text-sm text-[#E3963E]">
          <input
            type="checkbox"
            name="kvkk"
            checked={formData.kvkk}
            onChange={handleChange}
            required
          />
          KVKK okudum, anladım ve kabul ediyorum*
        </label>

        <button
          type="submit"
          className="bg-darkBlue font-semibold uppercase text-white p-2 rounded hover:bg-[#E3963E] transition"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
