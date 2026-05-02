"use client";

import Link from "next/link";
import localFont from "next/font/local";
import SmoothScroll from "../components/SmoothScroll";
import { ArrowLeft } from "lucide-react";

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Regular.otf",
});

export default function Terms() {
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
            Terms & <br /> Conditions
          </h1>
          <p className={`${clashDisplay.className} text-white/40 text-lg lg:text-xl uppercase tracking-widest`}>
            Last updated: May 2026
          </p>
        </div>

        {/* Content */}
        <div className={`max-w-3xl ${clashDisplay.className} space-y-16 lg:space-y-24 pb-40`}>
          <section>
            <h2 className="text-2xl lg:text-4xl uppercase tracking-tight mb-6 lg:mb-10 text-[#f5e6d3]">01. Services</h2>
            <p className="text-white/60 text-lg lg:text-2xl leading-relaxed">
              Sumanjeet Prasad provides professional creative direction, scripting, editing, and scaling services. By engaging with our services, you agree to provide necessary assets and feedback in a timely manner to ensure project success.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-4xl uppercase tracking-tight mb-6 lg:mb-10 text-[#f5e6d3]">02. Intellectual Property</h2>
            <p className="text-white/60 text-lg lg:text-2xl leading-relaxed">
              Unless otherwise agreed upon in writing, all creative outputs developed during the engagement remain the property of Sumanjeet Prasad until full payment is received. Upon final payment, usage rights are transferred as per the project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-4xl uppercase tracking-tight mb-6 lg:mb-10 text-[#f5e6d3]">03. Payments & Deliverables</h2>
            <p className="text-white/60 text-lg lg:text-2xl leading-relaxed">
              Project milestones and payment schedules are defined in individual service contracts. Delays in payment may result in the suspension of creative work or delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-4xl uppercase tracking-tight mb-6 lg:mb-10 text-[#f5e6d3]">04. Limitation of Liability</h2>
            <p className="text-white/60 text-lg lg:text-2xl leading-relaxed">
              While we strive for excellence in every project, Sumanjeet Prasad is not liable for indirect or consequential losses resulting from the use of delivered assets once they are approved and integrated by the client.
            </p>
          </section>
        </div>
      </main>
    </SmoothScroll>
  );
}
