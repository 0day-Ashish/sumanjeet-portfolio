"use client";

import Link from "next/link";
import localFont from "next/font/local";
import SmoothScroll from "../components/SmoothScroll";
import { ArrowLeft } from "lucide-react";

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Regular.otf",
});

export default function Privacy() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white px-8 lg:px-20 py-20 lg:py-32">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-3 text-white/40 hover:text-white transition-colors mb-20 lg:mb-32 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className={`${clashDisplay.className} text-sm uppercase tracking-widest`}>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="max-w-4xl border-b border-white/10 pb-12 mb-20">
          <h1 className={`${clashDisplay.className} text-5xl lg:text-9xl uppercase tracking-tighter mb-4`}>
            Privacy <br /> Policy
          </h1>
          <p className={`${clashDisplay.className} text-white/40 text-lg lg:text-xl uppercase tracking-widest`}>
            Last updated: May 2026
          </p>
        </div>

        {/* Content */}
        <div className={`max-w-3xl ${clashDisplay.className} space-y-16 lg:space-y-24 pb-40`}>
          <section>
            <h2 className="text-2xl lg:text-4xl uppercase tracking-tight mb-6 lg:mb-10 text-[#f5e6d3]">01. Data Collection</h2>
            <p className="text-white/60 text-lg lg:text-2xl leading-relaxed">
              We collect minimal personal data—typically only what you provide via direct email contact. This may include your name, email address, and project details required to facilitate a professional collaboration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-4xl uppercase tracking-tight mb-6 lg:mb-10 text-[#f5e6d3]">02. Data Usage</h2>
            <p className="text-white/60 text-lg lg:text-2xl leading-relaxed">
              Any information shared is used exclusively for project communication and deliverable management. We do not sell or share your personal data with third-party marketers or external services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-4xl uppercase tracking-tight mb-6 lg:mb-10 text-[#f5e6d3]">03. Asset Security</h2>
            <p className="text-white/60 text-lg lg:text-2xl leading-relaxed">
              Project assets and sensitive information shared during collaborations are handled with the highest degree of confidentiality and stored securely throughout the duration of the engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-4xl uppercase tracking-tight mb-6 lg:mb-10 text-[#f5e6d3]">04. Cookies</h2>
            <p className="text-white/60 text-lg lg:text-2xl leading-relaxed">
              This portfolio is built for visual storytelling and does not use tracking cookies or analytical scripts that monitor your individual browsing behavior.
            </p>
          </section>
        </div>
      </main>
    </SmoothScroll>
  );
}
