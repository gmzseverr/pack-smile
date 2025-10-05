export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-white">
      {/* spinning SVG ball */}
      <div className="relative flex items-center justify-center">
        <svg
          className="h-8 w-8 text-[#E3963E] animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      </div>

      <h1 className="text-[#1D1D1B] font-semibold text-center text-3xl">
        Bilgileriniz Kaydediliyor
      </h1>
      <p className="text-center text-gray-500">
        Lütfen bekleyiniz, bu sayfayı kapatmayınız...
      </p>
    </div>
  );
}
