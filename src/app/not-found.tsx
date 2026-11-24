import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#E5DFD5]/40 border border-[#8B6F55]/30 flex items-center justify-center mb-6 text-[#8B6F55]">
        <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
      </div>
      <span className="text-xs font-mono font-bold text-[#8B6F55] uppercase tracking-widest mb-2">
        ERROR // 404
      </span>
      <h1 className="text-4xl sm:text-5xl font-serifDisplay font-bold text-[#141312] mb-4">
        الصفحة غير موجودة
      </h1>
      <p className="text-sm text-[#786E65] max-w-md mb-8 leading-relaxed">
        يبدو أن المسار الذي تبحث عنه غير متاح أو تم نقله في هذا الأرشيف.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141312] text-[#FAF8F5] font-bold text-xs uppercase tracking-wider hover:bg-[#3E2E25] transition-all shadow-md"
      >
        <span>العودة للصفحة الرئيسية</span>
        <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
      </Link>
    </div>
  );
}
