import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Aboutus() {

    return (
      <>
      <Header />
      <section className="relative w-full h-screen overflow-hidden">  
          {/* Background image */}
          <img
              src="/images/about/slice0-about.jpg"
              alt="Havana streetscape"
              className="absolute inset-0 w-full h-full object-cover object-center"
          />  
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />  
          {/* Bottom-left: About Us */}
          <div className="absolute bottom-16 left-16">
              <h1 className="font-serif text-[clamp(64px,7vw,96px)] font-light text-white leading-none tracking-[-0.01em]">
              About Us
              </h1>
          </div>  
 
      </section>  
      
      <section className="bg-[#0e0c0a] py-47.5 px-8">  

      <div className="max-w-275 mx-auto">  
          {/* Eyebrow */}
          <p
          className="text-[9px] tracking-[0.4em] uppercase mb-16"
          style={{ color: '#C9A84C' }}
          >
          Our Story
          </p>  
          {/* Grid 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">  
          <p className="font-['Geist Mono'] text-[16px] text-white/80 text-justify">
              Cuervo y Sobrino Le Palaeis Royal we believe that choosing something beautiful is
              an intimate act. That is why every corner of our boutique has been
              thoughtfully designed for you to take your time, explore at ease, and
              discover what truly speaks to who you are.
          </p>  
          <p className="font-['Geist Mono'] text-[16px] text-white/80 text-justify">
              We carry within us the spirit of a Cuba that once dressed its finest
              moments in white linen and gold — a society that understood elegance
              not as extravagance, but as a way of life. That same sensibility guides
              every choice we make at Le Palais Royal 305.
          </p>  
          <p className="font-['Geist Mono'] text-[16px] text-white/80 text-justify">
              Under one roof we bring together jewelry of singular character, the
              legendary precision of Cuervo y Sobrinos timepieces — born in Havana,
              revered worldwide — impeccably tailored guayaberas, exclusive
              women&apos;s fashion, fine handbags and couture-level accessories.
          </p>  
          <p className="font-['Geist Mono'] text-[16px] text-white/80 italic text-justify">
              Each piece in our collection has been chosen not for trend, but for the
              conversation it will still be having years from now. We are here for
              those who dress with intention — and live the same way.
          </p>  
          </div>
      </div>  
      </section>

      <section className="bg-[#1a1610] py-20 px-8 flex flex-col items-center justify-center text-center">


        <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-px bg-[#C9A84C]/60" />
            <div className="w-1 h-1 rounded-full bg-[#C9A84C]/80" />
            <div className="w-10 h-px bg-[#C9A84C]/60" />
        </div>


        <p className="font-serif text-[clamp(20px,2.5vw,28px)] font-light italic text-white/80 leading-[1.7] max-w-170">
            Our mission is simple: to be with you in{' '}
            <span style={{ color: '#C9A84C' }}>every moment</span>
            {' '}worth remembering.
        </p>

      </section>
      <Footer />
      </>
    )
}