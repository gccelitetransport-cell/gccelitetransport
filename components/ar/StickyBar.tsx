import Link from "next/link";
import { waLinkAr } from "@/lib/ar/site";
import { WhatsAppIcon } from "../Icons";

export function StickyBarAr() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-2.5 shadow-[0_-4px_16px_rgba(11,31,51,.08)] sm:hidden">
      <a href={waLinkAr()} target="_blank" rel="noopener noreferrer" className="btn !bg-[#25D366] text-white"><WhatsAppIcon className="h-5 w-5" />واتساب</a>
      <Link href="/ar/#quote" className="btn-gold">اطلب عرض سعر</Link>
    </div>
  );
}
