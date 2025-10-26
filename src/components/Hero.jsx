import Spline from "@splinetool/react-spline";
import { ArrowRight, ShieldCheck, Globe2 } from "lucide-react";

export default function Hero({ onBrowse, onPost }) {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-14 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-medium">
            <Globe2 className="h-3.5 w-3.5" />
            Donate. Discover. Reuse.
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Give unused items a second life.
          </h1>
          <p className="mt-4 text-neutral-600 max-w-prose">
            RE2USE is a global, donation-only network to pass on items for free. Simple, secure, and eco-friendly.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onBrowse}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-white font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Browse listings
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={onPost}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 font-medium shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Post an item
            </button>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-neutral-600">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            SSL-secured, privacy-first platform
          </div>
        </div>

        <div className="relative order-1 md:order-2 h-[360px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-white">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}
