export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-white">
      {/* bouncing ball */}
      <div className="relative flex items-center justify-center">
        <div className="h-8 w-8 bg-[#E3963E] rounded-full animate-bounce"></div>
      </div>

      <h1 className="text-[#433E0E] font-semibold text-center text-3xl">
        Bilgileriniz Kaydediliyor
      </h1>
      <p className="text-center text-gray-500">
        Lütfen bekleyiniz, bu sayfayı kapatmayınız...
      </p>
    </div>
  );
}
