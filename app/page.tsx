'use client';

import Image from "next/image";
import Header from './components/header'
import Footer from './components/footer'
/* Images */
import catWatches from '../public/images/home/cat-watches.jpg'
import catGuay from '../public/images/home/cat-guaya.jpg'
import catJewelry from '../public/images/home/cat-jewels.jpg'
import catDress from '../public/images/home/cat-fashion.jpg'
import guayaPic from '../public/images/home/guayabera-main.jpg'
import { useEffect, useState } from "react";

export default function Home() {

const slides = [
  {
    image: "/images/home/slice-main-01.jpg",
    tag: "Swiss Watches",
    headline: (
      <>
        A modern evolution of the Maison’s most
        <em className="italic text-[#C9A96E] font-light"> emblematic model</em><br />
      </>
    ),
  },
  {
    image: "/jewelry/sliceUp-Fashion.jpg",
    tag: "Swiss Watches",
    headline: (
      <>
        Exclusive designs for the woman of 
        <em className="italic text-[#C9A96E] font-light"> signature elegance.</em><br />
      </>
    ),
  },
  {
    image: "/images/home/slice01.jpg",
    tag: "New Arrivals",
    headline: (
      <>
        Timeless craft,<br />
        modern edge —<br />
        <em className="italic text-[#C9A96E] font-light">discover the</em><br />
        latest collection
      </>
    ),
  },
  {
    image: "/images/home/slice-guaya.jpg",
    tag: "Authorized Dealer",
    headline: (
      <>
        Cuervo y Sobrinos The Finest Guayaberas
        <em className="italic text-[#C9A96E] font-light"> Crafted for Distinction.</em><br />
      </>
    ),
  },
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <>
      <Header />
          <section className="relative h-screen min-h-175 flex items-center overflow-hidden">

      {/* Background images */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')`, filter: "brightness(0.6)" }}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12 md:pl-28 lg:pl-36 max-w-2xl">

        {/* Tag */}
        <div className="inline-block bg-[#8B1A2E] text-white text-[11px] tracking-[0.25em] uppercase px-3 py-1.5 mb-6">
          {slides[current].tag}
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(32px,5vw,50px)] font-light leading-[1.1] tracking-wide text-white mb-8">
          {slides[current].headline}
        </h1>

        {/* CTA */}
        
          <a href="#"
          className="inline-flex items-center gap-2.5 border border-[#C9A96E] text-[#C9A96E]
            px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase
            hover:bg-[#C9A96E] hover:text-black transition-colors duration-300"
        >
          <span>View Collection</span>
          <span className="text-sm">↗</span>
        </a>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-[#C9A96E] transition-colors text-[70px]"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-[#C9A96E] transition-colors text-[70px]"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-0.5 transition-all duration-300 cursor-pointer ${
              index === current ? "w-8 bg-[#C9A96E]" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer">
        <span className="text-[8px] tracking-[0.35em] uppercase text-white/40 ">Scroll</span>
      </div>

    </section>

      {/* Card section */}
      <section className="py-24 bg-white">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[9px] tracking-[0.4em] uppercase text-stone-400 mb-3">Curated Collections</p>
          <h2 className="font-serif text-5xl font-light tracking-wide text-stone-800">Discover our world</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-8">

          {/* Watches */}
          <div className="relative overflow-hidden group cursor-pointer h-145">
            <Image src={catWatches}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="watches" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-[#7B1C3E]/70 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white font-serif text-2xl font-light tracking-wide">Watches</h3>
              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-3">
                <span className="block w-8 h-px bg-[#C9A96E]"></span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]">View More</span>
              </div>
            </div>
          </div>

          {/* Guayaberas */}
          <div className="relative overflow-hidden group cursor-pointer h-145">
            <Image src={catGuay}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="guayaberas" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-[#7B1C3E]/70 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white font-serif text-2xl font-light tracking-wide">Guayaberas</h3>
              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-3">
                <span className="block w-8 h-px bg-[#C9A96E]"></span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]">View More</span>
              </div>
            </div>
          </div>

          {/* Jewels */}
          <div className="relative overflow-hidden group cursor-pointer h-145">
            <Image src={catJewelry}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="jewlery" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-[#7B1C3E]/70 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white font-serif text-2xl font-light tracking-wide">Jewels</h3>
              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-3">
                <span className="block w-8 h-px bg-[#C9A96E]"></span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]">View More</span>
              </div>
            </div>
          </div>

          {/* Fashion */}
          <div className="relative overflow-hidden group cursor-pointer h-145">
            <Image src={catDress}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="dress" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-[#7B1C3E]/70 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white font-serif text-2xl font-light tracking-wide">Fashion</h3>
              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-3">
                <span className="block w-8 h-px bg-[#C9A96E]"></span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]">View More</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Content section */}
      <section className="bg-white px-10 sm:px-16 lg:px-34 py-24 lg:py-28">

        {/* Block 1 — Chronograph */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">

          {/* Image — right on desktop, top on mobile */}
          <div className="relative overflow-hidden group md:order-2">
            <div className="absolute inset-3 border border-[#C9A96E]/20 z-10 pointer-events-none transition-all duration-400 group-hover:inset-2" />
            <Image
              src={catWatches}
              alt="Chronograph"
              className="w-full aspect-4/5 object-cover filter-[sepia(15%)_contrast(1.1)] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>

          {/* Text — left on desktop */}
          <div className="md:order-1 py-4">
            <h2 className="font-serif text-[clamp(28px,3vw,46px)] font-light leading-[1.15] tracking-wide text-black mb-8">
              Chronograph
            </h2>
            <div className="w-12 h-px bg-[#C9A96E] mb-7" />
            <p className="text-[13.5px] leading-[1.9] text-black mb-6 max-w-105">
              Cuervo y Sobrinos and history are two entities that are inextricably linked. Since the company was founded in Havana, back in 1882, its journey has been punctuated by a series of milestones.
            </p>
            <p className="text-[13.5px] leading-[1.9] text-black mb-10 max-w-105">
              Chronographs are in the DNA of the brand since the beginning, both classic models and sporty watches.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-stone-400 hover:gap-5 transition-all duration-300 group/link">
              <span className="block w-9 h-px bg-[#C9A96E] group-hover/link:w-14 transition-all duration-300" />
              Discover
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-[#C9A96E] to-transparent mb-24 lg:mb-32" />

        {/* Block 2 — Guayaberas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image — left on desktop */}
          <div className="relative overflow-hidden group md:order-2">
            <div className="absolute inset-3 border border-[#C9A96E]/20 z-10 pointer-events-none transition-all duration-400 group-hover:inset-2" />
            <Image
              src={guayaPic}
              alt="Guayaberas"
              className="w-full aspect-4/5 object-cover filter-[sepia(15%)_contrast(1.1)] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>

          {/* Text — right on desktop */}
          <div className="py-4 md:order-1">
            <h2 className="font-serif text-[clamp(28px,3vw,46px)] font-light leading-[1.15] tracking-wide text-black mb-8">
              Haute Couture Guayaberas
            </h2>
            <div className="w-12 h-px bg-[#C9A96E] mb-7" />
            <p className="text-[13.5px] leading-[1.9] text-black mb-10 max-w-105">
              Crafted in first-quality linen and cotton, with hand embroidery and the four traditional pockets that define the classic silhouette, each piece carries the weight of a century-old tradition and the lightness of someone who knows exactly how to look impeccable.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-stone-400 hover:gap-5 transition-all duration-300 group/link">
              <span className="block w-9 h-px bg-[#C9A96E] group-hover/link:w-14 transition-all duration-300" />
              Discover
            </a>
          </div>
        </div>

      </section>
      
      <Footer />
    </>
  );
}
