"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import Preloader from "./components/Preloader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dancingScript = localFont({
  src: "../public/fonts/DancingScript-Bold.otf",
});

const rowan = localFont({
  src: "../public/fonts/Rowan-Semibold.otf",
});

const pencerio = localFont({
  src: "../public/fonts/Pencerio-Hairline.otf",
});

const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Regular.otf",
});

import RevealOnScroll from "./components/RevealOnScroll";
import TextType from "@/components/TextType";
import FlowingMenu from "@/components/FlowingMenu";
import { ArrowRight, Volume2, VolumeX, Play, Pause } from "lucide-react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMutedWorks, setIsMutedWorks] = useState(true);
  const [isMutedWorks2, setIsMutedWorks2] = useState(true);
  const [isMutedWorks3, setIsMutedWorks3] = useState(true);
  const [isPlayingWorks, setIsPlayingWorks] = useState(false);
  const [isPlayingWorks2, setIsPlayingWorks2] = useState(false);
  const [isPlayingWorks3, setIsPlayingWorks3] = useState(false);
  // Anushka Tyagi States
  const [isMutedAnushka, setIsMutedAnushka] = useState(true);
  const [isPlayingAnushka, setIsPlayingAnushka] = useState(false);
  const videoRefAnushka = useRef<HTMLVideoElement>(null);
  
  // Sony Music Collab States
  const [isMutedSony, setIsMutedSony] = useState(true);
  const [isPlayingSony, setIsPlayingSony] = useState(false);
  const videoRefSony = useRef<HTMLVideoElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  const togglePlayAnushka = () => {
    if (videoRefAnushka.current) {
      if (isPlayingAnushka) {
        videoRefAnushka.current.pause();
      } else {
        // Pause others
        if (videoRefSony.current) { videoRefSony.current.pause(); setIsPlayingSony(false); }
        if (videoRef1.current) { videoRef1.current.pause(); setIsPlayingWorks(false); }
        if (videoRef2.current) { videoRef2.current.pause(); setIsPlayingWorks2(false); }
        if (videoRef3.current) { videoRef3.current.pause(); setIsPlayingWorks3(false); }
        
        videoRefAnushka.current.play();
        setIsMutedAnushka(false);
      }
      setIsPlayingAnushka(!isPlayingAnushka);
    }
  };

  const togglePlaySony = () => {
    if (videoRefSony.current) {
      if (isPlayingSony) {
        videoRefSony.current.pause();
      } else {
        // Pause others
        if (videoRefAnushka.current) { videoRefAnushka.current.pause(); setIsPlayingAnushka(false); }
        if (videoRef1.current) { videoRef1.current.pause(); setIsPlayingWorks(false); }
        if (videoRef2.current) { videoRef2.current.pause(); setIsPlayingWorks2(false); }
        if (videoRef3.current) { videoRef3.current.pause(); setIsPlayingWorks3(false); }
        
        videoRefSony.current.play();
        setIsMutedSony(false);
      }
      setIsPlayingSony(!isPlayingSony);
    }
  };

  const togglePlay1 = () => {
    if (videoRef1.current) {
      if (isPlayingWorks) {
        videoRef1.current.pause();
      } else {
        // Pause others
        if (videoRefAnushka.current) { videoRefAnushka.current.pause(); setIsPlayingAnushka(false); }
        if (videoRefSony.current) { videoRefSony.current.pause(); setIsPlayingSony(false); }
        if (videoRef2.current) { videoRef2.current.pause(); setIsPlayingWorks2(false); }
        if (videoRef3.current) { videoRef3.current.pause(); setIsPlayingWorks3(false); }
        
        videoRef1.current.play();
        setIsMutedWorks(false);
      }
      setIsPlayingWorks(!isPlayingWorks);
    }
  };

  const togglePlay2 = () => {
    if (videoRef2.current) {
      if (isPlayingWorks2) {
        videoRef2.current.pause();
      } else {
        // Pause others
        if (videoRefAnushka.current) { videoRefAnushka.current.pause(); setIsPlayingAnushka(false); }
        if (videoRefSony.current) { videoRefSony.current.pause(); setIsPlayingSony(false); }
        if (videoRef1.current) { videoRef1.current.pause(); setIsPlayingWorks(false); }
        if (videoRef3.current) { videoRef3.current.pause(); setIsPlayingWorks3(false); }
        
        videoRef2.current.play();
        setIsMutedWorks2(false);
      }
      setIsPlayingWorks2(!isPlayingWorks2);
    }
  };

  const togglePlay3 = () => {
    if (videoRef3.current) {
      if (isPlayingWorks3) {
        videoRef3.current.pause();
      } else {
        // Pause others
        if (videoRefAnushka.current) { videoRefAnushka.current.pause(); setIsPlayingAnushka(false); }
        if (videoRefSony.current) { videoRefSony.current.pause(); setIsPlayingSony(false); }
        if (videoRef1.current) { videoRef1.current.pause(); setIsPlayingWorks(false); }
        if (videoRef2.current) { videoRef2.current.pause(); setIsPlayingWorks2(false); }
        
        videoRef3.current.play();
        setIsMutedWorks3(false);
      }
      setIsPlayingWorks3(!isPlayingWorks3);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("imperfecttcircle@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  const menuItems = [
    { link: "#works", text: "Visual Stories", image: "/assets/me2.jpg" },
    { link: "#works", text: "Music Films", image: "/assets/me4.jpg" },
    { link: "#works", text: "Cinematics", image: "/assets/me3.jpg" },
    { link: "#works", text: "Direction", image: "/assets/me5.jpg" },
    { link: "#works", text: "Post-Production", image: "/assets/me1.jpg" },
  ];

  // Services Stacking Animation
  useEffect(() => {
    const isDesktop = window.innerWidth > 1024;
    const servicesSection = document.querySelector("#services");
    const cards = document.querySelectorAll(".service-card");

    if (isDesktop && servicesSection && cards.length > 0) {
      // Create a master timeline for the stacking
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesSection,
          start: "top top",
          end: () => `+=${cards.length * 100}%`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Animate each card stacking (starting from the second card)
      cards.forEach((card, index) => {
        if (index === 0) return;

        tl.fromTo(card,
          { y: "120vh" },
          { y: 0, ease: "none" },
          index - 1 // staggered start
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      <Preloader />

      {/* Header Navigation (Desktop/Mobile) - Fixed Globally */}
      <header className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between lg:justify-between px-8 py-10 lg:px-20">
        {/* Logo - Centered on Mobile */}
        <div className={`${clashDisplay.className} text-lg lg:text-xl font-bold group cursor-pointer w-full text-center lg:text-left lg:w-auto`}>
          Sumanjeet <span className="text-white group-hover:rotate-12 inline-block transition-transform duration-300 mx-1">•</span> Prasad
        </div>

        {/* Desktop Main Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link href="#about" className={`${clashDisplay.className} px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[12px] font-normal hover:bg-white/10 hover:border-white/20 transition-all duration-300`}>
            About
          </Link>

          <div className="h-12 w-12 relative overflow-hidden rounded-2xl shadow-lg shadow-white/5 transform -rotate-3 hover:rotate-0 transition-all duration-500 border border-white/20 group cursor-pointer">
            <Image
              src="/assets/me4.jpg"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          <Link href="#works" className={`${clashDisplay.className} px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[12px] font-normal hover:bg-white/10 hover:border-white/20 transition-all duration-300`}>
            Work
          </Link>
        </nav>

        {/* Desktop Socials */}
        <div className="hidden lg:flex items-center">
          <Link href="mailto:imperfecttcircle@gmail.com" className={`${clashDisplay.className} px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[11px] font-normal hover:bg-white/10 hover:border-white/20 transition-all duration-300`}>
            Email
          </Link>
          <Link href="https://www.linkedin.com/in/sumanjeet-prasad-8a142631b/" className={`${clashDisplay.className} px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[11px] font-normal hover:bg-white/10 hover:border-white/20 transition-all duration-300 opacity-60 hover:opacity-100`}>
            In
          </Link>
          <Link href="https://www.instagram.com/sumanjeet.prssd/" target="_blank" className={`${clashDisplay.className} px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[11px] font-normal hover:bg-white/10 hover:border-white/20 transition-all duration-300 opacity-60 hover:opacity-100`}>
            Ig
          </Link>
          <Link href="#" className={`${clashDisplay.className} px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[11px] font-normal hover:bg-white/10 hover:border-white/20 transition-all duration-300 opacity-60 hover:opacity-100`}>
            Be
          </Link>
        </div>
      </header>

      {/* Hero Section - Contained Background */}
      <section className="relative h-screen overflow-hidden w-full">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/me.jpg"
            alt="Sumanjeet Prasad"
            fill
            priority
            className="object-cover object-[center_30%] scale-100 lg:scale-105 contrast-[1.05] saturate-[1.1] brightness-[0.85]"
          />
          {/* Warm light overlay to match reference lighting */}
          <div className="absolute inset-0 bg-[#4a3a2a]/20 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* Main Hero Content Area */}
        <div className="relative z-10 flex flex-col justify-center lg:justify-between h-[calc(100vh-200px)] lg:h-[calc(100vh-140px)] px-8 lg:px-20 pb-16 pt-32 lg:pt-40">
          {/* Hero Description */}
          <div className="mt-24 max-w-full flex justify-start lg:justify-start">
            <h2 className="text-4xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-start lg:text-left">
              <span className={`${rowan.className} font-normal`}>Creative</span><br />
              <span className={`${rowan.className} font-normal`}>Director</span> &amp;<span className={`${pencerio.className} font-normal`}> Editor</span>
            </h2>
          </div>

          {/* Bottom Giant Name Section (Desktop Only) */}
          <div className="hidden lg:flex mb-25 justify-center w-full">
            <h1 className={`${rowan.className} text-[10rem] leading-[0.8] tracking-tighter select-none pointer-events-none opacity-80 translate-y-60`}>
              Sumanjeet <span className="ml-7">Prasad</span> <span className="text-[2rem] align-top ml-2">©</span>
            </h1>
          </div>

          {/* Mobile Bottom Nav Section */}
          <div className="lg:hidden absolute top-145 left-1/2 -translate-x-1/2 w-full flex justify-center">
            <nav className="flex items-center gap-3">
              <Link href="#about" className={`${clashDisplay.className} px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase active:scale-95 transition-transform`}>
                About
              </Link>

              <div className="h-12 w-12 relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl transform -rotate-3">
                <Image
                  src="/assets/me4.jpg"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>

              <Link href="#works" className={`${clashDisplay.className} px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase active:scale-95 transition-transform`}>
                Work
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* Cinematic Fixed Frame (Vignette) */}
      <div className="fixed inset-0 z-[100] pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent" />
      </div>

      {/* About Typographic Section */}
      <section className="relative z-10 bg-black py-40 lg:py-64 px-8 lg:px-20 min-h-screen flex flex-col justify-center" id="about">
        <RevealOnScroll>
          <div className="flex items-end justify-between w-full mb-12 lg:mb-20 border-b border-white/10 pb-8">
            <h3 className={`${clashDisplay.className} text-4xl lg:text-9xl uppercase tracking-tighter`}>About</h3>
            <span className={`${clashDisplay.className} text-xl lg:text-3xl font-medium opacity-60`}>( 01 )</span>
          </div>
          <div className="max-w-full">
            <h2 className={`${clashDisplay.className} text-[clamp(2.5rem,8vw,12rem)] font-medium leading-[1.1] lg:leading-[0.85] tracking-tighter text-white/40`}>
              <span className="text-white">Creative Director</span> <br className="hidden lg:block" />
              crafting digital stories <br className="hidden lg:block" />
              that make users
              <span className="inline-block px-8 py-3 lg:px-24 lg:py-10 bg-[#f5e6d3] text-black rounded-full mx-2 lg:mx-6 scale-90 lg:scale-100 align-middle min-w-[140px] lg:min-w-[400px] text-center">
                <TextType
                  text={["click", "feel"]}
                  showCursor={false}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseDuration={1500}
                />
              </span>
              and <span className="text-[#f5e6d3]">stay</span> <br className="hidden lg:block" />
              in your world.
            </h2>
          </div>
          <div className="mt-16 lg:mt-24 max-w-3xl">
            <p className={`${clashDisplay.className} text-lg lg:text-2xl text-white/70 leading-relaxed font-light`}>
              A content strategist and mass communication professional who bridges analytical marketing with evocative visual storytelling. Experienced in end-to-end content production - from ideation and scripting to editing and distribution - with proven results across music, film, and brand campaigns. Comfortable with remote workflows, async collaboration, and deadline-driven delivery.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Flowing Menu Section */}
      <section className="relative z-10 bg-black py-10 lg:py-20 min-h-[30vh] lg:min-h-[40vh] flex flex-col justify-center">
        <RevealOnScroll>
          <div className="h-[60vh] lg:h-[80vh]">
            <FlowingMenu
              items={menuItems}
              bgColor="transparent"
              textColor="#ffffff"
              marqueeBgColor="#f5e6d3"
              marqueeTextColor="#000000"
              borderColor="rgba(255, 255, 255, 0.1)"
              speed={20}
              className={clashDisplay.className}
            />
          </div>
        </RevealOnScroll>
      </section>

      {/* Visual Identity / Persona Gallery */}
      <section className="relative z-10 bg-black py-20 lg:py-40 px-8 lg:px-20 overflow-hidden">
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {/* Standardized Gallery Items */}
            {[
              { src: "/assets/me.jpg", alt: "Sumanjeet 1" },
              { src: "/assets/me1.jpg", alt: "Sumanjeet 2" },
              { src: "/assets/me2.jpg", alt: "Sumanjeet 3" },
              { src: "/assets/me3.jpg", alt: "Sumanjeet 4" },
              { src: "/assets/me4.jpg", alt: "Sumanjeet 5" },
              { src: "/assets/me5.jpg", alt: "Sumanjeet 6" },
              { src: "/assets/1000691089.jpg", alt: "Sumanjeet 8" },
            ].map((img, idx) => (
              <div
                key={idx}
                className={`w-48 h-48 lg:w-64 lg:h-64 relative overflow-hidden rounded-[2rem] transition-transform duration-700 ${idx % 2 === 0 ? "-rotate-6" : "rotate-6"
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover transition-transform duration-700 ${idx % 2 === 0 ? "rotate-6" : "-rotate-6"
                    }`}
                />
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* Works Section */}
      <section className="relative z-10 bg-black pt-20 px-8 lg:px-20 overflow-hidden" id="works">
        <RevealOnScroll>
          <div className="flex items-end justify-between w-full border-b border-white/10 pb-8 mb-12">
            <h3 className={`${clashDisplay.className} text-4xl lg:text-9xl uppercase tracking-tighter`}>Works</h3>
            <span className={`${clashDisplay.className} text-xl lg:text-3xl font-medium opacity-60`}>( 02 )</span>
          </div>

          {/* Anushka Tyagi Highlight (Portrait) */}
          <div className="mb-32 lg:mb-48 flex flex-col items-center">
            <div className="w-full flex justify-between items-end mb-8">
              <h4 className={`${clashDisplay.className} text-xl lg:text-4xl uppercase tracking-tight`}>Anushka Tyagi</h4>
              <span className={`${clashDisplay.className} text-xs lg:text-sm opacity-40 uppercase tracking-[0.2em]`}>Featured Collaborations</span>
            </div>

            <div
              className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[9/16] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden group shadow-[0_0_80px_rgba(255,255,255,0.05)] border border-white/10 bg-white/5 cursor-pointer"
              onClick={togglePlayAnushka}
            >
              <video
                ref={videoRefAnushka}
                muted={isMutedAnushka}
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/dfbhwxfxj/video/upload/v1780837739/jsragfrgo7wmxvd4ys3h.mp4" type="video/mp4" />
              </video>

              {/* Central Toggle Button Overlay */}
              <div className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-500 ${isPlayingAnushka ? "bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-black/20" : "bg-black/30 opacity-100"}`}>
                <div className="p-10 lg:p-14 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full text-white scale-90 transition-all duration-700">
                  {isPlayingAnushka ? <Pause size={40} fill="white" /> : <Play size={40} fill="white" className="ml-1" />}
                </div>
              </div>
            </div>
          </div>

          {/* Sony Music Collab Highlight (Portrait) */}
          <div className="mb-32 lg:mb-48 flex flex-col items-center">
            <div className="w-full flex justify-between items-end mb-8">
              <h4 className={`${clashDisplay.className} text-xl lg:text-4xl uppercase tracking-tight`}>Sony Music Bangla</h4>
            </div>

            <div
              className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[9/16] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden group shadow-[0_0_80px_rgba(255,255,255,0.05)] border border-white/10 bg-white/5 cursor-pointer"
              onClick={togglePlaySony}
            >
              <video
                ref={videoRefSony}
                muted={isMutedSony}
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/dlx51jyma/video/upload/v1777731813/sumanjeet-portfolio/projects/Video-972.mp4" type="video/mp4" />
              </video>

              {/* Central Toggle Button Overlay */}
              <div className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-500 ${isPlayingSony ? "bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-black/20" : "bg-black/30 opacity-100"}`}>
                <div className="p-10 lg:p-14 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full text-white scale-90 transition-all duration-700">
                  {isPlayingSony ? <Pause size={40} fill="white" /> : <Play size={40} fill="white" className="ml-1" />}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Works Section */}
          <div className="mb-20 lg:mb-40">
            <div className="w-full flex justify-between items-end mb-8">
              <h4 className={`${clashDisplay.className} text-xl lg:text-4xl uppercase tracking-tight`}>Personal Works</h4>
              <span className={`${clashDisplay.className} text-xs lg:text-sm opacity-40 uppercase tracking-[0.2em]`}>Reels</span>
            </div>

            <div
              className="relative w-full aspect-video rounded-[2rem] lg:rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5 bg-white/5 cursor-pointer"
              onClick={togglePlay1}
            >
              <video
                ref={videoRef1}
                muted={isMutedWorks}
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/dlx51jyma/video/upload/v1777731682/sumanjeet-portfolio/projects/Video-481.mp4" type="video/mp4" />
              </video>

              {/* Central Toggle Button Overlay */}
              <div className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-500 ${isPlayingWorks ? "bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-black/20" : "bg-black/30 opacity-100"}`}>
                <div className="p-10 lg:p-14 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full text-white scale-90 transition-all duration-700">
                  {isPlayingWorks ? <Pause size={40} fill="white" /> : <Play size={40} fill="white" className="ml-1" />}
                </div>
              </div>
            </div>
          </div>

          {/* Works Section Video 2 */}
          <div className="mb-20 lg:mb-40">
            <div
              className="relative w-full aspect-video rounded-[2rem] lg:rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5 bg-white/5 mt-12 cursor-pointer"
              onClick={togglePlay2}
            >
              <video
                ref={videoRef2}
                muted={isMutedWorks2}
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/dfbhwxfxj/video/upload/v1780837895/j80uskakejllsjhq4xbq.mp4" />
              </video>

              {/* Central Toggle Button Overlay */}
              <div className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-500 ${isPlayingWorks2 ? "bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-black/20" : "bg-black/30 opacity-100"}`}>
                <div className="p-10 lg:p-14 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full text-white scale-90 transition-all duration-700">
                  {isPlayingWorks2 ? <Pause size={40} fill="white" /> : <Play size={40} fill="white" className="ml-1" />}
                </div>
              </div>
            </div>
          </div>

          {/* Works Section Video 3 */}
          <div className="mb-32 lg:mb-48 flex flex-col items-center">
            <div
              className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[9/16] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden group shadow-[0_0_80px_rgba(255,255,255,0.05)] border border-white/10 bg-white/5 cursor-pointer"
              onClick={togglePlay3}
            >
              <video
                ref={videoRef3}
                muted={isMutedWorks3}
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/dfbhwxfxj/video/upload/v1780838053/sptml3focydnbsckp1cc.mp4" />
              </video>

              {/* Central Toggle Button Overlay */}
              <div className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-500 ${isPlayingWorks3 ? "bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-black/20" : "bg-black/30 opacity-100"}`}>
                <div className="p-10 lg:p-14 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full text-white scale-90 transition-all duration-700">
                  {isPlayingWorks3 ? <Pause size={40} fill="white" /> : <Play size={40} fill="white" className="ml-1" />}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Services Section */}
      <section className="relative z-10 bg-black py-20 px-4 lg:px-20" id="services">
        <RevealOnScroll>
          <div className="flex items-end justify-between w-full border-b border-white/10 pb-8 mb-32">
            <h3 className={`${clashDisplay.className} text-4xl lg:text-9xl uppercase tracking-tighter`}>Services</h3>
            <span className={`${clashDisplay.className} text-xl lg:text-3xl font-medium opacity-60`}>( 03 )</span>
          </div>
        </RevealOnScroll>

        <div className="relative h-auto lg:h-[70vh] w-full flex flex-col lg:block gap-10 lg:gap-0">
          {[
            {
              id: "01",
              title: "Strategy",
              description: "The blueprint for success. We analyze your audience, define your voice, and map out a cinematic path that guarantees engagement and growth from day one.",
              image: "/assets/me.jpg"
            },
            {
              id: "02",
              title: "Scripting",
              description: "Words that move. We craft compelling narratives, hook-driven scripts, and emotional arcs that transform viewers into loyal community members.",
              image: "/assets/me1.jpg"
            },
            {
              id: "03",
              title: "Editing",
              description: "The final cut. High-energy, pace-perfect editing combined with advanced sound design and visual effects to create a world your audience never wants to leave.",
              image: "/assets/me2.jpg"
            },
            {
              id: "04",
              title: "Scaling",
              description: "Beyond the views. We implement proven distribution systems and data-driven optimization to scale your reach and turn your content into a high-performance engine.",
              image: "/assets/me3.jpg"
            }
          ].map((service, index) => (
            <div
              key={service.id}
              className={`service-card w-full h-[60vh] lg:h-full bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] lg:rounded-[4rem] p-8 lg:p-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20 relative lg:absolute lg:inset-0`}
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 h-full gap-12 lg:gap-20">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className={`${clashDisplay.className} text-5xl lg:text-8xl uppercase tracking-tighter mb-8 lg:mb-12 leading-none`}>
                      {service.title}
                    </h2>
                    <div className="flex gap-6 lg:gap-10">
                      <span className={`${clashDisplay.className} text-xl lg:text-3xl font-medium opacity-40`}>({service.id})</span>
                      <p className={`${clashDisplay.className} text-lg lg:text-2xl text-white/60 leading-relaxed max-w-md`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-full aspect-square lg:h-full rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="relative z-10 bg-black py-10 lg:py-20 px-4 lg:px-10 border-t border-white/5 overflow-hidden" id="contact">
        <RevealOnScroll>
          <div className="flex items-end justify-between w-full mb-12 lg:mb-20 px-4 lg:px-10 border-b border-white/10 pb-8">
            <h3 className={`${clashDisplay.className} text-4xl lg:text-9xl uppercase tracking-tighter`}>Contact</h3>
            <span className={`${clashDisplay.className} text-xl lg:text-3xl font-medium opacity-60`}>( 04 )</span>
          </div>
          <div className="max-w-full border border-white/10 rounded-[40px] lg:rounded-[80px] p-8 lg:p-24 relative overflow-hidden">
            <div className="max-w-7xl">
              <h2 className={`${clashDisplay.className} text-[clamp(2.5rem,6vw,8rem)] font-medium leading-[1.05] tracking-tight mb-8`}>
                Let&apos;s build <br />
                something people <br />
                remember
              </h2>
              <p className={`${clashDisplay.className} text-xl lg:text-3xl text-white/40 max-w-2xl mb-40 lg:mb-64`}>
                from cinematic narratives to <br className="hidden lg:block" />
                memorable digital experiences.
              </p>

              {/* Interactive Bottom Bar */}
              <a
                href="mailto:imperfecttcircle@gmail.com"
                className="relative group cursor-pointer border-t border-white/10 pt-12 block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center justify-between w-full">
                  {/* Reveal Logic Container */}
                  <div className="relative w-full h-20 lg:h-32 overflow-hidden">
                    {/* "Let's talk" Text */}
                    <div
                      className={`absolute inset-0 flex items-center transition-all duration-700 ease-in-out ${isHovered ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
                        }`}
                    >
                      <span className={`${clashDisplay.className} text-5xl lg:text-9xl font-medium tracking-tighter`}>Let&apos;s talk</span>
                    </div>

                    {/* Email Text */}
                    <div
                      className={`absolute inset-0 flex items-center justify-between w-full transition-all duration-700 ease-in-out ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                        }`}
                    >
                      <span className={`${clashDisplay.className} text-xl lg:text-6xl font-medium tracking-tighter truncate pr-4`}>
                        imperfecttcircle@gmail.com
                      </span>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className={`flex-shrink-0 transition-all duration-500 ${isHovered ? "opacity-0 translate-x-12" : "opacity-100 translate-x-0"}`}>
                    <ArrowRight size={80} strokeWidth={1} className="w-12 h-12 lg:w-24 lg:h-24" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 bg-black pt-20 pb-10 px-8 lg:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Top Divider already handled by border-t */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
            {/* Socials Column */}
            <div>
              <h4 className={`${clashDisplay.className} text-white font-bold mb-6 text-sm lg:text-base uppercase tracking-widest`}>Socials</h4>
              <ul className={`${clashDisplay.className} flex flex-col gap-3 text-white/40 text-sm lg:text-base`}>
                <li><Link href="https://www.instagram.com/sumanjeet.prssd/" target="_blank" className="hover:text-white transition-colors">Instagram</Link></li>
                <li><Link href="https://www.linkedin.com/in/sumanjeet-prasad-8a142631b/" className="hover:text-white transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Behance</Link></li>
              </ul>
            </div>

            {/* Legals Column */}
            <div>
              <h4 className={`${clashDisplay.className} text-white font-bold mb-6 text-sm lg:text-base uppercase tracking-widest`}>Legals</h4>
              <ul className={`${clashDisplay.className} flex flex-col gap-3 text-white/40 text-sm lg:text-base`}>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
            <p className={`${clashDisplay.className} text-white/40 text-[10px] lg:text-xs uppercase tracking-[0.2em]`}>
              © Sumanjeet Prasad 2026
            </p>
            <p className={`${clashDisplay.className} text-white/40 text-[10px] lg:text-xs uppercase tracking-[0.2em]`}>
              desgined & developed by <Link href="https://www.arddev.in" className="hover:text-white transition-colors">arddev</Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Aesthetic Grain Overlay */}
      <div className="absolute inset-0 z-40 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
