"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

// Basit JS validasyonu
const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = "Ad soyad zorunludur.";
  if (!values.phone) errors.phone = "Telefon zorunludur.";
  if (!values.kvkk) errors.kvkk = "KVKK onayı zorunludur.";
  return errors;
};

export default function FormPage({ type }) {
  const router = useRouter();
  const [errors, setErrors] = React.useState({});
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      newsletter: false,
      kvkk: false,
    },
  });

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

  const onSubmit = (values) => {
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    router.push(`/submit?type=${type}&email=${values.email || ""}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 gap-6 md:pt-18">
      <h1 className="text-black text-xl md:text-3xl font-semibold mb-4 text-center">
        {title}
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full max-w-xl p-6 rounded-xl bg-white shadow"
        >
          {" "}
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold">
                  Ad ve Soyad*
                </FormLabel>
                <FormControl>
                  <Input placeholder="Ad Soyad" {...field} />
                </FormControl>
                {errors.name && <FormMessage>{errors.name}</FormMessage>}
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold">E-posta</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="E-posta Adresi" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold">
                  Telefon Numarası*
                </FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Telefon Numarası" {...field} />
                </FormControl>
                {errors.phone && <FormMessage>{errors.phone}</FormMessage>}
              </FormItem>
            )}
          />
          {/* Newsletter */}
          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-normal text-sm text-gray-600">
                  Kampanyalardan haberdar olmak istiyorum
                </FormLabel>
              </FormItem>
            )}
          />
          {/* KVKK */}
          <FormField
            control={form.control}
            name="kvkk"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-normal text-sm text-[#E3963E]">
                  KVKK okudum, anladım ve kabul ediyorum*
                </FormLabel>
                {errors.kvkk && <FormMessage>{errors.kvkk}</FormMessage>}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-black hover:bg-[#E3963E] cursor-pointer text-lg uppercase font-semibold"
          >
            {buttonText}
          </Button>
        </form>
      </Form>
    </div>
  );
}
